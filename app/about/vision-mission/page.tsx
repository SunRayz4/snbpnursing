
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // // import { Target, Eye, Heart, Users, BookOpen, FlaskConical, Globe, Scale } from "lucide-react"

// // // export default function VisionMissionPage() {
// // //   return (
// // //     <div className="container mx-auto px-4 py-16">
// // //       {/* Hero Header */}
// // //       <div className="text-center mb-16">
// // //         <h1 className="text-4xl md:text-5xl font-bold text-dark-navy mb-4">
// // //           Our <span className="text-secondary-pink">Vision & Mission</span>
// // //         </h1>
// // //         <p className="text-lg text-medium-gray max-w-3xl mx-auto">
// // //           Guiding principles that shape our commitment to nursing excellence and healthcare transformation
// // //         </p>
// // //       </div>

// // //       {/* Vision & Mission Cards */}
// // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
// // //         {/* Vision Card */}
// // //         <Card className="relative border-0 shadow-md hover:shadow-lg transition-all">
// // //           <div className="relative z-10 p-8 h-full bg-white rounded-xl">
// // //             <CardHeader className="px-0">
// // //               <div className="flex items-center space-x-3 mb-6">
// // //                 <div className="p-3 rounded-full bg-secondary-pink/10">
// // //                   <Eye className="h-8 w-8 text-secondary-pink" />
// // //                 </div>
// // //                 <CardTitle className="text-2xl text-dark-navy">Our Vision</CardTitle>
// // //               </div>
// // //             </CardHeader>
// // //             <CardContent className="px-0">
// // //               <p className="text-medium-gray leading-relaxed">
// // //               To be a globally recognized leader in nursing education, research, and practice, advancing compassionate and evidence-based care. With a commitment to excellence, innovation, and community partnership, our School of Nursing Institute strives to empower future generations of nurses who will transform healthcare delivery and improve patient outcomes worldwide. We envision a future where our graduates lead with integrity, empathy, and clinical expertise, driving positive change in healthcare systems and positively impacting the health and well- being of individuals and communities.
// // //               </p>
// // //             </CardContent>
// // //           </div>
// // //         </Card>

// // //         {/* Mission Card */}
// // //         <Card className="relative border-0 shadow-md hover:shadow-lg transition-all">
// // //           <div className="relative z-10 p-8 h-full bg-white rounded-xl">
// // //             <CardHeader className="px-0">
// // //               <div className="flex items-center space-x-3 mb-6">
// // //                 <div className="p-3 rounded-full bg-secondary-pink/10">
// // //                   <Target className="h-8 w-8 text-secondary-pink" />
// // //                 </div>
// // //                 <CardTitle className="text-2xl text-dark-navy">Our Mission</CardTitle>
// // //               </div>
// // //             </CardHeader>
// // //             <CardContent className="px-0">
// // //               <p className="text-medium-gray leading-relaxed mb-4">
// // //                At SNBP Institute of Nursing, our mission is to educate and empower future nurses who are dedicated to compassionate care, evidence-based practice, and leadership in healthcare. We are committed to fostering a learning environment that cultivates critical thinking, ethical decision-making, and lifelong learning. Through innovative curriculum, experiential learning opportunities, and interdisciplinary collaboration, we prepare our students to meet the challenges of a dynamic healthcare landscape.
// // //               </p>
// // //               <p className="text-medium-gray leading-relaxed">
// // //                 Our institute is dedicated to advancing nursing science through research that addresses current and emerging health issues. We strive to contribute to the body of nursing knowledge and promote best practices in patient care. With a focus on community engagement and service, we aim to improve health outcomes and reduce health disparities through partnerships with local and global communities. At SNBP Institute of Nursing, we uphold the highest standards of professionalism, integrity, and respect for diversity. We are committed to nurturing a diverse student body and faculty who reflect the populations we serve. By equipping our graduates with the knowledge, skills, and values necessary for excellence in nursing practice, we aim to make a positive impact on the health and well- being of individuals and communities.
// // //               </p>
// // //             </CardContent>
// // //           </div>
// // //         </Card>
// // //       </div>

// // //       {/* Core Values */}
      
// // //       {/* Full Commitment Section */}
// // //       <Card className="border-0 shadow-lg overflow-hidden bg-white rounded-xl">
// // //         <div className="md:flex">
// // //           <div className="md:w-1/3 bg-secondary-pink/10 p-8 flex flex-col justify-center">
// // //             <h2 className="text-3xl font-bold text-dark-navy mb-4">Our Complete Commitment</h2>
// // //             <p className="text-medium-gray">
// // //               The pillars that define our institutional philosophy and educational approach
// // //             </p>
// // //           </div>
// // //           <div className="md:w-2/3 p-8">
// // //             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //               {["Providing world-class nursing education",
// // //                 "Advancing research and evidence-based practice",
// // //                 "Promoting community health initiatives",
// // //                 "Championing diversity and inclusion",
// // //                 "Building healthcare partnerships",
// // //                 "Continuous curriculum innovation",
// // //                 "Developing leadership skills",
// // //                 "Fostering global perspectives"].map((item, index) => (
// // //                 <li key={index} className="flex items-start space-x-3">
// // //                   <div className="flex-shrink-0 mt-1">
// // //                     <div className="h-5 w-5 rounded-full bg-secondary-pink flex items-center justify-center">
// // //                       <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
// // //                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
// // //                       </svg>
// // //                     </div>
// // //                   </div>
// // //                   <span className="text-medium-gray text-sm">{item}</span>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         </div>
// // //       </Card>

// // //       {/* Call to Action */}
// // //       <div className="mt-16 text-center bg-white border border-secondary-pink/30 rounded-xl p-10 shadow-sm">
// // //         <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mb-4">Join Our Nursing Community</h2>
// // //         <p className="text-medium-gray mb-6 max-w-2xl mx-auto">
// // //           Become part of an institution that's shaping the future of healthcare through excellence in nursing education
// // //         </p>
// // //         <button className="bg-pink-600  text-white px-8 py-3 rounded-full font-semibold hover:transition-colors shadow-lg">
// // //           Explore Programs
// // //         </button>
// // //       </div>
// // //     </div>
// // //   )
// // // }
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Target, Eye } from "lucide-react"

// // export default function VisionMissionPage() {
// //   return (
// //     <div className="container mx-auto px-4 py-16 relative overflow-hidden">
// //       {/* Decorative Background Gradient Circles */}
// //       <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-secondary-pink/20 rounded-full blur-3xl z-0"></div>
// //       <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-secondary-pink/20 rounded-full blur-3xl z-0"></div>

// //       {/* Header */}
// //       <div className="text-center mb-16 relative z-10">
// //         <h1 className="text-4xl md:text-5xl font-extrabold text-dark-navy leading-tight mb-4">
// //           Our <span className="text-secondary-pink">Vision & Mission</span>
// //         </h1>
// //         <p className="text-lg text-medium-gray max-w-3xl mx-auto">
// //           Guiding principles that shape our commitment to nursing excellence and healthcare transformation
// //         </p>
// //       </div>

// //       {/* Vision & Mission Cards */}
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 relative z-10">
// //         {/* Vision Card */}
// //         <Card className="relative border-0 shadow-xl bg-white hover:scale-[1.01] transition-transform duration-300 rounded-2xl">
// //           <div className="p-10 h-full">
// //             <CardHeader className="px-0">
// //               <div className="flex items-center space-x-4 mb-6">
// //                 <div className="p-4 rounded-full bg-secondary-pink/10 shadow-md">
// //                   <Eye className="h-8 w-8 text-secondary-pink" />
// //                 </div>
// //                 <CardTitle className="text-2xl font-bold text-dark-navy">Our Vision</CardTitle>
// //               </div>
// //             </CardHeader>
// //             <CardContent className="px-0">
// //               <p className="text-gray-600 text-base leading-relaxed tracking-wide">
// //                 To be a globally recognized leader in nursing education, research, and practice, advancing compassionate and evidence-based care. With a commitment to excellence, innovation, and community partnership, our School of Nursing Institute strives to empower future generations of nurses who will transform healthcare delivery and improve patient outcomes worldwide. We envision a future where our graduates lead with integrity, empathy, and clinical expertise, driving positive change in healthcare systems and positively impacting the health and well-being of individuals and communities.
// //               </p>
// //             </CardContent>
// //           </div>
// //         </Card>

// //         {/* Mission Card */}
// //         <Card className="relative border-0 shadow-xl bg-white hover:scale-[1.01] transition-transform duration-300 rounded-2xl">
// //           <div className="p-10 h-full">
// //             <CardHeader className="px-0">
// //               <div className="flex items-center space-x-4 mb-6">
// //                 <div className="p-4 rounded-full bg-secondary-pink/10 shadow-md">
// //                   <Target className="h-8 w-8 text-secondary-pink" />
// //                 </div>
// //                 <CardTitle className="text-2xl font-bold text-dark-navy">Our Mission</CardTitle>
// //               </div>
// //             </CardHeader>
// //             <CardContent className="px-0 space-y-4">
// //               <p className="text-gray-600 text-base leading-relaxed tracking-wide">
// //                 At SNBP Institute of Nursing, our mission is to educate and empower future nurses who are dedicated to compassionate care, evidence-based practice, and leadership in healthcare. We are committed to fostering a learning environment that cultivates critical thinking, ethical decision-making, and lifelong learning. Through innovative curriculum, experiential learning opportunities, and interdisciplinary collaboration, we prepare our students to meet the challenges of a dynamic healthcare landscape.
// //               </p>
// //               <p className="text-gray-600 text-base leading-relaxed tracking-wide">
// //                 Our institute is dedicated to advancing nursing science through research that addresses current and emerging health issues. We strive to contribute to the body of nursing knowledge and promote best practices in patient care. With a focus on community engagement and service, we aim to improve health outcomes and reduce health disparities through partnerships with local and global communities. At SNBP Institute of Nursing, we uphold the highest standards of professionalism, integrity, and respect for diversity. We are committed to nurturing a diverse student body and faculty who reflect the populations we serve. By equipping our graduates with the knowledge, skills, and values necessary for excellence in nursing practice, we aim to make a positive impact on the health and well-being of individuals and communities.
// //               </p>
// //             </CardContent>
// //           </div>
// //         </Card>
// //       </div>

// //       {/* Core Commitment */}
// //       <Card className="border-0 shadow-xl overflow-hidden bg-white rounded-2xl relative z-10">
// //         <div className="md:flex">
// //           <div className="md:w-1/3 bg-secondary-pink/10 p-10 flex flex-col justify-center text-center md:text-left">
// //             <h2 className="text-3xl font-bold text-dark-navy mb-4">Our Complete Commitment</h2>
// //             <p className="text-gray-600">
// //               The pillars that define our institutional philosophy and educational approach
// //             </p>
// //           </div>
// //           <div className="md:w-2/3 p-10">
// //             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //               {[
// //                 "Providing world-class nursing education",
// //                 "Advancing research and evidence-based practice",
// //                 "Promoting community health initiatives",
// //                 "Championing diversity and inclusion",
// //                 "Building healthcare partnerships",
// //                 "Continuous curriculum innovation",
// //                 "Developing leadership skills",
// //                 "Fostering global perspectives",
// //               ].map((item, index) => (
// //                 <li key={index} className="flex items-start space-x-3">
// //                   <div className="flex-shrink-0 mt-1">
// //                     <div className="h-6 w-6 rounded-full bg-secondary-pink flex items-center justify-center">
// //                       <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
// //                         <path
// //                           fillRule="evenodd"
// //                           d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
// //                           clipRule="evenodd"
// //                         />
// //                       </svg>
// //                     </div>
// //                   </div>
// //                   <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       </Card>

// //       {/* Call to Action */}
// //       <div className="mt-20 text-center bg-white border border-secondary-pink/30 rounded-2xl p-10 shadow-lg relative z-10">
// //         <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy mb-4">
// //           Join Our Nursing Community
// //         </h2>
// //         <p className="text-medium-gray mb-6 max-w-2xl mx-auto text-base">
// //           Become part of an institution that's shaping the future of healthcare through excellence in nursing education
// //         </p>
// //         <button className="bg-white hover:bg-pink-700 text-black px-8 py-3 rounded-full font-semibold shadow-md transition duration-300">
// //           Explore Programs
// //         </button>
// //       </div>
// //     </div>
// //   )
// // }
// import { Target, Eye } from "lucide-react"
// import Image from "next/image"

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
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
//               Our <span className="text-accent-pink">Vision & Mission</span>
//             </h1>
//             <p className="text-gray-600 max-w-2xl mx-auto mt-4">
//               Guiding principles that shape our commitment to nursing excellence and healthcare transformation.
//             </p>
//           </div>

//           {/* Vision & Mission Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Vision */}
//             <div className="bg-pink-50/50 border border-pink-100 rounded-2xl p-8 shadow-md">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 bg-white rounded-full shadow-sm">
//                   <Eye className="h-6 w-6 text-accent-pink" />
//                 </div>
//                 <h2 className="text-xl font-semibold text-dark-navy">Our Vision</h2>
//               </div>
//               <p className="text-gray-700 leading-relaxed text-sm md:text-base">
//                 To be a globally recognized leader in nursing education, research, and practice, advancing compassionate and evidence-based care.
//                 Our School of Nursing strives to empower future generations of nurses who lead with integrity, empathy, and expertise — driving positive change in global healthcare systems.
//               </p>
//             </div>

//             {/* Mission */}
//             <div className="bg-pink-50/50 border border-pink-100 rounded-2xl p-8 shadow-md">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="p-3 bg-white rounded-full shadow-sm">
//                   <Target className="h-6 w-6 text-accent-pink" />
//                 </div>
//                 <h2 className="text-xl font-semibold text-dark-navy">Our Mission</h2>
//               </div>
//               <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
//                 <p>
//                   At SNBP Institute of Nursing, our mission is to educate and empower future nurses committed to compassionate care, evidence-based practice, and leadership in healthcare.
//                 </p>
//                 <p>
//                   We cultivate critical thinking, ethical decision-making, and lifelong learning through innovative curricula and real-world experiences.
//                 </p>
//                 <p>
//                   Our vision extends to community outreach, impactful research, and fostering a diverse, inclusive learning environment that reflects the populations we serve.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Commitment Section */}
//           <div className="mt-20 bg-white border border-pink-100 rounded-2xl shadow-md">
//             <div className="md:flex">
//               <div className="md:w-1/3 bg-pink-50 p-8 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none text-center md:text-left">
//                 <h3 className="text-xl font-bold text-dark-navy mb-2">Our Core Commitment</h3>
//                 <p className="text-gray-600 text-sm">
//                   The pillars that define our institutional philosophy and educational approach
//                 </p>
//               </div>
//               <div className="md:w-2/3 p-8">
//                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   {[
//                     "Providing world-class nursing education",
//                     "Advancing research and evidence-based practice",
//                     "Promoting community health initiatives",
//                     "Championing diversity and inclusion",
//                     "Building healthcare partnerships",
//                     "Continuous curriculum innovation",
//                     "Developing leadership skills",
//                     "Fostering global perspectives",
//                   ].map((point, idx) => (
//                     <li key={idx} className="flex items-start gap-3">
//                       <div className="h-5 w-5 rounded-full bg-accent-pink flex items-center justify-center mt-1">
//                         <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                           <path
//                             fillRule="evenodd"
//                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </div>
//                       <span className="text-gray-700 text-sm">{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="mt-20 text-center border border-pink-100 bg-white p-10 rounded-2xl shadow-lg">
//             <h2 className="text-2xl md:text-3xl font-bold text-dark-navy mb-4">Join Our Nursing Community</h2>
//             <p className="text-gray-600 text-base max-w-xl mx-auto mb-6">
//               Become part of an institution shaping the future of healthcare through excellence in nursing education.
//             </p>
//             <button className="bg-accent-pink hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold shadow transition duration-300">
//               Explore Programs
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-50 px-3 py-1 rounded-full mb-4">
              <Eye className="h-4 w-4 text-accent-pink" />
              <span className="text-xs font-medium text-accent-pink">Our Core Philosophy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-dark-navy leading-tight mb-4">
              Our <span className="text-accent-pink">Vision & Mission</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guiding principles that shape our commitment to nursing excellence and healthcare transformation
            </p>
          </div>

          {/* Vision & Mission Cards */}
        {/* Vision & Mission - Vertically stacked layout */}
<div className="flex flex-col gap-10 mb-20 relative z-10">
  {/* Vision Card */}
  <Card className="relative border-0 shadow-xl bg-white hover:scale-[1.01] transition-transform duration-300 rounded-2xl">
    <div className="p-10 h-full">
      <CardHeader className="px-0">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-4 rounded-full bg-secondary-pink/10 shadow-md">
            <Eye className="h-8 w-8 text-accent-pink" />
          </div>
          <CardTitle className="text-2xl font-bold text-accent-pink">Our Vision</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <p className="text-gray-600 text-base leading-relaxed tracking-wide">
          To be a globally recognized leader in nursing education, research, and practice, advancing compassionate and evidence-based care. With a commitment to excellence, innovation, and community partnership, our School of Nursing Institute strives to empower future generations of nurses who will transform healthcare delivery and improve patient outcomes worldwide. We envision a future where our graduates lead with integrity, empathy, and clinical expertise, driving positive change in healthcare systems and positively impacting the health and well-being of individuals and communities.
        </p>
      </CardContent>
    </div>
  </Card>

  {/* Mission Card */}
  <Card className="relative border-0 shadow-xl bg-white hover:scale-[1.01] transition-transform duration-300 rounded-2xl">
    <div className="p-10 h-full">
      <CardHeader className="px-0">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-4 rounded-full bg-secondary-pink/10 shadow-md">
            <Target className="h-8 w-8 text-accent-pink" />
          </div>
          <CardTitle className="text-2xl font-bold text-accent-pink">Our Mission</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-0 space-y-4">
        <p className="text-gray-600 text-base leading-relaxed tracking-wide">
          At SNBP Institute of Nursing, our mission is to educate and empower future nurses who are dedicated to compassionate care, evidence-based practice, and leadership in healthcare. We are committed to fostering a learning environment that cultivates critical thinking, ethical decision-making, and lifelong learning. Through innovative curriculum, experiential learning opportunities, and interdisciplinary collaboration, we prepare our students to meet the challenges of a dynamic healthcare landscape.
        </p>
        <p className="text-gray-600 text-base leading-relaxed tracking-wide">
          Our institute is dedicated to advancing nursing science through research that addresses current and emerging health issues. We strive to contribute to the body of nursing knowledge and promote best practices in patient care. With a focus on community engagement and service, we aim to improve health outcomes and reduce health disparities through partnerships with local and global communities. At SNBP Institute of Nursing, we uphold the highest standards of professionalism, integrity, and respect for diversity. We are committed to nurturing a diverse student body and faculty who reflect the populations we serve. By equipping our graduates with the knowledge, skills, and values necessary for excellence in nursing practice, we aim to make a positive impact on the health and well-being of individuals and communities.
        </p>
      </CardContent>
    </div>
  </Card>
</div>


          {/* Call to Action */}
          <div className="mt-20 text-center bg-white border border-pink-100 rounded-2xl p-10 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-extrabold text-dark-navy mb-4">
              Join Our Nursing Community
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-base">
              Become part of an institution that's shaping the future of healthcare through excellence in nursing education
            </p>
            <button className="bg-accent-pink hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition duration-300">
              Explore Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
