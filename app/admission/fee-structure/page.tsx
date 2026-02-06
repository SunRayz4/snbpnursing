// import React from "react";
// import { Banknote, Info, IndianRupee, AlertTriangle } from "lucide-react";

// export default function CourseFeesPage() {
//   return (
//     <div className="relative overflow-hidden py-16 px-6 sm:px-12 lg:px-24 bg-gray-50 min-h-screen">
//       {/* Background Effects */}
//       <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-secondary-pink/20 rounded-full blur-3xl z-0" />
//       <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-secondary-pink/10 rounded-full blur-3xl z-0" />

//       {/* Page Header */}
//       <div className="text-center mb-12 relative z-10">
//         <Banknote className="mx-auto h-10 w-10 text-secondary-pink mb-2" />
//         <h1 className="text-4xl font-extrabold text-dark-navy mb-4">
//           Course <span className="text-secondary-pink">Fees</span>
//         </h1>
//         <p className="text-gray-600 max-w-3xl mx-auto text-lg">
//           The fee structure is based on approvals by the <strong>Fee Regulating Authority (FRA)</strong> as per guidelines of the Maharashtra University Act 2016.
//         </p>
//       </div>

//       {/* Fees Info Block */}
//       <div className="bg-white shadow-md rounded-xl p-6 border border-gray-100 mb-10 relative z-10">
//         <div className="flex items-start gap-4">
//           <Info className="text-indigo-600 mt-1 h-6 w-6" />
//           <p className="text-gray-700 text-sm leading-relaxed">
//             The <strong>Adhoc / Interim fee structure</strong> is approved by the Fee Regulating Authority (FRA). The final fee payable by the candidate will be based on the latest fee published by FRA for that academic year.
//           </p>
//         </div>
//       </div>

//       {/* Fee Table */}
//       <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-100 relative z-10">
//         <table className="min-w-full text-sm text-gray-700">
//           <thead className="bg-secondary-pink/20 text-dark-navy uppercase text-xs">
//             <tr>
//               <th className="px-6 py-4 border-b">Name of the Course</th>
//               <th className="px-6 py-4 border-b text-right">Tuition Fees (Rs.)</th>
//               <th className="px-6 py-4 border-b">Draw DD / Cheque in favour of</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="hover:bg-gray-50 transition">
//               <td className="px-6 py-4 border-b">B.Sc. Nursing (2025–26)</td>
//               <td className="px-6 py-4 border-b text-right font-semibold text-green-700">
//                 ₹80,000/-
//               </td>
//               <td className="px-6 py-4 border-b text-gray-500 italic">
//                 [To be updated by institute]
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Concession Note */}
//       <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl shadow max-w-3xl mx-auto relative z-10 flex items-start gap-4">
//         <AlertTriangle className="text-yellow-500 mt-1 h-6 w-6" />
//         <p className="text-yellow-800 text-sm leading-relaxed">
//           <strong>Note:</strong> Tuition fee concessions (if applicable) for reserved category candidates
//           will be granted as per rules & regulations set by the concerned authority. Students are advised
//           to refer to latest government notifications for concession schemes.
//         </p>
//       </div>
//     </div>
//   );
// }
import React from "react";
import {
  Banknote,
  Info,
  AlertTriangle,
} from "lucide-react";

export default function CourseFeesPage() {
  return (
    <div className="relative overflow-hidden py-16 px-6 sm:px-12 lg:px-24 bg-gray-50 min-h-screen">
   

     
<div className="text-center mb-14 relative z-10">
  <div className="inline-flex items-center justify-center bg-secondary-pink text-white rounded-full w-14 h-14 mb-4 shadow-lg">
    <Banknote className="w-7 h-7" />
  </div>

  <h1 className="text-4xl font-extrabold text-dark-navy mb-2 relative inline-block">
    Course <span className="text-secondary-pink">Fees</span>
    {/* Elegant Underline */}
    <span className="block h-[3px] w-20 bg-secondary-pink mx-auto mt-2 rounded-full"></span>
  </h1>

  <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
    The fee structure is determined by the <strong>Fee Regulating Authority (FRA)</strong> as per the Maharashtra University Act, 2016.
  </p>
</div>


      {/* Info Block */}
      <div className="bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200 mb-10 max-w-4xl mx-auto relative z-10">
        <div className="flex items-start gap-4">
          <Info className="text-indigo-600 mt-1 h-6 w-6" />
          <p className="text-gray-700 text-sm leading-relaxed">
            The <strong>Adhoc / Interim fee structure</strong> is as approved by the Fee Regulating Authority (FRA).
            The final amount payable will be based on the official notification for the academic year by FRA.
          </p>
        </div>
      </div>

      {/* Fee Table */}
      <div className="max-w-4xl mx-auto overflow-hidden shadow-2xl rounded-xl border border-gray-100 relative z-10 bg-white/90 backdrop-blur">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-secondary-pink/10 text-dark-navy uppercase text-xs">
            <tr>
              <th className="px-6 py-4 text-left">Name of the Course</th>
              <th className="px-6 py-4 text-right">Tuition Fees</th>
              <th className="px-6 py-4 text-left">Payment Instructions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 font-medium">B.Sc. Nursing (2025–26)</td>
              <td className="px-6 py-4 text-right text-green-700 font-semibold text-base">
                ₹80,000/-
              </td>
              <td className="px-6 py-4 text-gray-500 italic">
                Draw DD/Cheque in favor of [Institute Name]
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Concession Note */}
      <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-xl shadow max-w-3xl mx-auto relative z-10 flex items-start gap-4">
        <AlertTriangle className="text-yellow-500 mt-1 h-6 w-6" />
        <p className="text-yellow-800 text-sm leading-relaxed">
          <strong>Note:</strong> Eligible category students may receive tuition fee concessions based on rules and guidelines from the competent authority. Candidates must check current government provisions at the time of admission.
        </p>
      </div>
    </div>
  );
}
