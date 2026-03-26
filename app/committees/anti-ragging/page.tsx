'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Phone, AlertTriangle } from 'lucide-react'

const members = [
  {
    sr: 1,
    name: 'Mr. Ramesh Bandagar',
    designation: 'Principal',
    role: 'Chairperson',
    phone: '8446301404',
    email: 'bandagarramesh@yahoo.in',
  },
  {
    sr: 2,
    name: 'Ms. Sarala Navgire',
    designation: 'Vice Principal',
    role: 'Convener',
    phone: '9689900979',
    email: 'navgiresarala@gmail.com',
  },
  {
    sr: 3,
    name: 'Ms. Prachi Shete',
    designation: 'Assistant Professor',
    role: 'Member',
    phone: '9730174284',
    email: 'prachishete1990@gmail.com',
  },
  {
    sr: 4,
    name: 'Ms. Aditi Advankar',
    designation: 'Assistant Professor',
    role: 'Member',
    phone: '9075797834',
    email: 'advankar.aditi@gmail.com',
  },
  {
    sr: 5,
    name: 'Ms. Jainab Malangsha',
    designation: 'Lady Bouncer [Security]',
    role: 'Member',
    phone: '9356095161',
    email: 'snbp.nursing@snbpinstitutes.in',
  },
  {
    sr: 6,
    name: 'Mrs. Sushma G Diwate',
    designation: 'Police Representative',
    role: 'Member',
    phone: '9373450267',
    email: 'sushmadiwate@gmail.com',
  },
  {
    sr: 7,
    name: 'Adv. Sangita Surywanshi',
    designation: 'Lawyer Representative',
    role: 'Member',
    phone: '9850847617',
    email: 'sangitasurywanshi@gmail.com',
  },
  {
    sr: 8,
    name: 'Mr. Ashok Deshmane',
    designation: 'NGO Representative',
    role: 'Member',
    phone: '8237277615',
    email: 'snehwan@yahoo.in',
  },
  {
    sr: 9,
    name: 'Ms. Laxman Arjun Dhas',
    designation: 'Parent',
    role: 'Member',
    phone: '7774008205',
    email: 'akshadhas62@gmail.com',
  },
  {
    sr: 10,
    name: 'Ms. Kashinath Bhiva Sul',
    designation: 'Parent',
    role: 'Member',
    phone: '9503713132',
    email: 'anuskasul12345@gmail.com',
  },
  {
    sr: 11,
    name: 'Ms. Vidya Jadhav',
    designation: 'Student',
    role: 'Member',
    phone: '9359464696',
    email: 'vidyajadhav4646@gmail.com',
  },
]

const roleBadge: Record<string, string> = {
  Chairperson: '#b5475a',
  Convener:    '#c9975a',
  Member:      '#5c3d46',
}

export default function AntiRaggingPage() {
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
        body { font-family: 'DM Sans', sans-serif; background: var(--cream); }

        /* eyebrow */
        .eyebrow-line { flex:1; height:1px;
          background:linear-gradient(90deg,transparent,var(--rose-light),transparent); }
        .eyebrow-text { font-size:.7rem; font-weight:500; letter-spacing:.22em;
          text-transform:uppercase; color:var(--rose); white-space:nowrap; }

        /* page title */
        .page-title { font-family:'Playfair Display',serif;
          font-size:clamp(2rem,4vw,3rem); color:var(--text-dark); }
        .page-title em { font-style:italic; color:var(--rose); }
        .divider { width:56px; height:3px; border-radius:3px;
          background:linear-gradient(90deg,var(--rose),var(--gold)); }

        /* info cards */
        .info-card { border-radius:16px; background:#fff; border:none;
          box-shadow:0 8px 32px rgba(90,20,35,.1);
          border-left:4px solid var(--rose);
          transition:transform .25s; }
        .info-card:hover { transform:translateY(-3px); }
        .info-card-alt { border-left-color: var(--gold); }
        .card-icon { width:44px; height:44px; border-radius:50%;
          background:var(--rose-pale); display:flex; align-items:center;
          justify-content:center; flex-shrink:0; }
        .card-icon i { color:var(--rose); font-size:1.2rem; }
        .card-icon-gold i { color:var(--gold); }
        .card-heading { font-family:'Playfair Display',serif; font-size:1.15rem;
          font-weight:700; color:var(--text-dark); }
        .card-text { font-size:.88rem; line-height:1.75; color:var(--text-mid); }

        /* table */
        .committee-table-wrap { border-radius:16px; overflow:hidden;
          box-shadow:0 16px 56px rgba(90,20,35,.12); }
        .committee-table { margin:0; font-size:.87rem; }
        .committee-table thead tr { background:var(--rose); }
        .committee-table thead th { color:#fff; font-weight:600;
          letter-spacing:.04em; padding:.85rem 1rem;
          border:none; white-space:nowrap; }
        .committee-table tbody tr { background:#fff; transition:background .18s; }
        .committee-table tbody tr:nth-child(even) { background:#fffafa; }
        .committee-table tbody tr:hover { background:var(--rose-pale); }
        .committee-table tbody td { padding:.8rem 1rem; border-bottom:1px solid #f3e0e3;
          color:var(--text-mid); vertical-align:middle; }
        .sr-badge { width:30px; height:30px; border-radius:50%;
          background:var(--rose-pale); color:var(--rose);
          display:inline-flex; align-items:center; justify-content:center;
          font-size:.78rem; font-weight:700; }
        .name-cell { font-weight:600; color:var(--text-dark); }
        .role-pill { display:inline-block; padding:.2rem .7rem;
          border-radius:20px; font-size:.72rem; font-weight:600;
          color:#fff; letter-spacing:.04em; }
        .contact-line { display:flex; align-items:center; gap:.4rem;
          font-size:.82rem; color:var(--text-mid); }
        .contact-line i { color:var(--rose); font-size:.85rem; }
        .email-link { color:var(--rose); text-decoration:none; font-size:.78rem; }
        .email-link:hover { text-decoration:underline; }

        /* report card */
        .report-card { border-radius:16px; background:#fff; border:none;
          box-shadow:0 8px 32px rgba(90,20,35,.1); }
        .helpline-item { padding:.9rem 1.1rem; border-radius:10px;
          background:var(--cream); display:flex; align-items:flex-start;
          gap:.8rem; }
        .helpline-label { font-size:.72rem; font-weight:600; letter-spacing:.1em;
          text-transform:uppercase; color:var(--rose); margin-bottom:.15rem; }
        .helpline-val { font-size:.92rem; font-weight:600; color:var(--text-dark); }
        .alert-box { background:#fff5f5; border:1px solid var(--rose-light);
          border-radius:10px; padding:1rem 1.2rem; }
        .alert-box p { font-size:.85rem; font-weight:600; color:var(--rose); margin:0; }

        /* measures */
        .measure-item { display:flex; align-items:flex-start; gap:.75rem;
          padding:.6rem .8rem; border-radius:8px; transition:background .18s; }
        .measure-item:hover { background:var(--rose-pale); }
        .measure-dot { width:8px; height:8px; border-radius:50%;
          background:var(--rose); flex-shrink:0; margin-top:.4rem; }
        .measure-text { font-size:.88rem; line-height:1.6; color:var(--text-mid); }

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

        @media (max-width:768px) {
          .committee-table-wrap { border-radius:12px; overflow-x:auto; }
        }
      `}</style>

      <main className="min-vh-100 py-5">
        <div className="container" style={{ maxWidth: 1100 }}>

          {/* ── Eyebrow ── */}
          <div className="d-flex align-items-center gap-3 mb-3 anim-1">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Student Safety</span>
            <div className="eyebrow-line" />
          </div>

          {/* ── Title ── */}
          <div className="text-center mb-5 anim-1">
            <h1 className="page-title mb-3">
              <em>Anti-Ragging</em> Committee
            </h1>
            <div className="divider mx-auto" />
          </div>

          {/* ── Info Cards ── */}
          <div className="row g-4 mb-5 anim-2">
            <div className="col-md-6">
              <div className="info-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon">
                    <i className="bi bi-shield-fill-check" />
                  </div>
                  <div className="card-heading">Our Commitment</div>
                </div>
                <p className="card-text mb-0">
                  Our institution is committed to providing a safe and secure environment for all students. We have zero
                  tolerance for ragging in any form and have established a robust Anti-Ragging Committee to prevent and
                  address any incidents.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="info-card info-card-alt p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon card-icon-gold">
                    <i className="bi bi-exclamation-triangle-fill" />
                  </div>
                  <div className="card-heading">What is Ragging?</div>
                </div>
                <p className="card-text mb-0">
                  Ragging includes any act of physical or mental abuse, harassment, or humiliation of a student by
                  another student. It is a punishable offense under the law and institutional regulations.
                </p>
              </div>
            </div>
          </div>

          {/* ── Committee Table ── */}
          <div className="mb-2 anim-3">
            <span style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.35rem', fontWeight:700, color:'var(--text-dark)' }}>
              Committee <span style={{ color:'var(--rose)' }}>Members</span>
            </span>
          </div>
          <div className="committee-table-wrap mb-5 anim-3">
            <table className="table committee-table">
              <thead>
                <tr style={{ background:'#b5475a' }}>
                  {['Sr. No.','Name','Designation','Role in Committee','Contact Details'].map((h) => (
                    <th key={h} style={{
                      color:'#ffffff',
                      fontWeight:700,
                      fontSize:'.88rem',
                      letterSpacing:'.05em',
                      padding:'.95rem 1rem',
                      border:'none',
                      whiteSpace:'nowrap',
                      background:'#b5475a',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {members.map((m) => (
                  <tr key={m.sr}>
                    <td>
                      <span className="sr-badge">{m.sr}</span>
                    </td>
                    <td className="name-cell">{m.name}</td>
                    <td>{m.designation}</td>
                    <td>
                      <span
                        className="role-pill"
                        style={{ background: roleBadge[m.role] ?? '#5c3d46' }}
                      >
                        {m.role}
                      </span>
                    </td>
                    <td>
                      <div className="contact-line mb-1">
                        <i className="bi bi-telephone-fill" />
                        {m.phone}
                      </div>
                      <a href={`mailto:${m.email}`} className="email-link">
                        <i className="bi bi-envelope-fill me-1" style={{ fontSize:'.75rem' }} />
                        {m.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Preventive Measures + Report ── */}
          <div className="row g-4 anim-4">
            <div className="col-md-6">
              <div className="report-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon">
                    <i className="bi bi-list-check" />
                  </div>
                  <div className="card-heading">Preventive Measures</div>
                </div>
                <div className="divider mb-3" />
                <div className="d-flex flex-column gap-1">
                  {[
                    'Orientation programs for new students',
                    'Anti-ragging awareness campaigns',
                    'Regular monitoring of hostel and campus areas',
                    'Mentorship programs for junior students',
                    'Anonymous complaint mechanisms',
                    'Regular committee meetings and reviews',
                  ].map((item, i) => (
                    <div key={i} className="measure-item">
                      <div className="measure-dot" />
                      <span className="measure-text">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="report-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="card-icon">
                    <i className="bi bi-telephone-fill" />
                  </div>
                  <div className="card-heading">Report Ragging</div>
                </div>
                <div className="divider mb-3" />
                <div className="d-flex flex-column gap-3">
                  <div className="helpline-item">
                    <i className="bi bi-telephone-fill" style={{ color:'var(--rose)', marginTop:'.15rem' }} />
                    <div>
                      <div className="helpline-label">24/7 Helpline</div>
                      <div className="helpline-val">+91 8446301404 / 9730174284</div>
                    </div>
                  </div>
                  <div className="helpline-item">
                    <i className="bi bi-envelope-fill" style={{ color:'var(--rose)', marginTop:'.15rem' }} />
                    <div>
                      <div className="helpline-label">Email</div>
                      <div className="helpline-val">snbp.nursing@snbpinstitutes.in</div>
                    </div>
                  </div>
                  <div className="helpline-item">
                    <i className="bi bi-headset" style={{ color:'var(--rose)', marginTop:'.15rem' }} />
                    <div>
                      <div className="helpline-label">UGC Anti-Ragging Helpline</div>
                      <div className="helpline-val">1800-180-5522</div>
                    </div>
                  </div>
                  <div className="alert-box">
                    <p>
                      <i className="bi bi-lock-fill me-2" />
                      All complaints will be treated with strict confidentiality and immediate action will be taken.
                    </p>
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