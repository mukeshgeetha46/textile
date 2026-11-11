import { Link } from 'react-router-dom';

export default function BentoCategories() {
  return (
    <section className="max-w-[1440px] w-full mx-auto px-margin py-space-xxl">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl">
        <div className="space-y-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Curated Archives
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Curatorial Departments
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2 md:mt-0">
          From uncut loom yardage to generational trousseau ensembles, explore handcraft categorized by craft lineage.
        </p>
      </div>

      {/* 6-Card Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
        {/* Card 1: Large Span 7 */}
        <Link
          to="/sarees"
          className="group lg:col-span-7 relative h-[440px] rounded-2xl overflow-hidden bg-surface-container flex flex-col justify-end p-space-xl shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5mXWiKuCEZB0h5iRe9zPYiKWkG8rGSZK0I24NbbpDaBm13K0WHQcfR_P0eT4Zk7htrXRWhXAqKDZaOQZQSoNW9djyqvNd2ifkBlProrRHCEfqbFcHZRybjsmAtKNmXE0yIjkFniQ-BpFMLCUGvZUMKjY5mnxwfU0fv9PFLx7h27ROcNSRRTEiKvI_0eud75J8DivQxMxIk9XMLLqCHS79QVkn5_xOA-Bv_EaSbzln')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
          <div className="relative z-10 text-on-primary space-y-space-xs">
            <span className="inline-block bg-tertiary text-on-tertiary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
              Provenance: Varanasi
            </span>
            <h3 className="font-headline-md text-headline-md font-semibold">
              Varanasi Katan Sarees
            </h3>
            <p className="font-body-sm text-body-sm text-surface-dim max-w-lg">
              Handwoven pure katan silk embedded with antique gold zari shikargah &amp; floral kadhwa bootas.
            </p>
            <div className="pt-2 inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-secondary-fixed group-hover:translate-x-1 transition-transform">
              <span>Explore The Archive</span>
              <span className="material-symbols-outlined text-sm">east</span>
            </div>
          </div>
        </Link>

        {/* Card 2: Span 5 */}
        <Link
          to="/fabrics-by-meter"
          className="group lg:col-span-5 relative h-[440px] rounded-2xl overflow-hidden bg-surface-container flex flex-col justify-end p-space-xl shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCuMiCdbZnCFI7EYTNPBCV4KDmfaXIF9wla5uvEtpu6e3mVOufSVlNVvP1sSHVU-TQe1VW3y5rQqWBdmy3_HcwyK5F4XKORL5yD2RW8bvKcwbGu0sTGbGMfdJHuOLbhme9ELvOVZKR1EH9r92Gc9yIAXCpAtoplOHYWkcZp6ksR73P51hT-resirKaM3eM1yU3Xg-axOUl7rsSf80u0MieiQjikq0drEK5Iglm4COvv')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent" />
          <div className="relative z-10 text-surface space-y-space-xs">
            <div className="flex items-center justify-between">
              <span className="bg-secondary text-on-secondary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
                Unstitched Yardage
              </span>
              <span className="font-price-md text-price-md text-secondary-fixed">
                from ₹850/meter
              </span>
            </div>
            <h3 className="font-headline-md text-headline-md font-semibold">
              Fabrics by the Meter
            </h3>
            <p className="font-body-sm text-body-sm text-surface-dim">
              Mulberry silk, Chanderi tissue, and hand-spun organic linen textiles.
            </p>
            <div className="pt-2 inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-wider text-secondary-fixed group-hover:translate-x-1 transition-transform">
              <span>Browse Yardage</span>
              <span className="material-symbols-outlined text-sm">east</span>
            </div>
          </div>
        </Link>

        {/* Card 3: Span 4 */}
        <Link
          to="/kurtas"
          className="group lg:col-span-4 relative h-[380px] rounded-2xl overflow-hidden bg-surface-container flex flex-col justify-end p-space-lg shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBwBOlcgGR6D5fCe38bEmQeL3huJB9mfzQsba1E3CBUX8c-SSZypyo9hxJbIOE51JsBK_3rY-jAjnn2Uz8CaM0NbIH2G5T_wZtgB1VOp3BhJEczPdP2TZr1N_rmv7H0k-WfW-WOzmaJ2PVrr5OLIBtQFNaWpBqWpT83n_mlcSoXBYLkG2NLg0eiuuwGJlJFVQeZvd149NvfN_tfC04jaWk4Ue8Jnq0rmKI_dAug1Uo')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container/95 via-primary-container/30 to-transparent" />
          <div className="relative z-10 text-on-primary space-y-1">
            <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider">
              Tailored Silhouettes
            </span>
            <h3 className="font-title-lg text-title-lg font-semibold">
              Kurtas &amp; Angrakhas
            </h3>
            <p className="font-body-sm text-body-sm text-surface-dim line-clamp-2">
              Pure handloom kurtas adorned with subtle zardozi and marodi needlecraft.
            </p>
            <div className="pt-2 inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed group-hover:translate-x-1 transition-transform">
              <span>Shop Ensembles</span>
              <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </div>
          </div>
        </Link>

        {/* Card 4: Span 4 */}
        <Link
          to="/bridal-heritage"
          className="group lg:col-span-4 relative h-[380px] rounded-2xl overflow-hidden bg-surface-container flex flex-col justify-end p-space-lg shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNCjJqHS8PL7uNt6zf4DyQDK1lZsvBIsJ_8w1ZhZCUkO1h9G8YwHQTTk6HWCPBauR7s-YCneCPpbGy8hLJ7DhnljIA917oEa8eLim5G1eG6rEN7b37phoR_ImkKzYAB49_LymXRIEMVp1q13VdNvp7Rr_0OjhMPp6xQBXXluvuThmi-jBTX4B0Sq7OaOO1E_0dL-XvUnIaQxf0gi-UNrIAeziPPqVOwmL045Kyd-rN')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent" />
          <div className="relative z-10 text-on-primary space-y-1">
            <span className="bg-primary-container text-on-primary px-2.5 py-0.5 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
              Sacred Weddings
            </span>
            <h3 className="font-title-lg text-title-lg font-semibold">
              Bridal Heritage Trousseau
            </h3>
            <p className="font-body-sm text-body-sm text-surface-dim line-clamp-2">
              Regal vermilion, sindoor, and magenta bridal drapes blessed with timeless auspicious motifs.
            </p>
            <div className="pt-2 inline-flex items-center gap-1 font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed group-hover:translate-x-1 transition-transform">
              <span>View Trousseau</span>
              <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
            </div>
          </div>
        </Link>

        {/* Card 5 & 6 Stack: Span 4 */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-gutter">
          {/* Sub Card 5 */}
          <Link
            to="/sarees"
            className="group relative h-[180px] rounded-2xl overflow-hidden bg-surface-container flex flex-col justify-end p-space-md shadow-sm hover:shadow-lg transition-all duration-500"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDWG5ZP6QzUW-NLApnXKp8gGVpLRc5TVvD0jlsIUhhmLkI1sWVtKdXmd-evYQQHvZtK69LJk9w5zfMBVCjeA86ax29QBYO5Kn3xxDK6jCoSgzcTPYk4C0husc2mN_ARehLpMvTm8iAPuC0ltWfIUidYfRidSYTMZ0mmkWROjIfGX6xs5PT9eLch06XU7_ZJuZqW0YqvCm_JBIFR5m1hqc0kbkMNB2OYxGd2bwxJyoJV')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/30 to-transparent" />
            <div className="relative z-10 text-surface">
              <h4 className="font-title-md text-title-md font-semibold">
                Georgettes &amp; Organza
              </h4>
              <p className="font-body-sm text-body-sm text-surface-dim">
                Sheer weightless handcrafted draping.
              </p>
            </div>
          </Link>

          {/* Sub Card 6 */}
          <Link
            to="/handloom-editions"
            className="group relative h-[180px] rounded-2xl overflow-hidden bg-surface-container flex flex-col justify-end p-space-md shadow-sm hover:shadow-lg transition-all duration-500"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCGYoa1jOvChMA3NHVLHeOJmoNnrfCT-hUdu_ZU0AoyAPA1-lxwyfOH2K6irBpZ0C_vOiB-Iqc_1-D-jWR2s-ocEVFI-v2QIJzhXF5yjewVSGWS6poet8iyCwvqGYHTTGCoQNvOYzDb22SFSkjR66JUYoMqxE3JlMEgKhf08qj6cBOBaSviq9LfO-O4wRmUuh22QekYQnWdT2Da0X_ltq8SczUBFKkuWtJVJ7rojxRa')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tertiary-container/95 via-tertiary-container/30 to-transparent" />
            <div className="relative z-10 text-on-tertiary">
              <span className="font-label-sm text-label-sm text-tertiary-fixed uppercase">
                Pure &amp; Non-toxic
              </span>
              <h4 className="font-title-md text-title-md font-semibold">
                Artisanal Kids Collection
              </h4>
              <p className="font-body-sm text-body-sm text-surface-dim">
                Gentle festive wear in 100% natural dyes.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

