const galleryItems = [
  {
    handle: '@radhika_roy',
    caption: 'Udaipur Wedding · Banarasi Katan',
    icon: 'favorite',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_JqqA8kpyxgezSNYfflctZvLyk4RTZc5p7hLFbvjg-Er-dElEuHnLBtgmih5e_9i7f31b4UfjxqOS4GbWUwXcxYAaEoxOq93P3imGPhHkHu6tBebrDrHYhPIhy0xp-2ip1QfVPD2FLpdC9bvEflxZfg06Be5Qn8hXn3X3zX_0Sa-6doKzcOKNGjyUzt1BLdD8L1I_g_LihNBjRITxg8YLf-l1vPJvtapFu2ygt-1p',
  },
  {
    handle: '@meera.kapoor',
    caption: 'Delhi Reception · Organza Sheer',
    icon: 'favorite',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCP1FdxPgfIfIEdZad4roXRpMMaDk7VE01-nUuj6nU6MJwNMka_b_qOacTQEZAa2Ey085tmGehspLbflBJnMW-YWIGNci3bj8QAvqjEjecRUmn-yPPScJo2TXC6CBHRjOuw_TGDfXi015OuBur1S4wYyK_o7pheffMYfFTUp3DXBkj5sSKIiPVZOI-oE-bmt_xN0WffGxOFpnZM3a73HG3z4eh1Rws0Bpk6ebg5yJip',
  },
  {
    handle: '@viraasatweaves',
    caption: 'From The Pit Looms · Day 42',
    icon: 'shutter_speed',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuASSSEq1Zn40r8vWR3hNjuTabnW51_E8-xbNm5A0cPkXSbM2lwncwbcGQakRu8AccHOoZpHJ97T3R--0tQk5b7WTBRVS7mc0YtNt_KtX4UbTae92EeyF3d2J6ih_Xawg6yMJetSWuSwYVHoyWRyyF6BxQfEPntIUssO6SLS8CQADTdLuEoCad7ZVqmvp_lkJ_SZ3t5fKMM9hAAJQ4O_r2Py-2lCsSW6KLmTFRCD5hOt',
  },
  {
    handle: '@ananya_sh',
    caption: 'Generational Drape · Kanchi 1996',
    icon: 'favorite',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCh-vfId9kt3SvhuEaEqB3whf2U30qYWfbY0DOvZNz4eUhgVSXFC84kbTV3Al2VtkJn8DIfOrzQG19oZX3IHHCnZ_ueemtRWSCzP6uBsRu9ezYpZme6a9nsqPdT__xh7RBg_bLcBxuSm7iveAx5w8KiiMkpBXzq8UnzUmz2j3LiEzhF4--9LEEp8I8fm_Ki76_dnD3FHd7uZOFikEhekLOxqfOw1-qpDMT3nmBGgFRA',
  },
  {
    handle: '@trousseau_chronicles',
    caption: 'Festive Soirée · Angrakha Silk',
    icon: 'favorite',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0VGG4CXtPyPBfiasWwTPc_DDEIFV41hlatLLQ-QxaQ5TPPVJ9SmNGCombCLwnZs5yWnjPJJZQjDsmIP9nRH4fDWmWubPnGAFUExazDv9fmOU5bV61vOT0_StPg8r3A7okuFFCD8La9fktRJZHKil9NuUVzihO1MfSyjtWN3vfIeld5lvJDgwF6licO-HM4coaZrcfRMBhai7aV08vOYkMYam0P76nMVdcw_ceT9zt',
  },
];

export default function PatronGallery() {
  return (
    <section className="max-w-[1440px] w-full mx-auto px-margin py-space-xxl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg">
        <div className="space-y-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-bold">
            Social Chronicle
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            The Patron Gallery
          </h2>
        </div>
        <a
          className="inline-flex items-center gap-1.5 font-label-md text-label-md uppercase tracking-wider font-semibold text-primary hover:text-primary-container transition-colors mt-2 md:mt-0"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-lg">camera</span>
          <span>Follow @ViraasatWeaves</span>
        </a>
      </div>

      {/* 5 Square Photography Tiles Mosaic */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
        {galleryItems.map((item) => (
          <div
            key={item.handle}
            className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              src={item.image}
              alt={item.caption}
            />
            <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-on-primary p-4 text-center">
              <span className="material-symbols-outlined text-2xl mb-1">
                {item.icon}
              </span>
              <span className="font-label-sm text-label-sm font-semibold">
                {item.handle}
              </span>
              <span className="font-body-sm text-[11px] text-surface-dim mt-1">
                {item.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

