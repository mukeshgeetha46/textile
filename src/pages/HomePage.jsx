import HeroSection from '../components/home/HeroSection';
import BentoCategories from '../components/home/BentoCategories';
import TrendingHandlooms from '../components/home/TrendingHandlooms';
import FestiveBanner from '../components/home/FestiveBanner';
import ShopByFabric from '../components/home/ShopByFabric';
import HeritagePromises from '../components/home/HeritagePromises';
import PatronGallery from '../components/home/PatronGallery';
import NewsletterSection from '../components/home/NewsletterSection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION (Immersive Editorial Under-Bleed) */}
      <HeroSection />

      {/* 2. BENTO-GRID ARCHIVAL CATEGORIES */}
      <BentoCategories />

      {/* 3. TRENDING HANDLOOMS (Interactive Catalog Bento) */}
      <TrendingHandlooms />

      {/* 4. FESTIVE OFFERS HEROIC BANNER */}
      <FestiveBanner />

      {/* 5. SHOP BY SACRED FABRIC */}
      <ShopByFabric />

      {/* 6. ARTISANAL HERITAGE PROMISES */}
      <HeritagePromises />

      {/* 7. INSTAGRAM EDITORIAL CURATION */}
      <PatronGallery />

      {/* 8. NEWSLETTER & PRIVATE SALON REGISTRATION */}
      <NewsletterSection />
    </div>
  );
}

