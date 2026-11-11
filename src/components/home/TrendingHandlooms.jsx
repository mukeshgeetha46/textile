import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: 'Kadhwa Shikargah Katan Saree',
    category: 'Banarasi Katan',
    cluster: 'Varanasi Cluster',
    fabric: '100% Pure Silk',
    price: '₹28,500',
    originalPrice: '₹34,000',
    discount: '16% OFF',
    rating: 4.9,
    reviews: 48,
    badges: ['Handloom GI', 'Bestseller'],
    badgeColors: ['bg-tertiary text-on-tertiary', 'bg-secondary text-on-secondary'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoPpOIpe1LFbfFHBUoMh-4vkUvy9h_S3j0RqGwDMZhsPlUA09dCE_0fXyOQBbzQWx0ZunV5hUQ63XIZNMEQkQoIvta-1KHoZoK5iYt32MVP4GRqkFJWrI_8T2tD6b0yxUMoxSmrTGNLFimHATPskw5U6jBQfvaITdX7c_vVvloLUW08AQww3sjw4RvJGgn-TU2aa78pLBLljbaIY9SBsIUgck7vneYdnUSGepWdFFw',
    swatches: ['#7a1f3d', '#173127', '#7d5700'],
  },
  {
    id: 2,
    title: 'Mayilkan Royal Bridal Silk',
    category: 'Kanchipuram Silk',
    cluster: 'Kanchipuram',
    fabric: 'Korvai Weave',
    price: '₹42,000',
    originalPrice: '₹48,000',
    discount: '12% OFF',
    rating: 5.0,
    reviews: 32,
    badges: ['Handloom GI', 'Pure Mulberry'],
    badgeColors: ['bg-tertiary text-on-tertiary', 'bg-surface-container-highest text-primary'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIzEMc4tyqMSjLEoVYNtz-auOPhYumOL5xUaFRqHZmKA7WKsyvaGua5exx1WTLkswtX5ThH_93VSqw9oNXZSBCEwzr5FykAMLd1VvT-FOFalLSuIF2QuIDB_i-3CI3PJjE5dMtfGAQv0Nd4b5k4K8AyReKRswzI0EBFyOpMJumeHKaR1jPi_z53aG_bd0D9W-StJHBSC9puQGSxgQYi5Yd3WWHxHvIIzRrzh9_Qkzw',
    swatches: ['#1b3a4b', '#5c0427'],
  },
  {
    id: 3,
    title: 'Champagne Meenakari Chanderi',
    category: 'Chanderi Tissue',
    cluster: 'Chanderi, MP',
    fabric: 'Tissue Zari',
    price: '₹19,800',
    originalPrice: '₹23,500',
    discount: '15% OFF',
    rating: 4.8,
    reviews: 19,
    badges: ['Handloom GI', 'Zari Tissue'],
    badgeColors: ['bg-tertiary text-on-tertiary', 'bg-primary text-on-primary'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAGkeIEWlXFghNIAMwagXycsXn20X3KB79uhvf98B_KffOURMjbwQ_j_ugTZA7jtavP_G7se40fOTLpf1P9KFsoJw17ohgZtDDrukIAAc8b8QE9ItlXuuqscAp0e5Lo6SjvVO7lK6j4aYUCeuQUsTTJqTWcngDaP_EtUVRUOjfCBcbB5v24gQQVtolxldamdQaeOuGfA26GcALJMqYVfrKaI2m88PKnxANNRbKbr6x',
    swatches: ['#d5c7a3', '#d09b9b', '#b5c7b9'],
  },
  {
    id: 4,
    title: 'Wild Ghicha Tussar Drape',
    category: 'All Heirlooms',
    cluster: 'Bhagalpur Loom',
    fabric: 'Tussar Silk',
    price: '₹16,500',
    originalPrice: '₹20,000',
    discount: '17% OFF',
    rating: 4.9,
    reviews: 27,
    badges: ['Wild Forest Silk', 'Kantha Craft'],
    badgeColors: ['bg-tertiary text-on-tertiary', 'bg-secondary-container text-on-secondary-container'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqjwA9Hp8vH0Iy48VDM7lLb7narlA14g7QlKXIuEg2az0n2ED2x4Wfcw1703BwGd_AbXB2vUFPEdzIOxUThnbwSyt9sZ5NCGErZHPoTH-NqNJ0dfNJ1ku4f-QorFriGLmK-e63Laqa39Jr8WB5rCTY-g28g753PX5eL-dWmktY3ndmHjDJXMdi_x8rXao2cNOuggbu5DOiRq0Av6Q39NrSfECubDH9KeDdNDy2oG2W',
    swatches: ['#bf9b30', '#5f4100'],
  },
];

const filterCategories = [
  'All Heirlooms',
  'Banarasi Katan',
  'Kanchipuram Silk',
  'Chanderi Tissue',
];

export default function TrendingHandlooms() {
  const [activeFilter, setActiveFilter] = useState('All Heirlooms');
  const [wishlist, setWishlist] = useState({ 1: true });
  const [addedItem, setAddedItem] = useState(null);
  const [selectedSwatches, setSelectedSwatches] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });

  const filteredProducts =
    activeFilter === 'All Heirlooms'
      ? products
      : products.filter(
          (p) => p.category === activeFilter || p.category === 'All Heirlooms'
        );

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    setAddedItem(product.title);
    setTimeout(() => {
      setAddedItem(null);
    }, 2800);
  };

  return (
    <section className="w-full bg-surface-container-low py-space-xxl relative">
      {/* Toast Alert */}
      {addedItem && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-primary text-on-primary px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 animate-fade-in text-sm font-medium">
          <span className="material-symbols-outlined text-lg">check_circle</span>
          <span>&quot;{addedItem}&quot; added to your Trousseau!</span>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
          <div className="space-y-space-xs">
            <div className="inline-flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">
              <span className="material-symbols-outlined text-sm">stars</span>
              <span>Master Weaver Highlights</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Trending Handlooms
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 mt-4 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {filterCategories.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full font-label-sm text-label-sm uppercase tracking-wider font-semibold shadow-sm transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {filteredProducts.map((product) => {
            const isWishlisted = !!wishlist[product.id];
            return (
              <div
                key={product.id}
                className="group flex flex-col bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container">
                  <Link to="/sarees">
                    <img
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      src={product.image}
                      alt={product.title}
                    />
                  </Link>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    {product.badges.map((b, idx) => (
                      <span
                        key={b}
                        className={`${product.badgeColors[idx]} font-label-sm text-label-sm px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface/80 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors shadow-sm cursor-pointer"
                    aria-label="Toggle Wishlist"
                  >
                    <span
                      className={`material-symbols-outlined text-lg ${
                        isWishlisted ? 'text-primary' : ''
                      }`}
                    >
                      {isWishlisted ? 'favorite' : 'favorite_border'}
                    </span>
                  </button>

                  {/* Rating */}
                  <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span
                      className="material-symbols-outlined text-secondary text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">
                      {product.rating}
                    </span>
                    <span className="text-on-surface-variant text-[10px]">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                      <span>{product.cluster}</span>
                      <span className="text-tertiary font-semibold">
                        {product.fabric}
                      </span>
                    </div>
                    <Link to="/sarees">
                      <h3 className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
                        {product.title}
                      </h3>
                    </Link>
                  </div>

                  {/* Swatches */}
                  <div className="flex items-center gap-1.5 py-1">
                    {product.swatches.map((color, sIdx) => (
                      <button
                        key={color}
                        type="button"
                        onClick={() =>
                          setSelectedSwatches((prev) => ({
                            ...prev,
                            [product.id]: sIdx,
                          }))
                        }
                        className={`w-5 h-5 rounded-full transition-transform cursor-pointer ${
                          selectedSwatches[product.id] === sIdx
                            ? 'ring-2 ring-primary ring-offset-2 scale-110'
                            : 'hover:scale-110'
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Color shade ${sIdx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Price Row */}
                  <div className="flex items-baseline justify-between pt-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-price-lg text-price-lg text-primary font-bold">
                        {product.price}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant line-through">
                        {product.originalPrice}
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-bold">
                      {product.discount}
                    </span>
                  </div>

                  {/* Add to Trousseau */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product)}
                    className="w-full mt-2 py-2.5 px-4 bg-surface-container hover:bg-primary text-on-surface hover:text-on-primary rounded-xl font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-base">
                      shopping_bag
                    </span>
                    <span>Add to Trousseau</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

