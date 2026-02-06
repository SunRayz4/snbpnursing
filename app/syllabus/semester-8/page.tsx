"use client";

import { FileText } from "lucide-react";
import Link from "next/link";

export default function SemesterFivePage() {
  const documents = [
  
    {
      title: "Course of Instruction VIII Semester",
      href: "/pdf/VIII Semester/Course of Instruction VIII Semester_201022.pdf",
    },
    
   
  ];

  return (
    <div className="container mx-auto px-4 py-14 relative">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <FileText className="h-10 w-10 text-red-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Semester 8 – Syllabus Documents
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Click on any subject below to <strong>view the syllabus</strong>. Each file will open in a new tab.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-xl bg-white relative z-10">
        <table className="min-w-full border border-gray-200 text-sm text-gray-700">
          <thead className="bg-purple-50 text-red-800 uppercase text-left text-xs">
            <tr>
              <th className="px-6 py-4 border-b">Sr. No.</th>
              <th className="px-6 py-4 border-b">Subject</th>
              <th className="px-6 py-4 border-b text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {documents.map((doc, index) => (
              <tr key={index} className="hover:bg-gray-50 transition">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{doc.title}</td>
                <td className="px-6 py-3 text-center">
                  <Link
                    href={doc.href}
                    target="_blank"
                    className="px-4 py-1.5 rounded-md bg-purple-100 text-red-700 hover:bg-purple-200 text-xs font-medium transition"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Note */}
      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-6 rounded-md shadow max-w-3xl mx-auto">
        <strong>Note:</strong> All syllabus documents are in PDF format and will open in a new tab.
      </div>
    </div>
  );
}
