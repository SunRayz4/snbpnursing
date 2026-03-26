'use client'

import React from 'react'
import Link from 'next/link'

const ASSET_BASE = process.env.NEXT_PUBLIC_STATIC_ASSETS

const points = [
  {
    icon: 'bi-people-fill',
    text: 'The Common Room is provided separately for boys and girls, offering a dedicated space for students to relax, interact, and refresh themselves during their free time.',
  },
  {
    icon: 'bi-house-heart-fill',
    text: 'It provides a comfortable and welcoming environment that supports both recreation and informal learning.',
  },
  {
    icon: 'bi-controller',
    text: 'The room is furnished with comfortable seating, tables, reading materials, and indoor games, creating a pleasant atmosphere for students to unwind.',
  },
  {
    icon: 'bi-chat-dots-fill',
    text: 'It also serves as an ideal space for group discussions, peer interaction, and social bonding.',
  },
  {
    icon: 'bi-emoji-smile-fill',
    text: 'The Common Room plays an important role in promoting mental well-being, reducing stress, and supporting overall student development by maintaining a balance between academic activities and relaxation.',
  },
  {
    icon: 'bi-shield-fill-check',
    text: 'A clean, safe, and well-maintained environment is ensured at all times, making it a valuable facility that enhances the overall campus life experience of students.',
  },
]

const videos = [
  {
    label: 'Girls',
    icon: 'bi-gender-female',
    file: 'girlscommonroom.mp4',
    color: '#b5475a',
    badge: '♀ Girls Common Room',
  },
  {
    label: 'Boys',
    icon: 'bi-gender-male',
    file: 'boyscommonroom.mp4',
    color: '#3a6ea5',
    badge: '♂ Boys Common Room',
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
          --rose:      #b5475a;
          --blue:      #3a6ea5;
          --rose-pale: #fdf0f2;
          --blue-pale: #eef4fb;
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

        /* titles */
        .section-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.8rem,3.5vw,2.8rem); color:var(--text-dark); }
        .section-title em { font-style:italic; color:var(--rose); }

        /* info card */
        .info-card { border-radius:20px; overflow:hidden;
          box-shadow:0 24px 72px rgba(90,20,35,.13); background:#fff; }

        /* content tag */
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

        /* illustration panel */
        .illus-panel { background: linear-gradient(160deg, var(--rose-pale) 0%, #fff5f7 100%);
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; gap:1.2rem; padding:2.8rem 2rem; }
        .illus-icon-wrap { width:100px; height:100px; border-radius:50%;
          background:#fff; box-shadow:0 8px 32px rgba(181,71,90,.18);
          display:flex; align-items:center; justify-content:center; }
        .illus-icon-wrap i { font-size:2.8rem; color:var(--rose); }
        .illus-title { font-family:'Playfair Display',serif; font-size:1.4rem;
          color:var(--text-dark); text-align:center; }
        .illus-sub { font-size:.82rem; color:var(--text-mid); text-align:center;
          max-width:220px; line-height:1.6; }

        /* video section */
        .video-section-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.4rem,2.5vw,2rem); color:var(--text-dark); }
        .video-section-title em { font-style:italic; color:var(--rose); }

        /* video cards */
        .video-card { border-radius:16px; overflow:hidden;
          box-shadow:0 12px 48px rgba(0,0,0,.12);
          background:#1a1a2e; transition:transform .3s,box-shadow .3s; }
        .video-card:hover { transform:translateY(-4px);
          box-shadow:0 20px 60px rgba(0,0,0,.18); }
        .video-card video { width:100%; display:block;
          aspect-ratio:16/9; object-fit:cover; }
        .video-label { padding:.9rem 1.2rem;
          display:flex; align-items:center; gap:.6rem; }
        .video-label i { font-size:1.1rem; }
        .video-label-text { font-size:.85rem; font-weight:500;
          letter-spacing:.06em; color:#fff; }

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
          <div className="d-flex align-items-center gap-3 mb-2">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Campus Facilities</span>
            <div className="eyebrow-line" />
          </div>

          {/* ── Section Title ── */}
          <h2 className="section-title text-center mb-5">
            Explore Our <em>Common Room</em> Facility
          </h2>

          {/* ── Info Card ── */}
          <div className="info-card row g-0 mb-5">

            {/* LEFT — Illustration Panel */}
            <div className="col-lg-4 illus-panel anim-1">
              <div className="illus-icon-wrap">
                <i className="bi bi-people-fill" />
              </div>
              <div className="illus-title">Common Room</div>
              <div className="illus-sub">
                Separate spaces for boys &amp; girls — relax, refresh, and reconnect.
              </div>
              <div className="d-flex gap-3 mt-2">
                <span className="badge rounded-pill px-3 py-2" style={{ background: '#fdf0f2', color: '#b5475a', border: '1px solid #e8a0ad', fontSize: '.72rem', fontWeight: 500 }}>
                  <i className="bi bi-gender-female me-1" /> Girls Room
                </span>
                <span className="badge rounded-pill px-3 py-2" style={{ background: '#eef4fb', color: '#3a6ea5', border: '1px solid #aac4e2', fontSize: '.72rem', fontWeight: 500 }}>
                  <i className="bi bi-gender-male me-1" /> Boys Room
                </span>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div className="col-lg-8 bg-white p-4 p-lg-5 d-flex flex-column justify-content-center position-relative">
              <div style={{ position:'absolute', top:0, right:0, width:120, height:120,
                background:'radial-gradient(circle at top right,#fdf0f2,transparent 70%)',
                borderRadius:'0 0 0 0', pointerEvents:'none' }} />

              <div className="content-tag mb-3 anim-2">Student Recreation &amp; Wellness</div>

              <h3 className="content-title mb-3 anim-2">
                Boys &amp; Girls <span>Common Room</span>
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
                <Link href="#videos" className="btn lab-cta d-inline-flex align-items-center gap-2">
                  View Facility Videos
                  <i className="bi bi-play-circle-fill arrow" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Video Section ── */}
          <div id="videos">
            <div className="d-flex align-items-center gap-3 mb-2">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Facility Tour</span>
              <div className="eyebrow-line" />
            </div>
            <h3 className="video-section-title text-center mb-4">
              Take a <em>Virtual Tour</em>
            </h3>

            <div className="row g-4">
              {videos.map((v, i) => (
                <div key={i} className="col-md-6 anim-6">
                  <div className="video-card">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster=""
                      aria-label={`${v.label} Common Room video`}
                    >
                      <source
                        src={`${ASSET_BASE}/videos/facility/${v.file}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <div className="video-label" style={{ background: v.color }}>
                      <i className={`bi ${v.icon}`} style={{ color: '#fff' }} />
                      <span className="video-label-text">{v.badge}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}