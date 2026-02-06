// import React from "react";

// export default function page() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       {/* Page Title */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-dark-navy mb-4">
//           Admission Document Requirements
//         </h1>
//         <p className="text-medium-gray text-lg max-w-3xl mx-auto">
//           Candidates are required to submit <strong>ALL original certificates/documents</strong> in
//           support of their claim at the time of filling the Application Form for Admission at the
//           institute/college. Also attach <strong>attested true copies</strong> of documents.
//         </p>
//       </div>

//       {/* Documents Table */}
//       <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
//         <table className="min-w-full text-sm text-gray-700 border border-gray-200">
//           <thead className="bg-secondary-pink/20 text-dark-navy uppercase text-left">
//             <tr>
//               <th className="px-6 py-4 border-b">Sr.No.</th>
//               <th className="px-6 py-4 border-b">Name of Document</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             {[
//               "College Application form",
//               "SSC (Std.X) mark sheet",
//               "HSC marksheet",
//               "MH CET Nursing Application, Admit card and mark sheet",
//               "School Leaving Certificate",
//               "Certificate of the Indian Nationality of the candidate",
//               "Aadhar Card",
//               "Domicile/Birth/Leaving certificate indicating place of birth in Maharashtra",
//               "Caste certificate (If Applicable)",
//               "Caste validity certificate (If Applicable)",
//               "Non creamy layer certificate (If Applicable)",
//               "Affidavit regarding gap (If Applicable)",
//               "Income certificate of parent (If Applicable)",
//               "Other reserve category documents (If Applicable)",
//               "Medical Fitness Certificate (As per MH CET Nursing format/brochure)",
//               "Candidate Bank Passbook linked with Aadhar card",
//             ].map((item, index) => (
//               <tr key={index} className="hover:bg-gray-50 transition">
//                 <td className="px-6 py-3 border-b">{index + 1}</td>
//                 <td className="px-6 py-3 border-b">{item}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Note Section */}
//       <div className="mt-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded-md shadow-sm max-w-3xl mx-auto">
//         <strong>Note:</strong> 3 sets of attested photocopies are to be submitted during the admission
//         process.
//       </div>
//     </div>
//   );
// }
import React from "react";
import { FileText } from "lucide-react";

export default function page() {
  const documents = [
    { title: "College Application form", optional: false },
    { title: "SSC (Std.X) mark sheet", optional: false },
    { title: "HSC marksheet", optional: false },
    { title: "MH CET Nursing Application, Admit card and mark sheet", optional: false },
    { title: "School Leaving Certificate", optional: false },
    { title: "Certificate of the Indian Nationality of the candidate", optional: false },
    { title: "Aadhar Card", optional: false },
    { title: "Domicile/Birth/Leaving certificate indicating place of birth in Maharashtra", optional: false },
    { title: "Caste certificate", optional: true },
    { title: "Caste validity certificate", optional: true },
    { title: "Non creamy layer certificate", optional: true },
    { title: "Affidavit regarding gap", optional: true },
    { title: "Income certificate of parent", optional: true },
    { title: "Other reserve category documents", optional: true },
    { title: "Medical Fitness Certificate (As per MH CET Nursing format)", optional: false },
    { title: "Candidate Bank Passbook linked with Aadhar card", optional: false },
  ];

  return (
    <div className="container mx-auto px-4 py-14 relative">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <FileText className="h-10 w-10 text-secondary-pink" />
        </div>
        <h1 className="text-4xl font-extrabold text-dark-navy mb-4">
          Admission Document Checklist
        </h1>
        <p className="text-medium-gray max-w-3xl mx-auto text-lg">
          Submit <strong>ALL original certificates/documents</strong> with <strong>3 sets of attested photocopies</strong> during admission.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-xl bg-white relative z-10">
        <table className="min-w-full border border-gray-200 text-sm text-gray-700">
          <thead className="bg-secondary-pink/20 text-dark-navy uppercase text-left text-xs">
            <tr>
              <th className="px-6 py-4 border-b">Sr. No.</th>
              <th className="px-6 py-4 border-b">Name of Document</th>
              <th className="px-6 py-4 border-b text-center">Type</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {documents.map((doc, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{doc.title}</td>
                <td className="px-6 py-3 text-center">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      doc.optional
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {doc.optional ? "If Applicable" : "Required"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note */}
      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-6 rounded-md shadow max-w-3xl mx-auto">
        <strong>Note:</strong> Candidates must submit <u>3 sets of attested photocopies</u> of each document
        along with the originals at the time of admission.
      </div>
    </div>
  );
}
