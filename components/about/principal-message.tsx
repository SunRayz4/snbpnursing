
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


// export default function PrincipalMessage() {
//   return (
//     <div className="container mx-auto px-4 py-12 bg-white">
//       <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Principal's Message</h1>

//       <div className="max-w-4xl mx-auto">
//         {/* Principal Info */}
//         <Card className="mb-8 shadow-lg rounded-lg border-t-4 border-t-primary-blue bg-white">
//           <CardHeader className="text-center p-8">
//             {/* Replace with actual image if needed */}
//             <div className="w-32 h-32 bg-primary-pink rounded-full mx-auto mb-4" />
//             <CardTitle className="text-2xl font-semibold text-dark-navy">Mr. Ramesh Bandagar</CardTitle>
//             <p className="text-secondary-blue">Principal, SNBP Institute of Nursing</p>
//           </CardHeader>
//         </Card>

//         {/* Full Message */}
//         <Card className="shadow-lg rounded-lg bg-white">
//           <CardContent className="p-8 text-lg leading-relaxed text-light-black space-y-6">
//             <p>
//               Our institute which is founded in 2025 is one of the best nursing educational institutes in India. It has
//               excellent infrastructure, clinical field and full-time faculty and guest lecturers. We are the pioneers of
//               private graduate nursing education in the state of Maharashtra. We are striving to develop outstanding,
//               holistic, empowered professional nurse leaders in providing excellent, compassionate health care at local,
//               national and global level.
//             </p>

//             <p className="italic text-gray-700 border-l-4 border-accent-pink pl-4">
//               “Nursing is an art: and if it is to be made an art, it requires an exclusive devotion as hard a preparation,
//               as any painter's or sculptor's work; for what is the having to do with dead canvas or dead marble, compared
//               with having to do with the living body, the temple of God's spirit? It is one of the Fine Arts: I had almost
//               said, the finest of Fine Arts.” – Florence Nightingale
//             </p>

//             <p>
//               At SNBP Institute of Nursing, the students will find rich academic and clinical ambiance to facilitate their
//               learning which in return will stimulate the fulfilment of their academic and future goals. Here the students
//               receive well-rounded pedagogy along with realistic and empirical training in the state-of-the-art laboratories
//               and comprehensive, coordinated first-contact, and longitudinal patient care environment, along with rich
//               community health nursing exposure which will help them to build their own professional personality as
//               competent and confident nurses.
//             </p>

//             <p>
//               The students will enjoy every bit of their learning experience through curricular, co-curricular and
//               extracurricular activities especially tailored for them. They will have access to unparalleled Subhadra’s
//               Educational Society’s resources that includes rich clinical settings, central libraries, in-campus hostels,
//               mentoring and counselling services, transport facilities, free medical services and sports & cultural
//               facilities.
//             </p>

//             <p>
//               At SNBP Institute of Nursing, we aim to develop scientific vigor in the students’ right from their first
//               contact with the profession as first-year students. The motto of the College is{' '}
//               <span className="italic font-semibold">“Academic Excellence with Competent Nursing Care.”</span>
//             </p>

//             <p>
//               I am sure the students educated at SNBP Institute of Nursing will be competent, self-reliant, courteous and
//               confident human beings in life and will establish themselves as leaders in the field of nursing practice.
//             </p>

//             <p>
//               I am confident that in the future, we will continue this journey with renewed enthusiasm and consistently
//               provide a platform for holistic teaching and learning for our faculty and the younger generation.
//             </p>

//             <p className="text-right font-semibold mt-8">
//               I warmly welcome you all to Subhadra’s Educational Society’s, SNBP Institute of Nursing Pune.
//               <br />
//               <br />
//               Mr. Ramesh Bandagar
//               <br />
//               Principal
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
import { Quote, HeartPulse } from "lucide-react"
import Image from "next/image"

export default function PrincipalMessage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Principal Image */}
            <div className="w-full md:w-2/5">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/principal-image.jpg" // Replace with actual image path
                  alt="Mr. Ramesh Bandagar"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded-md shadow-sm">
                  <p className="text-sm font-medium text-gray-900">Mr. Ramesh Bandagar</p>
                  <p className="text-xs text-gray-600">Principal, SNBP Institute of Nursing</p>
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="w-full md:w-3/5">
              <div className="inline-flex items-center gap-2 bg-pink-50 px-3 py-1 rounded-full mb-4">
                <HeartPulse className="h-4 w-4 text-accent-pink" />
                <span className="text-xs font-medium text-accent-pink">Leadership Message</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                A Message from Our <span className="text-accent-pink">Principal</span>
              </h1>
              <div className="mt-6 text-gray-600 space-y-4">
                <p>
                  At SNBP Institute of Nursing, we believe in nurturing professionals who are compassionate, competent, and community-driven.
                </p>
                <div className="flex items-start gap-3 bg-pink-50/50 p-4 rounded-lg border border-pink-100">
                  <Quote className="h-5 w-5 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="italic text-gray-700">
                    “Nursing is an art... the finest of Fine Arts.” – Florence Nightingale
                  </p>
                </div>
                 <div className="space-y-6">
          <p>
            Our institute which is founded in 2025 is one of the best nursing educational institutes in India. It has
            excellent infrastructure, clinical field and full-time faculty and guest lecturers. We are the pioneers of
            private graduate nursing education in the state of Maharashtra. We are striving to develop outstanding,
            holistic, empowered professional nurse leaders in providing excellent, compassionate health care at local,
            national and global level.
          </p>

          <p>
            At SNBP Institute of Nursing, the students will find rich academic and clinical ambiance to facilitate their
            learning which in return will stimulate the fulfilment of their academic and future goals. Here the students
            receive well-rounded pedagogy along with realistic and empirical training in the state-of-the-art laboratories
            and comprehensive, coordinated first-contact, and longitudinal patient care environment, along with rich
            community health nursing exposure which will help them to build their own professional personality as
            competent and confident nurses.
          </p>

          <p>
            The students will enjoy every bit of their learning experience through curricular, co-curricular and
            extracurricular activities especially tailored for them. They will have access to unparalleled Subhadra’s
            Educational Society’s resources that includes rich clinical settings, central libraries, in-campus hostels,
            mentoring and counselling services, transport facilities, free medical services and sports & cultural
            facilities.
          </p>

          <p>
            At SNBP Institute of Nursing, we aim to develop scientific vigor in the students’ right from their first
            contact with the profession as first-year students. The motto of the College is{' '}
            <span className="italic font-semibold">“Academic Excellence with Competent Nursing Care.”</span>
          </p>

          <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-accent-pink font-medium text-gray-900">
            We envision each student growing into a confident, ethical, and skilled nurse — ready to make a meaningful
            impact in today’s evolving healthcare system.
          </div>

          <p>
            I am sure the students educated at SNBP Institute of Nursing will be competent, self-reliant, courteous and
            confident human beings in life and will establish themselves as leaders in the field of nursing practice.
          </p>

          <p>
            I am confident that in the future, we will continue this journey with renewed enthusiasm and consistently
            provide a platform for holistic teaching and learning for our faculty and the younger generation.
          </p>

          <div className="pt-8 text-right font-medium text-dark-navy">
            I warmly welcome you all to Subhadra’s Educational Society’s, SNBP Institute of Nursing Pune.<br /><br />
            <span className="font-semibold">Mr. Ramesh Bandagar</span><br />
            Principal
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
