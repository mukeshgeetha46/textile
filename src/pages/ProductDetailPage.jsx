import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const galleryImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAeBDrHrxp_ryLjZQqwNtekhZ0dpTy3H7EbycuthChFqHvWgVRRuo5ll5vz72dR1rDBzDboIsgziT9Gblo6oWMVyAxoyHqg-GJnWdFdwI2l5f-48qWJb_VeLuIoq-wv6i982v6Lf8cO2pHvLsIkr_AlmdsJ_-CpomP6_q2q1-LBmBcOublzK2AyioDnKI6uGVW5gCA2xWi-VF0g7UDKHp9dpjcGfw3uC_j_HIa8aKWB',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBaFirJ6epleCIAi6aSfJcyjgTdUUEYGTi9NAFD8magyI6mhDbxkQSJxCpug5Rw5_n_mTtAAUu8eFhU4OpZVnmbrcDn2sKpUtfZgbGm5G99o-YMQRK9AMW71tE4g9ldEfPZXr9Bk2voixb9-tQ2w6gQUIeqd3aWQiGuAgHLnWt5R9aDzkUxYQNNbl2b0sh48oFY050GUXLolwCEw0AYJRPhhkvqaV-cQCi7eFmzwmi2',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBGz9h9RRWhhFqxhQuPEk81RkKGNJA1Np5g_4mTy2BaJtloG2V1nWoWexAjItZv_q7y3U9Diqw74l0o4PYBulbR1HmkFqoxzjobrAB9BOOOxth_5wQjv48HEKGyYkPHlGHYrAt0SL2-pq4Yq37Zuls8RnlLt9qvszjP1K_Z73sqLoooNrdIgNakV0wDyfSZ_JIVCk2Xfel6ADmQueiPW3gCEwai5Cy51bTI6bBqX_Dj',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB_49NJ54Kz5tMY7lBnDiKklRS0YrY2W2QFPPGEsHcdvMmqshdS2r_gARYWXJWUu38yHwIeQTFHPfPyrhQTsvTV-T4i1ukattCzMtoBE5MSSfj0TolzikPOJzUKEDzIWmwUs9ZzrWV62jsCW51auRNwdzRbWU3aj32vD-a9rh4J_hCXhs7vJ0chMGAdGWBHLcq615A0WC4Y41B3ey3Qfm5fW94q5xZ7j3qk8BLN0_9B',
];

const colorOptions = [
  { name: 'Shahi Crimson', hex: '#7a1f3d' },
  { name: 'Neelambari Indigo', hex: '#1b2b48' },
  { name: 'Panna Emerald', hex: '#1e4635' },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [purchaseFormat, setPurchaseFormat] = useState('saree'); // 'saree' | 'fabric'
  const [selectedColor, setSelectedColor] = useState('Shahi Crimson');
  const [blouseTailoring, setBlouseTailoring] = useState('unstitched');
  const [pincode, setPincode] = useState('110001');
  const [pincodeChecked, setPincodeChecked] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToast, setAddedToast] = useState(false);

  const handleAddToCart = () => {
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2800);
  };

  return (
    <div className="w-full bg-surface pb-space-xxl">
      {/* Toast Alert */}
      {addedToast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-primary text-on-primary px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 text-sm font-medium">
          <span className="material-symbols-outlined text-lg">check_circle</span>
          <span>Added to your Trousseau Trunk!</span>
        </div>
      )}

      {/* BREADCRUMBS & TOP METADATA */}
      <section className="max-w-[1440px] mx-auto px-margin w-full pt-4 pb-6">
        <nav className="flex items-center gap-2 font-label-md text-xs text-on-surface-variant uppercase tracking-wider">
          <Link className="hover:text-primary transition-colors" to="/">
            Home
          </Link>
          <span className="text-outline-variant font-normal">/</span>
          <Link className="hover:text-primary transition-colors" to="/sarees">
            Sarees
          </Link>
          <span className="text-outline-variant font-normal">/</span>
          <Link className="hover:text-primary transition-colors" to="/sarees">
            Banarasi Katan
          </Link>
          <span className="text-outline-variant font-normal">/</span>
          <span className="text-primary font-semibold truncate max-w-xs md:max-w-md">
            Maharani Shikargah Handwoven Silk Saree
          </span>
        </nav>
      </section>

      {/* MAIN PRODUCT SECTION: Split View (Gallery 58% / Detail 42%) */}
      <section className="max-w-[1440px] mx-auto px-margin w-full pb-space-xxl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* LEFT PRODUCT GALLERY */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4 sticky top-28">
            {/* Vertical Thumbnail Strip */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible shrink-0 pb-2 md:pb-0">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`group relative w-20 h-28 rounded-lg overflow-hidden bg-surface-container-low transition-all duration-300 shadow-sm focus:outline-none cursor-pointer ${
                    activeImageIdx === idx
                      ? 'ring-2 ring-primary scale-105'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  <span className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                </button>
              ))}
            </div>

            {/* Large High-Res Hero Viewport */}
            <div className="relative flex-1 bg-surface-container-low rounded-2xl overflow-hidden shadow-md group select-none aspect-[4/5] min-h-[480px] lg:min-h-[580px] max-h-[760px] border border-surface-container-high">
              <img
                src={galleryImages[activeImageIdx]}
                alt="Active Saree View"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                <div className="flex items-center gap-1.5 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm text-tertiary">
                  <span
                    className="material-symbols-outlined text-sm font-semibold"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="font-label-sm text-[11px] uppercase tracking-wider font-semibold">
                    Silk Mark Certified Pure Zari
                  </span>
                </div>
                <div className="bg-primary text-on-primary font-label-sm text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm w-fit font-semibold">
                  Kadhwa Handloom
                </div>
              </div>

              {/* Zoom Lens Badge */}
              <div className="absolute bottom-4 right-4 bg-surface/85 backdrop-blur-md px-3 py-2 rounded-xl shadow-sm flex items-center gap-2 text-on-surface cursor-pointer hover:bg-surface transition-all">
                <span className="material-symbols-outlined text-primary text-lg">zoom_in</span>
                <span className="font-label-sm text-[11px] tracking-wide uppercase font-semibold">
                  Roll to Zoom Weave (4X)
                </span>
              </div>

              {/* Provenance Micro Watermark */}
              <div className="absolute bottom-4 left-4 hidden sm:flex items-center gap-2 text-on-surface-variant/70 font-label-sm text-[10px] tracking-widest uppercase">
                <span>Loom ID: VNS-KDW-84</span>
                <span>•</span>
                <span>Warp: 100% Katan Mulberry</span>
              </div>
            </div>
          </div>

          {/* RIGHT BUYING DETAILS PANEL */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-xs uppercase tracking-widest font-semibold text-secondary flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">temple_hindu</span>
                  Varanasi Mastercluster • 38 Days of Handloom
                </span>
                <span className="font-label-sm text-xs text-on-surface-variant font-mono uppercase bg-surface-container px-2 py-0.5 rounded">
                  SKU: VIR-SLK-8421
                </span>
              </div>
              <h1 className="font-headline-lg text-2xl sm:text-headline-lg text-on-surface leading-tight font-serif tracking-tight font-semibold">
                Maharani Shikargah Pure Katan Silk Banarasi Saree
              </h1>

              {/* Reviews */}
              <div className="flex items-center gap-3 pt-1 text-xs">
                <div className="flex items-center text-[#D9A441]">
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
                <span className="font-label-md font-bold text-on-surface">4.9</span>
                <span className="text-outline-variant">•</span>
                <a className="text-primary hover:underline font-semibold" href="#specs-section">
                  56 Patron Reviews
                </a>
                <span className="text-outline-variant">•</span>
                <span className="font-label-sm text-tertiary flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded-full font-medium">
                  <span className="material-symbols-outlined text-xs">local_fire_department</span>
                  High Demand Heirloom
                </span>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="p-5 rounded-2xl bg-surface-container-low shadow-sm flex flex-col gap-2 border border-surface-container-high">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="font-price-lg text-3xl text-primary font-bold">₹42,500</span>
                <span className="font-body-lg text-base text-on-surface-variant/60 line-through">
                  ₹49,000
                </span>
                <span className="font-label-sm text-xs uppercase font-bold text-tertiary bg-tertiary-fixed px-2.5 py-1 rounded-full">
                  13% Festive Privilege
                </span>
              </div>
              <p className="font-body-sm text-xs text-on-surface-variant flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-tertiary">check_circle</span>
                Inclusive of all GST • Insured transit packaging • Authenticity Certificate Included
              </p>
            </div>

            {/* Unit Configuration Toggle */}
            <div className="space-y-2">
              <label className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                Purchase Format
              </label>
              <div className="grid grid-cols-2 p-1 bg-surface-container rounded-xl gap-1">
                <button
                  type="button"
                  onClick={() => setPurchaseFormat('saree')}
                  className={`py-2.5 px-3 rounded-lg font-label-md text-xs font-bold uppercase transition-all text-center cursor-pointer ${
                    purchaseFormat === 'saree'
                      ? 'bg-surface-container-lowest text-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Full Saree
                  <span className="block text-[10px] font-normal lowercase tracking-normal text-on-surface-variant">
                    5.5m + 1m Blouse
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setPurchaseFormat('fabric')}
                  className={`py-2.5 px-3 rounded-lg font-label-md text-xs font-bold uppercase transition-all text-center cursor-pointer ${
                    purchaseFormat === 'fabric'
                      ? 'bg-surface-container-lowest text-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Fabric by Meter
                  <span className="block text-[10px] font-normal lowercase tracking-normal text-on-surface-variant">
                    ₹6,800 / meter
                  </span>
                </button>
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-label-md uppercase tracking-wider text-on-surface-variant font-semibold">
                  Archival Shade: <span className="text-on-surface font-bold">{selectedColor}</span>
                </span>
                <span className="font-label-sm text-tertiary font-semibold">
                  Vegetal &amp; Safe Alizarin Dye
                </span>
              </div>
              <div className="flex items-center gap-4">
                {colorOptions.map((c) => (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setSelectedColor(c.name)}
                    className={`group relative p-1 rounded-full transition-all cursor-pointer ${
                      selectedColor === c.name
                        ? 'ring-2 ring-primary bg-surface-container-highest scale-110'
                        : 'bg-surface-container hover:ring-2 hover:ring-outline-variant'
                    }`}
                  >
                    <span
                      className="block w-8 h-8 rounded-full shadow-inner"
                      style={{ backgroundColor: c.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Blouse Tailoring Add-on */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-label-md uppercase tracking-wider text-on-surface-variant font-semibold">
                  Trousseau Atelier Tailoring
                </span>
                <span className="font-label-sm text-primary underline cursor-pointer">
                  Measurement Guide
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="relative flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low cursor-pointer transition-all hover:bg-surface-container border border-surface-container-high">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="blouse-addon"
                      value="unstitched"
                      checked={blouseTailoring === 'unstitched'}
                      onChange={() => setBlouseTailoring('unstitched')}
                      className="accent-primary w-4 h-4 cursor-pointer"
                    />
                    <div className="flex flex-col">
                      <span className="font-label-md text-xs font-semibold text-on-surface">
                        Unstitched Piece
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        1m pure silk included
                      </span>
                    </div>
                  </div>
                  <span className="font-label-md text-xs font-bold text-on-surface">FREE</span>
                </label>

                <label className="relative flex items-center justify-between p-3.5 rounded-xl bg-surface-container-low cursor-pointer transition-all hover:bg-surface-container border border-surface-container-high">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="blouse-addon"
                      value="custom"
                      checked={blouseTailoring === 'custom'}
                      onChange={() => setBlouseTailoring('custom')}
                      className="accent-primary w-4 h-4 cursor-pointer"
                    />
                    <div className="flex flex-col">
                      <span className="font-label-md text-xs font-semibold text-on-surface">
                        Bespoke Stitched
                      </span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant">
                        Hand-cut &amp; lined
                      </span>
                    </div>
                  </div>
                  <span className="font-label-md text-xs font-bold text-primary">+₹2,400</span>
                </label>
              </div>
            </div>

            {/* Delivery Pincode Checker */}
            <div className="p-4 rounded-xl bg-surface-container space-y-2">
              <label className="font-label-md text-xs uppercase tracking-wider text-on-surface-variant font-semibold flex items-center gap-1.5">
                <span className="material-symbols-outlined text-base">pin_drop</span>
                Estimate Dispatch &amp; Transit
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter 6-digit postal code"
                  className="flex-1 bg-surface font-body-sm text-xs px-3.5 py-2.5 rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-primary border border-outline-variant"
                />
                <button
                  type="button"
                  onClick={() => setPincodeChecked(true)}
                  className="bg-primary text-on-primary font-label-md text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-lg hover:bg-primary-container transition-colors cursor-pointer"
                >
                  Check
                </button>
              </div>
              {pincodeChecked && (
                <div className="flex items-center gap-2 text-tertiary pt-1 font-body-sm text-xs">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  <span>
                    Estimated doorstep delivery by <strong>24 Oct</strong> • Insured Domestic &amp; Global Express
                  </span>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 bg-primary text-on-primary hover:bg-primary-container font-label-md text-xs uppercase tracking-wider font-bold py-4 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span className="material-symbols-outlined text-secondary-fixed text-xl group-hover:scale-110 transition-transform">
                    shopping_bag
                  </span>
                  <span>Add to Trousseau</span>
                </button>
                <Link
                  to="/cart"
                  className="flex-1 bg-secondary text-on-secondary hover:bg-secondary/90 font-label-md text-xs uppercase tracking-wider font-bold py-4 px-6 rounded-xl shadow-sm transition-all text-center flex items-center justify-center"
                >
                  Direct Purchase (1-Click)
                </Link>
              </div>

              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer border border-surface-container-high"
                >
                  <span
                    className={`material-symbols-outlined text-lg ${
                      isWishlisted ? 'text-primary' : ''
                    }`}
                    style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    favorite
                  </span>
                  <span>{isWishlisted ? 'Saved in Wishlist' : 'Save to Wishlist'}</span>
                </button>
                <a
                  href="https://wa.me/919876543210?text=Hello%20Viraasat,%20I%20would%20like%20stylist%20assistance%20for%20Maharani%20Shikargah%20Katan%20Saree%20(SKU:%20VIR-SLK-8421)"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 border border-surface-container-high"
                >
                  <span className="material-symbols-outlined text-emerald-700 text-lg">chat</span>
                  <span>Share with Stylist</span>
                </a>
              </div>
            </div>

            {/* Reassurance Micro-Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-center">
              <div className="p-2.5 rounded-lg bg-surface-container-low border border-surface-container-high">
                <span className="material-symbols-outlined text-primary text-lg">workspace_premium</span>
                <p className="font-label-sm text-[10px] text-on-surface font-bold uppercase mt-1">
                  100% Tested Pure Zari
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-low border border-surface-container-high">
                <span className="material-symbols-outlined text-primary text-lg">history_edu</span>
                <p className="font-label-sm text-[10px] text-on-surface font-bold uppercase mt-1">
                  Weaver Registry Card
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-surface-container-low border border-surface-container-high">
                <span className="material-symbols-outlined text-primary text-lg">swap_horiz</span>
                <p className="font-label-sm text-[10px] text-on-surface font-bold uppercase mt-1">
                  7-Day Archival Exchange
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABBED SPECIFICATIONS & HERITAGE MODULE */}
      <section className="w-full bg-surface-container-low py-space-xxl" id="specs-section">
        <div className="max-w-[1440px] mx-auto px-margin">
          {/* Tab Navigation Bar */}
          <div className="flex border-b border-surface-container-highest overflow-x-auto gap-4 md:gap-8 pb-px">
            {[
              'The Weave & Story',
              'Curatorial Fabric Care',
              'Authenticity & Provenance',
              'Patron Reviews & Gallery (56)',
            ].map((tabTitle, idx) => (
              <button
                key={tabTitle}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`font-headline-sm text-lg md:text-headline-sm pb-3 font-serif transition-all shrink-0 cursor-pointer ${
                  activeTab === idx
                    ? 'text-primary border-b-2 border-primary font-semibold'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {tabTitle}
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          <div className="pt-8">
            {activeTab === 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-bold">
                    Technique Profile • Kadhwa Jangla
                  </span>
                  <h3 className="font-headline-md text-2xl font-serif text-on-surface">
                    The Imperial Shikargah Chronicle
                  </h3>
                  <p className="font-body-lg text-sm text-on-surface-variant leading-relaxed">
                    Originating in the 17th-century Mughal royal ateliers of Banaras, the <em>Shikargah</em> motif depicts an intricate hunting scene populated by royal deer, galloping steeds, peacocks, and predatory tigers interwoven with Persian arabesque creepers.
                  </p>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                    Unlike modern jacquard production, this heirloom saree is woven using the laborious <strong>Kadhwa technique</strong>. Each motif is individually hand-threaded into the warp without any loose floats on the reverse side. It takes two seasoned master weavers working in unison on a pit loom over 38 days to achieve the architectural density of this textile.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-surface-container">
                      <span className="font-label-sm text-[10px] uppercase text-on-surface-variant font-semibold">
                        Weave Origin
                      </span>
                      <p className="font-title-md text-sm text-on-surface mt-1 font-serif">Kadaura, Varanasi</p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container">
                      <span className="font-label-sm text-[10px] uppercase text-on-surface-variant font-semibold">
                        Warp &amp; Weft Yarn
                      </span>
                      <p className="font-title-md text-sm text-on-surface mt-1 font-serif">100% 20/22D Katan Silk</p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container">
                      <span className="font-label-sm text-[10px] uppercase text-on-surface-variant font-semibold">
                        Zari Purity
                      </span>
                      <p className="font-title-md text-sm text-on-surface mt-1 font-serif">Tested Real Gold Brocade</p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container">
                      <span className="font-label-sm text-[10px] uppercase text-on-surface-variant font-semibold">
                        Total Weight
                      </span>
                      <p className="font-title-md text-sm text-on-surface mt-1 font-serif">890 Grams Heirloom Drape</p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container">
                      <span className="font-label-sm text-[10px] uppercase text-on-surface-variant font-semibold">
                        Length &amp; Width
                      </span>
                      <p className="font-title-md text-sm text-on-surface mt-1 font-serif">6.5m (With Blouse) x 45&quot;</p>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container">
                      <span className="font-label-sm text-[10px] uppercase text-on-surface-variant font-semibold">
                        GI Certification
                      </span>
                      <p className="font-title-md text-sm text-on-surface mt-1 font-serif">GI-Banaras Registered #184</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-surface-container rounded-2xl p-6 shadow-sm flex flex-col gap-4 border border-surface-container-high">
                  <div className="relative h-64 rounded-xl overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6AQNSjrXPa84zar5dJalGQhKpFiAqPQDeBCc2HSLZkh1tQG9mwuZd3mGQtk46_LaExGTyXgYT6WoJSXWyc5JmjLqP9AHHggtUDkfV_PP6nCjGlIEoYExE8iqkACzcoy50R2jzWQVWkKVP6Elp4J1eWo5S4IUN8p6DbSQinVKR_nCC8YpDUnRxRuN_nOrNUcw-lBWlX6KxVhgR_QYXWGiQssZ-Gma_m77vWa9UO5NE"
                      alt="Ustad Rahim Ansari"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-sm px-3 py-1.5 rounded-full font-label-sm text-xs uppercase tracking-wider font-semibold text-primary">
                      Master Craftsman: Ustad Rahim Ansari
                    </div>
                  </div>
                  <blockquote className="font-display text-base italic text-on-surface leading-snug">
                    &quot;In Kadhwa, every single golden thread is locked by human fingers. If you run your palm beneath this saree, you will not feel a single hanging snag. That is the proof of our ancestors&apos; patience.&quot;
                  </blockquote>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-xs">
                    <span>Generational Lineage: 4th Generation</span>
                    <span className="text-tertiary font-bold">100% Direct Guild Dividend</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="max-w-4xl space-y-6">
                <h3 className="font-headline-md text-xl font-serif text-on-surface font-semibold">
                  Preserving Pure Katan Silk &amp; Antique Zari
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Handwoven mulberry silk and high-density zari contain living metallic lamellae and natural protein fibers. With disciplined care, this drape will pass untarnished to subsequent generations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-surface-container flex flex-col gap-3">
                    <span className="material-symbols-outlined text-primary text-3xl">dry_cleaning</span>
                    <h4 className="font-title-lg text-base text-on-surface font-serif font-bold">
                      Strictly Dry Clean Only
                    </h4>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Never soak or hand-wash in chemical solvents. Professional dry cleaning by silk conservators is required to protect the tested gold luster.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-surface-container flex flex-col gap-3">
                    <span className="material-symbols-outlined text-secondary text-3xl">inventory_2</span>
                    <h4 className="font-title-lg text-base text-on-surface font-serif font-bold">
                      Store in Mulmul Muslin
                    </h4>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Wrap the saree exclusively in breathable, unbleached cotton muslin cloth. Avoid synthetic or plastic storage sleeves that cause chemical sweating.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-surface-container flex flex-col gap-3">
                    <span className="material-symbols-outlined text-tertiary text-3xl">air</span>
                    <h4 className="font-title-lg text-base text-on-surface font-serif font-bold">
                      Air Periodically
                    </h4>
                    <p className="font-body-sm text-xs text-on-surface-variant">
                      Unfold and air the textile in gentle shade once every six months. Refold along alternate creases to prevent fold stress on real zari threads.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="max-w-3xl space-y-4">
                <h3 className="font-headline-md text-xl font-serif text-on-surface font-semibold">
                  National Handloom Registry &amp; Silk Mark Provenance
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Every Viraasat heirloom drape arrives accompanied by a numbered certificate issued under the GI Protection Act 1999 and the Silk Mark Organization of India.
                </p>
                <div className="p-4 rounded-xl bg-surface-container flex items-center gap-4">
                  <span className="material-symbols-outlined text-3xl text-primary">verified_user</span>
                  <div>
                    <h5 className="font-bold text-sm text-on-surface">Tamper-evident QR Provenance Chip</h5>
                    <p className="text-xs text-on-surface-variant">Scan to view pit-loom logs, weaver certification, and purity hallmarks.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="space-y-4">
                <h3 className="font-headline-md text-xl font-serif text-on-surface font-semibold">
                  Patron Reviews (56)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-on-surface">Suniti Singhania, Kolkata</span>
                      <span className="text-secondary font-bold">5.0 ★</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      &quot;The Kadhwa work on this Shikargah is breathtaking. The feel of the pure Katan silk is unlike anything available in retail boutiques. Pure poetry.&quot;
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-on-surface">Meenakshi Sundaram, Chennai</span>
                      <span className="text-secondary font-bold">5.0 ★</span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      &quot;Purchased for my daughter&apos;s wedding reception. Delivered in the cedar heirloom trunk with the master weaver signature card. Outstanding craftsmanship.&quot;
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

