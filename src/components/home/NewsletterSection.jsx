import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="max-w-[1440px] w-full mx-auto px-margin pb-space-xxl">
      <div className="rounded-3xl bg-surface-container p-space-xl lg:p-space-xxl relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-space-md">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed shadow-sm">
            <span className="material-symbols-outlined text-2xl">mail</span>
          </div>

          <div className="space-y-space-xs">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
              The Viraasat Gazette
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Enter the Private Archival Salon
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
              Receive intimate preview invitations 48 hours prior to public textile archives releases, weaver monographs, and private trunk showings.
            </p>
          </div>

          {/* Signup Form */}
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-2 max-w-md mx-auto pt-2"
            >
              <input
                className="flex-1 bg-surface px-5 py-3.5 rounded-xl text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm font-body-sm text-body-sm"
                placeholder="Enter your privileged email"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-primary text-on-primary px-6 py-3.5 rounded-xl font-label-md text-label-md uppercase tracking-wider font-semibold hover:bg-primary-container transition-all shadow-md cursor-pointer whitespace-nowrap"
                type="submit"
              >
                Request Entry
              </button>
            </form>
          ) : (
            <div className="py-3 px-6 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md uppercase tracking-wider font-semibold max-w-md mx-auto">
              ✓ Welcome to the Viraasat Circle. Your inaugural gazette has been dispatched.
            </div>
          )}

          <p className="font-label-sm text-label-sm text-on-surface-variant">
            Strictly confidential · Zero spam · Unsubscribe at leisure
          </p>
        </div>
      </div>
    </section>
  );
}

