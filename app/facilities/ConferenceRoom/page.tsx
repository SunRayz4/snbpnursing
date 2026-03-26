'use client'

import React from 'react'
import Link from 'next/link'

const ASSET_BASE = process.env.NEXT_PUBLIC_STATIC_ASSETS

const points = [
  {
    icon: 'bi-people-fill',
    text: 'The Conference Room is a well-equipped and professional space designed for conducting meetings, discussions, presentations, and academic activities. It provides a formal and comfortable environment that supports effective communication and decision-making.',
  },
  {
    icon: 'bi-easel-fill',
    text: 'The room is furnished with conference tables, comfortable seating, audio-visual equipment, projectors, and presentation tools, ensuring smooth and efficient conduct of meetings and seminars.',
  },
  {
    icon: 'bi-diagram-3-fill',
    text: 'It is used for faculty meetings, administrative discussions, workshops, seminars, guest lectures, and student presentations, making it an important part of the institution’s academic and administrative infrastructure.',
  },
  {
    icon: 'bi-volume-mute-fill',
    text: 'A quiet, organized, and well-maintained atmosphere is ensured at all times, creating an ideal setting for productive interactions and collaborative work.',
  },
]

export default function Page() {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* SAME STYLES — NO CHANGE */}
      <style>{`
        :root {
          --rose:#b5475a; --rose-pale:#fdf0f2; --rose-light:#e8a0ad;
          --gold:#c9975a; --cream:#faf6f1;
          --text-dark:#2a1a1f; --text-mid:#5c3d46;
        }
        body { font-family:'DM Sans',sans-serif; background:var(--cream); }
        .eyebrow-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--rose-light),transparent);}
        .eyebrow-text{font-size:.7rem;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:var(--rose);}
        .section-title{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3.5vw,2.8rem);color:var(--text-dark);}
        .section-title em{color:var(--rose);}
        .main-card{border-radius:20px;overflow:hidden;box-shadow:0 24px 72px rgba(90,20,35,.13);background:#fff;}
        .illus-panel{background:linear-gradient(160deg,var(--rose-pale),#fff5f7);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2.8rem;}
        .illus-icon-wrap{width:100px;height:100px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;}
        .illus-icon-wrap i{font-size:2.5rem;color:var(--rose);}
        .illus-title{font-family:'Playfair Display';font-size:1.3rem;text-align:center;}
        .illus-sub{font-size:.85rem;color:var(--text-mid);text-align:center;}
        .content-title span{color:var(--rose);}
        .point-text{font-size:.87rem;color:var(--text-mid);}
        .lab-cta{background:var(--rose);color:#fff;border-radius:50px;padding:.6rem 1.5rem;}
        .video-card{border-radius:16px;overflow:hidden;background:#1a1a2e;}
        .video-label{background:var(--rose);color:#fff;padding:.8rem;}
      `}</style>

      <main className="min-vh-100 py-5">
        <div className="container" style={{ maxWidth: 1160 }}>

          {/* TITLE */}
          <div className="d-flex align-items-center gap-3 mb-2">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Meeting & Presentation Space</span>
            <div className="eyebrow-line" />
          </div>

          <h2 className="section-title text-center mb-5">
            Explore Our <em>Conference Room</em>
          </h2>

          {/* MAIN CARD */}
          <div className="main-card row g-0 mb-5">

            {/* LEFT */}
            <div className="col-lg-4 illus-panel">
              <div className="illus-icon-wrap">
                <i className="bi bi-building-fill-gear" />
              </div>
              <div className="illus-title">Conference Room</div>
              <div className="illus-sub">
                A professional space for meetings, discussions, and presentations.
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-8 p-4">
              <h3 className="content-title mb-3">
                Conference <span>Room</span>
              </h3>

              <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                {points.map((p, i) => (
                  <li key={i} className="d-flex gap-2">
                    <i className={`bi ${p.icon}`} />
                    <span className="point-text">{p.text}</span>
                  </li>
                ))}
              </ul>

              <Link href="#video" className="btn lab-cta">
                Watch Room Tour <i className="bi bi-play-circle-fill ms-1" />
              </Link>
            </div>
          </div>

          {/* VIDEO */}
          <div id="video">
            <h3 className="text-center mb-4">
              Take a <em>Virtual Tour</em>
            </h3>

            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="video-card">
                  <video controls style={{ width: '100%' }}>
                    <source
                      src={`${ASSET_BASE}/videos/facility/conference.mp4`}
                      type="video/mp4"
                    />
                  </video>
                  <div className="video-label">
                    <i className="bi bi-camera-video-fill me-2" />
                    Conference Room — Facility Tour
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}