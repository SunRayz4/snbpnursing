'use client'

import React from 'react'
import Link from 'next/link'

const ASSET_BASE = process.env.NEXT_PUBLIC_STATIC_ASSETS
const MEDIA_BASE = `${ASSET_BASE}/videos/facility/`

const points = [
  {
    icon: 'bi-tree-fill',
    text: 'The college campus offers a spacious, green, and peaceful environment that is ideal for learning and personal growth. It is designed to provide students with a safe, clean, and student-friendly atmosphere that supports both academic and extracurricular activities.',
  },
  {
    icon: 'bi-buildings-fill',
    text: 'The campus includes well-maintained academic buildings, laboratories, library, computer lab, multipurpose hall, and sports facilities, ensuring all essential resources are easily accessible. Lush greenery and open spaces create a refreshing environment that enhances concentration and well-being.',
  },
  {
    icon: 'bi-shield-check',
    text: 'The institution maintains high standards of discipline, cleanliness, and security, providing a comfortable and motivating space for students and staff.',
  },
  {
    icon: 'bi-activity',
    text: 'The campus encourages a balanced lifestyle by promoting education, recreation, and overall personality development, making it a vibrant place for learning and growth.',
  },
]

const videos = [
  'collegecampus1.mp4',
  'collegecampus2.mp4',
  'collegecampus3.mp4',
  'principaloffice.mp4',
  'transport.mp4',
  'conference.mp4',
]

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=DM+Sans&display=swap" rel="stylesheet" />

      <style>{`
        :root {
          --rose:#b5475a; --rose-pale:#fdf0f2; --cream:#faf6f1;
          --text-dark:#2a1a1f; --text-mid:#5c3d46;
        }

        body { font-family:'DM Sans'; background:var(--cream); }

        .section-title { font-family:'Playfair Display'; color:var(--text-dark); }
        .section-title em { color:var(--rose); }

        .main-card { border-radius:20px; background:#fff; overflow:hidden; }

        .illus-panel {
          background:var(--rose-pale);
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          padding:2rem;
        }

        .illus-icon-wrap {
          width:90px; height:90px; border-radius:50%; background:#fff;
          display:flex; align-items:center; justify-content:center;
        }

        .illus-icon-wrap i { font-size:2rem; color:var(--rose); }

        .point-text { font-size:.9rem; color:var(--text-mid); }

        .lab-cta {
          background:var(--rose); color:#fff; border-radius:50px; padding:.6rem 1.5rem;
        }

        /* 🎥 GRID FOR 2 PER ROW */
        .video-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        /* 📱 MOBILE */
        @media (max-width: 768px) {
          .video-grid {
            grid-template-columns: 1fr;
          }
        }

        .media-card {
          border-radius:16px;
          overflow:hidden;
          background:#1a1a2e;
        }

        .media-card video {
          width:100%;
          height:260px;
          object-fit:cover;
        }

        .media-label {
          background:var(--rose);
          color:#fff;
          padding:.7rem;
          font-size:.85rem;
        }
      `}</style>

      <main className="py-5">
        <div className="container" style={{ maxWidth: 1160 }}>

          {/* TITLE */}
          <h2 className="section-title text-center mb-5">
            Explore Our <em>College Campus</em>
          </h2>

          {/* MAIN CARD */}
          <div className="main-card row g-0 mb-5">

            {/* LEFT */}
            <div className="col-lg-4 illus-panel">
              <div className="illus-icon-wrap">
                <i className="bi bi-tree-fill" />
              </div>
              <h5 className="mt-3">College Campus</h5>
              <p className="text-center small">
                A green and peaceful environment for learning and growth.
              </p>
            </div>

            {/* RIGHT */}
            <div className="col-lg-8 p-4">
              <h4>
                Campus <span style={{ color: '#b5475a' }}>Life</span>
              </h4>

              <ul className="list-unstyled">
                {points.map((p, i) => (
                  <li key={i} className="d-flex gap-2 mb-2">
                    <i className={`bi ${p.icon}`} />
                    <span className="point-text">{p.text}</span>
                  </li>
                ))}
              </ul>

              <Link href="#media" className="btn lab-cta">
                View Campus <i className="bi bi-play-circle ms-1" />
              </Link>
            </div>
          </div>

          {/* 🎥 VIDEO GRID */}
          <div id="media">
            <h3 className="text-center mb-4">
              Campus <em>Tour</em>
            </h3>

           <div className="video-grid">
  {videos.map((vid, index) => {
    // 🔥 Convert filename → readable title
    const label = vid
      .replace('.mp4', '')
      .replace(/([A-Z])/g, ' $1')
      .replace(/([0-9]+)/g, ' $1')
      .replace(/^\w/, (c) => c.toUpperCase())

    return (
      <div key={index} className="media-card">
        <video controls>
          <source src={`${MEDIA_BASE}${vid}`} type="video/mp4" />
        </video>
        <div className="media-label">
          <i className="bi bi-camera-video-fill me-2" />
          {label}
        </div>
      </div>
    )
  })}
</div>
          </div>

        </div>
      </main>
    </>
  )
}