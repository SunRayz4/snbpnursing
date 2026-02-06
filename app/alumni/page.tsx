import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Building, Heart } from "lucide-react"

export default function AlumniPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Alumni Members</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardHeader>
            <Users className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle>2000+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">Alumni Worldwide</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Award className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle>15+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">Years of Excellence</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Building className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle>50+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">Countries Served</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Heart className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle>100%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">Success Rate</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-center">Our Alumni Network</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-light-black text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Our alumni are the pride of our institution, serving in prestigious healthcare organizations across the
            globe. They continue to uphold the values of compassionate care, professional excellence, and lifelong
            learning that define our nursing program.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-dark-gray mb-6">Distinguished Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Ms. Priya Sharma",
                batch: "Batch 2015",
                position: "Chief Nursing Officer",
                organization: "Apollo Hospitals, Mumbai",
                achievement: "Excellence in Patient Care Award 2023",
              },
              {
                name: "Mr. Rajesh Kumar",
                batch: "Batch 2012",
                position: "ICU Specialist",
                organization: "Fortis Healthcare, Delhi",
                achievement: "COVID-19 Frontline Hero Recognition",
              },
              {
                name: "Ms. Anjali Patel",
                batch: "Batch 2018",
                position: "Pediatric Nurse Practitioner",
                organization: "Johns Hopkins Hospital, USA",
                achievement: "International Nursing Excellence Award",
              },
              {
                name: "Dr. Suresh Reddy",
                batch: "Batch 2010",
                position: "Nursing Educator",
                organization: "AIIMS, New Delhi",
                achievement: "Best Teacher Award 2022",
              },
              {
                name: "Ms. Kavita Singh",
                batch: "Batch 2016",
                position: "Emergency Department Head",
                organization: "Ruby Hall Clinic, Pune",
                achievement: "Leadership in Crisis Management",
              },
              {
                name: "Mr. Amit Joshi",
                batch: "Batch 2014",
                position: "Quality Assurance Manager",
                organization: "Manipal Hospitals, Bangalore",
                achievement: "Healthcare Quality Improvement Award",
              },
            ].map((alumni, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary-pink rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-lg">{alumni.name}</CardTitle>
                  <p className="text-secondary-pink font-semibold">{alumni.batch}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-dark-gray mb-1">{alumni.position}</p>
                  <p className="text-light-black mb-3">{alumni.organization}</p>
                  <div className="bg-primary-pink p-2 rounded-lg">
                    <p className="text-dark-gray text-sm font-medium">{alumni.achievement}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-dark-gray mb-6">Alumni by Specialization</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-secondary-pink">Critical Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-dark-gray mb-2">450+</p>
                <p className="text-light-black">ICU/CCU Specialists</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-secondary-pink">Pediatrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-dark-gray mb-2">320+</p>
                <p className="text-light-black">Child Healthcare</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-secondary-pink">Community Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-dark-gray mb-2">280+</p>
                <p className="text-light-black">Public Health Nurses</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-secondary-pink">Administration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-dark-gray mb-2">150+</p>
                <p className="text-light-black">Leadership Roles</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-dark-gray mb-6">Alumni Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-light-black italic mb-4">
                  "The foundation I received at this college has been instrumental in my career growth. The practical
                  training and ethical values instilled here continue to guide me in my professional journey."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-pink rounded-full"></div>
                  <div>
                    <p className="font-semibold text-dark-gray">Ms. Neha Gupta</p>
                    <p className="text-light-black text-sm">Batch 2017, Senior Nurse - AIIMS Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-light-black italic mb-4">
                  "The college not only provided excellent academic training but also shaped my character. The
                  mentorship from faculty and the supportive environment prepared me for international opportunities."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-pink rounded-full"></div>
                  <div>
                    <p className="font-semibold text-dark-gray">Mr. Vikram Mehta</p>
                    <p className="text-light-black text-sm">Batch 2013, Nurse Manager - Singapore General Hospital</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Card className="mt-12">
        <CardHeader>
          <CardTitle className="text-center">Stay Connected</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-light-black mb-6">
            Join our alumni network and stay connected with your fellow graduates. Share your achievements, mentor
            current students, and contribute to the growth of our nursing community.
          </p>
          <div className="space-y-2">
            <p className="text-light-black">
              <span className="font-semibold">Email:</span> alumni@college.edu
            </p>
            <p className="text-light-black">
              <span className="font-semibold">Phone:</span> +91 7774055233
            </p>
            <p className="text-light-black">
              <span className="font-semibold">Alumni WhatsApp Group:</span> Contact us to join
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
