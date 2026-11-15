
pipeline {
    agent any

    environment {
        IMAGE_NAME = 'ghcr.io/mukeshgeetha46/textile-app'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code checked out from GitHub'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t textile-app:${BUILD_NUMBER} .'
            }
        }

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
    }
}

