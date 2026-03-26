'use client'

import React from 'react'
import Link from 'next/link'

const ASSET_BASE = process.env.NEXT_PUBLIC_STATIC_ASSETS

const points = [
  {
    icon: 'bi-heart-pulse-fill',
    text: 'The Child Health Nursing Lab is designed to provide students with essential knowledge and practical skills in pediatric nursing care. It helps students understand the growth and development of children and the management of various childhood illnesses.',
  },
  {
    icon: 'bi-capsule-pill',
    text: 'The lab is well-equipped with pediatric mannequins, infant models, charts, growth monitoring tools, and essential nursing equipment, enabling students to practice procedures such as newborn care, immunization, pediatric assessment, and emergency care.',
  },
  {
    icon: 'bi-person-arms-up',
    text: 'Students are trained in a safe and controlled environment to develop skills in handling infants and children, monitoring growth and development, and providing family-centered care.',
  },
  {
    icon: 'bi-display-fill',
    text: 'Modern teaching aids and audio-visual tools are used to enhance learning and clinical competence.',
  },
  {
    icon: 'bi-hospital-fill',
    text: 'The lab plays a crucial role in preparing students to deliver safe, effective, and compassionate care to children in hospital and community settings.',
  },
]

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>{`
        :root {
          --teal:       #2a9d8f;
          --teal-pale:  #e8f7f5;
          --teal-light: #80cdc6;
          --gold:       #e9c46a;
          --cream:      #f4faf9;
          --text-dark:  #1a2e2b;
          --text-mid:   #3d5a56;
        }
        body { font-family: 'DM Sans', sans-serif; background: var(--cream); }

        /* eyebrow */
        .eyebrow-line { flex:1; height:1px;
          background: linear-gradient(90deg, transparent, var(--teal-light), transparent); }
        .eyebrow-text { font-size:.7rem; font-weight:500; letter-spacing:.22em;
          text-transform:uppercase; color:var(--teal); white-space:nowrap; }

        /* section title */
        .section-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.8rem,3.5vw,2.8rem); color:var(--text-dark); }
        .section-title em { font-style:italic; color:var(--teal); }

        /* info card */
        .info-card { border-radius:20px; overflow:hidden;
          box-shadow:0 24px 72px rgba(42,157,143,.13); background:#fff; }

        /* illustration panel */
        .illus-panel { background: linear-gradient(160deg, var(--teal-pale) 0%, #f0faf8 100%);
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; gap:1.2rem; padding:2.8rem 2rem; }
        .illus-icon-wrap { width:100px; height:100px; border-radius:50%;
          background:#fff; box-shadow:0 8px 32px rgba(42,157,143,.2);
          display:flex; align-items:center; justify-content:center; }
        .illus-icon-wrap i { font-size:2.8rem; color:var(--teal); }
        .illus-title { font-family:'Playfair Display',serif; font-size:1.35rem;
          color:var(--text-dark); text-align:center; line-height:1.3; }
        .illus-sub { font-size:.82rem; color:var(--text-mid); text-align:center;
          max-width:210px; line-height:1.6; }
        .illus-badge { background:#fff; color:var(--teal);
          border:1px solid var(--teal-light); font-size:.7rem; font-weight:500;
          padding:.35rem .9rem; border-radius:30px; letter-spacing:.08em; }

        /* content */
        .content-tag { font-size:.7rem; font-weight:500; letter-spacing:.18em;
          text-transform:uppercase; color:var(--teal); }
        .content-tag::before { content:''; display:inline-block;
          width:24px; height:2px; background:var(--gold);
          border-radius:2px; margin-right:.5rem; vertical-align:middle; }
        .content-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.4rem,2.4vw,2rem); color:var(--text-dark); line-height:1.3; }
        .content-title span { color:var(--teal); }
        .divider { width:48px; height:3px; border-radius:3px;
          background:linear-gradient(90deg,var(--teal),var(--gold)); }

        /* points */
        .point-item { border-left:3px solid var(--teal-pale); transition:border-color .2s; }
        .point-item:hover { border-left-color:var(--teal); }
        .point-icon { color:var(--teal); font-size:1.1rem; margin-top:.1rem; flex-shrink:0; }
        .point-text { font-size:.87rem; line-height:1.7; color:var(--text-mid); }

        /* CTA */
        .lab-cta { background:var(--teal); border:none; border-radius:50px;
          padding:.7rem 1.8rem; font-size:.85rem; font-weight:500;
          box-shadow:0 8px 28px rgba(42,157,143,.35);
          transition:transform .22s,box-shadow .22s,background .22s; color:#fff; }
        .lab-cta:hover { background:#21867a; transform:translateY(-2px);
          box-shadow:0 14px 36px rgba(42,157,143,.45); color:#fff; }
        .lab-cta .arrow { transition:transform .22s; }
        .lab-cta:hover .arrow { transform:translateX(4px); }

        /* video card */
        .video-section-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.3rem,2.2vw,1.9rem); color:var(--text-dark); }
        .video-section-title em { font-style:italic; color:var(--teal); }
        .video-card { border-radius:18px; overflow:hidden;
          box-shadow:0 16px 56px rgba(42,157,143,.18);
          background:#0d2b28;
          transition:transform .3s, box-shadow .3s; }
        .video-card:hover { transform:translateY(-4px);
          box-shadow:0 24px 64px rgba(42,157,143,.28); }
        .video-card video { width:100%; display:block;
          aspect-ratio:16/9; object-fit:cover; }
        .video-label { padding:.9rem 1.4rem;
          background:var(--teal);
          display:flex; align-items:center; gap:.65rem; }
        .video-label i { color:#fff; font-size:1.1rem; }
        .video-label-text { font-size:.85rem; font-weight:500;
          letter-spacing:.06em; color:#fff; }

        /* corner decor */
        .corner-decor { position:absolute; top:0; right:0;
          width:120px; height:120px; pointer-events:none;
          background:radial-gradient(circle at top right,var(--teal-pale),transparent 70%); }

        /* animations */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .anim-1 { animation:fadeUp .7s .1s both; }
        .anim-2 { animation:fadeUp .7s .2s both; }
        .anim-3 { animation:fadeUp .7s .3s both; }
        .anim-4 { animation:fadeUp .7s .4s both; }
        .anim-5 { animation:fadeUp .7s .5s both; }
        .anim-6 { animation:fadeUp .7s .6s both; }
      `}</style>

      <main className="min-vh-100 py-5">
        <div className="container" style={{ maxWidth: 1160 }}>

          {/* ── Eyebrow ── */}
          <div className="d-flex align-items-center gap-3 mb-2 anim-1">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Nursing Simulation Labs</span>
            <div className="eyebrow-line" />
          </div>

          {/* ── Section Title ── */}
          <h2 className="section-title text-center mb-5 anim-1">
            Explore Our <em>Child Health</em> Nursing Lab
          </h2>

          {/* ── Info Card ── */}
          <div className="info-card row g-0 mb-5">

            {/* LEFT — Illustration Panel */}
            <div className="col-lg-4 illus-panel anim-2">
              <div className="illus-icon-wrap">
                <i className="bi bi-bandaid-fill" />
              </div>
              <div className="illus-title">Child Health<br />Nursing Lab</div>
              <div className="illus-sub">
                Pediatric care skills for hospital &amp; community settings.
              </div>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-1">
                <span className="illus-badge"><i className="bi bi-heart-fill me-1" />Pediatric Care</span>
                <span className="illus-badge"><i className="bi bi-activity me-1" />Growth Monitoring</span>
                <span className="illus-badge"><i className="bi bi-shield-plus me-1" />Immunization</span>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div className="col-lg-8 bg-white p-4 p-lg-5 d-flex flex-column justify-content-center position-relative">
              <div className="corner-decor" />

              <div className="content-tag mb-3 anim-3">Pediatric Nursing</div>

              <h3 className="content-title mb-3 anim-3">
                Child Health <span>Nursing Lab</span>
              </h3>

              <div className="divider mb-3 anim-3" />

              <ul className="list-unstyled d-flex flex-column gap-2 mb-4 anim-4">
                {points.map((p, i) => (
                  <li key={i} className="point-item d-flex gap-2 ps-2 py-1">
                    <i className={`bi ${p.icon} point-icon`} />
                    <span className="point-text">{p.text}</span>
                  </li>
                ))}
              </ul>

              <div className="anim-5">
                <Link href="#video" className="btn lab-cta d-inline-flex align-items-center gap-2">
                  Watch Lab Tour
                  <i className="bi bi-play-circle-fill arrow" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Video Section ── */}
          <div id="video">
            <div className="d-flex align-items-center gap-3 mb-2 anim-5">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Facility Tour</span>
              <div className="eyebrow-line" />
            </div>

            <h3 className="video-section-title text-center mb-4 anim-5">
              Take a <em>Virtual Tour</em> of the Lab
            </h3>

            <div className="row justify-content-center anim-6">
              <div className="col-lg-8 col-md-10">
                <div className="video-card">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    aria-label="Child Health Nursing Lab video tour"
                    style={{ width: '100%' }}
                  >
                    <source
                      src={`${ASSET_BASE}/videos/facility/childhealthlab.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-label">
                    <i className="bi bi-camera-video-fill" />
                    <span className="video-label-text">Child Health Nursing Lab — Facility Tour</span>
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