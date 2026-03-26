'use client'

import React from 'react'

const committee = [
  { sr: 1, name: 'Ms. Sarla Navgire', designation: 'Chairperson', gender: 'Female', contact: '9689900979' },
  { sr: 2, name: 'Ms. Prachi Shete', designation: 'Committee Incharge', gender: 'Female', contact: '9730174284' },
  { sr: 3, name: 'Ms. Hiteshi Thakur', designation: 'Member', gender: 'Female', contact: '9459838047' },
  { sr: 4, name: 'Ms. Aditi Advankar', designation: 'Member', gender: 'Female', contact: '9075797834' },
  { sr: 5, name: 'Mrs. Sushma G Diwate', designation: 'Police Representative', gender: 'Female', contact: '9373450267' },
  { sr: 6, name: 'Adv. Sangita Suryawanshi', designation: 'Lawyer Representative', gender: 'Female', contact: '9850847617' },
  { sr: 7, name: 'Ms. Bhagyashree Parkhedkar', designation: 'HR Representative', gender: 'Female', contact: '9545414969' },
]

const designationBadge: Record<string, string> = {
  'Chairperson': '#b5475a',
  'Committee Incharge': '#c9975a',
  'Member': '#3a6ea5',
  'Police Representative': '#7a3f6e',
  'Lawyer Representative': '#2a7d5e',
  'HR Representative': '#a55c3a',
}

const genderColor: Record<string, string> = {
  'Female': '#e75480',
  'Male': '#3a6ea5',
}

const stats = [
  { icon: 'bi-people-fill', value: '7', label: 'Total Members' },
  { icon: 'bi-person-badge-fill', value: '1', label: 'Chairperson' },
  { icon: 'bi-award-fill', value: '3', label: 'Representatives' },
  { icon: 'bi-gender-female', value: '7', label: 'Female Members' },
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

        .page-title {
          font-family:'Playfair Display',serif;
          font-size:clamp(2rem,4vw,3rem);
          color:var(--text-dark);
        }

        .page-title em { color:var(--rose); }

        .divider {
          width:60px;
          height:3px;
          background:linear-gradient(90deg,var(--rose),var(--gold));
        }

        .stat-card {
          background:#fff;
          border-radius:14px;
          padding:1.4rem;
          text-align:center;
          box-shadow:0 6px 24px rgba(0,0,0,.08);
        }

        .stat-value {
          font-size:2rem;
          font-weight:700;
          color:var(--rose);
        }

        .faculty-table-wrap {
          border-radius:16px;
          overflow:hidden;
          box-shadow:0 16px 50px rgba(0,0,0,.1);
        }

        .faculty-table tbody tr:nth-child(even) {
          background:#fffafa;
        }

        .badge-pill {
          padding:.3rem .75rem;
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
              <em>Vishakha</em><br />Committee
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
                  <th>Gender</th>
                  <th>Contact</th>
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
                        style={{ background: genderColor[c.gender] }}
                      >
                        {c.gender}
                      </span>
                    </td>

                    <td>
                      <span className="badge-pill" style={{ background:'#5c3d46' }}>
                        <i className="bi bi-telephone-fill me-1" />
                        {c.contact}
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