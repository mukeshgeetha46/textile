import { Link } from 'react-router-dom';

export default function BridalHeritagePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-primary font-semibold">Bridal Heritage</span>
      </div>

      <div className="relative rounded-3xl overflow-hidden bg-primary text-on-primary p-space-xl lg:p-space-xxl mb-12">
        <div className="max-w-2xl space-y-4 relative z-10">
          <span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold">
            Sacred Auspicious Drapes
          </span>
          <h1 className="font-headline-lg text-4xl lg:text-headline-lg font-semibold text-surface">
            The Royal Bridal Trousseau
          </h1>
          <p className="font-body-md text-body-md text-surface-variant leading-relaxed">
            Generational heirloom weaves dipped in genuine antique gold zari, woven over 180 to 240 days by senior master weavers of Varanasi and Kanchipuram for the sacred ceremony.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3.5 rounded-xl font-label-md text-xs uppercase tracking-wider font-bold shadow-md hover:bg-secondary-fixed transition-all"
            >
              <span className="material-symbols-outlined text-base">support_agent</span>
              <span>Consult Trousseau Curator</span>
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <div className="bg-surface rounded-2xl p-space-lg border border-surface-container-high space-y-4">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNCjJqHS8PL7uNt6zf4DyQDK1lZsvBIsJ_8w1ZhZCUkO1h9G8YwHQTTk6HWCPBauR7s-YCneCPpbGy8hLJ7DhnljIA917oEa8eLim5G1eG6rEN7b37phoR_ImkKzYAB49_LymXRIEMVp1q13VdNvp7Rr_0OjhMPp6xQBXXluvuThmi-jBTX4B0Sq7OaOO1E_0dL-XvUnIaQxf0gi-UNrIAeziPPqVOwmL045Kyd-rN"
            alt="Kanjivaram Bridal Silk"
            className="w-full aspect-[4/3] object-cover rounded-xl"
          />
          <h2 className="font-headline-md text-headline-md text-on-surface">Kanchipuram Korvai Bridal Silk</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Woven with the archaic three-shuttle Korvai interlock technique. Pure mulberry warp with 24k gold dipped silver thread borders.
          </p>
          <div className="flex justify-between items-center pt-2">
            <span className="font-price-lg text-primary font-bold">From ₹48,000</span>
            <Link to="/sarees" className="text-secondary font-label-sm font-semibold uppercase tracking-wider hover:underline">
              Explore Collection →
            </Link>
          </div>
        </div>

        <div className="bg-surface rounded-2xl p-space-lg border border-surface-container-high space-y-4">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCU29rSndiui6H4mcLHfi5OBc8AOpCPEYplAalLSpTi4M6sKlC3QM5TItPGgIpss74bFJfkqz3KyB5edywUWM1ESaDXURGrmRvnlE5dhw74-ORyPGOosimzbDPnioo-0AYzjMPdm8aX3MMHdHL-dBzovSRoWdRdM7ed7LpYE8bN0dzG0aGjUVRvnB1oCSOfj0MM17t0F_z558p8rZAcaeII_Q6fHr7YVTBC0yQ2Ivj"
            alt="Banarasi Rangkat"
            className="w-full aspect-[4/3] object-cover rounded-xl"
          />
          <h2 className="font-headline-md text-headline-md text-on-surface">Banarasi Rangkat &amp; Shikargah</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Multi-warp colour transitions with intricate hand-cut kadhwa brocade motifs depicting sacred haveli courtyard gardens.
          </p>
          <div className="flex justify-between items-center pt-2">
            <span className="font-price-lg text-primary font-bold">From ₹56,000</span>
            <Link to="/sarees" className="text-secondary font-label-sm font-semibold uppercase tracking-wider hover:underline">
              Explore Collection →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

