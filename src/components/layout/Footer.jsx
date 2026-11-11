import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-xxl pb-space-xl mt-space-xxl shadow-[0_1px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter mb-space-xxl">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="font-headline-md text-headline-md tracking-tight text-primary uppercase font-bold">
                Viraasat
              </span>
              <span className="bg-tertiary text-on-tertiary font-label-sm text-label-sm px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Est. 1984
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant pr-8 leading-relaxed">
              An artisanal chronicle of pure handwoven Indian weaves, safeguarding heirloom traditions across Maheshwar, Varanasi, Chanderi, and Kanchipuram. Directly partnering with over 450 generational master weaver lineages.
            </p>
            <div className="flex items-center gap-space-sm pt-space-sm">
              <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant">
                Craft Provenance:
              </span>
              <span className="font-label-sm text-label-sm font-semibold text-tertiary">
                GI Tagged Handlooms
              </span>
              <span className="text-outline-variant">•</span>
              <span className="font-label-sm text-label-sm font-semibold text-tertiary">
                Silk Mark India Certified
              </span>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-space-md uppercase tracking-wider font-bold">
              Collections
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link to="/sarees" className="hover:text-primary transition-colors">
                  Kanjivaram Pure Silks
                </Link>
              </li>
              <li>
                <Link to="/sarees" className="hover:text-primary transition-colors">
                  Banarasi Rangkat Katan
                </Link>
              </li>
              <li>
                <Link to="/sarees" className="hover:text-primary transition-colors">
                  Chanderi Zari Tissue
                </Link>
              </li>
              <li>
                <Link to="/fabrics-by-meter" className="hover:text-primary transition-colors">
                  Tussar Ghicha yardage
                </Link>
              </li>
              <li>
                <Link to="/bridal-heritage" className="hover:text-primary transition-colors">
                  Trousseau Heirlooms
                </Link>
              </li>
              <li>
                <Link to="/handloom-editions" className="hover:text-primary transition-colors">
                  Khadi Jamdani Limiteds
                </Link>
              </li>
            </ul>
          </div>

          {/* Curatorial Care */}
          <div>
            <h4 className="font-title-md text-title-md text-on-surface mb-space-md uppercase tracking-wider font-bold">
              Curatorial Care
            </h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link to="/fabric-care" className="hover:text-primary transition-colors">
                  Preserving Heirloom Zari
                </Link>
              </li>
              <li>
                <Link to="/handloom-editions" className="hover:text-primary transition-colors">
                  Artisan Provenance Register
                </Link>
              </li>
              <li>
                <Link to="/fabric-care" className="hover:text-primary transition-colors">
                  Bespoke Draping Consults
                </Link>
              </li>
              <li>
                <Link to="/fabric-care" className="hover:text-primary transition-colors">
                  Global Insured Dispatch
                </Link>
              </li>
              <li>
                <Link to="/fabric-care" className="hover:text-primary transition-colors">
                  Returns &amp; Exchanges
                </Link>
              </li>
              <li>
                <Link to="/fabric-care" className="hover:text-primary transition-colors">
                  Authenticity Guarantee
                </Link>
              </li>
            </ul>
          </div>

          {/* Textile Dispatch */}
          <div className="space-y-space-md">
            <h4 className="font-title-md text-title-md text-on-surface uppercase tracking-wider font-bold">
              Textile Dispatch
            </h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Receive private catalog previews, weaver monographs, and retrospective salon invitations.
            </p>
            {submitted ? (
              <div className="text-sm text-primary font-medium bg-primary/10 p-3 rounded-lg">
                ✓ Thank you. Your correspondence address has been registered.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                  className="bg-surface font-body-sm text-body-sm px-4 py-2.5 rounded-lg text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:bg-surface-container-lowest"
                  placeholder="Enter your correspondence email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider font-semibold py-2.5 px-4 rounded-lg hover:bg-primary-container transition-colors"
                >
                  Request Gazette
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter py-space-xl bg-surface-container rounded-xl px-space-lg mb-space-xl">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary text-2xl">verified</span>
            <div>
              <p className="font-title-md text-title-md text-on-surface">100% Handloom</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Craftmark &amp; GI verified</p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-2xl">local_shipping</span>
            <div>
              <p className="font-title-md text-title-md text-on-surface">Worldwide Delivery</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Insured doorstep transit</p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-tertiary text-2xl">groups</span>
            <div>
              <p className="font-title-md text-title-md text-on-surface">Ethical Lineage</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">100% fair trade returns</p>
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary text-2xl">history_edu</span>
            <div>
              <p className="font-title-md text-title-md text-on-surface">Certificate of Origin</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Weaver sealed ledger</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pt-space-lg font-body-sm text-body-sm text-on-surface-variant">
          <div className="flex flex-wrap items-center gap-space-md">
            <span>© 2026 VIRAASAT HERITAGE TEXTILES PVT LTD. All archival rights reserved.</span>
            <span className="text-outline-variant">•</span>
            <span>GSTIN: 09AAACV4129K1Z5</span>
          </div>
          <div className="flex items-center gap-space-lg font-label-md text-label-md tracking-wider uppercase">
            <span>Varanasi</span>
            <span>Maheshwar</span>
            <span>Chanderi</span>
            <span>Kanchipuram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

