import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Sarees', path: '/sarees' },
  { name: 'Fabrics by Meter', path: '/fabrics-by-meter' },
  { name: 'Kurtas', path: '/kurtas' },
  { name: 'Bridal Heritage', path: '/bridal-heritage' },
  { name: 'Handloom Editions', path: '/handloom-editions' },
  { name: 'Fabric Care', path: '/fabric-care' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/sarees?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-visible">
      {/* Top Guild Bar */}
      <div className="bg-primary text-on-primary py-2 px-6 sm:px-12 flex items-center justify-between text-xs shadow-sm gap-4">
        <div className="hidden md:flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed shrink-0">
          <span className="material-symbols-outlined text-sm">verified</span>
          <span>Master Weaver Guild Certified</span>
        </div>

        <div className="flex-1 text-center font-label-md text-label-md tracking-wider uppercase font-medium text-[11px] sm:text-xs truncate">
          Festive Heirloom Edition · Complimentary Domestic Express Shipping on Orders Above ₹5,000
        </div>

        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <Link
            to="/admin-inventory"
            className="font-label-sm text-label-sm text-secondary-fixed hover:text-on-primary transition-colors flex items-center gap-1 uppercase tracking-wider"
          >
            <span className="material-symbols-outlined text-xs">tune</span>
            Curator Desk
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#fcf9f8]/95 backdrop-blur-md border-b border-surface-container-high shadow-sm px-4 sm:px-10 py-3.5">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 lg:gap-6">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif font-bold text-lg border border-primary/20">
                V
              </div>
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-2">
                  <span className="font-headline-sm text-lg sm:text-xl tracking-tight text-primary font-bold uppercase">
                    Viraasat
                  </span>
                  <span className="text-[9px] font-semibold text-secondary px-1.5 py-0.5 bg-secondary-fixed/50 rounded">
                    EST. 1984
                  </span>
                </div>
                <span className="font-label-sm tracking-widest text-on-surface-variant uppercase text-[9px]">
                  Textile Archives
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-label-sm text-xs uppercase tracking-wider transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-primary font-bold border-b-2 border-primary pb-0.5'
                      : 'text-on-surface hover:text-primary font-medium'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Search Input */}
            <div className="relative hidden md:flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-base pointer-events-none">
                search
              </span>
              <input
                className="bg-surface-container text-on-surface font-body-sm text-xs pl-9 pr-9 py-1.5 rounded-full w-44 xl:w-56 focus:outline-none focus:ring-1 focus:ring-primary transition-all placeholder:text-on-surface-variant/70"
                placeholder="Search weave, yarn, motif..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
              <kbd className="absolute right-2.5 font-label-sm text-on-surface-variant bg-surface-container-highest px-1.5 py-0.5 rounded text-[10px]">
                ⌘K
              </kbd>
            </div>

            {/* Currency */}
            <div className="hidden sm:flex items-center gap-1 font-label-sm text-xs font-semibold text-on-surface-variant px-2 py-1 rounded hover:bg-surface-container transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm">currency_rupee</span>
              <span>INR (₹)</span>
            </div>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-2 text-on-surface hover:text-primary transition-colors rounded-full hover:bg-surface-container flex items-center justify-center"
              aria-label="Wishlist"
            >
              <span className="material-symbols-outlined text-xl">favorite</span>
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                3
              </span>
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2 text-on-surface hover:text-primary transition-colors rounded-full hover:bg-surface-container flex items-center justify-center"
              aria-label="Cart"
            >
              <span className="material-symbols-outlined text-xl">shopping_bag</span>
              <span className="absolute -top-0.5 -right-0.5 bg-secondary text-on-secondary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                2
              </span>
            </Link>

            {/* Customer Profile */}
            <Link to="/customer-profile" className="p-1" aria-label="Customer Profile">
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover shadow-sm border border-outline-variant hover:ring-2 hover:ring-primary transition-all"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWfojA4wKfrfSQE3NMJq-qJSEX39_tOQrZpXomKAkCDxqlDiLIs76Zs6XU1A24d6PMsGceoVwgfE5sc08-jTuKdqQ2DXNhGENMkkBKHyMilWyb9FbnufJ5XcVvwqo1oc_d7r6A6g5kXRwF3n6sgAJ1vz7QjbF6-I-8ZqZDXxelWMCorZtEoHRElAG2xNCHulPW-_IHVd0dcAsW-2-iutMZdtZzW6u5IdohYqdJWxmj"
              />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-on-surface hover:text-primary transition-colors rounded-lg hover:bg-surface-container"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-surface-container-high flex flex-col gap-2">
            <div className="px-2 pb-2">
              <input
                className="w-full bg-surface-container text-on-surface font-body-sm text-xs px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Search weave, yarn, motif..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    setMobileMenuOpen(false);
                    navigate(`/sarees?q=${encodeURIComponent(searchQuery.trim())}`);
                  }
                }}
              />
            </div>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg font-label-sm text-xs uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-primary text-on-primary font-bold'
                      : 'text-on-surface hover:bg-surface-container'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/admin-inventory"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg font-label-sm text-xs uppercase tracking-wider text-secondary flex items-center gap-1.5 hover:bg-surface-container"
            >
              <span className="material-symbols-outlined text-xs">tune</span>
              Curator Desk
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

