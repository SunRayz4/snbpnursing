
"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

const syllabus = [
  {
    semester: "Semester 1",
    subjects: [
      "Communicative English",
      "Applied Anatomy",
      "Applied Physiology",
      "Applied Sociology",
      "Applied Psychology",
      "Nursing Foundation – I (including First Aid module)",
    ],
  },
  {
    semester: "Semester 2",
    subjects: [
      "Applied Biochemistry",
      "Applied Nutrition and Dietetics",
      "Nursing Foundation II (including Health Assessment Module)",
      "Health Nursing Informatics Technology",
    ],
  },
  {
    semester: "Semester 3",
    subjects: [
      "Applied Microbiology and Infection Control including Safety",
      "Pharmacology-I",
      "Pathology-I",
      "Adult Health Nursing",
    ],
  },
  {
    semester: "Semester 4",
    subjects: [
      "Pharmacology-II",
      "Pathology-II and Genetics",
      "Professionalism, Values and Ethics (including Bioethics)",
      "Adult Health Nursing",
    ],
  },
  {
    semester: "Semester 5",
    subjects: [
      "Introduction to Forensic Nursing and Indian Laws",
      "Child Health Nursing-I",
      "Community Health Nursing I (with Environmental Science & Epidemiology)",
      "Educational Technology & Nursing Education",
      "Mental Health Nursing-I",
    ],
  },
  {
    semester: "Semester 6",
    subjects: [
      "Child Health Nursing-II",
      "Mental Health Nursing-II",
      "Midwifery & OBG Nursing I (including SBA module)",
      "Nursing Management and Leadership",
    ],
  },
  {
    semester: "Semester 7",
    subjects: [
      "Community Health Nursing-II",
      "Midwifery & OBG Nursing (I and II)",
      "Nursing Research and Statistics",
    ],
  },
  {
    semester: "Semester 8",
    subjects: ["Internship"],
  },
]

export default function BScNursingPage() {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-extrabold text-black">
          B.Sc. Nursing
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          A 4-year degree course consisting of 8 semesters. Below is the complete semester-wise syllabus.
        </p>
      </motion.div>

      {/* Semester Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {syllabus.map((sem, index) => (
          <motion.div
            key={sem.semester}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white border border-purple-100 rounded-2xl shadow hover:shadow-lg transition-shadow p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-full text-black-700">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-black-800">{sem.semester}</h3>
            </div>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              {sem.subjects.map((sub, idx) => (
                <li key={idx}>{sub}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
