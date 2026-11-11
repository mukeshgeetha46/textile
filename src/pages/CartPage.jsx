import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialCart = [
  {
    id: 1,
    title: 'Kadhwa Shikargah Katan Saree',
    shade: 'Crimson Red',
    price: 28500,
    qty: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoPpOIpe1LFbfFHBUoMh-4vkUvy9h_S3j0RqGwDMZhsPlUA09dCE_0fXyOQBbzQWx0ZunV5hUQ63XIZNMEQkQoIvta-1KHoZoK5iYt32MVP4GRqkFJWrI_8T2tD6b0yxUMoxSmrTGNLFimHATPskw5U6jBQfvaITdX7c_vVvloLUW08AQww3sjw4RvJGgn-TU2aa78pLBLljbaIY9SBsIUgck7vneYdnUSGepWdFFw',
  },
  {
    id: 2,
    title: 'Mayilkan Royal Bridal Silk',
    shade: 'Peacock Emerald',
    price: 42000,
    qty: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIzEMc4tyqMSjLEoVYNtz-auOPhYumOL5xUaFRqHZmKA7WKsyvaGua5exx1WTLkswtX5ThH_93VSqw9oNXZSBCEwzr5FykAMLd1VvT-FOFalLSuIF2QuIDB_i-3CI3PJjE5dMtfGAQv0Nd4b5k4K8AyReKRswzI0EBFyOpMJumeHKaR1jPi_z53aG_bd0D9W-StJHBSC9puQGSxgQYi5Yd3WWHxHvIIzRrzh9_Qkzw',
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCart);
  const [coupon, setCoupon] = useState('HERITAGE2026');
  const [couponApplied, setCouponApplied] = useState(true);

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  const discount = couponApplied && subtotal >= 45000 ? 5000 : 0;
  const shipping = subtotal > 5000 ? 0 : 500;
  const total = subtotal - discount + shipping;

  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-primary font-semibold">Trousseau Bag</span>
      </div>

      <div className="border-b border-surface-container-high pb-8 mb-8">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Acquisitions
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1">
          Your Trousseau Trunk ({cartItems.length} items)
        </h1>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-surface-container rounded-2xl">
          <span className="material-symbols-outlined text-4xl text-on-surface-variant">shopping_bag</span>
          <p className="font-title-lg text-on-surface mt-2">Your trunk is empty</p>
          <Link
            to="/sarees"
            className="inline-block mt-4 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-label-md text-xs uppercase tracking-wider"
          >
            Explore Heirlooms
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-surface rounded-2xl p-4 sm:p-space-md border border-surface-container-high flex gap-4 sm:gap-6 items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 sm:w-28 aspect-[3/4] object-cover rounded-xl bg-surface-container"
                />
                <div className="flex-1 space-y-1">
                  <h3 className="font-title-md text-title-md font-semibold text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-xs text-on-surface-variant">Shade: {item.shade}</p>
                  <p className="font-price-md text-primary font-bold">₹{item.price.toLocaleString('en-IN')}</p>

                  <div className="flex items-center gap-3 pt-2">
                    <div className="flex items-center border border-outline-variant rounded-lg">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, -1)}
                        className="px-2.5 py-1 text-on-surface hover:bg-surface-container"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-semibold">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, 1)}
                        className="px-2.5 py-1 text-on-surface hover:bg-surface-container"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-error hover:underline flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-surface-container rounded-2xl p-space-lg space-y-4 shadow-sm border border-surface-container-high">
              <h3 className="font-title-lg text-title-lg font-semibold text-on-surface">Order Summary</h3>

              <div className="space-y-2 text-sm text-on-surface-variant border-b border-surface-container-high pb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-on-surface font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-secondary">
                    <span>Festive Voucher ({coupon})</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Insured Express Shipping</span>
                  <span className="text-tertiary font-semibold">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
              </div>

              {/* Coupon */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                  placeholder="Voucher code"
                  className="bg-surface px-3 py-2 rounded-lg text-xs font-semibold flex-1 border border-outline-variant uppercase"
                />
                <button
                  type="button"
                  onClick={() => setCouponApplied(true)}
                  className="bg-primary text-on-primary px-3 py-2 rounded-lg text-xs uppercase font-semibold"
                >
                  Apply
                </button>
              </div>

              {subtotal >= 45000 && (
                <div className="bg-secondary-fixed/40 text-on-secondary-fixed p-3 rounded-xl text-xs font-medium flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">redeem</span>
                  <span>Complimentary pure zari stole added!</span>
                </div>
              )}

              <div className="flex justify-between items-baseline text-lg font-bold text-on-surface pt-2">
                <span>Grand Total</span>
                <span className="font-price-lg text-primary text-2xl">₹{total.toLocaleString('en-IN')}</span>
              </div>

              <button
                type="button"
                className="w-full py-3.5 bg-primary hover:bg-primary-container text-on-primary rounded-xl font-label-md text-xs uppercase tracking-wider font-semibold shadow-lg transition-all"
              >
                Proceed to Secure Checkout
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-on-surface-variant pt-2">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span>256-Bit Encrypted Heritage Gateway</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

