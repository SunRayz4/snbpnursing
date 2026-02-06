import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Building, Heart } from "lucide-react"

export default function AlumniMembersPage() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Section */}
      <section className="gradient-bg py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Alumni Members Committee</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connecting our graduates and fostering lifelong relationships within our nursing community
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center border-t-4 border-t-primary-blue">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-primary-blue mb-4" />
              <CardTitle>2000+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-gray">Alumni Worldwide</p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-secondary-blue">
            <CardHeader>
              <Award className="h-12 w-12 mx-auto text-secondary-blue mb-4" />
              <CardTitle>15+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-gray">Years of Excellence</p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-accent-pink">
            <CardHeader>
              <Building className="h-12 w-12 mx-auto text-accent-pink mb-4" />
              <CardTitle>50+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-gray">Countries Served</p>
            </CardContent>
          </Card>

          <Card className="text-center border-t-4 border-t-primary-blue">
            <CardHeader>
              <Heart className="h-12 w-12 mx-auto text-primary-blue mb-4" />
              <CardTitle>100%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-gray">Success Rate</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-center">Alumni Committee Purpose</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-medium-gray text-lg leading-relaxed text-center max-w-4xl mx-auto">
              The Alumni Members Committee serves as a bridge between our graduates and the institution, fostering
              continuous engagement, professional development, and support for current students. Our alumni are our
              greatest ambassadors, representing excellence in healthcare across the globe.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-dark-navy mb-6">Committee Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-light-blue rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-lg">Ms. Priya Sharma</CardTitle>
                  <p className="text-primary-blue font-semibold">Committee Chairperson</p>
                  <p className="text-medium-gray text-sm">Batch 2015</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-dark-navy mb-1">Chief Nursing Officer</p>
                  <p className="text-medium-gray mb-3">Apollo Hospitals, Mumbai</p>
                  <div className="bg-light-blue p-2 rounded-lg">
                    <p className="text-primary-blue text-sm font-medium">Excellence in Patient Care Award 2023</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-light-blue rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-lg">Mr. Rajesh Kumar</CardTitle>
                  <p className="text-secondary-blue font-semibold">Vice Chairperson</p>
                  <p className="text-medium-gray text-sm">Batch 2012</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-dark-navy mb-1">ICU Specialist</p>
                  <p className="text-medium-gray mb-3">Fortis Healthcare, Delhi</p>
                  <div className="bg-light-blue p-2 rounded-lg">
                    <p className="text-secondary-blue text-sm font-medium">COVID-19 Frontline Hero Recognition</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-light-pink rounded-full mx-auto mb-4"></div>
                  <CardTitle className="text-lg">Ms. Anjali Patel</CardTitle>
                  <p className="text-accent-pink font-semibold">Secretary</p>
                  <p className="text-medium-gray text-sm">Batch 2018</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold text-dark-navy mb-1">Pediatric Nurse Practitioner</p>
                  <p className="text-medium-gray mb-3">Johns Hopkins Hospital, USA</p>
                  <div className="bg-light-pink p-2 rounded-lg">
                    <p className="text-accent-pink text-sm font-medium">International Nursing Excellence Award</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-navy mb-6">Committee Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary-blue">Professional Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-medium-gray space-y-2">
                    <li>Organize continuing education programs</li>
                    <li>Facilitate professional networking opportunities</li>
                    <li>Provide career guidance and mentorship</li>
                    <li>Support skill enhancement workshops</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary-blue">Student Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-medium-gray space-y-2">
                    <li>Scholarship programs for deserving students</li>
                    <li>Mentorship for current students</li>
                    <li>Placement assistance and job referrals</li>
                    <li>Guest lectures and industry insights</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-accent-pink">Institution Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-medium-gray space-y-2">
                    <li>Infrastructure development contributions</li>
                    <li>Curriculum enhancement suggestions</li>
                    <li>Quality improvement initiatives</li>
                    <li>Research collaboration opportunities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary-blue">Community Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-medium-gray space-y-2">
                    <li>Health awareness campaigns</li>
                    <li>Community service projects</li>
                    <li>Alumni networking events</li>
                    <li>Professional recognition programs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-navy mb-6">Recent Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary-blue mb-3">Alumni Scholarship Fund</h3>
                  <p className="text-medium-gray mb-4">
                    Established a scholarship fund to support financially disadvantaged students pursuing nursing
                    education. Over ₹5 lakhs raised in the first year.
                  </p>
                  <div className="bg-light-blue p-3 rounded-lg">
                    <p className="text-primary-blue font-semibold">25 students benefited in 2023-24</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-blue mb-3">Mentorship Program</h3>
                  <p className="text-medium-gray mb-4">
                    Launched a comprehensive mentorship program connecting final year students with experienced alumni
                    for career guidance and professional development.
                  </p>
                  <div className="bg-light-blue p-3 rounded-lg">
                    <p className="text-secondary-blue font-semibold">50+ mentor-mentee pairs active</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">Join Our Alumni Network</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-medium-gray mb-6">
              Stay connected with your alma mater and fellow graduates. Contribute to the growth of our nursing
              community and help shape the future of healthcare education.
            </p>
            <div className="space-y-2">
              <p className="text-medium-gray">
                <span className="font-semibold">Committee Email:</span>{" "}
                <span className="text-primary-blue">alumni.committee@college.edu</span>
              </p>
              <p className="text-medium-gray">
                <span className="font-semibold">Contact:</span> +91 7774055233
              </p>
              <p className="text-medium-gray">
                <span className="font-semibold">WhatsApp Group:</span> Contact us to join the alumni network
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
