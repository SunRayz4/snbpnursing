'use client'

import React from 'react'

const ASSET_BASE = process.env.NEXT_PUBLIC_STATIC_ASSETS

const committee = [
  { sr: 1, name: 'Mr. Ramesh Bandagar', designation: 'Principal', role: 'Chairperson' },
  { sr: 2, name: 'Ms. Sarala Navgire', designation: 'Vice-Principal', role: 'Convener' },
  { sr: 3, name: 'Ms. Prachi Shete', designation: 'Assistant Professor', role: 'Member' },
  { sr: 4, name: 'Ms. Aditi Advankar', designation: 'Assistant Professor', role: 'Member' },
  { sr: 5, name: 'Ms. Hiteshi Thakur', designation: 'Nursing Tutor', role: 'Member' },
  { sr: 6, name: 'Ms. Krushna Sone', designation: 'Nursing Tutor', role: 'Member' },
  { sr: 7, name: 'Ms. Snehal Swami', designation: 'Nursing Tutor', role: 'Member' },
  { sr: 8, name: 'Ms. Deepali Borkar', designation: 'Nursing Tutor', role: 'Member' },
]

const designationBadge: Record<string, string> = {
  'Principal': '#b5475a',
  'Vice-Principal': '#c9975a',
  'Assistant Professor': '#7a3f6e',
  'Nursing Tutor': '#3a6ea5',
}

const roleColor: Record<string, string> = {
  'Chairperson': '#b5475a',
  'Convener': '#c9975a',
  'Member': '#3a6ea5',
}

const stats = [
  { icon: 'bi-people-fill', value: '8', label: 'Total Members' },
  { icon: 'bi-award-fill', value: '2', label: 'Leads' },
  { icon: 'bi-person-badge-fill', value: '6', label: 'Members' },
  { icon: 'bi-mortarboard-fill', value: '4', label: 'Faculty' },
]

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>{`
        :root {
          --rose:#b5475a;
          --rose-pale:#fdf0f2;
          --rose-light:#e8a0ad;
          --gold:#c9975a;
          --cream:#faf6f1;
          --text-dark:#2a1a1f;
          --text-mid:#5c3d46;
        }
        body { font-family:'DM Sans',sans-serif; background:var(--cream); }

        .page-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.9rem,3.8vw,2.9rem); color:var(--text-dark); }
        .page-title em { color:var(--rose); }

        .divider { width:56px; height:3px;
          background:linear-gradient(90deg,var(--rose),var(--gold)); }

        .stat-card { background:#fff; border-radius:14px;
          box-shadow:0 6px 24px rgba(90,20,35,.09);
          padding:1.4rem; text-align:center;
          border-top:3px solid var(--rose); }

        .stat-value { font-family:'Playfair Display',serif;
          font-size:2rem; color:var(--rose); }

        .faculty-table-wrap { border-radius:16px; overflow:hidden;
          box-shadow:0 16px 56px rgba(90,20,35,.12); }

        .faculty-table tbody tr:nth-child(even) { background:#fffafa; }

        .faculty-table tbody td { padding:.9rem;
          border-bottom:1px solid #f3e0e3; }

        .role-pill, .badge-pill {
          padding:.3rem .7rem;
          border-radius:20px;
          color:#fff;
          font-size:.75rem;
        }
      `}</style>

      <main className="min-vh-100 py-5">
        <div className="container" style={{ maxWidth:1100 }}>

          {/* Title */}
          <div className="mb-4">
            <h1 className="page-title">
              <em>Curriculum</em><br />Committee
            </h1>
            <div className="divider mt-2" />
          </div>

          {/* Stats */}
          <div className="row g-3 mb-5">
            {stats.map((s, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="stat-card">
                  <div className="stat-value">{s.value}</div>
                  <div>{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="faculty-table-wrap">
            <table className="table faculty-table">
              <thead>
                <tr style={{ background:'#b5475a', color:'#fff' }}>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Role</th>
                </tr>
              </thead>

              <tbody>
                {committee.map((c) => (
                  <tr key={c.sr}>
                    <td>{c.sr}</td>
                    <td>{c.name}</td>
                    <td>
                      <span
                        className="badge-pill"
                        style={{ background: designationBadge[c.designation] }}
                      >
                        {c.designation}
                      </span>
                    </td>
                    <td>
                      <span
                        className="badge-pill"
                        style={{ background: roleColor[c.role] }}
                      >
                        {c.role}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}