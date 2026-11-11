import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialWishlist = [
  {
    id: 1,
    title: 'Kadhwa Shikargah Katan Saree',
    cluster: 'Varanasi',
    price: '₹28,500',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoPpOIpe1LFbfFHBUoMh-4vkUvy9h_S3j0RqGwDMZhsPlUA09dCE_0fXyOQBbzQWx0ZunV5hUQ63XIZNMEQkQoIvta-1KHoZoK5iYt32MVP4GRqkFJWrI_8T2tD6b0yxUMoxSmrTGNLFimHATPskw5U6jBQfvaITdX7c_vVvloLUW08AQww3sjw4RvJGgn-TU2aa78pLBLljbaIY9SBsIUgck7vneYdnUSGepWdFFw',
  },
  {
    id: 2,
    title: 'Mayilkan Royal Bridal Silk',
    cluster: 'Kanchipuram',
    price: '₹42,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIzEMc4tyqMSjLEoVYNtz-auOPhYumOL5xUaFRqHZmKA7WKsyvaGua5exx1WTLkswtX5ThH_93VSqw9oNXZSBCEwzr5FykAMLd1VvT-FOFalLSuIF2QuIDB_i-3CI3PJjE5dMtfGAQv0Nd4b5k4K8AyReKRswzI0EBFyOpMJumeHKaR1jPi_z53aG_bd0D9W-StJHBSC9puQGSxgQYi5Yd3WWHxHvIIzRrzh9_Qkzw',
  },
  {
    id: 3,
    title: 'Champagne Meenakari Chanderi',
    cluster: 'Chanderi',
    price: '₹19,800',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAGkeIEWlXFghNIAMwagXycsXn20X3KB79uhvf98B_KffOURMjbwQ_j_ugTZA7jtavP_G7se40fOTLpf1P9KFsoJw17ohgZtDDrukIAAc8b8QE9ItlXuuqscAp0e5Lo6SjvVO7lK6j4aYUCeuQUsTTJqTWcngDaP_EtUVRUOjfCBcbB5v24gQQVtolxldamdQaeOuGfA26GcALJMqYVfrKaI2m88PKnxANNRbKbr6x',
  },
];

export default function WishlistPage() {
  const [items, setItems] = useState(initialWishlist);

  const removeItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-primary font-semibold">Trousseau Wishlist</span>
      </div>

      <div className="border-b border-surface-container-high pb-8 mb-8 flex justify-between items-end">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Curated Selections
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1">
            Your Saved Heirlooms ({items.length})
          </h1>
        </div>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 bg-surface-container rounded-2xl">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant">favorite_border</span>
          <p className="font-title-lg text-on-surface mt-2">Your wishlist is currently empty</p>
          <Link
            to="/sarees"
            className="inline-block mt-4 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-label-md text-xs uppercase tracking-wider"
          >
            Explore Sarees
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-surface rounded-2xl overflow-hidden border border-surface-container-high shadow-sm"
            >
              <div className="relative aspect-[3/4] bg-surface-container">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface/90 text-primary flex items-center justify-center hover:bg-surface"
                  aria-label="Remove from Wishlist"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>
              </div>
              <div className="p-space-md space-y-2">
                <p className="text-xs text-secondary font-semibold uppercase tracking-wider">{item.cluster}</p>
                <h3 className="font-title-md text-on-surface font-semibold">{item.title}</h3>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-price-lg text-primary font-bold">{item.price}</span>
                  <Link
                    to="/cart"
                    className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-xs uppercase tracking-wider font-semibold hover:bg-primary-container"
                  >
                    Move to Bag
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

