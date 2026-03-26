'use client'

import React from 'react'
import Link from 'next/link'

const ASSET_BASE = process.env.NEXT_PUBLIC_STATIC_ASSETS

const points = [
  {
    icon: 'bi-hospital-fill',
    text: 'The Nursing Foundation Lab is a fundamental training facility where students develop basic nursing skills and clinical competencies. It provides a simulated clinical environment that prepares students for real-life patient care in hospitals and healthcare settings.',
  },
  {
    icon: 'bi-capsule-pill',
    text: 'The lab is well-equipped with hospital beds, mannequins, nursing models, instruments, and essential equipment, allowing students to practice procedures such as bed making, vital signs monitoring, patient hygiene, first aid, and basic nursing care.',
  },
  {
    icon: 'bi-person-check-fill',
    text: 'Students are trained under the guidance of experienced faculty in a safe, controlled, and supervised environment, helping them build confidence, accuracy, and professionalism in their practice.',
  },
  {
    icon: 'bi-display-fill',
    text: 'Modern teaching aids and audio-visual tools are used to enhance learning and understanding.',
  },
  {
    icon: 'bi-mortarboard-fill',
    text: 'The Nursing Foundation Lab plays a vital role in developing clinical skills, communication, and patient care techniques, forming a strong base for advanced nursing education.',
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
          background: linear-gradient(90deg, transparent, var(--rose-light), transparent); }
        .eyebrow-text { font-size:.7rem; font-weight:500; letter-spacing:.22em;
          text-transform:uppercase; color:var(--rose); white-space:nowrap; }

        /* titles */
        .section-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.8rem,3.5vw,2.8rem); color:var(--text-dark); }
        .section-title em { font-style:italic; color:var(--rose); }

        /* main card */
        .main-card { border-radius:20px; overflow:hidden;
          box-shadow:0 24px 72px rgba(90,20,35,.13); background:#fff; }

        /* illus panel */
        .illus-panel { background: linear-gradient(160deg, var(--rose-pale) 0%, #fff5f7 100%);
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; gap:1.2rem; padding:2.8rem 2rem; }
        .illus-icon-wrap { width:100px; height:100px; border-radius:50%;
          background:#fff; box-shadow:0 8px 32px rgba(181,71,90,.18);
          display:flex; align-items:center; justify-content:center; }
        .illus-icon-wrap i { font-size:2.8rem; color:var(--rose); }
        .illus-title { font-family:'Playfair Display',serif; font-size:1.35rem;
          color:var(--text-dark); text-align:center; line-height:1.3; }
        .illus-sub { font-size:.82rem; color:var(--text-mid); text-align:center;
          max-width:220px; line-height:1.6; }
        .illus-badge { background:#fff; color:var(--rose);
          border:1px solid var(--rose-light); font-size:.68rem; font-weight:500;
          padding:.3rem .85rem; border-radius:30px;
          letter-spacing:.07em; white-space:nowrap; }

        /* content */
        .content-tag { font-size:.7rem; font-weight:500; letter-spacing:.18em;
          text-transform:uppercase; color:var(--rose); }
        .content-tag::before { content:''; display:inline-block;
          width:24px; height:2px; background:var(--gold);
          border-radius:2px; margin-right:.5rem; vertical-align:middle; }
        .content-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.4rem,2.4vw,2rem); color:var(--text-dark); line-height:1.3; }
        .content-title span { color:var(--rose); }
        .divider { width:48px; height:3px; border-radius:3px;
          background:linear-gradient(90deg,var(--rose),var(--gold)); }
        .corner-decor { position:absolute; top:0; right:0; width:120px; height:120px;
          pointer-events:none;
          background:radial-gradient(circle at top right,var(--rose-pale),transparent 70%); }

        /* points */
        .point-item { border-left:3px solid var(--rose-pale); transition:border-color .2s; }
        .point-item:hover { border-left-color:var(--rose); }
        .point-icon { color:var(--rose); font-size:1.1rem; margin-top:.1rem; flex-shrink:0; }
        .point-text { font-size:.87rem; line-height:1.7; color:var(--text-mid); }

        /* CTA */
        .lab-cta { background:var(--rose); border:none; border-radius:50px;
          padding:.7rem 1.8rem; font-size:.85rem; font-weight:500;
          box-shadow:0 8px 28px rgba(181,71,90,.35);
          transition:transform .22s,box-shadow .22s,background .22s; color:#fff; }
        .lab-cta:hover { background:#9e3048; transform:translateY(-2px);
          box-shadow:0 14px 36px rgba(181,71,90,.45); color:#fff; }
        .lab-cta .arrow { transition:transform .22s; }
        .lab-cta:hover .arrow { transform:translateX(4px); }

        /* video section */
        .video-section-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.4rem,2.5vw,2rem); color:var(--text-dark); }
        .video-section-title em { font-style:italic; color:var(--rose); }

        /* video card */
        .video-card { border-radius:16px; overflow:hidden;
          box-shadow:0 12px 48px rgba(90,20,35,.13);
          background:#1a1a2e; transition:transform .3s,box-shadow .3s; }
        .video-card:hover { transform:translateY(-4px);
          box-shadow:0 20px 60px rgba(90,20,35,.2); }
        .video-card video { width:100%; display:block;
          aspect-ratio:16/9; object-fit:cover; }
        .video-label { padding:.9rem 1.3rem; background:var(--rose);
          display:flex; align-items:center; gap:.6rem; }
        .video-label i, .video-label span { color:#fff; }
        .video-label span { font-size:.85rem; font-weight:500; letter-spacing:.06em; }

        /* animations */
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .anim-1 { animation:fadeUp .7s .15s both; }
        .anim-2 { animation:fadeUp .7s .25s both; }
        .anim-3 { animation:fadeUp .7s .35s both; }
        .anim-4 { animation:fadeUp .7s .45s both; }
        .anim-5 { animation:fadeUp .7s .55s both; }
        .anim-6 { animation:fadeUp .7s .65s both; }
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
            Explore Our <em>Nursing Foundation</em> Lab
          </h2>

          {/* ── Main Info Card ── */}
          <div className="main-card row g-0 mb-5">

            {/* LEFT — Illustration Panel */}
            <div className="col-lg-4 illus-panel anim-2">
              <div className="illus-icon-wrap">
                <i className="bi bi-clipboard2-heart-fill" />
              </div>
              <div className="illus-title">Nursing<br />Foundation Lab</div>
              <div className="illus-sub">
                Building core clinical skills and competencies for real-life patient care.
              </div>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-1">
                <span className="illus-badge"><i className="bi bi-heart-pulse-fill me-1" />Vital Signs</span>
                <span className="illus-badge"><i className="bi bi-bandaid-fill me-1" />First Aid</span>
                <span className="illus-badge"><i className="bi bi-person-fill me-1" />Patient Care</span>
                <span className="illus-badge"><i className="bi bi-activity me-1" />Clinical Skills</span>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div className="col-lg-8 bg-white p-4 p-lg-5 d-flex flex-column justify-content-center position-relative">
              <div className="corner-decor" />

              <div className="content-tag mb-3 anim-3">Foundational Nursing Training</div>

              <h3 className="content-title mb-3 anim-3">
                Nursing <span>Foundation Lab</span>
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
              Take a <em>Virtual Tour</em>
            </h3>

            <div className="row justify-content-center anim-6">
              <div className="col-lg-9 col-md-11">
                <div className="video-card">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    aria-label="Nursing Foundation Lab video tour"
                    style={{ width: '100%' }}
                  >
                    <source
                      src={`${ASSET_BASE}/videos/facility/NursingFoundationLab.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-label">
                    <i className="bi bi-camera-video-fill" />
                    <span>Nursing Foundation Lab — Facility Tour</span>
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