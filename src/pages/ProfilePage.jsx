import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-primary font-semibold">Patron Profile</span>
      </div>

      <div className="bg-surface rounded-3xl p-space-xl border border-surface-container-high shadow-sm max-w-3xl mx-auto space-y-6">
        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-surface-container-high">
          <img
            alt="Patron Avatar"
            className="w-24 h-24 rounded-full object-cover shadow-md border-2 border-primary"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWfojA4wKfrfSQE3NMJq-qJSEX39_tOQrZpXomKAkCDxqlDiLIs76Zs6XU1A24d6PMsGceoVwgfE5sc08-jTuKdqQ2DXNhGENMkkBKHyMilWyb9FbnufJ5XcVvwqo1oc_d7r6A6g5kXRwF3n6sgAJ1vz7QjbF6-I-8ZqZDXxelWMCorZtEoHRElAG2xNCHulPW-_IHVd0dcAsW-2-iutMZdtZzW6u5IdohYqdJWxmj"
          />
          <div className="text-center sm:text-left space-y-1">
            <span className="bg-secondary-fixed text-on-secondary-fixed text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Privileged Patron
            </span>
            <h1 className="font-headline-md text-2xl font-bold text-on-surface">Gayatri Devi</h1>
            <p className="text-sm text-on-surface-variant">gayatri.devi@heritagepatron.in</p>
            <p className="text-xs text-tertiary font-medium">Member Since Nov 2021 · 14 Handloom Heirlooms Collected</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 bg-surface-container rounded-xl">
            <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Primary Delivery Haven</span>
            <p className="font-medium text-on-surface mt-1">Haveli 42, Civil Lines, Jaipur, Rajasthan - 302006</p>
          </div>
          <div className="p-4 bg-surface-container rounded-xl">
            <span className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Dedicated Concierge</span>
            <p className="font-medium text-on-surface mt-1">Raghuvir Sen (Senior Textile Historian)</p>
          </div>
        </div>

        {/* Order History */}
        <div>
          <h2 className="font-title-lg text-lg font-semibold text-on-surface mb-3">Recent Archival Acquisitions</h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl border border-surface-container-high flex justify-between items-center">
              <div>
                <p className="font-semibold text-on-surface">Kadhwa Shikargah Katan Saree</p>
                <p className="text-xs text-on-surface-variant">Delivered 14 Oct 2026 · Invoice #VR-9831</p>
              </div>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                Hallmarked
              </span>
            </div>
            <div className="p-4 rounded-xl border border-surface-container-high flex justify-between items-center">
              <div>
                <p className="font-semibold text-on-surface">Champagne Meenakari Chanderi</p>
                <p className="text-xs text-on-surface-variant">Delivered 22 Aug 2026 · Invoice #VR-9420</p>
              </div>
              <span className="bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                Hallmarked
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

