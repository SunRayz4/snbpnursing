'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ASSET_BASE = process.env.NEXT_PUBLIC_STATIC_ASSETS

const points = [
  {
    icon: 'bi-basket2-fill',
    text: 'The institution provides a spacious and well-maintained playground and sports facilities to promote physical fitness and overall well-being.',
  },
  {
    icon: 'bi-football-fill',
    text: 'The ground is suitable for various outdoor sports such as cricket, football, volleyball, and athletics.',
  },
  {
    icon: 'bi-people-fill',
    text: 'Students are encouraged to actively participate in sports activities, competitions, and physical training programs.',
  },
  {
    icon: 'bi-trophy-fill',
    text: 'Participation in sports helps in developing discipline, leadership qualities, and team spirit.',
  },
  {
    icon: 'bi-house-fill',
    text: 'Indoor games and recreational activities are supported to maintain a balanced approach to physical and mental health.',
  },
  {
    icon: 'bi-check-circle-fill',
    text: 'Playground and sports facilities are maintained in a safe and organized manner for students to stay active.',
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
          --rose:        #b5475a;
          --rose-pale:   #fdf0f2;
          --rose-light:  #e8a0ad;
          --gold:        #c9975a;
          --cream:       #faf6f1;
          --text-dark:   #1b2e1d;
          --text-mid:    #3d5c41;
        }
        body { font-family: 'DM Sans', sans-serif; background: var(--cream); }

        /* Eyebrow */
        .eyebrow-line { flex:1; height:1px; background:linear-gradient(90deg,transparent,var(--rose-light),transparent); }
        .eyebrow-text { font-size:.7rem; font-weight:500; letter-spacing:.22em; text-transform:uppercase; color:var(--rose); white-space:nowrap; }

        /* Section Title */
        .section-title { font-family:'Playfair Display',serif; font-size:clamp(1.8rem,3.5vw,2.8rem); color:var(--text-dark); }
        .section-title em { font-style:italic; color:var(--rose); }

        /* Main Card */
        .main-card { border-radius:20px; overflow:hidden; box-shadow:0 24px 72px rgba(181,71,90,.13); background:#fff; }

        /* Illustration Panel */
        .illus-panel { background:linear-gradient(160deg,var(--rose-pale) 0%,#fdf6f6 100%); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1.1rem; padding:2.8rem 1.8rem; }
        .illus-icon-wrap { width:96px; height:96px; border-radius:50%; background:#fff; box-shadow:0 8px 28px rgba(181,71,90,.2); display:flex; align-items:center; justify-content:center; }
        .illus-icon-wrap i { font-size:2.6rem; color:var(--rose); }
        .illus-title { font-family:'Playfair Display',serif; font-size:1.3rem; color:var(--text-dark); text-align:center; line-height:1.3; }
        .illus-sub { font-size:.81rem; color:var(--text-mid); text-align:center; max-width:210px; line-height:1.6; }
        .illus-badge { background:#fff; color:var(--rose); border:1px solid var(--rose-light); font-size:.68rem; font-weight:500; padding:.3rem .85rem; border-radius:30px; letter-spacing:.07em; white-space:nowrap; }

        /* Content */
        .content-tag { font-size:.7rem; font-weight:500; letter-spacing:.18em; text-transform:uppercase; color:var(--rose); }
        .content-tag::before { content:''; display:inline-block; width:24px; height:2px; background:var(--gold); border-radius:2px; margin-right:.5rem; vertical-align:middle; }
        .content-title { font-family:'Playfair Display',serif; font-size:clamp(1.35rem,2.3vw,1.95rem); color:var(--text-dark); line-height:1.3; }
        .content-title span { color:var(--rose); }
        .divider { width:48px; height:3px; border-radius:3px; background:linear-gradient(90deg,var(--rose),var(--gold)); }
        .welcome-text { font-size:.94rem; font-weight:500; color:var(--text-mid); }
        .corner-decor { position:absolute; top:0; right:0; width:120px; height:120px; pointer-events:none; background:radial-gradient(circle at top right,var(--rose-pale),transparent 70%); }

        /* Points */
        .point-item { border-left:3px solid var(--rose-pale); transition:border-color .2s; }
        .point-item:hover { border-left-color:var(--rose); }
        .point-icon { color:var(--rose); font-size:1.05rem; margin-top:.15rem; flex-shrink:0; }
        .point-text { font-size:.87rem; line-height:1.7; color:var(--text-mid); }

        /* CTA */
        .lab-cta { background:var(--rose); border:none; border-radius:50px; padding:.7rem 1.8rem; font-size:.85rem; font-weight:500; color:#fff; box-shadow:0 8px 28px rgba(181,71,90,.35); transition:transform .22s,box-shadow .22s,background .22s; }
        .lab-cta:hover { background:#923b45; transform:translateY(-2px); box-shadow:0 14px 36px rgba(181,71,90,.45); color:#fff; }
        .lab-cta .arrow { transition:transform .22s; }
        .lab-cta:hover .arrow { transform:translateX(4px); }

        /* Media */
        .media-title { font-family:'Playfair Display',serif; font-size:clamp(1.3rem,2.2vw,1.9rem); color:var(--text-dark); }
        .media-title em { font-style:italic; color:var(--rose); }
        .video-card { border-radius:16px; overflow:hidden; box-shadow:0 14px 48px rgba(181,71,90,.18); background:#0d2214; transition:transform .3s,box-shadow .3s; }
        .video-card:hover { transform:translateY(-4px); box-shadow:0 22px 60px rgba(181,71,90,.28); }
        .video-card video { width:100%; display:block; aspect-ratio:16/9; object-fit:cover; }
        .video-label { padding:.85rem 1.3rem; background:var(--rose); display:flex; align-items:center; gap:.6rem; }
        .video-label i, .video-label span { color:#fff; }
        .video-label span { font-size:.84rem; font-weight:500; letter-spacing:.05em; }

        .img-card { border-radius:16px; overflow:hidden; box-shadow:0 14px 48px rgba(181,71,90,.15); transition:transform .3s,box-shadow .3s; position:relative; }
        .img-card:hover { transform:translateY(-4px); box-shadow:0 22px 60px rgba(181,71,90,.25); }
        .img-inner { position:relative; width:100%; aspect-ratio:16/9; overflow:hidden; }
        .img-inner img { object-fit:cover; transition:transform .6s ease; }
        .img-overlay-grad { position:absolute; inset:0; pointer-events:none; background:linear-gradient(160deg,rgba(181,71,90,.12),rgba(27,46,29,.3)); }
        .img-caption { padding:.85rem 1.2rem; background:var(--rose-pale); display:flex; align-items:center; gap:.55rem; }
        .img-caption i { color:var(--rose); font-size:1rem; }
        .img-caption span { font-size:.82rem; font-weight:500; color:var(--text-mid); letter-spacing:.04em; }

        /* Animations */
        @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        .anim-1 { animation:fadeUp .7s .1s both; }
        .anim-2 { animation:fadeUp .7s .2s both; }
        .anim-3 { animation:fadeUp .7s .3s both; }
        .anim-4 { animation:fadeUp .7s .4s both; }
        .anim-5 { animation:fadeUp .7s .5s both; }
        .anim-6 { animation:fadeUp .7s .6s both; }
        .anim-7 { animation:fadeUp .7s .7s both; }
      `}</style>

      <main className="min-vh-100 py-5">
        <div className="container" style={{ maxWidth: 1160 }}>

          {/* Eyebrow */}
          <div className="d-flex align-items-center gap-3 mb-2 anim-1">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Playground & Sports</span>
            <div className="eyebrow-line" />
          </div>

          {/* Section Title */}
          <h2 className="section-title text-center mb-5 anim-1">
            Explore Our <em>Sports Facilities</em>
          </h2>

          {/* Main Info Card */}
          <div className="main-card row g-0 mb-5">

            {/* Left Illustration */}
            <div className="col-lg-4 illus-panel anim-2">
              <div className="illus-icon-wrap">
                <i className="bi bi-balloon-fill" />
              </div>
              <div className="illus-title">Playground & Sports</div>
              <div className="illus-sub">
                Promoting fitness, teamwork, and student well-being.
              </div>
              <div className="d-flex flex-wrap justify-content-center gap-2 mt-1">
                <span className="illus-badge"><i className="bi bi-football-fill me-1" />Outdoor Sports</span>
                <span className="illus-badge"><i className="bi bi-trophy-fill me-1" />Competitions</span>
                <span className="illus-badge"><i className="bi bi-people-fill me-1" />Team Spirit</span>
                <span className="illus-badge"><i className="bi bi-house-fill me-1" />Indoor Games</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-8 bg-white p-4 p-lg-5 d-flex flex-column justify-content-center position-relative">
              <div className="corner-decor" />

              <div className="content-tag mb-3 anim-3">Campus Life</div>

              <h3 className="content-title mb-3 anim-3">
                Playground & <span>Sports Facilities</span>
              </h3>

              <div className="divider mb-3 anim-3" />

              <p className="welcome-text mb-3 anim-3">
                Welcome to our sports facilities.
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
                <Link href="#media" className="btn lab-cta d-inline-flex align-items-center gap-2">
                  View Gallery
                  <i className="bi bi-play-circle-fill arrow" />
                </Link>
              </div>
            </div>
          </div>

          {/* Media Section */}
          <div id="media">

            <div className="d-flex align-items-center gap-3 mb-2 anim-5">
              <div className="eyebrow-line" />
              <span className="eyebrow-text">Facility Tour</span>
              <div className="eyebrow-line" />
            </div>

            <h3 className="media-title text-center mb-4 anim-5">
              Sports <em>Video & Gallery</em>
            </h3>

            {/* Video */}
            <div className="row justify-content-center mb-4 anim-6">
              <div className="col-lg-9 col-md-11">
                <div className="video-card">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    aria-label="Sports facilities video tour"
                    style={{ width: '100%' }}
                  >
                    <source
                      src={`${ASSET_BASE}/videos/facility/sport.mp4`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="video-label">
                    <i className="bi bi-camera-video-fill" />
                    <span>Playground & Sports — Facility Tour</span>
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