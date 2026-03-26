'use client'

import React from 'react'

const ASSET_BASE = process.env.NEXT_PUBLIC_STATIC_ASSETS

const faculty = [
  { sr: 1,  name: 'Prof. Mr. Ramesh A. Bandagar',  designation: 'Principal',            qualification: 'M.Sc. Nursing (Community Health Nursing)' },
  { sr: 2,  name: 'Prof. Mrs. Sarala Navgire',      designation: 'Vice Principal',       qualification: 'M.Sc. Nursing (Community Health Nursing)' },
  { sr: 3,  name: 'Ms. Prachi P. Shete',            designation: 'Assistant Professor',  qualification: 'M.Sc. Nursing (Community Health Nursing)' },
  { sr: 4,  name: 'Ms. Aditi A. Advankar',          designation: 'Assistant Professor',  qualification: 'M.Sc. Nursing (Obstetric & Gynecological Nursing)' },
  { sr: 5,  name: 'Ms. Hiteshi Thakur',             designation: 'Nursing Tutor',        qualification: 'M.Sc. Nursing (Medical Surgical Nursing)' },
  { sr: 6,  name: 'Ms. Dipali Borkar',              designation: 'Nursing Tutor',        qualification: 'M.Sc. Nursing (Obstetric & Gynecological Nursing)' },
  { sr: 7,  name: 'Ms. Snehal Swami',               designation: 'Nursing Tutor',        qualification: 'M.Sc. Nursing (Obstetric & Gynecological Nursing)' },
  { sr: 8,  name: 'Ms. Dhanashree Aujee',           designation: 'Nursing Tutor',        qualification: 'M.Sc. Nursing (Obstetric & Gynecological Nursing)' },
  { sr: 9,  name: 'Ms. Krushna Sone',               designation: 'Nursing Tutor',        qualification: 'B.Sc. Nursing' },
  { sr: 10, name: 'Ms. Sakshi Dongardive',           designation: 'Nursing Tutor',        qualification: 'B.Sc. Nursing' },
]

const designationBadge: Record<string, string> = {
  'Principal':           '#b5475a',
  'Vice Principal':      '#c9975a',
  'Assistant Professor': '#7a3f6e',
  'Nursing Tutor':       '#3a6ea5',
}

const qualColor: Record<string, string> = {
  'M.Sc. Nursing': '#2a7d5e',
  'B.Sc. Nursing': '#3a6ea5',
}

const stats = [
  { icon: 'bi-people-fill',       value: '10', label: 'Total Faculty' },
  { icon: 'bi-award-fill',        value: '8',  label: 'M.Sc. Qualified' },
  { icon: 'bi-book-fill',         value: '2',  label: 'B.Sc. Qualified' },
  { icon: 'bi-mortarboard-fill',  value: '2',  label: 'Professors' },
]

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>{`
        :root {
          --rose:       #b5475a;
          --rose-pale:  #fdf0f2;
          --rose-light: #e8a0ad;
          --gold:       #c9975a;
          --cream:      #faf6f1;
          --text-dark:  #2a1a1f;
          --text-mid:   #5c3d46;
        }
        body { font-family:'DM Sans',sans-serif; background:var(--cream); }

        /* eyebrow */
        .eyebrow-line { flex:1; height:1px;
          background:linear-gradient(90deg,transparent,var(--rose-light),transparent); }
        .eyebrow-text { font-size:.7rem; font-weight:500; letter-spacing:.22em;
          text-transform:uppercase; color:var(--rose); white-space:nowrap; }

        /* titles */
        .page-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.9rem,3.8vw,2.9rem); color:var(--text-dark); line-height:1.2; }
        .page-title em { font-style:italic; color:var(--rose); }
        .sec-heading { font-family:'Playfair Display',serif;
          font-size:1.35rem; font-weight:700; color:var(--text-dark); }
        .sec-heading span { color:var(--rose); }
        .divider { width:56px; height:3px; border-radius:3px;
          background:linear-gradient(90deg,var(--rose),var(--gold)); }

        /* stat cards */
        .stat-card { background:#fff; border-radius:14px;
          box-shadow:0 6px 24px rgba(90,20,35,.09);
          padding:1.4rem 1.2rem; text-align:center;
          border-top:3px solid var(--rose);
          transition:transform .22s,box-shadow .22s; }
        .stat-card:hover { transform:translateY(-4px);
          box-shadow:0 14px 36px rgba(90,20,35,.14); }
        .stat-icon { width:48px; height:48px; border-radius:50%;
          background:var(--rose-pale); display:flex; align-items:center;
          justify-content:center; margin:0 auto .7rem; }
        .stat-icon i { color:var(--rose); font-size:1.3rem; }
        .stat-value { font-family:'Playfair Display',serif;
          font-size:2rem; font-weight:700; color:var(--rose); line-height:1; }
        .stat-label { font-size:.78rem; color:var(--text-mid);
          font-weight:500; margin-top:.25rem; }

        /* PDF button */
        .pdf-btn { display:inline-flex; align-items:center; gap:.6rem;
          background:var(--rose); color:#fff; border:none; border-radius:50px;
          padding:.7rem 1.8rem; font-size:.88rem; font-weight:500;
          text-decoration:none; letter-spacing:.04em;
          box-shadow:0 8px 24px rgba(181,71,90,.35);
          transition:transform .22s,box-shadow .22s,background .22s; }
        .pdf-btn:hover { background:#9e3048; transform:translateY(-2px);
          box-shadow:0 14px 32px rgba(181,71,90,.45); color:#fff; }
        .pdf-btn i { font-size:1.1rem; }

        /* table */
        .faculty-table-wrap { border-radius:16px; overflow:hidden;
          box-shadow:0 16px 56px rgba(90,20,35,.12); }
        .faculty-table { margin:0; font-size:.87rem; }
        .faculty-table tbody tr { background:#fff; transition:background .18s; }
        .faculty-table tbody tr:nth-child(even) { background:#fffafa; }
        .faculty-table tbody tr:hover { background:var(--rose-pale); }
        .faculty-table tbody td { padding:.88rem 1rem;
          border-bottom:1px solid #f3e0e3;
          color:var(--text-mid); vertical-align:middle; }
        .sr-badge { width:30px; height:30px; border-radius:50%;
          background:var(--rose-pale); color:var(--rose);
          display:inline-flex; align-items:center; justify-content:center;
          font-size:.78rem; font-weight:700; }
        .name-cell { font-weight:600; color:var(--text-dark); }
        .role-pill { display:inline-block; padding:.22rem .75rem;
          border-radius:20px; font-size:.72rem; font-weight:600;
          color:#fff; letter-spacing:.04em; white-space:nowrap; }
        .qual-pill { display:inline-flex; align-items:center; gap:.35rem;
          padding:.22rem .75rem; border-radius:20px;
          font-size:.75rem; font-weight:500; color:#fff; }

        /* animations */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .anim-1 { animation:fadeUp .7s .1s both; }
        .anim-2 { animation:fadeUp .7s .2s both; }
        .anim-3 { animation:fadeUp .7s .3s both; }
        .anim-4 { animation:fadeUp .7s .4s both; }
        .anim-5 { animation:fadeUp .7s .5s both; }

        @media(max-width:768px){
          .faculty-table-wrap { overflow-x:auto; }
        }
      `}</style>

      <main className="min-vh-100 py-5">
        <div className="container" style={{ maxWidth:1100 }}>

          {/* ── Eyebrow ── */}
          <div className="d-flex align-items-center gap-3 mb-3 anim-1">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Academic Staff</span>
            <div className="eyebrow-line" />
          </div>

          {/* ── Title + PDF button ── */}
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-2 anim-1">
            <div>
              <h1 className="page-title mb-2">
                List of <em>Full-Time</em><br />Teaching Faculty
              </h1>
              <div className="divider" />
            </div>
            <a
              href={`${ASSET_BASE}/PDF/Staff/fulltimeteachingFaculty.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-btn flex-shrink-0"
            >
              <i className="bi bi-file-earmark-pdf-fill" />
              View Faculty List (PDF)
            </a>
          </div>

          {/* ── Stats ── */}
          <div className="row g-3 mb-5 mt-3 anim-2">
            {stats.map((s, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="stat-card">
                  <div className="stat-icon">
                    <i className={`bi ${s.icon}`} />
                  </div>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Table heading ── */}
          <div className="mb-3 anim-3">
            <span className="sec-heading">Faculty <span>Members</span></span>
          </div>

          {/* ── Table ── */}
          <div className="faculty-table-wrap mb-4 anim-3">
            <table className="table faculty-table">
              <thead>
                <tr style={{ background:'#b5475a' }}>
                  {['Sr. No.', 'Name of Teacher', 'Designation', 'Qualification'].map((h) => (
                    <th key={h} style={{
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '.88rem',
                      letterSpacing: '.05em',
                      padding: '.95rem 1rem',
                      border: 'none',
                      whiteSpace: 'nowrap',
                      background: '#b5475a',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {faculty.map((f) => {
                  const qualKey = f.qualification.startsWith('M.Sc') ? 'M.Sc. Nursing' : 'B.Sc. Nursing'
                  return (
                    <tr key={f.sr}>
                      <td><span className="sr-badge">{f.sr}</span></td>
                      <td className="name-cell">
                        <div className="d-flex align-items-center gap-2">
                          <div style={{
                            width:34, height:34, borderRadius:'50%',
                            background:'var(--rose-pale)', display:'flex',
                            alignItems:'center', justifyContent:'center', flexShrink:0,
                          }}>
                            <i className="bi bi-person-fill" style={{ color:'var(--rose)', fontSize:'.95rem' }} />
                          </div>
                          {f.name}
                        </div>
                      </td>
                      <td>
                        <span
                          className="role-pill"
                          style={{ background: designationBadge[f.designation] ?? '#5c3d46' }}
                        >
                          {f.designation}
                        </span>
                      </td>
                      <td>
                        <span
                          className="qual-pill"
                          style={{ background: qualColor[qualKey] ?? '#5c3d46' }}
                        >
                          <i className="bi bi-award-fill" style={{ fontSize:'.75rem' }} />
                          {f.qualification}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* ── Bottom PDF CTA ── */}
          <div className="text-center anim-4">
            <div className="d-inline-flex align-items-center gap-3 bg-white px-4 py-3 rounded-4"
              style={{ boxShadow:'0 8px 28px rgba(90,20,35,.1)', border:'1px solid var(--rose-light)' }}>
              <i className="bi bi-file-earmark-pdf-fill"
                style={{ color:'#e74c3c', fontSize:'2rem' }} />
              <div className="text-start">
                <div style={{ fontWeight:600, color:'var(--text-dark)', fontSize:'.92rem' }}>
                  Full-Time Teaching Faculty List
                </div>
                <div style={{ fontSize:'.78rem', color:'var(--text-mid)' }}>
                  Official document — PDF format
                </div>
              </div>
              <a
                href={`${ASSET_BASE}/PDF/Staff/fulltimeteachingFaculty.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-btn ms-2"
              >
                <i className="bi bi-view" />
               view
              </a>
            </div>
          </div>

        </div>
      </main>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}