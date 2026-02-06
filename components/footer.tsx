import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Information</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent-pink" />
                <span>snbp.nursing@snbpinstitutes.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent-pink" />
                <span>+91 8446301404 /9730174284</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-accent-pink" />
                <span>GAT.NO.71/1, 90, 94, RIVER RESIDENCY, DEHU-ALANDI ROAD, CHIKALI-PUNE-411062</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <div className="space-y-2 text-gray-300">
              <Link href="/about" className="block hover:text-accent-pink transition-colors">
                About Us
              </Link>
              <Link href="/courses" className="block hover:text-accent-pink transition-colors">
                Courses
              </Link>
              <Link href="/admission" className="block hover:text-accent-pink transition-colors">
                Admission
              </Link>
              <Link href="/facilities" className="block hover:text-accent-pink transition-colors">
                Facilities
              </Link>
              <Link href="/contact" className="block hover:text-accent-pink transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Important Links</h3>
            <div className="space-y-2 text-gray-300">
              <Link href="/committees" className="block hover:text-accent-pink transition-colors">
                Committees
              </Link>
              <Link href="/faculty" className="block hover:text-accent-pink transition-colors">
                Faculty
              </Link>
              <Link href="/syllabus" className="block hover:text-accent-pink transition-colors">
                Syllabus
              </Link>
              <Link href="/muhs-mandate" className="block hover:text-accent-pink transition-colors">
                MUHS Mandate
              </Link>
              <Link href="/placement" className="block hover:text-accent-pink transition-colors">
                Placement
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2025 SunRayz Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
