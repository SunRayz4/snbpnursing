// import { Quote, HeartPulse } from "lucide-react"
// import Image from "next/image"

// export default function PresidentMessagePage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative">
//         <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
//           <div className="flex flex-col md:flex-row gap-12 items-center">
//             {/* President Image */}
//             <div className="w-full md:w-2/5">
//               <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
//                 <Image
//                   src="/images/president-image.jpg"
//                   alt="Dr. Vrushali Bhosale"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//                 <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded-md shadow-sm">
//                   <p className="text-sm font-medium text-gray-900">Dr. Vrushali Bhosale</p>
//                   <p className="text-xs text-gray-600">President</p>
//                 </div>
//               </div>
//             </div>

//             {/* Hero Content */}
//             <div className="w-full md:w-3/5">
//               <div className="inline-flex items-center gap-2 bg-pink-50 px-3 py-1 rounded-full mb-4">
//                 <HeartPulse className="h-4 w-4 text-accent-pink" />
//                 <span className="text-xs font-medium text-accent-pink">President's Vision</span>
//               </div>
//               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//                 A Message from Our <span className="text-accent-pink">President</span>
//               </h1>
//               <div className="mt-6 text-gray-600 space-y-4">
//                 <p>
//                   At SNBP, we believe that education is not just about learning, but nurturing the body, mind, and soul in harmony.
//                 </p>
//                 <div className="flex items-start gap-3 bg-pink-50/50 p-4 rounded-lg border border-pink-100">
//                   <Quote className="h-5 w-5 text-accent-pink mt-1 flex-shrink-0" />
//                   <p className="italic text-gray-700">
//                     “A healthy mind dwells in a healthy body.”
//                   </p>
//                 </div>
//                 <div className="space-y-6">
//           <p>
//             Keeping in mind this thought, the process of teaching and learning is executed across all our institutions.
//             Our practices aim to develop a positive attitude in students, which naturally leads to better adjustment in life.
//           </p>
//           <p>
//             As a doctor by profession, I truly believe that a healthy body and mind stem from a healthy environment —
//             and that environment, in turn, nurtures individual growth and potential.
//           </p>
//           <p>
//             Ultimately, a nation’s progress depends on the well-being of its people. It is a group of strong, balanced individuals
//             who can truly contribute to the growth and evolution of a nation.
//           </p>

//           <p>
//             The foundation of SNBP Institutions was laid with a single purpose: to provide education to all. We are committed
//             to serving every strata of society, and it is our dream to see our campus alive with the spark of curiosity and knowledge.
//           </p>

//           <p>
//             Every student is precious, and every mind is unique. At SNBP, we consider it our responsibility to discover and nurture
//             the hidden talents within each learner.
//           </p>

//           <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-accent-pink font-medium text-gray-900">
//             I consider my contribution as a humble drop in the vast ocean of educational revolution.
//             What matters most is not how much we have — but what we do with what we have.
//           </div>

//           <p>
//             I warmly welcome all prospective students to the SNBP Institute of Nursing and assure you of our
//             unwavering commitment to your growth, both as professionals and as individuals.
//           </p>

//           <div className="pt-8 text-right font-medium text-dark-navy">
//             Warm regards,<br />
//             <span className="font-semibold">Dr. Vrushali Bhosale</span><br />
//             President,<br />
//             SNBP Group of Institutions
//           </div>
//         </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Message Section */}
      
       
     
//     </div>
//   )
// }
import { Quote, HeartPulse } from "lucide-react"
import Image from "next/image"

export default function PresidentMessagePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* President Image */}
            <div className="w-full md:w-2/5">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/vrushali-bhosale.jpg"
                  alt="Dr. Vrushali Bhosale"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded-md shadow-sm">
                  <p className="text-sm font-medium text-gray-900">Dr. Vrushali Bhosale</p>
                  <p className="text-xs text-gray-600">President</p>
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div className="w-full md:w-3/5">
              <div className="inline-flex items-center gap-2 bg-pink-50 px-3 py-1 rounded-full mb-4">
                <HeartPulse className="h-4 w-4 text-accent-pink" />
                <span className="text-xs font-medium text-accent-pink">Presidential Note</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                A Message from Our <span className="text-accent-pink">President</span>
              </h1>
              <div className="mt-6 text-gray-600 space-y-4">
                <p>
                  At SNBP, we nurture education with heart, believing that a balanced mind and body build lifelong learners.
                </p>
                <div className="flex items-start gap-3 bg-pink-50/50 p-4 rounded-lg border border-pink-100">
                  <Quote className="h-5 w-5 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="italic text-gray-700">
                    "A healthy mind dwells in a healthy body."
                  </p>
                </div>
                 <div className="space-y-6">
          <p>
            Keeping in mind this thought, the process of teaching and learning is executed across all our institutions. Our practices aim to develop a positive attitude in students, which naturally leads to better adjustment in life.
          </p>

          <p>
            As a doctor by profession, I believe a healthy body and mind stem from a nurturing environment. Such an environment enables individuals to thrive and contribute meaningfully to society.
          </p>

          <p>
            A nation grows only through the well-being of its people. We envision SNBP as a cradle for that well-being—nurturing minds that will one day lead the country with resilience and purpose.
          </p>

          <p>
            The foundation of SNBP Institutions was laid with one simple idea: education for all. From day one, our goal has been to serve students from every background and to light a spark of knowledge in each learner.
          </p>

          <p>
            Every student is unique, with untapped talents. It is our mission to uncover and amplify those gifts—because within each child lies the future of our nation.
          </p>

          <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-accent-pink font-medium text-gray-900">
            I consider my contribution a humble drop in the vast ocean of the education revolution.
            What matters most is not how much we have—but what we do with what we have.
          </div>

          <p>
            I warmly welcome you to SNBP Institute of Nursing. I have no doubt that you will grow here—academically, personally, and professionally—while receiving the holistic support needed to become future leaders in healthcare.
          </p>

          <div className="pt-8 text-right font-medium text-dark-navy">
            Warm regards,<br />
            <span className="font-semibold">Dr. Vrushali Bhosale</span><br />
            President,<br />
            SNBP Group of Institutions
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  )
}
