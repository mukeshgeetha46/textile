import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xxl text-center">
      <div className="max-w-md mx-auto space-y-4">
        <span className="material-symbols-outlined text-6xl text-primary">search_off</span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">Weave Not Found</h1>
        <p className="font-body-md text-on-surface-variant">
          The textile archive or curate page you are seeking has retired to our master storage vaults.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-xl font-label-md text-xs uppercase tracking-wider font-semibold hover:bg-primary-container transition-all"
          >
            <span className="material-symbols-outlined text-sm">home</span>
            <span>Return to Archives</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

