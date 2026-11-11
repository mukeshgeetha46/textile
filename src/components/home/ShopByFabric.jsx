import { Link } from 'react-router-dom';

const fabrics = [
  {
    name: 'Pure Katan Silk',
    spec: 'High Twist 20/22D',
    count: '140+ Weaves',
    gradient: 'from-primary/30 to-transparent',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbzI5NIyCk1rt4ySxnAhKymjCcNZ-jQhmU6oNto1DLIjqZgxWDmscrEfQMRaozifXtFQbHX4x2lba7kcPID3QC8En3mugohmytz_VuOh8X-QY-1T6f36tdaUYbsb6blURJbXAsQclQiGl0XFYdHndJhZgLGOJmIyx6LHyOrvsJi5a7R_hCZ3SGhJkOJpzT-NziEddUJxgkx2G6ichYfDaTuLlPRcghPeL6qLCGcJe8',
    link: '/fabrics-by-meter?fabric=katan-silk',
  },
  {
    name: 'Maheshwari Blend',
    spec: 'Silk Warp / Cotton Weft',
    count: '95+ Weaves',
    gradient: 'from-secondary/30 to-transparent',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm2filAgTbgF7m4bK-043_nTjJGBFKBTl36FuUW2ZvhetYbdHo_feGXadmYjNxHu6Y23vNV829H0aaUldHl8ikeFjEW84FU6wr_vbiP31_KiIZxqM8zLHLC-bjFq-4mRD3OXUMaBRD_P_5Z6zHIrFEkaaPEMATxMPnvX-0C0p29ERbJ3LVRX8DhQ5aXCswzReBfSBaaUCKN1JJlKnlhY1MZF8Qn1mdxwzbCLgzAIHR',
    link: '/fabrics-by-meter?fabric=maheshwari',
  },
  {
    name: 'Hand-Spun Khadi',
    spec: '100 Count Organic Flax',
    count: '68+ Weaves',
    gradient: 'from-outline/20 to-transparent',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRKAzrtz8S5gDRK_0KrhG9m6MZSK8wTwvUMFbYGXLFjeSAa8-lTiBtxLjS2BE57bkr9HXUogJ6kYZHM3tuMm0z7E6uqnGeu6HbmqEwovXTMLw7v2wFM2m_rRkA15gMB-h9gFxLGe5j9onEn9Qg1yofWAmvb0ARCJawdsEVdVtvQY8b5ErXdUKh9NNMMCoZYojcyfcfmC0cvveK1rrRRPhfds1Gvbgp9yC2HuiVyJuE',
    link: '/fabrics-by-meter?fabric=khadi',
  },
  {
    name: 'Tissue Organza',
    spec: 'Real Tested Zari',
    count: '52+ Weaves',
    gradient: 'from-primary-container/20 to-transparent',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv2fQzuZJG4U6P7sE9OSzvPBxBYpaNifU7d2oyt-alxor885F0NARrSU4Dwf0eAf0Pmq4jlShtDT-iKq7GczF2vsvXigKtAr35JOlsGS5d-9uP7U8G-SAC6NG6qBMu8s-dP3mBk4ypZB6Jtgge3GbdnpmMTQpozvJQB5niVEEDy4QO3qg5mQjifRUnEFO2zzB47A-H-Wz6Ue8UTLbjYP3ULkTIR3oQnvup0cVKYL9S',
    link: '/fabrics-by-meter?fabric=organza',
  },
  {
    name: 'Muga Wild Silk',
    spec: 'Natural Golden Sheen',
    count: '34+ Weaves',
    gradient: 'from-secondary/30 to-transparent',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2OdKs3i9fvGv4VFXT70UxlVFK5O6sCxGlBzZvpSY8vUYrvtuyZwe6KcWs_fw6ZqfMTrLj0xxGrRSIF7XxL8y-FtRqoY-n5BcGV2Zi32uynf3iM1TU9x_FScbQWNJMviwDJX9aDDUa-_kVo0tqnUtlUYhf6F7yREWJClrEDx4HT98qulk44xyCZFa2RPqCIZ9FCm_Wc48xm8wAFJPFmfvJFa9ibaOcf4VMsX7BJDzP',
    link: '/fabrics-by-meter?fabric=muga-silk',
  },
];

export default function ShopByFabric() {
  return (
    <section className="max-w-[1440px] w-full mx-auto px-margin py-space-xxl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
        <div className="space-y-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Microscopic Craft
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Shop by Sacred Fabric
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mt-2 md:mt-0">
          Feel the cadence of authentic yarns — each verified through microscopic purity tests.
        </p>
      </div>

      {/* 5 Swatch Bento Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
        {fabrics.map((fabric) => (
          <Link
            key={fabric.name}
            to={fabric.link}
            className="group bg-surface-container rounded-2xl p-space-md flex flex-col items-center text-center space-y-space-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-500">
              <img
                className="w-full h-full object-cover"
                src={fabric.image}
                alt={fabric.name}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${fabric.gradient}`} />
            </div>

            <div>
              <h3 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                {fabric.name}
              </h3>
              <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">
                {fabric.spec}
              </p>
            </div>

            <span className="font-label-sm text-label-sm text-tertiary bg-surface px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
              {fabric.count}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

