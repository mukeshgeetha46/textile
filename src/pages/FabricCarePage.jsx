import { Link } from 'react-router-dom';

const careTips = [
  {
    icon: 'dry_cleaning',
    title: 'Dry Clean Heirloom Zari',
    desc: 'Pure metallic silver and gold threads oxidize in moisture. Always opt for hydro-carbon chemical dry cleaning from accredited preservation studios.',
  },
  {
    icon: 'air',
    title: 'Air Circulation & Folding',
    desc: 'Unfold and air out pure silk sarees every 6 months along natural muslin wraps to prevent warp creases from turning brittle.',
  },
  {
    icon: 'shelves',
    title: 'Cedar Wood Heirloom Storage',
    desc: 'Store your heirlooms inside breathable mulmul (cotton) pouches inside cedar trunks. Avoid direct mothballs which discolor tested zari.',
  },
  {
    icon: 'iron',
    title: 'Reverse Low-Heat Pressing',
    desc: 'Iron sarees only on the reverse side through a protective damp white muslin cloth using low temperature silk settings.',
  },
];

export default function FabricCarePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-primary font-semibold">Fabric Care</span>
      </div>

      <div className="border-b border-surface-container-high pb-8 mb-8">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Preservation Guide
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1">
          Heirloom Care &amp; Longevity
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
          Guidelines and ancestral techniques to keep your Kanjivaram and Banarasi weaves radiant across generations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-12">
        {careTips.map((tip) => (
          <div
            key={tip.title}
            className="bg-surface rounded-2xl p-space-lg border border-surface-container-high flex gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">{tip.icon}</span>
            </div>
            <div>
              <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                {tip.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mt-1">
                {tip.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-container rounded-2xl p-space-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
            Need Expert Restoration or Fall-Pico Services?
          </h2>
          <p className="font-body-sm text-on-surface-variant mt-1">
            Our master darzis and restoration weavers offer concierge re-rolling and zari polishing.
          </p>
        </div>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-on-primary px-6 py-3 rounded-xl font-label-md text-xs uppercase tracking-wider font-semibold hover:bg-primary-container transition-colors shrink-0"
        >
          Book Master Darzi
        </a>
      </div>
    </div>
  );
}

