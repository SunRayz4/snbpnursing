'use client'

import React from 'react'
import Link from 'next/link'

const ASSET_BASE = process.env.NEXT_PUBLIC_STATIC_ASSETS

const points = [
  {
    icon: 'bi-egg-fried',
    text: 'The Nutrition Lab is designed to provide students with practical knowledge about balanced diet, therapeutic nutrition, and food preparation.',
  },
  {
    icon: 'bi-heart-pulse-fill',
    text: 'It helps students understand the importance of nutrition in maintaining health and preventing diseases.',
  },
  {
    icon: 'bi-tools',
    text: 'The lab is well-equipped with cooking equipment, measuring tools, food models, charts, and dietary guides.',
  },
  {
    icon: 'bi-calculator-fill',
    text: 'Students gain hands-on experience in meal planning, calorie calculation, and diet modification.',
  },
  {
    icon: 'bi-basket-fill',
    text: 'Training includes hygienic food preparation and planning diets for different age groups and health conditions.',
  },
  {
    icon: 'bi-shield-fill-check',
    text: 'A clean, safe, and well-organized environment is maintained to ensure effective learning and skill development.',
  },
]
const videos = [
  {
    label: 'Nutrition Lab 1',
    icon: 'bi-play-circle-fill',
    file: 'nutrition1.mp4',
    color: '#b5475a',
    badge: 'Nutrition Lab Demo',
  },
  {
    label: 'Nutrition Lab 2',
    icon: 'bi-play-circle-fill',
    file: 'nutrition2.mp4',
    color: '#3a6ea5',
    badge: 'Practical Session',
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
          --rose:#b5475a; --blue:#3a6ea5;
          --rose-pale:#fdf0f2; --blue-pale:#eef4fb;
          --gold:#c9975a; --cream:#faf6f1;
          --text-dark:#2a1a1f; --text-mid:#5c3d46;
        }
        body { font-family:'DM Sans',sans-serif; background:var(--cream); }

        .eyebrow-line { flex:1;height:1px;background:linear-gradient(90deg,transparent,#e8a0ad,transparent); }
        .eyebrow-text { font-size:.7rem;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:var(--rose); }

        .section-title { font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3.5vw,2.8rem);color:var(--text-dark); }
        .section-title em { color:var(--rose); }

        .info-card { border-radius:20px;overflow:hidden;box-shadow:0 24px 72px rgba(90,20,35,.13);background:#fff; }

        .content-tag { font-size:.7rem;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--rose); }
        .content-title { font-family:'Playfair Display',serif;font-size:clamp(1.4rem,2.4vw,2rem); }
        .content-title span { color:var(--rose); }

        .divider { width:48px;height:3px;border-radius:3px;background:linear-gradient(90deg,var(--rose),var(--gold)); }

        .point-item { border-left:3px solid var(--rose-pale); }
        .point-icon { color:var(--rose); }
        .point-text { font-size:.87rem;color:var(--text-mid); }

        .lab-cta { background:var(--rose);border:none;border-radius:50px;padding:.7rem 1.8rem;color:#fff; }

        .illus-panel {
          background:linear-gradient(160deg,var(--rose-pale),#fff5f7);
          display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem;
        }

        .illus-icon-wrap {
          width:100px;height:100px;border-radius:50%;
          background:#fff;display:flex;align-items:center;justify-content:center;
        }

        .video-card { border-radius:16px;overflow:hidden;background:#1a1a2e; }
        .video-card video { width:100%;aspect-ratio:16/9;object-fit:cover; }
        .video-label { padding:.9rem;display:flex;gap:.5rem;color:#fff; }

      `}</style>

      <main className="min-vh-100 py-5">
        <div className="container" style={{ maxWidth: 1160 }}>

          {/* Header */}
          <div className="d-flex align-items-center gap-3 mb-2">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Campus Facilities</span>
            <div className="eyebrow-line" />
          </div>

          <h2 className="section-title text-center mb-5">
            Explore Our <em>Nutrition Lab</em>
          </h2>

          {/* Info Card */}
          <div className="info-card row g-0 mb-5">

            {/* LEFT IMAGES */}
            <div className="col-lg-4 illus-panel">
              <img
  src={`${ASSET_BASE}/videos/facility/nutrition1.jpeg`}
  className="img-fluid rounded mb-3"
  alt="Nutrition Lab"
/>
<img
  src={`${ASSET_BASE}/videos/facility/nutrition2.jpeg`}
  className="img-fluid rounded"
  alt="Nutrition Lab"
/>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-8 p-4">
              <div className="content-tag mb-3">Nutrition & Dietetics</div>

              <h3 className="content-title mb-3">
                Practical <span>Nutrition Lab</span>
              </h3>

              <div className="divider mb-3" />

              <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                {points.map((p, i) => (
                  <li key={i} className="point-item d-flex gap-2 ps-2 py-1">
                    <i className={`bi ${p.icon} point-icon`} />
                    <span className="point-text">{p.text}</span>
                  </li>
                ))}
              </ul>

              <Link href="#videos" className="btn lab-cta">
                View Lab Videos
              </Link>
            </div>
          </div>

          {/* VIDEOS */}
          <div id="videos">
            <h3 className="text-center mb-4">Virtual Lab Tour</h3>

            <div className="row g-4">
              {videos.map((v, i) => (
                <div key={i} className="col-md-6">
                  <div className="video-card">
                    <video controls>
                      <source
                       src={`${ASSET_BASE}/videos/facility/${v.file}`}
                        type="video/mp4"
                      />
                    </video>
                    <div className="video-label" style={{ background: v.color }}>
                      <i className={`bi ${v.icon}`} />
                      <span>{v.badge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </>
  )
}