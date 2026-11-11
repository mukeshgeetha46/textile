import { Link } from 'react-router-dom';

const kurtas = [
  {
    id: 301,
    title: 'Ivory Raw Silk Angrakha Ensemble',
    craft: 'Zardozi Needlework',
    price: '₹14,800',
    fabric: 'Pure Mulberry Raw Silk',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBwBOlcgGR6D5fCe38bEmQeL3huJB9mfzQsba1E3CBUX8c-SSZypyo9hxJbIOE51JsBK_3rY-jAjnn2Uz8CaM0NbIH2G5T_wZtgB1VOp3BhJEczPdP2TZr1N_rmv7H0k-WfW-WOzmaJ2PVrr5OLIBtQFNaWpBqWpT83n_mlcSoXBYLkG2NLg0eiuuwGJlJFVQeZvd149NvfN_tfC04jaWk4Ue8Jnq0rmKI_dAug1Uo',
  },
  {
    id: 302,
    title: 'Crimson Chanderi Silk Kurta Set',
    craft: 'Marodi & Gota Patti',
    price: '₹18,500',
    fabric: 'Chanderi Silk-Zari',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0VGG4CXtPyPBfiasWwTPc_DDEIFV41hlatLLQ-QxaQ5TPPVJ9SmNGCombCLwnZs5yWnjPJJZQjDsmIP9nRH4fDWmWubPnGAFUExazDv9fmOU5bV61vOT0_StPg8r3A7okuFFCD8La9fktRJZHKil9NuUVzihO1MfSyjtWN3vfIeld5lvJDgwF6licO-HM4coaZrcfRMBhai7aV08vOYkMYam0P76nMVdcw_ceT9zt',
  },
];

export default function KurtasPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-primary font-semibold">Kurtas &amp; Angrakhas</span>
      </div>

      <div className="border-b border-surface-container-high pb-8 mb-8">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Tailored Silhouettes
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1">
          Handcrafted Kurtas &amp; Angrakhas
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
          Bespoke silhouettes fashioned from handloom silks and gossamer mulmuls, embellished with authentic heritage needlecraft.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {kurtas.map((item) => (
          <div
            key={item.id}
            className="group bg-surface rounded-2xl overflow-hidden border border-surface-container-high hover:shadow-xl transition-all"
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-3 left-3 bg-secondary text-on-secondary font-label-sm text-xs px-2.5 py-1 rounded-full uppercase tracking-wider">
                {item.craft}
              </span>
            </div>
            <div className="p-space-md space-y-3">
              <div>
                <p className="text-xs text-tertiary font-semibold uppercase tracking-wider">{item.fabric}</p>
                <h3 className="font-title-lg text-title-lg font-semibold text-on-surface mt-0.5">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-surface-container">
                <span className="font-price-lg text-primary font-bold">{item.price}</span>
                <Link
                  to="/cart"
                  className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-xs uppercase tracking-wider font-semibold hover:bg-primary-container transition-colors"
                >
                  Custom Fit
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

