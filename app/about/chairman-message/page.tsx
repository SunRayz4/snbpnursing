// import { Quote, HeartPulse } from "lucide-react"
// import Image from "next/image"

// export default function ChairmanMessagePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative">
//         <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
//           <div className="flex flex-col md:flex-row gap-12 items-center">
//             {/* Chairman Image */}
//             <div className="w-full md:w-2/5">
//               <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
//                 <Image
//                   src="/images/chairman-image.jpg"
//                   alt="Dr. D.K. Bhosale"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//                 <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded-md shadow-sm">
//                   <p className="text-sm font-medium text-gray-900">Dr. D.K. Bhosale</p>
//                   <p className="text-xs text-gray-600">Chairman & Secretary</p>
//                 </div>
//               </div>
//             </div>

//             {/* Hero Text */}
//             <div className="w-full md:w-3/5">
//               <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full mb-4">
//                 <HeartPulse className="h-4 w-4 text-accent-blue" />
//                 <span className="text-xs font-medium text-accent-blue">Leadership Vision</span>
//               </div>
//               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//                 A Message from Our <span className="text-accent-blue">Chairman</span>
//               </h1>
//               <div className="mt-6 text-gray-600 space-y-4">
//                 <p>
//                   Welcome to the SNBP Institute of Nursing — a place where academic excellence meets heartfelt purpose.
//                 </p>
//                 <div className="flex items-start gap-3 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
//                   <Quote className="h-5 w-5 text-accent-blue mt-1 flex-shrink-0" />
//                   <p className="italic text-gray-700">
//                     "Nursing is more than a career — it is a sacred service to humanity, grounded in compassion, skill, and integrity."
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Message Section */}
//       <section className="max-w-5xl mx-auto px-4 pb-20 text-[1.05rem] leading-relaxed text-gray-800">
//         <div className="space-y-6">
//           <p>
//             Nursing is more than a profession — it is a calling rooted in compassion, integrity, and service.
//             As we equip our students with rigorous academic knowledge and cutting-edge clinical skills, we also
//             nurture empathy, ethical practice, and a lifelong desire to learn.
//           </p>

//           <p>
//             Our distinguished faculty — passionate educators and seasoned practitioners — guide and inspire
//             students to uphold the highest standards of healthcare and patient advocacy.
//           </p>

//           <p>
//             Our purpose-built infrastructure, including modern labs, simulation suites, comprehensive libraries,
//             and vibrant learning spaces, supports our mission to deliver holistic nursing education.
//           </p>

//           <p>
//             Beyond academics, we encourage engagement in co-curricular activities, community outreach,
//             and leadership development, helping to shape well-rounded individuals ready to embrace
//             tomorrow’s healthcare challenges.
//           </p>

//           <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-accent-blue font-medium text-gray-900">
//             We aim to cultivate nurses who are not just clinically adept, but also emotionally intelligent,
//             culturally sensitive, and innovation-driven — poised to make meaningful contributions locally and globally.
//           </div>

//           <p>
//             We must prepare nurses to lead in hospitals, communities, clinics, and any place they are needed most.
//             Keeping this in mind, Subhadra’s Educational Society started SNBP Institute of Nursing in the year 2025.
//           </p>

//           <p>
//             I have no hesitation in saying that this college will be rated as one of the finest nursing educational
//             institutions in the country. I am confident our faculty and team are dedicated to shaping nurses who will
//             elevate the standards of care and proudly represent this institution.
//           </p>

//           <p>
//             I wholeheartedly welcome you to SNBP Institute of Nursing. May this journey transform you into a
//             healthcare professional of not just knowledge and competence, but also deep compassion and leadership.
//           </p>

//           <div className="pt-8 text-right font-medium text-dark-navy">
//             Warm regards,<br />
//             <span className="font-semibold">Dr. D.K. Bhosale</span><br />
//             Chairman & Secretary,<br />
//             SNBP Group of Institutions
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
import { Quote, HeartPulse } from "lucide-react"
import Image from "next/image"

export default function ChairmanMessagePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Chairman Image */}
            <div className="w-full md:w-2/5">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/chairman-image.jpg"
                  alt="Dr. D.K. Bhosale"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded-md shadow-sm">
                  <p className="text-sm font-medium text-gray-900">Dr. D.K. Bhosale</p>
                  <p className="text-xs text-gray-600">Chairman & Secretary</p>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="w-full md:w-3/5">
              <div className="inline-flex items-center gap-2 bg-pink-50 px-3 py-1 rounded-full mb-4">
                <HeartPulse className="h-4 w-4 text-accent-pink" />
                <span className="text-xs font-medium text-accent-pink">Chairman’s Vision</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                A Message from Our <span className="text-accent-pink">Chairman</span>
              </h1>
              <div className="mt-6 text-gray-600 space-y-4">
                <p>
                  Welcome to the SNBP Institute of Nursing — a place where academic excellence meets heartfelt purpose.
                </p>
                <div className="flex items-start gap-3 bg-pink-50/50 p-4 rounded-lg border border-pink-100">
                  <Quote className="h-5 w-5 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="italic text-gray-700">
                    "Nursing is more than a career — it is a sacred service to humanity, grounded in compassion, skill, and integrity."
                  </p>
                </div>
                 <div className="space-y-6">
          <p>
            Nursing is more than a profession — it is a calling rooted in compassion, integrity, and service.
            As we equip our students with rigorous academic knowledge and cutting-edge clinical skills, we also
            nurture empathy, ethical practice, and a lifelong desire to learn.
          </p>

          <p>
            Our distinguished faculty — passionate educators and seasoned practitioners — guide and inspire
            students to uphold the highest standards of healthcare and patient advocacy.
          </p>

          <p>
            Our purpose-built infrastructure, including modern labs, simulation suites, comprehensive libraries,
            and vibrant learning spaces, supports our mission to deliver holistic nursing education.
          </p>

          <p>
            Beyond academics, we encourage engagement in co-curricular activities, community outreach,
            and leadership development, helping to shape well-rounded individuals ready to embrace
            tomorrow’s healthcare challenges.
          </p>

          <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-accent-pink font-medium text-gray-900">
            We aim to cultivate nurses who are not just clinically adept, but also emotionally intelligent,
            culturally sensitive, and innovation-driven — poised to make meaningful contributions locally and globally.
          </div>

          <p>
            We must prepare nurses to lead in hospitals, communities, clinics, and any place they are needed most.
            Keeping this in mind, Subhadra’s Educational Society started SNBP Institute of Nursing in the year 2025.
          </p>

          <p>
            I have no hesitation in saying that this college will be rated as one of the finest nursing educational
            institutions in the country. I am confident our faculty and team are dedicated to shaping nurses who will
            elevate the standards of care and proudly represent this institution.
          </p>

          <p>
            I wholeheartedly welcome you to SNBP Institute of Nursing. May this journey transform you into a
            healthcare professional of not just knowledge and competence, but also deep compassion and leadership.
          </p>

          <div className="pt-8 text-right font-medium text-dark-navy">
            Warm regards,<br />
            <span className="font-semibold">Dr. D.K. Bhosale</span><br />
            Chairman & Secretary,<br />
            SNBP Group of Institutions
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
     
    </div>
  )
}
