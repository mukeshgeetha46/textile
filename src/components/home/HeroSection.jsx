import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full -mt-28 min-h-[92vh] flex items-center justify-center overflow-hidden bg-surface-container-high">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCU29rSndiui6H4mcLHfi5OBc8AOpCPEYplAalLSpTi4M6sKlC3QM5TItPGgIpss74bFJfkqz3KyB5edywUWM1ESaDXURGrmRvnlE5dhw74-ORyPGOosimzbDPnioo-0AYzjMPdm8aX3MMHdHL-dBzovSRoWdRdM7ed7LpYE8bN0dzG0aGjUVRvnB1oCSOfj0MM17t0F_z558p8rZAcaeII_Q6fHr7YVTBC0yQ2Ivj')`,
        }}
        aria-label="Regal crimson Banarasi silk saree haveli backdrop"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-container/95 via-primary-container/40 to-primary/60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-on-primary-fixed/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-margin pt-36 pb-space-xxl flex flex-col justify-end min-h-[85vh]">
        <div className="max-w-3xl space-y-space-md">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/20 backdrop-blur-md text-surface font-label-md text-label-md uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            <span>Festive 2026 Archive · Handloom Edition</span>
          </div>

          <h1 className="font-display text-display text-surface tracking-tight leading-[1.08] drop-shadow-sm font-semibold text-3xl sm:text-5xl lg:text-display">
            The Sacred Art <br />
            <span className="italic font-normal font-display text-secondary-fixed">
              of Indian Weaves
            </span>
          </h1>

          <p className="font-body-lg text-body-lg text-surface-variant max-w-2xl font-normal leading-relaxed">
            Hand-loomed heirlooms crafted across generational master clusters of Varanasi, Chanderi, and Kanchipuram. Preserving ancestral warp-and-weft lineages since 1984.
          </p>

          <div className="pt-space-sm flex flex-wrap items-center gap-space-md">
            <Link
              to="/sarees"
              className="inline-flex items-center gap-space-sm bg-primary-container text-surface px-8 py-4 rounded-xl font-label-md text-label-md uppercase tracking-wider font-semibold shadow-xl hover:bg-primary transition-all duration-300 hover:shadow-2xl"
            >
              <span>Explore Festive Heirlooms</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-space-sm bg-surface/10 backdrop-blur-md text-surface px-7 py-4 rounded-xl font-label-md text-label-md uppercase tracking-wider font-semibold shadow-md hover:bg-surface/25 transition-all"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              <span>Book Private Concierge</span>
            </a>
          </div>

          <div className="pt-space-lg flex flex-wrap items-center gap-space-md text-surface/90">
            <div className="flex items-center gap-2 bg-surface/10 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-secondary-fixed text-base">verified</span>
              <span className="font-label-sm text-label-sm tracking-wider uppercase">GI-Tagged Authenticity</span>
            </div>
            <div className="flex items-center gap-2 bg-surface/10 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-secondary-fixed text-base">diversity_3</span>
              <span className="font-label-sm text-label-sm tracking-wider uppercase">Direct From 450+ Master Weavers</span>
            </div>
            <div className="flex items-center gap-2 bg-surface/10 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              <span className="material-symbols-outlined text-secondary-fixed text-base">shield_with_heart</span>
              <span className="font-label-sm text-label-sm tracking-wider uppercase">Worldwide Insured Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

