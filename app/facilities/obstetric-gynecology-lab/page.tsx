'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ASSET_BASE = process.env.NEXT_PUBLIC_STATIC_ASSETS

const points = [
  {
    icon: 'bi-heart-pulse-fill',
    text: 'This lab is designed to provide students with knowledge and practical skills in maternal and women\'s health care. It focuses on the care of women during pregnancy, childbirth, postnatal period, and gynecological conditions.',
  },
  {
    icon: 'bi-capsule-pill',
    text: 'The lab is equipped with maternity mannequins, fetal models, pelvic models, and delivery simulators to help students practice essential procedures.',
  },
  {
    icon: 'bi-clipboard2-pulse-fill',
    text: 'Students learn skills such as antenatal examination, conducting normal delivery, postnatal care, and newborn care.',
  },
  {
    icon: 'bi-shield-fill-check',
    text: 'Training is provided in a safe and supervised environment to build confidence and clinical competence.',
  },
  {
    icon: 'bi-activity',
    text: 'We also focus on managing obstetric emergencies and providing quality care to mothers and newborns.',
  },
  {
    icon: 'bi-mortarboard-fill',
    text: 'This lab prepares students for real clinical experience in maternity and gynecological settings.',
  },
]

export default function Page() {
  return (
    <>
      {/* Bootstrap 5 + Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      <style>{`
        :root {
          --rose:      #b5475a;
          --rose-pale: #fdf0f2;
          --gold:      #c9975a;
          --cream:     #faf6f1;
          --text-dark: #2a1a1f;
          --text-mid:  #5c3d46;
        }
        body { font-family: 'DM Sans', sans-serif; background: var(--cream); }

        /* eyebrow */
        .eyebrow-line { flex:1; height:1px;
          background: linear-gradient(90deg, transparent, #e8a0ad, transparent); }
        .eyebrow-text { font-size:.7rem; font-weight:500; letter-spacing:.22em;
          text-transform:uppercase; color:var(--rose); white-space:nowrap; }

        /* section title */
        .section-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.8rem,3.5vw,2.8rem); color:var(--text-dark); }
        .section-title em { font-style:italic; color:var(--rose); }

        /* card */
        .lab-card { border-radius:20px; overflow:hidden;
          box-shadow:0 24px 72px rgba(90,20,35,.14); }

        /* image */
        .img-wrap { position:relative; min-height:520px; overflow:hidden; }
        .img-wrap img { object-fit:cover; transition:transform .7s ease; }
        .lab-card:hover .img-wrap img { transform:scale(1.04); }
        .img-overlay { position:absolute; inset:0; pointer-events:none;
          background:linear-gradient(135deg,rgba(181,71,90,.18),rgba(42,26,31,.38)); }
        .img-badge { position:absolute; bottom:1.4rem; left:1.4rem; z-index:2;
          background:var(--rose); color:#fff; font-size:.7rem; font-weight:500;
          letter-spacing:.14em; text-transform:uppercase;
          padding:.4rem 1rem; border-radius:30px;
          box-shadow:0 4px 18px rgba(181,71,90,.45); }

        /* content */
        .content-side { background:#fff; }
        .content-corner { position:absolute; top:0; right:0; width:120px; height:120px;
          background:radial-gradient(circle at top right,var(--rose-pale),transparent 70%);
          border-radius:0 0 0 0; pointer-events:none; }
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
        .welcome-text { font-size:.95rem; font-weight:500; color:var(--text-mid); }

        /* points */
        .point-item { border-left:3px solid var(--rose-pale);
          transition:border-color .2s; }
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
        .anim-6 { animation:fadeUp .9s .6s  both; }
        .anim-7 { animation:fadeUp .7s .65s both; }
      `}</style>

      <main className="min-vh-100 d-flex align-items-center py-5">
        <div className="container" style={{ maxWidth: 1160 }}>

          {/* ── Eyebrow ── */}
          <div className="d-flex align-items-center gap-3 mb-2">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Nursing Simulation Labs</span>
            <div className="eyebrow-line" />
          </div>

          {/* ── Section Title ── */}
          <h2 className="section-title text-center mb-5">
            Explore Our <em>Specialised</em> Clinical Labs
          </h2>

          {/* ── Card ── */}
          <div className="lab-card row g-0">

            {/* LEFT — Image */}
            <div className="col-lg-6">
              <div className="img-wrap h-100">
                <Image
                  src={`${ASSET_BASE}/videos/facility/ObstetricGynecologica.jpeg`}
                  alt="Obstetric and Gynecological Nursing Lab"
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  priority
                />
                <div className="img-overlay" />
                <span className="img-badge anim-6">✦ Clinical Simulation</span>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div className="col-lg-6 content-side position-relative p-4 p-lg-5 d-flex flex-column justify-content-center">
              <div className="content-corner" />

              <div className="content-tag mb-3 anim-1">
                Maternal &amp; Women&apos;s Health
              </div>

              <h3 className="content-title mb-3 anim-2">
                Obstetric &amp; <span>Gynecological</span>
                <br />Nursing Lab
              </h3>

              <div className="divider mb-3 anim-3" />

              <p className="welcome-text mb-3 anim-3">
                Welcome to our Obstetric and Gynecological Nursing Lab.
              </p>

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
                  Explore the Lab
                  <i className="bi bi-arrow-right arrow" />
                </Link>
              </div>

            </div>

          </div>

          {/* ── Video Section ── */}
          <div id="video" className="mt-5 anim-7">
            <div className="d-flex align-items-center gap-3 mb-2">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Facility Tour</span>
              <div className="eyebrow-line" />
            </div>

            <h3 className="section-title text-center mb-4" style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)' }}>
              Take a <em>Virtual Tour</em>
            </h3>

            <div className="row justify-content-center">
              <div className="col-lg-9 col-md-11">
                <div className="video-card">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    aria-label="Obstetric and Gynecological Nursing Lab video tour"
                    style={{ width: '100%' }}
                  >
                    <source
                      src={`${ASSET_BASE}/videos/facility/ObstetricGynecologica.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-label">
                    <i className="bi bi-camera-video-fill" />
                    <span>Obstetric &amp; Gynecological Nursing Lab — Facility Tour</span>
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