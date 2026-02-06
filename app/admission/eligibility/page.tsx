// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // import { CheckCircle, AlertCircle, GraduationCap, Calendar } from "lucide-react"

// // export default function EligibilityPage() {
// //   return (
// //     <div className="container mx-auto px-4 py-12">
// //       <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Eligibility Criteria</h1>

// //       <Card className="mb-8 border-l-4 border-l-secondary-pink">
// //         <CardHeader>
// //           <CardTitle className="flex items-center space-x-2">
// //             <GraduationCap className="h-6 w-6 text-secondary-pink" />
// //             <span>B.Sc. Nursing - Eligibility Requirements</span>
// //           </CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <p className="text-light-black mb-4">
// //             Candidates seeking admission to the B.Sc. Nursing program must meet the following eligibility criteria as
// //             per Maharashtra University of Health Sciences (MUHS) guidelines:
// //           </p>
// //         </CardContent>
// //       </Card>

// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
// //         <Card>
// //           <CardHeader>
// //             <CardTitle className="flex items-center space-x-2">
// //               <CheckCircle className="h-5 w-5 text-green-600" />
// //               <span>Academic Qualifications</span>
// //             </CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <ul className="space-y-3 text-light-black">
// //               <li className="flex items-start space-x-2">
// //                 <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
// //                 <span>Passed 12th standard (HSC) or equivalent examination</span>
// //               </li>
// //               <li className="flex items-start space-x-2">
// //                 <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
// //                 <span>Physics, Chemistry, and Biology as compulsory subjects</span>
// //               </li>
// //               <li className="flex items-start space-x-2">
// //                 <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
// //                 <span>English as a compulsory subject</span>
// //               </li>
// //               <li className="flex items-start space-x-2">
// //                 <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
// //                 <span>Minimum 45% aggregate marks (40% for reserved categories)</span>
// //               </li>
// //             </ul>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader>
// //             <CardTitle className="flex items-center space-x-2">
// //               <Calendar className="h-5 w-5 text-secondary-pink" />
// //               <span>Age Criteria</span>
// //             </CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <ul className="space-y-3 text-light-black">
// //               <li className="flex items-start space-x-2">
// //                 <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
// //                 <span>Minimum age: 17 years as on 31st December of admission year</span>
// //               </li>
// //               <li className="flex items-start space-x-2">
// //                 <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
// //                 <span>Maximum age: 35 years (relaxation for reserved categories)</span>
// //               </li>
// //             </ul>
// //           </CardContent>
// //         </Card>
// //       </div>

// //       <Card className="mb-8">
// //         <CardHeader>
// //           <CardTitle>Entrance Examination</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <div>
// //               <h3 className="font-semibold text-dark-gray mb-2">NEET Qualification</h3>
// //               <ul className="list-disc list-inside text-light-black space-y-2">
// //                 <li>Valid NEET score is mandatory</li>
// //                 <li>Must appear in NEET-UG examination</li>
// //                 <li>Score valid for the admission year</li>
// //                 <li>Counseling through centralized admission process</li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="font-semibold text-dark-gray mb-2">State Quota</h3>
// //               <ul className="list-disc list-inside text-light-black space-y-2">
// //                 <li>Maharashtra state domicile preferred</li>
// //                 <li>All India quota seats available</li>
// //                 <li>NRI/Management quota seats</li>
// //                 <li>Reservation as per government norms</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </CardContent>
// //       </Card>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //         <Card>
// //           <CardHeader>
// //             <CardTitle className="flex items-center space-x-2">
// //               <AlertCircle className="h-5 w-5 text-orange-500" />
// //               <span>Important Notes</span>
// //             </CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <ul className="list-disc list-inside text-light-black space-y-2">
// //               <li>All certificates must be from recognized boards</li>
// //               <li>Gap years may require additional documentation</li>
// //               <li>Medical fitness certificate required</li>
// //               <li>Character certificate from previous institution</li>
// //               <li>Migration certificate (if applicable)</li>
// //             </ul>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader>
// //             <CardTitle>Reservation Policy</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="space-y-3">
// //               <div className="flex justify-between">
// //                 <span className="text-light-black">Open Category</span>
// //                 <span className="font-semibold">50%</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="text-light-black">OBC</span>
// //                 <span className="font-semibold">27%</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="text-light-black">SC</span>
// //                 <span className="font-semibold">13%</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="text-light-black">ST</span>
// //                 <span className="font-semibold">7%</span>
// //               </div>
// //               <div className="flex justify-between">
// //                 <span className="text-light-black">EWS</span>
// //                 <span className="font-semibold">10%</span>
// //               </div>
// //             </div>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   )
// // }
// import React from "react";
// import {
//   GraduationCap,
//   BadgeCheck,
//   Info,
//   UserCheck,
//   Lightbulb,
//   AlertTriangle,
// } from "lucide-react";

// export default function EligibilityCriteriaPage() {
//   const criteria = [
//     {
//       icon: <GraduationCap className="h-6 w-6 text-white" />,
//       title: "Educational Qualification",
//       description:
//         "Must have passed 10+2 (HSC) with minimum 45% (40% for reserved) in Physics, Chemistry, Biology & English from a recognized board.",
//       bg: "bg-gradient-to-r from-pink-500 to-pink-700",
//     },
//     {
//       icon: <BadgeCheck className="h-6 w-6 text-white" />,
//       title: "Entrance Examination",
//       description:
//         "Must have appeared and qualified in MH CET Nursing entrance exam with valid score.",
//       bg: "bg-gradient-to-r from-indigo-500 to-indigo-700",
//     },
//     {
//       icon: <Info className="h-6 w-6 text-white" />,
//       title: "Nationality & Domicile",
//       description:
//         "Must be an Indian National and have a Domicile Certificate of Maharashtra or equivalent proof.",
//       bg: "bg-gradient-to-r from-emerald-500 to-emerald-700",
//     },
//     {
//       icon: <UserCheck className="h-6 w-6 text-white" />,
//       title: "Medical Fitness",
//       description:
//         "Submit Medical Fitness Certificate in MH CET Nursing format confirming physical & mental fitness.",
//       bg: "bg-gradient-to-r from-purple-500 to-purple-700",
//     },
//   ];

//   return (
//     <div className="relative overflow-hidden py-16 px-6 sm:px-12 lg:px-24 bg-gray-50 min-h-screen">
//       {/* Gradient Blobs */}
//       <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-secondary-pink/30 rounded-full blur-3xl z-0" />
//       <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-secondary-pink/20 rounded-full blur-3xl z-0" />

//       {/* Header */}
//       <div className="text-center mb-14 relative z-10">
//         <Lightbulb className="mx-auto h-10 w-10 text-secondary-pink mb-2" />
//         <h1 className="text-4xl font-extrabold text-dark-navy mb-4">
//           Eligibility <span className="text-secondary-pink">Criteria</span>
//         </h1>
//         <p className="text-gray-600 max-w-3xl mx-auto text-lg">
//           Check if you're eligible to apply for admission to our esteemed nursing programs.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
//         {criteria.map((item, index) => (
//           <div
//             key={index}
//             className={`rounded-2xl p-6 text-white shadow-lg transform transition-all duration-300 hover:scale-[1.02] ${item.bg}`}
//           >
//             <div className="flex items-center space-x-4 mb-4">
//               <div className="p-3 rounded-full bg-white/20">
//                 {item.icon}
//               </div>
//               <h3 className="text-xl font-bold">{item.title}</h3>
//             </div>
//             <p className="text-white/90 leading-relaxed text-sm">{item.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* Section Divider */}
//       <div className="my-16 text-center relative z-10">
//         <hr className="border-gray-300 mb-4" />
//         <h2 className="text-xl font-semibold text-dark-navy">
//           Additional Information
//         </h2>
//       </div>

//       {/* Note Section */}
//       <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl shadow max-w-3xl mx-auto relative z-10 flex items-start gap-4">
//         <AlertTriangle className="text-yellow-500 mt-1 h-6 w-6" />
//         <p className="text-yellow-800 text-sm leading-relaxed">
//           <strong>Note:</strong> Admission will be granted only upon full compliance with the above
//           eligibility requirements and submission of all original documents along with 3 sets of
//           attested photocopies during the admission process.
//         </p>
//       </div>
//     </div>
//   );
// }
import React from "react";
import {
  GraduationCap,
  BadgeCheck,
  Info,
  UserCheck,
  Lightbulb,
  AlertTriangle,
  CalendarClock,
} from "lucide-react";

export default function EligibilityCriteriaPage() {
  const criteria = [
    {
      title: "Minimum Age",
      icon: <CalendarClock className="h-6 w-6 text-white" />,
      description:
        "The applicant must be at least 17 years old on or before 31st December of the admission year.",
      bg: "bg-gradient-to-r from-rose-500 to-pink-600",
    },
    {
      title: "Educational Qualification",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      description:
        "Passed 12th Std. (10+2) / HSC or equivalent with minimum 45% marks in PCB for Open Category and 40% for Reserved Category.",
      bg: "bg-gradient-to-r from-indigo-500 to-indigo-700",
    },
    {
      title: "Medical Fitness",
      icon: <UserCheck className="h-6 w-6 text-white" />,
      description:
        "The applicant must be medically fit. A valid Medical Fitness Certificate must be submitted.",
      bg: "bg-gradient-to-r from-emerald-500 to-emerald-700",
    },
    {
      title: "MH CET Nursing Requirement",
      icon: <BadgeCheck className="h-6 w-6 text-white" />,
      description:
        "MH CET Nursing is mandatory for B.Sc. Nursing. Admission is through CAP ROUND conducted by CET CELL, Govt. of Maharashtra.",
      bg: "bg-gradient-to-r from-purple-500 to-purple-700",
    },
    {
      title: "Minimum Percentile in MH CET",
      icon: <Info className="h-6 w-6 text-white" />,
      description:
        "Minimum 50 percentile required for Open Category and 40 percentile for Reserved Category in MH CET Nursing.",
      bg: "bg-gradient-to-r from-pink-600 to-fuchsia-700",
    },
  ];

  return (
    <div className="relative overflow-hidden py-16 px-6 sm:px-12 lg:px-24 bg-gray-50 min-h-screen">
      {/* Decorative Background Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-secondary-pink/30 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-secondary-pink/20 rounded-full blur-3xl z-0" />

      {/* Page Header */}
      <div className="text-center mb-14 relative z-10">
        <Lightbulb className="mx-auto h-10 w-10 text-secondary-pink mb-2" />
        <h1 className="text-4xl font-extrabold text-dark-navy mb-4">
          Eligibility <span className="text-secondary-pink">Criteria</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          To apply for B.Sc. Nursing admission, students must meet the following eligibility requirements as per CET CELL, Government of Maharashtra.
        </p>
      </div>

      {/* Eligibility Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {criteria.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 text-white shadow-lg transform transition-all duration-300 hover:scale-[1.02] ${item.bg}`}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-white/20">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
            <p className="text-white/90 leading-relaxed text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-16 text-center relative z-10">
        <hr className="border-gray-300 mb-4" />
        <h2 className="text-xl font-semibold text-dark-navy">Important Reminder</h2>
      </div>

      {/* Note Box */}
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl shadow max-w-3xl mx-auto relative z-10 flex items-start gap-4">
        <AlertTriangle className="text-yellow-500 mt-1 h-6 w-6" />
        <p className="text-yellow-800 text-sm leading-relaxed">
          <strong>Note:</strong> Admission is strictly based on eligibility compliance and valid MH CET
          Nursing scores. Candidates must submit original certificates and <u>3 sets of attested photocopies</u> at the time of admission.
        </p>
      </div>
    </div>
  );
}
