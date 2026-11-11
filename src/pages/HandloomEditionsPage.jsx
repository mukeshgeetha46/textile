import { Link } from 'react-router-dom';

const editions = [
  {
    title: 'Varanasi Master Pit-Loom Series',
    weaver: 'Ustad Shamim Ahmed (4th Gen Master)',
    pieces: '12 numbered drapes worldwide',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASSSEq1Zn40r8vWR3hNjuTabnW51_E8-xbNm5A0cPkXSbM2lwncwbcGQakRu8AccHOoZpHJ97T3R--0tQk5b7WTBRVS7mc0YtNt_KtX4UbTae92EeyF3d2J6ih_Xawg6yMJetSWuSwYVHoyWRyyF6BxQfEPntIUssO6SLS8CQADTdLuEoCad7ZVqmvp_lkJ_SZ3t5fKMM9hAAJQ4O_r2Py-2lCsSW6KLmTFRCD5hOt',
  },
  {
    title: 'Assam Wild Muga Gold Archive',
    weaver: 'Brahmaputra Sericulture Guild',
    pieces: '8 numbered yardages',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2OdKs3i9fvGv4VFXT70UxlVFK5O6sCxGlBzZvpSY8vUYrvtuyZwe6KcWs_fw6ZqfMTrLj0xxGrRSIF7XxL8y-FtRqoY-n5BcGV2Zi32uynf3iM1TU9x_FScbQWNJMviwDJX9aDDUa-_kVo0tqnUtlUYhf6F7yREWJClrEDx4HT98qulk44xyCZFa2RPqCIZ9FCm_Wc48xm8wAFJPFmfvJFa9ibaOcf4VMsX7BJDzP',
  },
];

export default function HandloomEditionsPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-primary font-semibold">Handloom Editions</span>
      </div>

      <div className="border-b border-surface-container-high pb-8 mb-8">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Numbered Archives
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1">
          Rare Handloom Editions
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
          Single-run, heirloom numbered releases directly stamped with the weaver seal and inscribed ledger entry.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {editions.map((item) => (
          <div
            key={item.title}
            className="group bg-surface rounded-2xl overflow-hidden border border-surface-container-high hover:shadow-xl transition-all"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-space-md space-y-2">
              <span className="bg-primary/10 text-primary font-label-sm text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                {item.pieces}
              </span>
              <h3 className="font-title-lg text-title-lg font-semibold text-on-surface">
                {item.title}
              </h3>
              <p className="text-xs text-on-surface-variant">Master: {item.weaver}</p>
              <div className="pt-2">
                <Link
                  to="/sarees"
                  className="inline-flex items-center gap-2 text-primary font-label-sm uppercase tracking-wider font-bold text-xs hover:underline"
                >
                  <span>Request Private Ledger Viewing</span>
                  <span className="material-symbols-outlined text-sm">east</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

