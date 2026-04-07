
import { Quote, HeartPulse } from "lucide-react"
import Image from "next/image"

export default function DirectorMessagePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Director Image */}
            <div className="w-full md:w-2/5">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/images/director-image.jpg" // replace with actual image path
                  alt="Dr. Rutuja Bhosale"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 rounded-md shadow-sm">
                  <p className="text-sm font-medium text-gray-900">Dr. Rutuja Bhosale</p>
                  <p className="text-xs text-gray-600">Trustee & Director</p>
                </div>
              </div>
            </div>

            {/* Hero Text */}
            <div className="w-full md:w-3/5">
              <div className="inline-flex items-center gap-2 bg-pink-50 px-3 py-1 rounded-full mb-4">
                <HeartPulse className="h-4 w-4 text-accent-pink"/>
                <span className="text-xs font-medium text-accent-pink">Nursing Program</span>
              </div>
              {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                A Message from Our <span className="text-accent-blue">Director</span>
              </h1> */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                A Message from Our <span className="text-accent-pink">Director</span>
              </h1>
              <div className="mt-6 text-gray-600 space-y-4">
  <p>
    It gives me immense pleasure to welcome you to our esteemed institution. Nursing is not just a profession, but a noble service dedicated to the care, compassion, and well-being of humanity. At our institute, we are committed to nurturing competent, compassionate, and skilled nursing professionals who can meet the ever-growing demands of the healthcare sector.
  </p>

  <p>
    Our curriculum is designed to provide a perfect balance of theoretical knowledge and practical exposure. We focus on holistic development by promoting clinical excellence, ethical values, discipline, and a spirit of lifelong learning among our students.
  </p>

  <p>
    With well-equipped laboratories, experienced faculty, and modern teaching methodologies, we ensure that our students receive quality education and hands-on training. We aim to empower our students to face global healthcare challenges with confidence and dedication.
  </p>

  <p>
    I am confident that our students will emerge as responsible healthcare professionals and contribute meaningfully to society.
  </p>

  <p>
    I extend my best wishes to all aspiring nurses for a bright and successful future.
  </p>

  <div className="pt-8 text-right font-medium text-dark-navy">
    Warm regards,<br />
    <span className="font-semibold">Ms. Devayani Bhosale</span><br />
    Trustee & Director,<br />
    SNBP Group of Institutions
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      
    </div>
  )
}
