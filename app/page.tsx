import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, BookOpen, Users, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <Image src="/logo-image.png" alt="SNBP Logo" width={70} height={50} />


            <span className="text-2xl font-bold text-gray-800">SNBP INSTITUTE OF NURSING</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {["Home", "Programs", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-pink-500 transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative h-[600px] overflow-hidden">
          <Image
            src="/team.jpg?height=600&width=1600"
            alt="Nursing students in a clinical setting"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-pink-500/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in-up">
              Ignite Your Nursing Passion
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up animation-delay-300">
                Become a compassionate and skilled nurse at SNBP INSTITUTE OF NURSING
              </p>
              <Button
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white animate-fade-in-up animation-delay-600"
              >
                Start Your Journey
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Nursing Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Bachelor of Nursing", icon: BookOpen, description: "Comprehensive undergraduate program" },
                { title: "Master of Nursing", icon: Award, description: "Advanced practice and leadership" },
                { title: "Specialized Certifications", icon: Heart, description: "Focus on specific areas of care" },
                { title: "Continuing Education", icon: Users, description: "Stay updated with the latest in nursing" },
              ].map((program, index) => (
                <Card key={index} className="transition-transform duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <program.icon className="h-6 w-6 text-pink-500" />
                      <span>{program.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{program.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/wcu.jpg?height=400&width=600"
                  alt="Nursing simulation lab"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose SNBP INSTITUTE OF NURSING?</h2>
                <p className="text-gray-600 mb-4">
                  At SNBP INSTITUTE OF NURSING, we're committed to shaping the future of nursing through excellence in education,
                  cutting-edge facilities, and a supportive learning environment.
                </p>
                <ul className="space-y-2">
                  {[
                    "State-of-the-art simulation labs",
                    "Experienced faculty with real-world expertise",
                    "Strong clinical partnerships",
                    "High NCLEX pass rates",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-pink-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="mt-6 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-300"
                >
                  Explore Our Facilities
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-blue-500 to-pink-500 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "1,000+", description: "Graduates" },
                { number: "98%", description: "Employment Rate" },
                { number: "50+", description: "Clinical Partners" },
                { number: "25", description: "Years of Excellence" },
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
            <div className="max-w-4xl mx-auto">
              <blockquote className="italic text-xl text-gray-600 mb-4">
                "SNBP INSTITUTE OF NURSING provided me with the knowledge, skills, and confidence to excel in my nursing career. The
                supportive faculty and hands-on experience were invaluable."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <Image
                  src="/sneha.jpg?height=60&width=60"
                  alt="Student portrait"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <div className="font-semibold">Sneha Patil</div>
                  <div className="text-sm text-gray-500">Class of 2023</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Nursing Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take the first step towards a rewarding career in nursing. Apply now and join our community of
              compassionate caregivers.
            </p>
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white transition duration-300">
              Apply Now
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <span className="text-2xl font-bold flex items-center">
          <Image src="/logo-image.png" alt="SNBP Logo" width={70} height={50} />
          SNBP INSTITUTE OF NURSING
        </span>
        <p className="mt-2 text-sm">Nurturing compassionate and skilled nurses for a healthier tomorrow.</p>
        
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          {["Programs", "Admissions", "Student Life", "Alumni", "Contact"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-pink-400 transition duration-300">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
        <div className="flex space-x-4">
          {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform) => (
            <a key={platform} href="#" className="hover:text-pink-400 transition duration-300">
              {platform}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
  <p className="mt-2">
    <a href="mailto:presidentsnbp@gmail.com" className="hover:text-pink-400">
      <i className="fas fa-envelope"></i> presidentsnbp@gmail.com
    </a>
  </p>
  <p className="mt-1">
    <a href="tel:+917774055233" className="hover:text-pink-400">
      <i className="fas fa-phone-alt"></i> +91 7774055233/7774059624
    </a>
  </p>
  <p className="mt-1">
    <span className="hover:text-pink-400">
      <i className="fas fa-map-marker-alt"></i> GAT.NO.71/1, 90, 94, RIVER RESIDENCY, DEHU-ALANDI ROAD, CHIKALI-PUNE-411062
    </span>
  </p>
  <p>© {new Date().getFullYear()} SunRayz Technology. All rights reserved.</p>
</div>

  </div>
</footer>

    </div>
  )
}

