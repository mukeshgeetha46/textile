
pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ghcr.io/mukeshgeetha46/textile-app'
    }

    stages {

        // 1. Checkout source code
        stage('Checkout') {
            steps {
                echo 'Source code checked out from GitHub'
            }
        }

        // 2. Build Docker image
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t textile-app:${BUILD_NUMBER} .'
            }
        }

        // 3. Push Docker image to GitHub Container Registry
        stage('Push to GHCR') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'ghcr-credentials',
                    usernameVariable: 'GHCR_USER',
                    passwordVariable: 'GHCR_TOKEN'
                )]) {
                    sh '''
                        echo "$GHCR_TOKEN" | docker login ghcr.io \
                            -u "$GHCR_USER" --password-stdin

                        docker tag textile-app:${BUILD_NUMBER} \
                            ${IMAGE_NAME}:${BUILD_NUMBER}

                        docker push ${IMAGE_NAME}:${BUILD_NUMBER}

                        docker logout ghcr.io
                    '''
                }
            }
        }

        // 4. Test Kubernetes authentication
        stage('Test Kubernetes Access') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'k8s-deploy-token',
                        variable: 'K8S_TOKEN'
                    )
                ]) {
                    sh '''
                        set +x

                        RESPONSE=$(curl -sS \
                            --output /dev/null \
                            --write-out "%{http_code}" \
                            --cacert /etc/jenkins/k3s/server-ca.crt \
                            --header "Authorization: Bearer $K8S_TOKEN" \
                            https://127.0.0.1:6443/apis/apps/v1/namespaces/default/deployments/textile-app)

                        echo "Kubernetes API response: $RESPONSE"

                        test "$RESPONSE" = "200"
                    '''
                }
            }
        }

        // 5. Deploy the new image to Kubernetes
        stage('Deploy to Kubernetes') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'k8s-deploy-token',
                        variable: 'K8S_TOKEN'
                    )
                ]) {
                    sh '''
                        set +x

                        KUBECONFIG_FILE=$(mktemp)
                        chmod 600 "$KUBECONFIG_FILE"

                        trap 'rm -f "$KUBECONFIG_FILE"' EXIT

                        cat > "$KUBECONFIG_FILE" <<EOF
apiVersion: v1
kind: Config
clusters:
- cluster:
    certificate-authority: /etc/jenkins/k3s/server-ca.crt
    server: https://127.0.0.1:6443
  name: k3s
contexts:
- context:
    cluster: k3s
    namespace: default
    user: jenkins-deployer
  name: jenkins
current-context: jenkins
users:
- name: jenkins-deployer
  user:
    token: ${K8S_TOKEN}
EOF

                        echo "Deploying image: ${IMAGE_NAME}:${BUILD_NUMBER}"

                        kubectl --kubeconfig="$KUBECONFIG_FILE" \
                            set image deployment/textile-app \
                            textile-app=${IMAGE_NAME}:${BUILD_NUMBER} \
                            -n default

                        kubectl --kubeconfig="$KUBECONFIG_FILE" \
                            rollout status deployment/textile-app \
                            -n default --timeout=120s
                    '''
                }
            }
        }
    }
}
