import { Link } from 'react-router-dom';

const fabricRolls = [
  {
    id: 201,
    title: 'Pure Mulberry Katan Silk Yardage',
    rate: '₹2,400 / meter',
    width: '44 inches',
    origin: 'Varanasi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbzI5NIyCk1rt4ySxnAhKymjCcNZ-jQhmU6oNto1DLIjqZgxWDmscrEfQMRaozifXtFQbHX4x2lba7kcPID3QC8En3mugohmytz_VuOh8X-QY-1T6f36tdaUYbsb6blURJbXAsQclQiGl0XFYdHndJhZgLGOJmIyx6LHyOrvsJi5a7R_hCZ3SGhJkOJpzT-NziEddUJxgkx2G6ichYfDaTuLlPRcghPeL6qLCGcJe8',
  },
  {
    id: 202,
    title: 'Maheshwari Silk-Cotton Handloom Textile',
    rate: '₹950 / meter',
    width: '46 inches',
    origin: 'Maheshwar',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm2filAgTbgF7m4bK-043_nTjJGBFKBTl36FuUW2ZvhetYbdHo_feGXadmYjNxHu6Y23vNV829H0aaUldHl8ikeFjEW84FU6wr_vbiP31_KiIZxqM8zLHLC-bjFq-4mRD3OXUMaBRD_P_5Z6zHIrFEkaaPEMATxMPnvX-0C0p29ERbJ3LVRX8DhQ5aXCswzReBfSBaaUCKN1JJlKnlhY1MZF8Qn1mdxwzbCLgzAIHR',
  },
  {
    id: 203,
    title: '100 Count Organic Hand-Spun Flax Khadi',
    rate: '₹850 / meter',
    width: '42 inches',
    origin: 'West Bengal',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRKAzrtz8S5gDRK_0KrhG9m6MZSK8wTwvUMFbYGXLFjeSAa8-lTiBtxLjS2BE57bkr9HXUogJ6kYZHM3tuMm0z7E6uqnGeu6HbmqEwovXTMLw7v2wFM2m_rRkA15gMB-h9gFxLGe5j9onEn9Qg1yofWAmvb0ARCJawdsEVdVtvQY8b5ErXdUKh9NNMMCoZYojcyfcfmC0cvveK1rrRRPhfds1Gvbgp9yC2HuiVyJuE',
  },
  {
    id: 204,
    title: 'Metallic Gold Tested Zari Tissue Organza',
    rate: '₹3,200 / meter',
    width: '44 inches',
    origin: 'Chanderi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv2fQzuZJG4U6P7sE9OSzvPBxBYpaNifU7d2oyt-alxor885F0NARrSU4Dwf0eAf0Pmq4jlShtDT-iKq7GczF2vsvXigKtAr35JOlsGS5d-9uP7U8G-SAC6NG6qBMu8s-dP3mBk4ypZB6Jtgge3GbdnpmMTQpozvJQB5niVEEDy4QO3qg5mQjifRUnEFO2zzB47A-H-Wz6Ue8UTLbjYP3ULkTIR3oQnvup0cVKYL9S',
  },
];

export default function FabricsByMeterPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-primary font-semibold">Fabrics by the Meter</span>
      </div>

      <div className="border-b border-surface-container-high pb-8 mb-8">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Unstitched Pure Yardage
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1">
          Handloom Textiles by the Meter
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
          Order custom continuous lengths of hand-spun silks, organzas, and natural organic linens directly off the artisan looms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {fabricRolls.map((roll) => (
          <div
            key={roll.id}
            className="group bg-surface rounded-2xl overflow-hidden border border-surface-container-high hover:shadow-lg transition-all"
          >
            <div className="relative aspect-square overflow-hidden bg-surface-container">
              <img
                src={roll.image}
                alt={roll.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-surface/90 backdrop-blur-md text-on-surface font-label-sm text-xs px-2.5 py-1 rounded-full uppercase tracking-wider">
                {roll.origin}
              </span>
            </div>
            <div className="p-space-md space-y-2">
              <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                {roll.title}
              </h3>
              <div className="flex items-center justify-between text-xs text-on-surface-variant">
                <span>Width: {roll.width}</span>
                <span className="font-semibold text-primary">{roll.rate}</span>
              </div>
              <button
                type="button"
                className="w-full mt-2 py-2 bg-surface-container hover:bg-primary text-on-surface hover:text-on-primary font-label-sm text-xs uppercase tracking-wider font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Select Meterage
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

