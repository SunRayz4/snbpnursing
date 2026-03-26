'use client'

import React from 'react'

const members = [
  { sr: 1, name: 'Mr. Ramesh Bandagar', designation: 'Principal / Chairperson', gender: 'Male', phone: '8446301404' },
  { sr: 2, name: 'Ms. Sarla Navgire', designation: 'Vice Principal', gender: 'Female', phone: '9689900979' },
  { sr: 3, name: 'Dr. Jayshree Venkatramanaman', designation: 'External Expert', gender: 'Female', phone: '9890765333' },
  { sr: 4, name: 'Ms. Prachi Shete', designation: 'Senior Faculty / Coordinator', gender: 'Female', phone: '9730174284' },
  { sr: 5, name: 'Ms. Aditi Advankar', designation: 'Faculty Member', gender: 'Female', phone: '9075797834' },
  { sr: 6, name: 'Ms. Hiteshi Thakur', designation: 'Faculty Member', gender: 'Female', phone: '9459838047' },
  { sr: 7, name: 'Mr. Abhijit Lohar', designation: 'Administrative Representative', gender: 'Male', phone: '7264071430' },

  // ✅ UPDATED STUDENT REPRESENTATIVE
  { sr: 8, name: 'Ms. Vidya Jadhav', designation: 'Student Representative', gender: 'Female', phone: '9359464696' },

  { sr: 9, name: 'Mr. Sanket Bangar', designation: 'Student Representative', gender: 'Male', phone: '9834556270' },
]

const roleBadge: Record<string, string> = {
  'Principal / Chairperson':      '#b5475a',
  'Vice Principal':               '#c9975a',
  'External Expert':              '#3a6ea5',
  'Senior Faculty / Coordinator': '#7a3f6e',
  'Faculty Member':               '#5c3d46',
  'Administrative Representative':'#2a7d5e',
  'Student Representative':       '#4a7a3d',
}

const functions = [
  { icon: 'bi-graph-up-arrow',       text: 'To develop a system for conscious, consistent and catalytic improvement in the overall performance of the institution.' },
  { icon: 'bi-clipboard2-data-fill', text: 'To channelize and systematize efforts and measures of an institution towards academic excellence.' },
  { icon: 'bi-award-fill',           text: 'To ensure quality benchmarks and standards are set and maintained across academic and administrative functions.' },
  { icon: 'bi-people-fill',          text: 'To act as a nodal agency of the institution for coordinating quality-related activities and disseminating best practices.' },
  { icon: 'bi-file-earmark-check-fill', text: 'To prepare the Annual Quality Assurance Report (AQAR) based on the quality parameters and assessment criteria.' },
  { icon: 'bi-lightbulb-fill',       text: 'To promote innovation, research, and evidence-based practices for the continuous improvement of nursing education.' },
]

const strategies = [
  { icon: 'bi-journal-check',      title: 'Academic Audit',        desc: 'Regular review of curriculum, teaching methods, and academic outcomes.' },
  { icon: 'bi-bar-chart-fill',     title: 'Feedback Analysis',     desc: 'Systematic collection and analysis of feedback from students, staff, and stakeholders.' },
  { icon: 'bi-patch-check-fill',   title: 'Best Practices',        desc: 'Identification and adoption of best practices in nursing education and administration.' },
  { icon: 'bi-mortarboard-fill',   title: 'Faculty Development',   desc: 'Organising workshops, seminars, and training programs for continuous faculty growth.' },
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

        /* info cards */
        .info-card { border-radius:16px; background:#fff; border:none;
          box-shadow:0 8px 32px rgba(90,20,35,.10);
          border-left:4px solid var(--rose); transition:transform .25s; }
        .info-card:hover { transform:translateY(-3px); }
        .info-card-gold { border-left-color:var(--gold); }
        .card-icon-wrap { width:48px; height:48px; border-radius:50%;
          background:var(--rose-pale); display:flex; align-items:center;
          justify-content:center; flex-shrink:0; }
        .card-icon-wrap i { color:var(--rose); font-size:1.2rem; }
        .card-icon-gold i { color:var(--gold); }
        .card-heading { font-family:'Playfair Display',serif;
          font-size:1.1rem; font-weight:700; color:var(--text-dark); }
        .card-text { font-size:.88rem; line-height:1.75; color:var(--text-mid); }

        /* table */
        .committee-table-wrap { border-radius:16px; overflow:hidden;
          box-shadow:0 16px 56px rgba(90,20,35,.12); }
        .committee-table { margin:0; font-size:.87rem; }
        .committee-table tbody tr { background:#fff; transition:background .18s; }
        .committee-table tbody tr:nth-child(even) { background:#fffafa; }
        .committee-table tbody tr:hover { background:var(--rose-pale); }
        .committee-table tbody td { padding:.85rem 1rem;
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
        .gender-badge { display:inline-flex; align-items:center; gap:.3rem;
          font-size:.78rem; font-weight:500;
          padding:.18rem .65rem; border-radius:20px; }
        .gender-m { background:#eef4fb; color:#3a6ea5; }
        .gender-f { background:var(--rose-pale); color:var(--rose); }
        .contact-line { display:flex; align-items:center; gap:.4rem;
          font-size:.85rem; color:var(--text-mid); }
        .contact-line i { color:var(--rose); font-size:.85rem; }

        /* function items */
        .func-item { display:flex; align-items:flex-start; gap:.85rem;
          padding:.75rem 1rem; border-left:3px solid var(--rose-pale);
          border-radius:0 8px 8px 0; transition:border-color .2s,background .2s; }
        .func-item:hover { border-left-color:var(--rose); background:var(--rose-pale); }
        .func-icon { color:var(--rose); font-size:1.1rem; margin-top:.1rem; flex-shrink:0; }
        .func-text { font-size:.88rem; line-height:1.7; color:var(--text-mid); }

        /* strategy cards */
        .strategy-card { background:#fff; border-radius:14px;
          box-shadow:0 6px 24px rgba(90,20,35,.09);
          padding:1.4rem; transition:transform .22s,box-shadow .22s;
          border-top:3px solid var(--rose); }
        .strategy-card:hover { transform:translateY(-4px);
          box-shadow:0 14px 36px rgba(90,20,35,.15); }
        .strategy-icon { width:48px; height:48px; border-radius:12px;
          background:var(--rose-pale); display:flex; align-items:center;
          justify-content:center; margin-bottom:.85rem; }
        .strategy-icon i { color:var(--rose); font-size:1.3rem; }
        .strategy-title { font-family:'Playfair Display',serif;
          font-size:1rem; font-weight:700; color:var(--text-dark); margin-bottom:.35rem; }
        .strategy-desc { font-size:.83rem; line-height:1.65; color:var(--text-mid); }

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
        .anim-6 { animation:fadeUp .7s .6s both; }

        @media(max-width:768px){
          .committee-table-wrap { overflow-x:auto; }
        }
      `}</style>

      <main className="min-vh-100 py-5">
        <div className="container" style={{ maxWidth:1100 }}>

          {/* ── Eyebrow ── */}
          <div className="d-flex align-items-center gap-3 mb-3 anim-1">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Quality Assurance</span>
            <div className="eyebrow-line" />
          </div>

          {/* ── Title ── */}
          <div className="text-center mb-5 anim-1">
            <h1 className="page-title mb-3">
              Internal Quality <em>Assurance Cell</em>
              <br />
              <span style={{ fontSize:'clamp(1rem,2vw,1.4rem)', fontFamily:"'DM Sans',sans-serif", fontWeight:500, color:'var(--text-mid)', letterSpacing:'.06em' }}>
                IQAC COMMITTEE
              </span>
            </h1>
            <div className="divider mx-auto" />
          </div>

          {/* ── Info Cards ── */}
          <div className="row g-4 mb-5 anim-2">
            <div className="col-md-6">
              <div className="info-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon-wrap">
                    <i className="bi bi-patch-check-fill" />
                  </div>
                  <div className="card-heading">About IQAC</div>
                </div>
                <p className="card-text mb-0">
                  The Internal Quality Assurance Cell (IQAC) is established as a quality sustenance measure to ensure
                  that quality enhancement becomes a regular and integral feature of institutional life. It aims to
                  develop a system of conscious, consistent, and catalytic improvement in the institution's overall
                  performance.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-card info-card-gold p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon-wrap card-icon-gold">
                    <i className="bi bi-bullseye" />
                  </div>
                  <div className="card-heading">Our Goal</div>
                </div>
                <p className="card-text mb-0">
                  To channelize and systematize the efforts and measures of SNBP Institute of Nursing towards
                  academic excellence, ensuring that quality benchmarks are established and maintained across all
                  academic and administrative activities in alignment with NAAC guidelines and national standards.
                </p>
              </div>
            </div>
          </div>

          {/* ── Committee Table ── */}
          <div className="mb-3 anim-3">
            <span className="sec-heading">Committee <span>Members</span></span>
          </div>

          <div className="committee-table-wrap mb-5 anim-3">
            <table className="table committee-table">
              <thead>
                <tr style={{ background:'#b5475a' }}>
                  {['Sr. No.', 'Name of Member', 'Designation', 'Gender', 'Contact Details'].map((h) => (
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
                {members.map((m) => (
                  <tr key={m.sr}>
                    <td><span className="sr-badge">{m.sr}</span></td>
                    <td className="name-cell">{m.name}</td>
                    <td>
                      <span
                        className="role-pill"
                        style={{ background: roleBadge[m.designation] ?? '#5c3d46' }}
                      >
                        {m.designation}
                      </span>
                    </td>
                    <td>
                      <span className={`gender-badge ${m.gender === 'Male' ? 'gender-m' : 'gender-f'}`}>
                        <i className={`bi ${m.gender === 'Male' ? 'bi-gender-male' : 'bi-gender-female'}`} />
                        {m.gender}
                      </span>
                    </td>
                    <td>
                      <div className="contact-line">
                        <i className="bi bi-telephone-fill" />
                        {m.phone}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Functions + Strategies ── */}
          <div className="row g-4 mb-5 anim-4">

            {/* Functions */}
            <div className="col-lg-6">
              <div className="bg-white p-4 rounded-4 h-100"
                style={{ boxShadow:'0 8px 32px rgba(90,20,35,.09)' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon-wrap">
                    <i className="bi bi-list-task" />
                  </div>
                  <div className="sec-heading">Functions of <span>IQAC</span></div>
                </div>
                <div className="divider mb-4" />
                <div className="d-flex flex-column gap-2">
                  {functions.map((f, i) => (
                    <div key={i} className="func-item">
                      <i className={`bi ${f.icon} func-icon`} />
                      <span className="func-text">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategies */}
            <div className="col-lg-6">
              <div className="bg-white p-4 rounded-4 h-100"
                style={{ boxShadow:'0 8px 32px rgba(90,20,35,.09)' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon-wrap">
                    <i className="bi bi-diagram-3-fill" />
                  </div>
                  <div className="sec-heading">Key <span>Strategies</span></div>
                </div>
                <div className="divider mb-4" />
                <div className="row g-3">
                  {strategies.map((s, i) => (
                    <div key={i} className="col-12 col-sm-6">
                      <div className="strategy-card h-100">
                        <div className="strategy-icon">
                          <i className={`bi ${s.icon}`} />
                        </div>
                        <div className="strategy-title">{s.title}</div>
                        <div className="strategy-desc">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Contact ── */}
          <div className="bg-white p-4 p-lg-5 rounded-4 anim-5"
            style={{ boxShadow:'0 8px 32px rgba(90,20,35,.09)' }}>
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="card-icon-wrap">
                <i className="bi bi-telephone-fill" />
              </div>
              <div className="sec-heading">Contact <span>IQAC</span></div>
            </div>
            <div className="divider mb-4" />
            <div className="row g-3">
              <div className="col-md-4">
                <div className="d-flex align-items-start gap-3 p-3 rounded-3"
                  style={{ background:'var(--cream)' }}>
                  <i className="bi bi-telephone-fill" style={{ color:'var(--rose)', fontSize:'1.1rem', marginTop:'.1rem' }} />
                  <div>
                    <div style={{ fontSize:'.7rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--rose)', marginBottom:'.15rem' }}>Chairperson</div>
                    <div style={{ fontWeight:600, color:'var(--text-dark)' }}>Mr. Ramesh Bandagar</div>
                    <div style={{ fontSize:'.85rem', color:'var(--text-mid)' }}>8446301404</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-start gap-3 p-3 rounded-3"
                  style={{ background:'var(--cream)' }}>
                  <i className="bi bi-person-fill" style={{ color:'var(--rose)', fontSize:'1.1rem', marginTop:'.1rem' }} />
                  <div>
                    <div style={{ fontSize:'.7rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--rose)', marginBottom:'.15rem' }}>Coordinator</div>
                    <div style={{ fontWeight:600, color:'var(--text-dark)' }}>Ms. Prachi Shete</div>
                    <div style={{ fontSize:'.85rem', color:'var(--text-mid)' }}>9730174284</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-start gap-3 p-3 rounded-3"
                  style={{ background:'var(--cream)' }}>
                  <i className="bi bi-envelope-fill" style={{ color:'var(--rose)', fontSize:'1.1rem', marginTop:'.1rem' }} />
                  <div>
                    <div style={{ fontSize:'.7rem', fontWeight:600, letterSpacing:'.1em', textTransform:'uppercase', color:'var(--rose)', marginBottom:'.15rem' }}>Email</div>
                    <div style={{ fontWeight:600, color:'var(--text-dark)', fontSize:'.88rem' }}>snbp.nursing@snbpinstitutes.in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}