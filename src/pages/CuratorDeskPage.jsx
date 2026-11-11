import { useState } from 'react';
import { Link } from 'react-router-dom';

const loomBatches = [
  { id: 'BAT-2026-09', cluster: 'Varanasi', artisan: 'Master Shamim', weave: 'Kadhwa Katan', status: 'On Pit-Loom (75%)', estCompletion: '24 Nov 2026' },
  { id: 'BAT-2026-10', cluster: 'Kanchipuram', artisan: 'Master Selvam', weave: 'Korvai 3-Shuttle', status: 'Silk Dyeing', estCompletion: '02 Dec 2026' },
  { id: 'BAT-2026-11', cluster: 'Chanderi', artisan: 'Master Ansari', weave: 'Tissue Zari Boota', status: 'Hallmarking Inspection', estCompletion: '15 Nov 2026' },
  { id: 'BAT-2026-12', cluster: 'Bhagalpur', artisan: 'Master Murmu', weave: 'Raw Ghicha Kantha', status: 'Warp Setting', estCompletion: '18 Dec 2026' },
];

export default function CuratorDeskPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = loomBatches.filter(
    (b) =>
      b.cluster.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.artisan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.weave.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <div className="flex items-center gap-2 font-label-sm text-xs text-on-surface-variant mb-6">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <span className="text-primary font-semibold">Curator Desk</span>
      </div>

      <div className="border-b border-surface-container-high pb-8 mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            Administrative Registry
          </span>
          <h1 className="font-headline-lg text-headline-lg text-on-surface mt-1">
            Weaver Guild &amp; Loom Registry
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">
            Live provenance ledger monitoring active warp setups, artisan guild disbursements, and Silk Mark hallmarks.
          </p>
        </div>

        <input
          type="text"
          placeholder="Filter loom batch, artisan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-surface-container border border-outline-variant px-4 py-2 rounded-xl text-xs w-64 focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="bg-surface rounded-2xl border border-surface-container-high overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-body-sm">
            <thead className="bg-surface-container font-label-sm uppercase text-on-surface-variant border-b border-surface-container-high">
              <tr>
                <th className="p-4">Batch ID</th>
                <th className="p-4">Craft Cluster</th>
                <th className="p-4">Master Weaver</th>
                <th className="p-4">Weave Classification</th>
                <th className="p-4">Live Loom Status</th>
                <th className="p-4">Est. Completion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high text-on-surface">
              {filtered.map((batch) => (
                <tr key={batch.id} className="hover:bg-surface-container-low transition-colors">
                  <td className="p-4 font-mono font-semibold text-primary">{batch.id}</td>
                  <td className="p-4 font-semibold">{batch.cluster}</td>
                  <td className="p-4">{batch.artisan}</td>
                  <td className="p-4">{batch.weave}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-semibold">
                      {batch.status}
                    </span>
                  </td>
                  <td className="p-4 text-on-surface-variant">{batch.estCompletion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

