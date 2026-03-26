'use client'

import React from 'react'

const members = [
  {
    sr: 1,
    name: 'Mr. Ramesh Bandagar',
    designation: 'Chairperson',
    phone: '8446301404',
    email: '',
  },
  {
    sr: 2,
    name: 'Ms. Sarla Navgire',
    designation: 'Convener',
    phone: '9689900979',
    email: '',
  },
  {
    sr: 3,
    name: 'Ms. Prachi Shete',
    designation: 'Member',
    phone: '9730174284',
    email: '',
  },
  {
    sr: 4,
    name: 'Ms. Aditi Advankar',
    designation: 'Member / Complaint Support',
    phone: '9075797834',
    email: '',
  },
  {
    sr: 5,
    name: 'Ms. Hiteshi Thakur',
    designation: 'Member / Documentation',
    phone: '9459838047',
    email: '',
  },
]

const roleBadge: Record<string, string> = {
  Chairperson:                  '#b5475a',
  Convener:                     '#c9975a',
  'Member':                     '#5c3d46',
  'Member / Complaint Support': '#7a3f6e',
  'Member / Documentation':     '#3a6ea5',
}

const objectives = [
  { icon: 'bi-shield-fill-check',   text: 'To provide a safe, respectful, and supportive environment for all students and staff.' },
  { icon: 'bi-chat-left-text-fill', text: 'To receive, review, and resolve internal complaints and grievances in a fair and timely manner.' },
  { icon: 'bi-lock-fill',           text: 'To ensure confidentiality and impartiality throughout the complaint resolution process.' },
  { icon: 'bi-people-fill',         text: 'To protect the rights and dignity of all members of the institution.' },
  { icon: 'bi-clipboard2-check-fill', text: 'To maintain proper documentation and follow-up of all complaints received.' },
]

const reportSteps = [
  { icon: 'bi-pencil-fill',        label: 'Step 1', text: 'Submit your complaint in writing or verbally to any committee member.' },
  { icon: 'bi-search',             label: 'Step 2', text: 'The committee will acknowledge receipt and begin a confidential inquiry.' },
  { icon: 'bi-person-check-fill',  label: 'Step 3', text: 'Both parties will be given an opportunity to present their case.' },
  { icon: 'bi-check2-circle',      label: 'Step 4', text: 'A resolution will be communicated within a reasonable timeframe.' },
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

        /* page title */
        .page-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.8rem,3.5vw,2.8rem); color:var(--text-dark); }
        .page-title em { font-style:italic; color:var(--rose); }
        .divider { width:56px; height:3px; border-radius:3px;
          background:linear-gradient(90deg,var(--rose),var(--gold)); }

        /* info cards */
        .info-card { border-radius:16px; background:#fff; border:none;
          box-shadow:0 8px 32px rgba(90,20,35,.10);
          border-left:4px solid var(--rose);
          transition:transform .25s; }
        .info-card:hover { transform:translateY(-3px); }
        .info-card-gold { border-left-color:var(--gold); }
        .card-icon-wrap { width:48px; height:48px; border-radius:50%;
          background:var(--rose-pale); display:flex; align-items:center;
          justify-content:center; flex-shrink:0; }
        .card-icon-wrap i { color:var(--rose); font-size:1.25rem; }
        .card-icon-gold i { color:var(--gold); }
        .card-heading { font-family:'Playfair Display',serif;
          font-size:1.1rem; font-weight:700; color:var(--text-dark); }
        .card-text { font-size:.88rem; line-height:1.75; color:var(--text-mid); }

        /* section heading */
        .sec-heading { font-family:'Playfair Display',serif;
          font-size:1.35rem; font-weight:700; color:var(--text-dark); }
        .sec-heading span { color:var(--rose); }

        /* table */
        .committee-table-wrap { border-radius:16px; overflow:hidden;
          box-shadow:0 16px 56px rgba(90,20,35,.12); }
        .committee-table { margin:0; font-size:.87rem; }
        .committee-table tbody tr { background:#fff; transition:background .18s; }
        .committee-table tbody tr:nth-child(even) { background:#fffafa; }
        .committee-table tbody tr:hover { background:var(--rose-pale); }
        .committee-table tbody td { padding:.85rem 1rem;
          border-bottom:1px solid #f3e0e3; color:var(--text-mid); vertical-align:middle; }
        .sr-badge { width:30px; height:30px; border-radius:50%;
          background:var(--rose-pale); color:var(--rose);
          display:inline-flex; align-items:center; justify-content:center;
          font-size:.78rem; font-weight:700; }
        .name-cell { font-weight:600; color:var(--text-dark); }
        .role-pill { display:inline-block; padding:.22rem .75rem;
          border-radius:20px; font-size:.72rem; font-weight:600;
          color:#fff; letter-spacing:.04em; }
        .contact-line { display:flex; align-items:center; gap:.4rem;
          font-size:.85rem; color:var(--text-mid); }
        .contact-line i { color:var(--rose); font-size:.85rem; }

        /* objectives */
        .obj-item { display:flex; align-items:flex-start; gap:.85rem;
          padding:.75rem 1rem; border-left:3px solid var(--rose-pale);
          border-radius:0 8px 8px 0; transition:border-color .2s,background .2s; }
        .obj-item:hover { border-left-color:var(--rose); background:var(--rose-pale); }
        .obj-icon { color:var(--rose); font-size:1.1rem; margin-top:.1rem; flex-shrink:0; }
        .obj-text { font-size:.88rem; line-height:1.7; color:var(--text-mid); }

        /* steps */
        .step-card { background:#fff; border-radius:12px;
          box-shadow:0 6px 24px rgba(90,20,35,.09);
          padding:1.2rem; display:flex; flex-direction:column;
          align-items:flex-start; gap:.6rem;
          transition:transform .22s,box-shadow .22s; }
        .step-card:hover { transform:translateY(-3px);
          box-shadow:0 12px 36px rgba(90,20,35,.15); }
        .step-num { font-size:.68rem; font-weight:700; letter-spacing:.1em;
          text-transform:uppercase; color:var(--gold);
          background:#fff9f0; border:1px solid #e8c89a;
          padding:.2rem .65rem; border-radius:20px; }
        .step-icon { width:44px; height:44px; border-radius:50%;
          background:var(--rose-pale); display:flex; align-items:center;
          justify-content:center; }
        .step-icon i { color:var(--rose); font-size:1.1rem; }
        .step-text { font-size:.86rem; line-height:1.65; color:var(--text-mid); }

        /* contact box */
        .contact-box { background:#fff; border-radius:16px;
          box-shadow:0 8px 32px rgba(90,20,35,.1); }
        .helpline-item { padding:.9rem 1.1rem; border-radius:10px;
          background:var(--cream); display:flex; align-items:flex-start; gap:.8rem; }
        .helpline-label { font-size:.7rem; font-weight:600; letter-spacing:.1em;
          text-transform:uppercase; color:var(--rose); margin-bottom:.15rem; }
        .helpline-val { font-size:.92rem; font-weight:600; color:var(--text-dark); }
        .alert-box { background:#fff5f5; border:1px solid var(--rose-light);
          border-radius:10px; padding:1rem 1.2rem; }
        .alert-box p { font-size:.85rem; font-weight:600; color:var(--rose); margin:0; }

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
            <span className="eyebrow-text">Student Welfare</span>
            <div className="eyebrow-line" />
          </div>

          {/* ── Title ── */}
          <div className="text-center mb-5 anim-1">
            <h1 className="page-title mb-3">
              Internal Complaint &amp; <em>Grievance Committee</em>
            </h1>
            <div className="divider mx-auto" />
          </div>

          {/* ── Info Cards ── */}
          <div className="row g-4 mb-5 anim-2">
            <div className="col-md-6">
              <div className="info-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon-wrap">
                    <i className="bi bi-shield-fill-check" />
                  </div>
                  <div className="card-heading">Our Commitment</div>
                </div>
                <p className="card-text mb-0">
                  Our institution is committed to maintaining a safe, respectful, and inclusive environment. The
                  Internal Complaint &amp; Grievance Committee ensures that every complaint is heard, reviewed, and
                  resolved with fairness, transparency, and confidentiality.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-card info-card-gold p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon-wrap card-icon-gold">
                    <i className="bi bi-exclamation-triangle-fill" />
                  </div>
                  <div className="card-heading">What is a Grievance?</div>
                </div>
                <p className="card-text mb-0">
                  A grievance is any complaint or concern raised by a student or staff member relating to unfair
                  treatment, harassment, discrimination, or any other issue that affects their well-being or academic
                  experience within the institution.
                </p>
              </div>
            </div>
          </div>

          {/* ── Committee Table ── */}
          <div className="mb-3 anim-3">
            <span className="sec-heading">
              Committee <span>Members</span>
            </span>
          </div>

          <div className="committee-table-wrap mb-5 anim-3">
            <table className="table committee-table">
              <thead>
                <tr style={{ background:'#b5475a' }}>
                  {['Sr. No.', 'Name of Member', 'Designation', 'Contact Details'].map((h) => (
                    <th key={h} style={{
                      color:'#ffffff',
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

          {/* ── Objectives + How to Report ── */}
          <div className="row g-4 mb-5 anim-4">

            {/* Objectives */}
            <div className="col-lg-6">
              <div className="bg-white p-4 rounded-4 h-100"
                style={{ boxShadow:'0 8px 32px rgba(90,20,35,.09)' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon-wrap">
                    <i className="bi bi-bullseye" />
                  </div>
                  <div className="sec-heading">Objectives</div>
                </div>
                <div className="divider mb-4" />
                <div className="d-flex flex-column gap-2">
                  {objectives.map((o, i) => (
                    <div key={i} className="obj-item">
                      <i className={`bi ${o.icon} obj-icon`} />
                      <span className="obj-text">{o.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* How to Report */}
            <div className="col-lg-6">
              <div className="bg-white p-4 rounded-4 h-100"
                style={{ boxShadow:'0 8px 32px rgba(90,20,35,.09)' }}>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon-wrap">
                    <i className="bi bi-send-fill" />
                  </div>
                  <div className="sec-heading">How to <span>Report</span></div>
                </div>
                <div className="divider mb-4" />
                <div className="row g-3">
                  {reportSteps.map((s, i) => (
                    <div key={i} className="col-12">
                      <div className="step-card flex-row align-items-start gap-3 p-3">
                        <div className="step-icon flex-shrink-0">
                          <i className={`bi ${s.icon}`} />
                        </div>
                        <div>
                          <div className="step-num mb-1">{s.label}</div>
                          <div className="step-text">{s.text}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Contact Box ── */}
          <div className="contact-box p-4 p-lg-5 anim-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="card-icon-wrap">
                <i className="bi bi-telephone-fill" />
              </div>
              <div className="sec-heading">Contact the <span>Committee</span></div>
            </div>
            <div className="divider mb-4" />
            <div className="row g-3">
              <div className="col-md-4">
                <div className="helpline-item">
                  <i className="bi bi-telephone-fill" style={{ color:'var(--rose)', marginTop:'.15rem' }} />
                  <div>
                    <div className="helpline-label">Helpline</div>
                    <div className="helpline-val">8446301404 / 9730174284</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="helpline-item">
                  <i className="bi bi-envelope-fill" style={{ color:'var(--rose)', marginTop:'.15rem' }} />
                  <div>
                    <div className="helpline-label">Email</div>
                    <div className="helpline-val">snbp.nursing@snbpinstitutes.in</div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="helpline-item">
                  <i className="bi bi-geo-alt-fill" style={{ color:'var(--rose)', marginTop:'.15rem' }} />
                  <div>
                    <div className="helpline-label">Office</div>
                    <div className="helpline-val">Principal's Office, Ground Floor</div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="alert-box">
                  <p>
                    <i className="bi bi-lock-fill me-2" />
                    All complaints are treated with strict confidentiality. Immediate and impartial action will be taken upon receipt of any complaint.
                  </p>
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