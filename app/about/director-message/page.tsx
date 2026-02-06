
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
                  Welcome to SNBP's Nursing Program — where technical excellence meets compassionate care.
                </p>
                <div className="flex items-start gap-3 bg-pink-50/50 p-4 rounded-lg border border-pink-100">
                  <Quote className="h-5 w-5 text-accent-pink mt-1 flex-shrink-0" />
                  <p className="italic text-gray-700">
                    "Our mission is to develop nurses who see patients as individuals deserving of dignity, not just medical cases."
                  </p>
                </div>
                    <div className="space-y-6">
          <p>
            It is with great pride that we launch our Nursing Program at SNBP Institutions. Since our founding in 1997, we have been committed to educational excellence that combines rigorous academics with strong ethical foundations.
          </p>

          <p>
            The addition of nursing to our institution addresses a critical need for healthcare professionals who can combine technical skill with human understanding. We aim to graduate nurses who will be leaders in both clinical competence and patient advocacy.
          </p>

          <div className="bg-pink-50 rounded-lg p-6 border-l-4 border-accent-pink font-medium text-gray-900">
            Nursing is more than a career — it's a vocation that demands intelligence, compassion, and moral courage in equal measure.
          </div>

          <p>
            Our curriculum is designed to develop professionals who see each patient holistically. Beyond medical knowledge, we emphasize communication skills, ethical decision-making, and cultural sensitivity.
          </p>

          <p>
            We envision SNBP's Nursing Program becoming a benchmark for healthcare education — where students gain not just knowledge, but the wisdom to apply it compassionately in service to others.
          </p>

          <div className="pt-8 text-right font-medium text-dark-navy">
            Warm regards,<br />
            <span className="font-semibold">Dr. Rutuja Bhosale</span><br />
            Trustee & Director,<br />
            SNBP Group of Institutions
          </div>
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
