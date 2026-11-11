import { Link } from 'react-router-dom';

const promises = [
  {
    icon: 'handshake',
    iconBg: 'bg-tertiary text-on-tertiary',
    title: 'Fair Craft Wages',
    description:
      '100% direct remuneration above statutory guild rates. Zero intermediaries between loom and collector.',
    actionText: 'Weaver Welfare Fund →',
    actionColor: 'text-tertiary',
    link: '/handloom-editions',
  },
  {
    icon: 'verified',
    iconBg: 'bg-primary text-on-primary',
    title: 'Silk Mark Certified',
    description:
      'Every millimeter is hallmarked by the Central Silk Board of India with verifiable QR provenance chips.',
    actionText: 'Check Authenticity →',
    actionColor: 'text-primary',
    link: '/fabric-care',
  },
  {
    icon: 'styler',
    iconBg: 'bg-secondary text-on-secondary',
    title: 'Bespoke Tailoring',
    description:
      'Master darzi consultations for custom fall-pico, tassel finishing, and padded hand-stitched blouses.',
    actionText: 'Book Stylist →',
    actionColor: 'text-secondary',
    link: '/fabric-care',
  },
  {
    icon: 'assignment_return',
    iconBg: 'bg-primary-container text-on-primary',
    title: 'Insured Returns',
    description:
      '7-day unconditional inspection window with white-glove doorstep reverse pickup across 35 countries.',
    actionText: 'Transit Policy →',
    actionColor: 'text-primary-container',
    link: '/fabric-care',
  },
];

export default function HeritagePromises() {
  return (
    <section className="w-full bg-surface-container-high py-space-xl">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {promises.map((p) => (
            <div
              key={p.title}
              className="bg-surface rounded-2xl p-space-lg shadow-sm flex flex-col space-y-space-sm"
            >
              <div
                className={`w-12 h-12 rounded-xl ${p.iconBg} flex items-center justify-center`}
              >
                <span className="material-symbols-outlined text-2xl">
                  {p.icon}
                </span>
              </div>
              <h3 className="font-title-lg text-title-lg text-on-surface font-semibold">
                {p.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {p.description}
              </p>
              <Link
                to={p.link}
                className={`${p.actionColor} font-label-sm text-label-sm font-bold uppercase tracking-wider pt-2 hover:underline`}
              >
                {p.actionText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

