import { useState } from 'react';
import { Link } from 'react-router-dom';

const sareeProducts = [
  {
    id: 'maharani-shikargah',
    title: 'Maharani Shikargah Pure Katan Banarasi Saree',
    artisan: 'Woven by Master Rahimuddin, Varanasi',
    heritage: 'Banarasi Katan',
    fabric: 'Pure Mulberry Silk 100%',
    palette: 'Crimson',
    colorHex: '#5c0427',
    swatches: ['#5c0427', '#3d183d'],
    price: 42500,
    originalPrice: 48000,
    priceStr: '₹42,500',
    originalPriceStr: '₹48,000',
    subtitle: 'Taxes & Guild Certification Included',
    rating: 4.9,
    reviews: 42,
    badges: [
      { text: 'Handloom GI', icon: 'verified', style: 'bg-tertiary text-on-tertiary' },
      { text: 'Silk Mark India', style: 'bg-surface/90 backdrop-blur-md text-primary font-semibold' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqnV_Gz9lDLtnHz-OU1cwjlM96-gsxi21p4L9OYbybemoFrFpQeQVnEejEjJeEO8L-pInjXROjvo0_D8ov7jrKr9MpWzVz7PwxjXtMGv3dB0fsBk9lI-onOZkNgNyKQljURpXafOUlnHKJDQpM9iwGm7EXBtL9Qn-Tpck-2r54_7SLR5ICvxGAk1LfjRdourryKtZgMz4pHaAEfW9VBaL5sWN-vXrkoytNwZHQ6T52',
  },
  {
    id: 'swarna-temple-kanjivaram',
    title: 'Swarna Temple Border Kanjivaram Silk Saree',
    artisan: 'Woven by Govindarajan Guild, Kanchipuram',
    heritage: 'Kanjivaram Zari',
    fabric: 'Pure Mulberry Silk 100%',
    palette: 'Vermilion',
    colorHex: '#a3221b',
    swatches: ['#a3221b', '#0d4f68'],
    price: 58000,
    originalPrice: 65000,
    priceStr: '₹58,000',
    originalPriceStr: '₹65,000',
    subtitle: 'Includes Silk Purity Certificate',
    rating: 4.9,
    reviews: 68,
    badges: [
      { text: 'Bridal Heritage', icon: 'crown', style: 'bg-secondary text-on-secondary font-semibold' },
      { text: 'Pure Zari Korvai', style: 'bg-surface/90 backdrop-blur-md text-primary font-semibold' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIm47vY1VZJfvB7PnaTvjc9EYXKosFW1MAPY6-PyJMQjfyxdesI5XA6a6FB0tpGaog1nlAgqxI0aU_l_PR7xMP6WbO0JCUYik2dcFP6s_ITkWKRpuguOpIf3f02n_D6yTtKmV3Q-bC0YQIr7OfcjMPHFUktt3sBpZALziMle3nq-X4Q9GAIi3u1np_pG_43NV8NR1_l1Sc6xwvHMnMPWfJIrP73k-utcBuyIhOhVM2',
  },
  {
    id: 'noor-chanderi-tissue',
    title: 'Noor Chanderi Tissue Metallic Saree',
    artisan: 'Woven by Ansari Heritage, Chanderi',
    heritage: 'Chanderi Silk',
    fabric: 'Pure Zari Tissue',
    palette: 'Haldi',
    colorHex: '#d7c49e',
    swatches: ['#d7c49e', '#dfb4b8'],
    price: 18900,
    originalPrice: 22000,
    priceStr: '₹18,900',
    originalPriceStr: '₹22,000',
    subtitle: 'Ultra-light Drape (320g)',
    rating: 4.8,
    reviews: 31,
    badges: [
      { text: 'Lightweight Festive', icon: 'clock_loader_40', style: 'bg-surface-container-highest text-primary font-semibold' },
      { text: 'Handspun Tissue', style: 'bg-tertiary text-on-tertiary' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7SDn5lIxGOAnI9xkPnSoqwDJMgyvGs0Gh9gKNskpmvAmp6vj_N_8DWzQ89_s8RKuBQwsNVdUYhUI3I2Rp-MLe1BNZoWSr3goUE2Xp3cVd-8YeoG5rGQX8133-ZU-dZMv6fOamZ8EiZNuyO-kcOlY46iP1zENXZxn2BlHYWR6GhYG9Ky6doFyQIZldlafVYQSumYL6ffwJwbpEKk5PE5C9BnioF3KdouICgNeATEPt',
  },
  {
    id: 'arambagh-kadhwa-boota',
    title: 'Arambagh Kadhwa Floral Boota Silk Saree',
    artisan: 'Woven by Ustad Munawwar, Varanasi',
    heritage: 'Banarasi Katan',
    fabric: 'Pure Mulberry Silk 100%',
    palette: 'Zamarud',
    colorHex: '#173127',
    swatches: ['#173127', '#4a1525'],
    price: 31200,
    originalPrice: 35000,
    priceStr: '₹31,200',
    originalPriceStr: '₹35,000',
    subtitle: '18 Days On The Loom',
    rating: 4.9,
    reviews: 29,
    badges: [
      { text: 'GI Certified', icon: 'verified', style: 'bg-tertiary text-on-tertiary' },
      { text: 'Kadhwa Inlay', style: 'bg-surface/90 backdrop-blur-md text-secondary font-semibold' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDQuhFJIXO_xIng6NmLpkf9wbMGP6Bnptm038r2Mtx_kC8nbVdUx9_tfFRu8blgMF55wg9LlHa-Nw-pRoV5WHwswrlcHePkPKpWfV4_wXUg8rezYkQGHWl5lXL-PjcFAvpL7lhaAj2LnEgy59ic8nrGPFb0dF2kfMrmXU5oONj8o8Xhs8py6qn7CFnT3haA5FYblY1BIW69KJ5_yVgiYpSxka7lBsiWL7IvXAM5AHf',
  },
  {
    id: 'vintage-paithani-asawali',
    title: 'Vintage Paithani Asawali Border Handloom Saree',
    artisan: 'Woven by Dattatreya Guild, Yeola',
    heritage: 'Paithani',
    fabric: 'Fine Cotton-Silk Blends',
    palette: 'Indigo',
    colorHex: '#41214c',
    swatches: ['#41214c', '#8c1d40'],
    price: 36800,
    originalPrice: 42000,
    priceStr: '₹36,800',
    originalPriceStr: '₹42,000',
    subtitle: 'Muga Silk Warp • Zari Weft',
    rating: 5.0,
    reviews: 19,
    badges: [
      { text: 'Masterpiece', icon: 'auto_awesome', style: 'bg-tertiary text-on-tertiary' },
      { text: 'Yeola Cluster', style: 'bg-surface/90 backdrop-blur-md text-on-surface font-semibold' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATrrg23FjpUpk3SsmihaJYIWrgLl3nPfwh2pX3Xyv4ABS7KvFqqNSohHDXYFxUo9J-ztyDYChI2orsTNFe32G6ik3hh_GKP_poiPGgHQWDZwxPFPkNAoMSXz6LiVHN5OjUxesfyFqiIXC-odjzirSWu9OYhZcTNdKdpcbhGzTYL1QGATxxHoRhQ-0qPhmR2P1oCY7IFjIh5EAZIoGGR7yqVG-kdBh5SPq9-EzJF2Aq',
  },
  {
    id: 'shyamoli-jamdani-tussar',
    title: 'Shyamoli Jamdani Tussar Handwoven Drape',
    artisan: 'Woven by Biplab Das, Phulia Bengal',
    heritage: 'Tussar Wild Silk',
    fabric: 'Ghicha & Raw Silk',
    palette: 'Ivory',
    colorHex: '#e3d7bf',
    swatches: ['#e3d7bf', '#8c382a'],
    price: 24500,
    originalPrice: 28000,
    priceStr: '₹24,500',
    originalPriceStr: '₹28,000',
    subtitle: 'Hand-spun Desi Kosa Yarn',
    rating: 4.9,
    reviews: 24,
    badges: [
      { text: 'Wild Organic Silk', icon: 'eco', style: 'bg-primary text-on-primary' },
      { text: 'Zero Synthetic Dye', style: 'bg-surface/90 backdrop-blur-md text-on-surface font-semibold' },
    ],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCubcWAX-wFxPpvYOPJ64YBsbl7LdSe1aZiFoYiArVJXdaaGNfWu7UPp-6ZwQHrfnfEfaoolPxgieDwZfol4iKJrvuqAqiwSDiDAKtELv02xrocQKcdMsTTNb17uUeqkUSOKyNZkSpQMAaLP-kUiaCo2A6V91vMQhqIM7zDTNiAPuYZpR5eCNhbu3XLsb1Jo-43cfLOX-jGSWJAWTnbDGClzWTkKW48pZO1mEj_LuW',
  },
];

export default function SareesPage() {
  const [selectedHeritage, setSelectedHeritage] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [sortOption, setSortOption] = useState('featured');
  const [wishlist, setWishlist] = useState({ 'maharani-shikargah': true });
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [addedToast, setAddedToast] = useState(null);
  const [selectedFabrics, setSelectedFabrics] = useState({
    'Pure Mulberry Silk 100%': true,
  });

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setAddedToast(product.title);
    setTimeout(() => setAddedToast(null), 2800);
  };

  const handleResetFilters = () => {
    setSelectedHeritage('All');
    setSelectedFabrics({});
  };

  let filtered = sareeProducts.filter((item) => {
    if (selectedHeritage !== 'All' && item.heritage !== selectedHeritage) {
      return false;
    }
    return true;
  });

  if (sortOption === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="w-full bg-surface pb-space-xxl">
      {/* Toast Alert */}
      {addedToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-primary text-on-primary px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-medium">
          <span className="material-symbols-outlined text-lg">check_circle</span>
          <span>&quot;{addedToast}&quot; added to your Trousseau!</span>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative border border-surface-container-high animate-fade-in flex flex-col md:flex-row gap-6">
            <button
              onClick={() => setQuickViewItem(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container text-on-surface hover:text-primary flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
            <img
              src={quickViewItem.image}
              alt={quickViewItem.title}
              className="w-full md:w-1/2 aspect-[3/4] object-cover rounded-2xl bg-surface-container"
            />
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  {quickViewItem.artisan}
                </span>
                <h2 className="font-headline-sm text-xl font-bold text-on-surface mt-1">
                  {quickViewItem.title}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-price-lg text-2xl text-primary font-bold">
                    {quickViewItem.priceStr}
                  </span>
                  <span className="text-sm line-through text-on-surface-variant">
                    {quickViewItem.originalPriceStr}
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                  Authentic certified handloom woven with natural dyed pure zari on pit looms. Stamped with GI provenance and Silk Mark certification.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  to={`/sarees/${quickViewItem.id}`}
                  className="w-full py-3 bg-primary text-on-primary rounded-xl font-label-md text-xs uppercase tracking-wider font-semibold hover:bg-primary-container transition-all flex items-center justify-center gap-2"
                >
                  <span>View Complete Monograph</span>
                  <span className="material-symbols-outlined text-sm">east</span>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    handleAddToCart(quickViewItem);
                    setQuickViewItem(null);
                  }}
                  className="w-full py-2.5 bg-surface-container text-on-surface hover:bg-surface-container-high rounded-xl font-label-md text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  Quick Add to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Container */}
      <div className="relative w-full max-w-[1440px] mx-auto px-margin">
        {/* TOP BAR & EDITORIAL HEADER */}
        <section className="pt-space-md pb-space-lg">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant mb-space-sm">
            <Link className="hover:text-primary transition-colors" to="/">
              Home
            </Link>
            <span className="text-outline-variant">/</span>
            <Link className="hover:text-primary transition-colors" to="/sarees">
              Sarees
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-primary font-semibold">
              Banarasi &amp; Kanjivaram Heirlooms
            </span>
          </nav>

          {/* Editorial Banner Title & Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pb-space-md border-b border-surface-container-high">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold inline-block mb-1">
                Authentic Royal Provenance
              </span>
              <h1 className="font-headline-lg text-3xl sm:text-headline-lg text-primary tracking-tight font-display">
                Imperial Sarees Collection
                <span className="font-body-md text-body-md text-on-surface-variant font-normal block lg:inline-block lg:ml-3">
                  (184 Handcrafted Pieces)
                </span>
              </h1>
            </div>

            {/* Filter Count Pill & View Controls */}
            <div className="flex flex-wrap items-center gap-space-md">
              <div className="hidden sm:flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-full font-label-sm text-label-sm text-on-surface">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span>Archive View • 184 Available Weaves</span>
              </div>

              {/* Sort Select */}
              <div className="relative flex items-center bg-surface-container-low rounded-xl px-3 py-2 text-on-surface shadow-sm border border-surface-container-high">
                <span className="material-symbols-outlined text-sm text-on-surface-variant mr-2">
                  swap_vert
                </span>
                <label className="sr-only" htmlFor="sort-select">
                  Sort by
                </label>
                <select
                  id="sort-select"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="bg-transparent font-label-md text-xs text-on-surface uppercase tracking-wider pr-6 focus:outline-none cursor-pointer appearance-none"
                >
                  <option value="featured">Featured Curations</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="weaving-time">Weaving Time (Days)</option>
                  <option value="newest">Newest Additions</option>
                </select>
                <span className="material-symbols-outlined text-xs absolute right-2 pointer-events-none text-on-surface-variant">
                  expand_more
                </span>
              </div>

              {/* Grid/List Switcher */}
              <div className="flex items-center bg-surface-container-low p-1 rounded-xl shadow-sm border border-surface-container-high">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-all flex items-center cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-surface text-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                  title="Grid View"
                >
                  <span className="material-symbols-outlined text-lg">grid_view</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-all flex items-center cursor-pointer ${
                    viewMode === 'list'
                      ? 'bg-surface text-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                  title="Editorial View"
                >
                  <span className="material-symbols-outlined text-lg">view_agenda</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-gutter pb-space-xxl items-start">
          {/* LEFT FILTER PANEL (sticky 280px sidebar) */}
          <aside className="w-full lg:w-[280px] shrink-0 sticky top-28 bg-surface-container-low/90 backdrop-blur-md rounded-2xl p-space-md shadow-sm space-y-space-lg self-start border border-surface-container-high">
            <div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">
                  filter_vintage
                </span>
                <span className="font-title-md text-sm text-on-surface uppercase tracking-wider font-semibold">
                  Refine Archives
                </span>
              </div>
              <button
                type="button"
                onClick={handleResetFilters}
                className="font-label-sm text-xs text-primary hover:text-primary-container uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reset
              </button>
            </div>

            <div className="space-y-space-lg max-h-[calc(100vh-230px)] overflow-y-auto pr-1">
              {/* 1. Weave Heritage */}
              <div className="space-y-space-xs">
                <label className="font-label-md text-xs uppercase tracking-wider text-on-surface font-semibold block mb-2">
                  Weave Heritage
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'All Weaves', val: 'All' },
                    { label: 'Banarasi Katan', val: 'Banarasi Katan' },
                    { label: 'Kanjivaram Zari', val: 'Kanjivaram Zari' },
                    { label: 'Chanderi Silk', val: 'Chanderi Silk' },
                    { label: 'Paithani', val: 'Paithani' },
                    { label: 'Tussar Wild Silk', val: 'Tussar Wild Silk' },
                  ].map((tab) => (
                    <button
                      key={tab.val}
                      type="button"
                      onClick={() => setSelectedHeritage(tab.val)}
                      className={`font-label-sm text-xs px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                        selectedHeritage === tab.val
                          ? 'bg-primary text-on-primary shadow-sm font-semibold'
                          : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Fabric Weight & Yarn */}
              <div className="space-y-space-xs">
                <label className="font-label-md text-xs uppercase tracking-wider text-on-surface font-semibold block mb-2">
                  Fabric Weight &amp; Yarn
                </label>
                <div className="space-y-1.5">
                  {[
                    { name: 'Pure Mulberry Silk 100%', dot: 'bg-secondary' },
                    { name: 'Fine Cotton-Silk Blends', dot: 'bg-tertiary' },
                    { name: 'Pure Zari Tissue', dot: 'bg-primary-fixed-dim' },
                    { name: 'Ghicha & Raw Silk', dot: 'bg-outline' },
                  ].map((f) => (
                    <label
                      key={f.name}
                      className="flex items-center justify-between p-2 rounded-xl bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors"
                    >
                      <span className="flex items-center gap-2 font-body-sm text-xs text-on-surface">
                        <span className={`w-2.5 h-2.5 rounded-full ${f.dot}`}></span>
                        {f.name}
                      </span>
                      <input
                        type="checkbox"
                        checked={!!selectedFabrics[f.name]}
                        onChange={() =>
                          setSelectedFabrics((prev) => ({
                            ...prev,
                            [f.name]: !prev[f.name],
                          }))
                        }
                        className="accent-primary rounded w-4 h-4 cursor-pointer"
                      />
                    </label>
                  ))}
                </div>
              </div>

              {/* 3. Palette of Origin */}
              <div className="space-y-space-xs">
                <label className="font-label-md text-xs uppercase tracking-wider text-on-surface font-semibold block mb-2">
                  Palette of Origin
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { name: 'Crimson', color: '#5c0427' },
                    { name: 'Indigo', color: '#1b2b4e' },
                    { name: 'Haldi', color: '#d9a441' },
                    { name: 'Rani Pink', color: '#a31557' },
                    { name: 'Zamarud', color: '#173127' },
                    { name: 'Ivory', color: '#eae3d2' },
                  ].map((p) => (
                    <button
                      key={p.name}
                      type="button"
                      className="flex items-center gap-1.5 p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors text-left cursor-pointer"
                    >
                      <span
                        className="w-4 h-4 rounded-full shrink-0 shadow-inner"
                        style={{ backgroundColor: p.color }}
                      ></span>
                      <span className="font-label-sm text-[10px] text-on-surface truncate">
                        {p.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Price range */}
              <div className="space-y-space-xs">
                <div className="flex items-center justify-between mb-1">
                  <label className="font-label-md text-xs uppercase tracking-wider text-on-surface font-semibold">
                    Valuation (INR)
                  </label>
                  <span className="font-label-sm text-xs text-primary font-semibold">
                    ₹4.5K - ₹95K
                  </span>
                </div>
                <div className="relative py-2">
                  <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full w-4/5 ml-[5%]"></div>
                  </div>
                  <div className="absolute left-[5%] top-1 w-3.5 h-3.5 bg-primary rounded-full shadow-md -translate-y-0.5"></div>
                  <div className="absolute right-[15%] top-1 w-3.5 h-3.5 bg-primary rounded-full shadow-md -translate-y-0.5"></div>
                </div>
                <div className="flex items-center gap-2 pt-1 text-xs">
                  <div className="flex-1 bg-surface px-2.5 py-1.5 rounded-lg text-on-surface shadow-sm">
                    <span className="font-label-sm text-[10px] text-on-surface-variant block">
                      Min
                    </span>
                    <span className="font-body-sm font-semibold">₹ 4,500</span>
                  </div>
                  <span className="text-outline-variant text-xs">–</span>
                  <div className="flex-1 bg-surface px-2.5 py-1.5 rounded-lg text-on-surface shadow-sm">
                    <span className="font-label-sm text-[10px] text-on-surface-variant block">
                      Max
                    </span>
                    <span className="font-body-sm font-semibold">₹ 95,000</span>
                  </div>
                </div>
              </div>

              {/* 5. Occasion selector */}
              <div className="space-y-space-xs">
                <label className="font-label-md text-xs uppercase tracking-wider text-on-surface font-semibold block mb-1">
                  Occasion
                </label>
                <div className="space-y-1 font-body-sm text-xs text-on-surface-variant">
                  {[
                    'Bridal Trousseau Heirloom',
                    'Festive Puja & Rituals',
                    'Grand Royal Reception',
                    'Everyday Connoisseur Luxury',
                  ].map((occ, idx) => (
                    <label
                      key={occ}
                      className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-surface-container cursor-pointer transition-colors"
                    >
                      <input
                        type="radio"
                        name="occasion"
                        defaultChecked={idx === 0}
                        className="accent-primary"
                      />
                      <span>{occ}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* 6. Guild Technique */}
              <div className="space-y-space-xs">
                <label className="font-label-md text-xs uppercase tracking-wider text-on-surface font-semibold block mb-1">
                  Guild Technique
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {['Kadhwa Weave', 'Jangla Brocade', 'Tanchoi Silk', 'Jamdani Inlay'].map(
                    (tech, idx) => (
                      <label
                        key={tech}
                        className="flex items-center gap-2 p-2 rounded-xl bg-surface-container text-on-surface font-label-sm text-[11px] cursor-pointer hover:bg-surface-container-high transition-colors"
                      >
                        <input
                          type="checkbox"
                          defaultChecked={idx === 0 || idx === 3}
                          className="accent-primary rounded"
                        />
                        <span>{tech}</span>
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Sticky Footer Buttons in Sidebar */}
            <div className="pt-space-sm space-y-2 border-t border-surface-container">
              <button
                type="button"
                className="w-full bg-primary text-on-primary font-label-md text-xs uppercase tracking-wider py-3 rounded-xl hover:bg-primary-container shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer font-semibold"
              >
                <span>Apply Filters</span>
                <span className="bg-primary-fixed text-on-primary-fixed text-[11px] px-2 py-0.5 rounded-full font-bold">
                  {filtered.length}
                </span>
              </button>
              <button
                type="button"
                onClick={handleResetFilters}
                className="w-full bg-surface text-on-surface-variant font-label-sm text-xs uppercase tracking-wider py-2 rounded-lg hover:text-on-surface transition-colors text-center cursor-pointer"
              >
                Clear All Selected
              </button>
            </div>
          </aside>

          {/* RIGHT PRODUCT GRID */}
          <section className="flex-1 w-full">
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-gutter'
                  : 'flex flex-col gap-gutter'
              }
            >
              {filtered.map((item) => {
                const isWish = !!wishlist[item.id];
                return (
                  <article
                    key={item.id}
                    className={`group relative flex bg-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-surface-container-high ${
                      viewMode === 'grid' ? 'flex-col' : 'flex-col sm:flex-row items-center'
                    }`}
                  >
                    <div
                      className={`relative overflow-hidden bg-surface-container ${
                        viewMode === 'grid'
                          ? 'w-full aspect-[3/4]'
                          : 'w-full sm:w-72 aspect-[3/4] shrink-0'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Badges Container */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                        {item.badges.map((b) => (
                          <span
                            key={b.text}
                            className={`${b.style} font-label-sm text-xs px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm`}
                          >
                            {b.icon && (
                              <span className="material-symbols-outlined text-[13px]">
                                {b.icon}
                              </span>
                            )}
                            {b.text}
                          </span>
                        ))}
                      </div>

                      {/* Wishlist Button */}
                      <button
                        type="button"
                        onClick={() => toggleWishlist(item.id)}
                        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface/85 backdrop-blur-md text-on-surface hover:text-primary transition-colors flex items-center justify-center shadow-sm cursor-pointer"
                        aria-label="Toggle Wishlist"
                      >
                        <span
                          className={`material-symbols-outlined text-lg ${
                            isWish ? 'text-primary' : ''
                          }`}
                          style={{
                            fontVariationSettings: isWish ? "'FILL' 1" : "'FILL' 0",
                          }}
                        >
                          favorite
                        </span>
                      </button>

                      {/* Hover Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setQuickViewItem(item)}
                          className="flex-1 bg-surface/90 hover:bg-surface backdrop-blur-md text-on-surface font-label-md text-xs uppercase tracking-wider py-2.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span className="material-symbols-outlined text-sm">visibility</span>
                          Quick View
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAddToCart(item)}
                          className="bg-primary hover:bg-primary-container text-on-primary p-2.5 rounded-xl shadow-md transition-colors flex items-center justify-center cursor-pointer"
                          title="Add to Bag"
                        >
                          <span className="material-symbols-outlined text-base">
                            shopping_bag
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="p-space-md flex flex-col flex-1 justify-between w-full">
                      <div>
                        <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-[11px] mb-1.5 uppercase tracking-wider">
                          <span className="material-symbols-outlined text-xs text-secondary">
                            handyman
                          </span>
                          <span>{item.artisan}</span>
                        </div>

                        <Link to={`/sarees/${item.id}`}>
                          <h3 className="font-headline-sm text-lg text-on-surface group-hover:text-primary transition-colors leading-snug line-clamp-2 font-semibold">
                            {item.title}
                          </h3>
                        </Link>

                        <div className="flex items-center gap-1.5 mt-2">
                          <div className="flex items-center text-secondary">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <span
                                key={s}
                                className="material-symbols-outlined text-sm"
                                style={{ fontVariationSettings: "'FILL' 1" }}
                              >
                                star
                              </span>
                            ))}
                          </div>
                          <span className="font-body-sm text-xs font-semibold text-on-surface">
                            {item.rating}
                          </span>
                          <span className="font-body-sm text-xs text-on-surface-variant">
                            ({item.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <div className="pt-space-md mt-space-sm flex items-end justify-between border-t border-surface-container">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-price-lg text-price-lg text-primary font-bold">
                              {item.priceStr}
                            </span>
                            <span className="font-body-sm text-xs text-on-surface-variant line-through">
                              {item.originalPriceStr}
                            </span>
                          </div>
                          <span className="font-label-sm text-[10px] text-tertiary font-semibold uppercase tracking-wider">
                            {item.subtitle}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {item.swatches.map((swatch, idx) => (
                            <button
                              key={swatch}
                              type="button"
                              className={`w-5 h-5 rounded-full transition-all cursor-pointer ${
                                idx === 0
                                  ? 'ring-2 ring-primary ring-offset-2 ring-offset-surface-container-low'
                                  : 'opacity-80 hover:opacity-100'
                              }`}
                              style={{ backgroundColor: swatch }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="pt-space-md lg:hidden flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(item)}
                          className="flex-1 bg-primary text-on-primary py-2 rounded-lg font-label-md text-xs uppercase tracking-wider font-semibold"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* WEAVER SPOTLIGHT EDITORIAL BREAK */}
            <div className="my-space-xl p-space-lg rounded-2xl bg-surface-container flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm border border-surface-container-high">
              <div className="space-y-2 max-w-xl">
                <span className="font-label-sm text-xs uppercase tracking-widest text-primary font-bold">
                  Master Artisan Guild
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  Preserving India&apos;s Slow Textile Craft
                </h4>
                <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                  Every saree in this archive is cataloged in the National Handloom Register. We ensure 100% direct price transparency with our master weaver clusters across Varanasi, Kanchipuram, and Maheshwar.
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-4">
                <div className="text-right">
                  <span className="font-title-lg text-title-lg text-primary block font-bold">
                    450+
                  </span>
                  <span className="font-label-sm text-xs text-on-surface-variant uppercase">
                    Lineage Weavers
                  </span>
                </div>
                <div className="h-10 w-px bg-outline-variant"></div>
                <div className="text-left">
                  <span className="font-title-lg text-title-lg text-secondary block font-bold">
                    GI Tagged
                  </span>
                  <span className="font-label-sm text-xs text-on-surface-variant uppercase">
                    Govt Verified
                  </span>
                </div>
              </div>
            </div>

            {/* PAGINATION SECTION */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-lg pb-space-xxl">
              <p className="font-body-sm text-xs text-on-surface-variant">
                Showing{' '}
                <span className="font-semibold text-on-surface">1 – {filtered.length}</span> of{' '}
                <span className="font-semibold text-on-surface">184</span> Masterpieces
              </p>

              <nav aria-label="Pagination" className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled
                  className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant opacity-40 cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button
                  type="button"
                  className="w-10 h-10 rounded-xl bg-primary text-on-primary font-display font-semibold text-base shadow-sm"
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-10 h-10 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container font-display font-medium text-base transition-colors"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-10 h-10 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container font-display font-medium text-base transition-colors"
                >
                  3
                </button>
                <span className="w-8 h-10 flex items-center justify-center text-on-surface-variant font-display">
                  …
                </span>
                <button
                  type="button"
                  className="w-10 h-10 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container font-display font-medium text-base transition-colors"
                >
                  12
                </button>
                <button
                  type="button"
                  className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-high transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </nav>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
