// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Target, Eye } from "lucide-react"

// export default function VisionMissionPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative">
//         <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
//           <div className="text-center mb-12">
//             <div className="inline-flex items-center gap-2 bg-pink-50 px-3 py-1 rounded-full mb-4">
//               <Eye className="h-4 w-4 text-accent-pink" />
//               <span className="text-xs font-medium text-accent-pink">Our Core Philosophy</span>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-extrabold text-dark-navy leading-tight mb-4">
//               Our <span className="text-accent-pink">Vision & Mission</span>
//             </h1>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Guiding principles that shape our commitment to nursing excellence and healthcare transformation
//             </p>
//           </div>

//           {/* Vision & Mission Cards */}
//         {/* Vision & Mission - Vertically stacked layout */}
// <div className="flex flex-col gap-10 mb-20 relative z-10">
//   {/* Vision Card */}
//   <Card className="relative border-0 shadow-xl bg-white hover:scale-[1.01] transition-transform duration-300 rounded-2xl">
//     <div className="p-10 h-full">
//       <CardHeader className="px-0">
//         <div className="flex items-center space-x-4 mb-6">
//           <div className="p-4 rounded-full bg-secondary-pink/10 shadow-md">
//             <Eye className="h-8 w-8 text-accent-pink" />
//           </div>
//           <CardTitle className="text-2xl font-bold text-accent-pink">Our Vision</CardTitle>
//         </div>
//       </CardHeader>
//       <CardContent className="px-0">
//         <p className="text-gray-600 text-base leading-relaxed tracking-wide">
//           To be a globally recognized leader in nursing education, research, and practice, advancing compassionate and evidence-based care. With a commitment to excellence, innovation, and community partnership, our School of Nursing Institute strives to empower future generations of nurses who will transform healthcare delivery and improve patient outcomes worldwide. We envision a future where our graduates lead with integrity, empathy, and clinical expertise, driving positive change in healthcare systems and positively impacting the health and well-being of individuals and communities.
//         </p>
//       </CardContent>
//     </div>
//   </Card>

//   {/* Mission Card */}
//   <Card className="relative border-0 shadow-xl bg-white hover:scale-[1.01] transition-transform duration-300 rounded-2xl">
//     <div className="p-10 h-full">
//       <CardHeader className="px-0">
//         <div className="flex items-center space-x-4 mb-6">
//           <div className="p-4 rounded-full bg-secondary-pink/10 shadow-md">
//             <Target className="h-8 w-8 text-accent-pink" />
//           </div>
//           <CardTitle className="text-2xl font-bold text-accent-pink">Our Mission</CardTitle>
//         </div>
//       </CardHeader>
//       <CardContent className="px-0 space-y-4">
//         <p className="text-gray-600 text-base leading-relaxed tracking-wide">
//           At SNBP Institute of Nursing, our mission is to educate and empower future nurses who are dedicated to compassionate care, evidence-based practice, and leadership in healthcare. We are committed to fostering a learning environment that cultivates critical thinking, ethical decision-making, and lifelong learning. Through innovative curriculum, experiential learning opportunities, and interdisciplinary collaboration, we prepare our students to meet the challenges of a dynamic healthcare landscape.
//         </p>
//         <p className="text-gray-600 text-base leading-relaxed tracking-wide">
//           Our institute is dedicated to advancing nursing science through research that addresses current and emerging health issues. We strive to contribute to the body of nursing knowledge and promote best practices in patient care. With a focus on community engagement and service, we aim to improve health outcomes and reduce health disparities through partnerships with local and global communities. At SNBP Institute of Nursing, we uphold the highest standards of professionalism, integrity, and respect for diversity. We are committed to nurturing a diverse student body and faculty who reflect the populations we serve. By equipping our graduates with the knowledge, skills, and values necessary for excellence in nursing practice, we aim to make a positive impact on the health and well-being of individuals and communities.
//         </p>
//       </CardContent>
//     </div>
//   </Card>
// </div>


//           {/* Call to Action */}
//           <div className="mt-20 text-center bg-white border border-pink-100 rounded-2xl p-10 shadow-lg">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy mb-4">
//               Join Our Nursing Community
//             </h2>
//             <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-base">
//               Become part of an institution that's shaping the future of healthcare through excellence in nursing education
//             </p>
//             <button className="bg-accent-pink hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition duration-300">
//               Explore Programs
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }



'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Eye, Star } from 'lucide-react'

const missionPoints = [
  {
    icon: 'bi-book-fill',
    text: 'To provide quality nursing education based on scientific knowledge and clinical competence.',
  },
  {
    icon: 'bi-heart-fill',
    text: 'To promote ethical values, compassion, and professional responsibility among nursing students.',
  },
  {
    icon: 'bi-person-heart-fill',
    text: 'To prepare nurses capable of delivering holistic and patient-centered healthcare services.',
  },
  {
    icon: 'bi-lightbulb-fill',
    text: 'To encourage research, innovation, and evidence-based nursing practice.',
  },
  {
    icon: 'bi-globe',
    text: 'To strengthen community health services through outreach programs and health education.',
  },
  {
    icon: 'bi-mortarboard-fill',
    text: 'To foster lifelong learning, leadership qualities, and professional excellence in the nursing profession.',
  },
]

const coreValues = [
  { icon: 'bi-award-fill',         color: '#1a3a6b', label: 'Excellence',              desc: 'Quality Education, Clinical Competence, Continuous Improvement' },
  { icon: 'bi-heart-fill',         color: '#c0392b', label: 'Compassion',              desc: 'Caring, Empathetic, Patient-Centered Care' },
  { icon: 'bi-shield-fill-check',  color: '#1a3a6b', label: 'Integrity',               desc: 'Honesty, Ethical Practices, Accountability' },
  { icon: 'bi-people-fill',        color: '#27ae60', label: 'Respect for Human Dignity', desc: 'Cultural Diversity & Patient Rights' },
  { icon: 'bi-clipboard2-check-fill', color: '#1a3a6b', label: 'Professionalism',      desc: 'Responsibility, Discipline, Leadership' },
  { icon: 'bi-globe2',             color: '#1a3a6b', label: 'Social Responsibility',   desc: 'Community Health & Development' },
  { icon: 'bi-lightbulb-fill',     color: '#f39c12', label: 'Innovation & Research',   desc: 'Scientific Inquiry, Evidence-Based Practice' },
  { icon: 'bi-chat-dots-fill',     color: '#1a3a6b', label: 'Collaboration',           desc: 'Teamwork & Communication' },
  { icon: 'bi-hand-heart-fill',    color: '#c0392b', label: 'Service Commitment',      desc: 'Serving Society & Enhancing Wellbeing' },
]

export default function VisionMissionPage() {
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

        /* ── eyebrow ── */
        .eyebrow-line { flex:1; height:1px;
          background:linear-gradient(90deg,transparent,var(--rose-light),transparent); }
        .eyebrow-text { font-size:.7rem; font-weight:500; letter-spacing:.22em;
          text-transform:uppercase; color:var(--rose); white-space:nowrap; }

        /* ── hero ── */
        .page-title { font-family:'Playfair Display',serif;
          font-size:clamp(2rem,4vw,3rem); color:var(--text-dark); line-height:1.2; }
        .page-title em { font-style:italic; color:var(--rose); }
        .page-subtitle { font-size:.95rem; color:var(--text-mid); max-width:600px; }

        /* ── section label ── */
        .section-label { display:inline-flex; align-items:center; gap:.5rem;
          background:var(--rose-pale); padding:.35rem 1rem; border-radius:30px;
          font-size:.7rem; font-weight:500; letter-spacing:.14em;
          text-transform:uppercase; color:var(--rose); border:1px solid var(--rose-light); }

        /* ── vision card ── */
        .vision-card { background:#fff; border-radius:20px; border:none;
          box-shadow:0 20px 60px rgba(90,20,35,.12);
          transition:transform .3s; }
        .vision-card:hover { transform:translateY(-3px); }
        .card-icon-wrap { width:64px; height:64px; border-radius:50%;
          background:var(--rose-pale); display:flex; align-items:center; justify-content:center;
          flex-shrink:0; box-shadow:0 4px 16px rgba(181,71,90,.2); }
        .card-icon-wrap i { font-size:1.8rem; color:var(--rose); }
        .card-heading { font-family:'Playfair Display',serif; font-size:1.6rem;
          color:var(--rose); font-weight:700; }
        .divider { width:48px; height:3px; border-radius:3px;
          background:linear-gradient(90deg,var(--rose),var(--gold)); }
        .card-body-text { font-size:.93rem; line-height:1.85; color:var(--text-mid); }
        .card-body-text strong { color:var(--text-dark); font-weight:600; }

        /* ── mission numbered items ── */
        .mission-item { display:flex; align-items:flex-start; gap:1rem;
          padding:.75rem 1rem; border-left:3px solid var(--rose-pale);
          border-radius:0 8px 8px 0;
          transition:border-color .2s, background .2s; }
        .mission-item:hover { border-left-color:var(--rose); background:var(--rose-pale); }
        .mission-num { width:36px; height:36px; border-radius:50%;
          background:var(--rose); color:#fff;
          display:flex; align-items:center; justify-content:center;
          font-size:.82rem; font-weight:700; flex-shrink:0;
          box-shadow:0 4px 12px rgba(181,71,90,.35); }
        .mission-icon { color:var(--rose); font-size:1.1rem; flex-shrink:0; margin-top:.15rem; }
        .mission-text { font-size:.88rem; line-height:1.7; color:var(--text-mid); }
        .mission-text strong { color:var(--text-dark); }

        /* ── core values section ── */
        .cv-section-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.8rem,3vw,2.5rem); color:var(--text-dark); }
        .cv-section-title em { font-style:italic; color:var(--rose); }

        /* value row */
        .value-row { display:flex; align-items:center; gap:1rem;
          padding:.9rem 1.2rem; border-radius:12px; background:#fff;
          box-shadow:0 4px 20px rgba(90,20,35,.07);
          transition:transform .22s, box-shadow .22s; }
        .value-row:hover { transform:translateX(6px);
          box-shadow:0 8px 28px rgba(90,20,35,.13); }
        .value-icon-wrap { width:48px; height:48px; border-radius:50%;
          background:var(--rose-pale); display:flex; align-items:center;
          justify-content:center; flex-shrink:0; }
        .value-icon-wrap i { font-size:1.3rem; color:var(--rose); }
        .value-label { font-family:'Playfair Display',serif; font-size:1rem;
          font-weight:700; color:var(--text-dark); }
        .value-desc { font-size:.8rem; color:var(--text-mid); }
        .value-sep { width:2px; height:32px; background:var(--rose-light);
          border-radius:2px; flex-shrink:0; }

        /* ── CTA ── */
        .cta-box { background:#fff; border:1px solid var(--rose-light);
          border-radius:20px; box-shadow:0 12px 40px rgba(90,20,35,.09); }
        .cta-title { font-family:'Playfair Display',serif;
          font-size:clamp(1.5rem,2.5vw,2.2rem); color:var(--text-dark); }
        .cta-title em { font-style:italic; color:var(--rose); }
        .cta-btn { background:var(--rose); color:#fff; border:none; border-radius:50px;
          padding:.75rem 2rem; font-size:.88rem; font-weight:500;
          box-shadow:0 8px 24px rgba(181,71,90,.35);
          transition:background .22s,transform .22s,box-shadow .22s; cursor:pointer; }
        .cta-btn:hover { background:#9e3048; transform:translateY(-2px);
          box-shadow:0 14px 32px rgba(181,71,90,.45); }

        /* ── animations ── */
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
        <div className="container" style={{ maxWidth: 1100 }}>

          {/* ── Eyebrow ── */}
          <div className="d-flex align-items-center gap-3 mb-3 anim-1">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Our Core Philosophy</span>
            <div className="eyebrow-line" />
          </div>

          {/* ── Hero ── */}
          <div className="text-center mb-5 anim-1">
            <h1 className="page-title mb-3">
              Our <em>Vision, Mission</em><br />&amp; Core Values
            </h1>
            <p className="page-subtitle mx-auto">
              Guiding principles that shape our commitment to nursing excellence and healthcare transformation.
            </p>
          </div>

          {/* ══════════════ VISION ══════════════ */}
          <div className="mb-3 anim-2">
            <span className="section-label">
              <i className="bi bi-eye-fill" /> Vision
            </span>
          </div>
          <div className="vision-card p-4 p-lg-5 mb-5 anim-2">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="card-icon-wrap">
                <i className="bi bi-eye-fill" />
              </div>
              <div className="card-heading">Our Vision</div>
            </div>
            <div className="divider mb-4" />
            <p className="card-body-text">
              To develop professionally competent, ethically sound, <strong>and socially responsible</strong> nursing
              graduates through quality education, innovative practices, research orientation, and community engagement,
              ensuring excellence in healthcare services at local, national, and global levels.
            </p>
          </div>

          {/* ══════════════ MISSION ══════════════ */}
          <div className="mb-3 anim-3">
            <span className="section-label">
              <i className="bi bi-bullseye" /> Mission
            </span>
          </div>
          <div className="vision-card p-4 p-lg-5 mb-5 anim-3">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="card-icon-wrap">
                <i className="bi bi-bullseye" />
              </div>
              <div className="card-heading">Our Mission</div>
            </div>
            <div className="divider mb-4" />
            <p className="card-body-text mb-4">
              In order to achieve the vision of <strong>SNBP Institute of Nursing</strong>, the institute strives:
            </p>
            <div className="d-flex flex-column gap-2">
              {missionPoints.map((m, i) => (
                <div key={i} className="mission-item">
                  <div className="mission-num">{i + 1}</div>
                  <i className={`bi ${m.icon} mission-icon`} />
                  <span className="mission-text"
                    dangerouslySetInnerHTML={{
                      __html: m.text
                        .replace('scientific knowledge', '<strong>scientific knowledge</strong>')
                        .replace('lifelong learning', '<strong>lifelong learning</strong>')
                        .replace('strengthen community health services', '<strong>strengthen community health services</strong>')
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════ CORE VALUES ══════════════ */}
          <div className="d-flex align-items-center gap-3 mb-3 anim-4">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Core Values</span>
            <div className="eyebrow-line" />
          </div>

          <h2 className="cv-section-title text-center mb-5 anim-4">
            Our <em>Core Values</em>
          </h2>

          <div className="row g-3 mb-5 anim-5">
            {coreValues.map((v, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="value-row h-100">
                  <div className="value-icon-wrap">
                    <i className={`bi ${v.icon}`} />
                  </div>
                  <div className="value-sep" />
                  <div>
                    <div className="value-label">{v.label}</div>
                    <div className="value-desc">{v.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ══════════════ CTA ══════════════ */}
          <div className="cta-box p-5 text-center anim-6">
            <h2 className="cta-title mb-3">
              Join Our <em>Nursing Community</em>
            </h2>
            <p className="mb-4" style={{ color:'var(--text-mid)', fontSize:'.93rem', maxWidth:520, margin:'0 auto 1.5rem' }}>
              Become part of an institution that's shaping the future of healthcare through excellence in nursing education.
            </p>
            <button className="cta-btn">Explore Programs</button>
          </div>

        </div>
      </main>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}