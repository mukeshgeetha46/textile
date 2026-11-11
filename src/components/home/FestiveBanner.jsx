import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FestiveBanner() {
  const [copied, setCopied] = useState(false);
  const couponCode = 'HERITAGE2026';

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    });
  };

  return (
    <section className="max-w-[1440px] w-full mx-auto px-margin py-space-xl">
      <div className="rounded-3xl overflow-hidden bg-primary shadow-xl grid grid-cols-1 lg:grid-cols-12">
        {/* Left Content: 7 Columns */}
        <div className="lg:col-span-7 p-space-xl lg:p-space-xxl text-on-primary flex flex-col justify-between space-y-space-lg">
          <div className="space-y-space-sm">
            <div className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed px-3.5 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-base">workspace_premium</span>
              <span>Shubh Vivah Festive Privileges</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-surface tracking-tight font-semibold">
              Complimentary Pure Zari Stole on Orders Above ₹45,000
            </h2>
            <p className="font-body-md text-body-md text-primary-fixed leading-relaxed max-w-xl">
              In honour of the festive trousseau season, every patron order surpassing ₹45,000 will be accompanied by an archival hand-spun mulberry silk stole adorned with woven zari borders, packed in our signed cedar heirloom trunk.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
            {/* Coupon Code Box */}
            <div className="bg-primary-container/80 backdrop-blur-md px-5 py-3 rounded-xl flex items-center justify-between gap-4 shadow-inner">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">
                  Patron Voucher Code
                </span>
                <span className="font-title-lg text-title-lg text-secondary-fixed font-bold tracking-widest">
                  {couponCode}
                </span>
              </div>
              <button
                type="button"
                onClick={handleCopy}
                className={`px-3 py-1.5 rounded-lg font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-colors flex items-center gap-1 cursor-pointer ${
                  copied
                    ? 'bg-tertiary text-on-tertiary'
                    : 'bg-surface text-primary hover:bg-secondary-fixed hover:text-on-secondary-fixed'
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {copied ? 'done' : 'content_copy'}
                </span>
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <Link
              to="/bridal-heritage"
              className="inline-flex items-center justify-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3.5 rounded-xl font-label-md text-label-md uppercase tracking-wider font-bold shadow-md hover:bg-secondary-fixed transition-all"
            >
              <span>Claim Trousseau Perk</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Right Image: 5 Columns */}
        <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-primary-container">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDx_li_32ZJTXkUG3UN0_cBAi5Tkyz5KBQkYjZcYmUYviOJ3Ac7L_f-VsQOd6BnPdW2N19P9EQv8AXHp0OwtJp_tv63msHCMcYgt8ilV1qjwvvCm7XD7CMYvaNicZD6sJZlFDXVaER8Xp87E6oc8qg91hafX3T-pZCPxBq1anXrfBJfa33DlZ5O4y-bTcU3pm_vf3VZKRi51Q0VZsVWiN5IT6OkFcXUaWNmVdUj5Sc')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary via-transparent to-transparent" />
          <div className="absolute bottom-6 right-6 bg-surface/90 backdrop-blur-md px-4 py-2 rounded-xl text-on-surface shadow-md">
            <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
              Limited Edition
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Archival silk stole value: ₹8,500
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

