"use client"

import { FileText } from "lucide-react"
import Link from "next/link"

export default function SemesterThreePage() {
  const documents = [
    {
      title: "Applied Microbiology and Infection Control including Safety",
      href: "public/pdf/III Semester/1 Applied Microbiology And  Infection Control Including Safety_201022.pdf",
    },
    {
      title: "Pharmacology – I",
      href: "/pdf/III Semester/2 Pharmacology-I_201022.pdf",
    },
    {
      title: "Pathology – I",
      href: "/pdf/III Semester/3 Pathology-I_201022.pdf",
    },
    {
      title: "Adult Health Nursing – I",
      href: "/pdf/III Semester/4 Adult Health Nursing_201022.pdf",
    },
    {
      title: "Course of Instruction – Semester 3",
      href: "/pdf/III Semester/Course of Instruction III semester_201022.pdf",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-14 relative">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-4">
          <FileText className="h-10 w-10 text-red-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Semester 3 – Syllabus Documents
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Click on any subject below to <strong>view the syllabus</strong>. Each file opens in a new tab.
        </p>
      </div>

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

      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-6 rounded-md shadow max-w-3xl mx-auto">
        <strong>Note:</strong> All documents open in a new tab. Make sure your browser allows pop-ups.
      </div>
    </div>
  )
}
