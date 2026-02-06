// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { GraduationCap, FileText, CreditCard, CheckCircle, Calendar, Users } from "lucide-react"

// export default function AdmissionPage() {
//   return (
//     <div className="min-h-screen bg-light-gray">
//       {/* Hero Section */}
//       <section className="gradient-bg py-16 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Admission 2024-25</h1>
//           <p className="text-xl mb-8 max-w-3xl mx-auto">
//             Join our prestigious nursing college and embark on a rewarding career in healthcare
//           </p>
//           <div className="bg-white text-primary-blue px-6 py-3 rounded-lg inline-block text-lg font-semibold">
//             🎓 Applications Now Open - Limited Seats Available
//           </div>
//         </div>
//       </section>

//       {/* Quick Stats */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             <Card className="text-center border-t-4 border-t-primary-blue">
//               <CardHeader>
//                 <Users className="h-10 w-10 mx-auto text-primary-blue mb-2" />
//                 <CardTitle className="text-2xl">60</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray">Total Seats</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center border-t-4 border-t-secondary-blue">
//               <CardHeader>
//                 <Calendar className="h-10 w-10 mx-auto text-secondary-blue mb-2" />
//                 <CardTitle className="text-2xl">4 Years</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray">Course Duration</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center border-t-4 border-t-accent-pink">
//               <CardHeader>
//                 <GraduationCap className="h-10 w-10 mx-auto text-accent-pink mb-2" />
//                 <CardTitle className="text-2xl">100%</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray">Placement Rate</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center border-t-4 border-t-primary-blue">
//               <CardHeader>
//                 <CheckCircle className="h-10 w-10 mx-auto text-primary-blue mb-2" />
//                 <CardTitle className="text-2xl">MUHS</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray">Affiliated</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Admission Process */}
//       <section className="py-16 bg-light-blue">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Admission Process</h2>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <Card className="text-center hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-xl">1</span>
//                 </div>
//                 <CardTitle className="text-lg">Application</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray">Submit online application with required documents</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <div className="w-16 h-16 bg-secondary-blue rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-xl">2</span>
//                 </div>
//                 <CardTitle className="text-lg">NEET Score</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray">Valid NEET-UG score required for admission</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <div className="w-16 h-16 bg-accent-pink rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-xl">3</span>
//                 </div>
//                 <CardTitle className="text-lg">Counseling</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray">Participate in centralized admission counseling</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-xl">4</span>
//                 </div>
//                 <CardTitle className="text-lg">Admission</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray">Complete admission formalities and fee payment</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Quick Links */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Admission Information</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <Card className="hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <GraduationCap className="h-12 w-12 text-primary-blue mb-4" />
//                 <CardTitle>B.Sc. Nursing</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray mb-4">Complete course details and curriculum information</p>
//                 <Button asChild className="w-full bg-primary-blue hover:bg-secondary-blue">
//                   <Link href="/admission/bsc-nursing">View Details</Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <CheckCircle className="h-12 w-12 text-secondary-blue mb-4" />
//                 <CardTitle>Eligibility</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray mb-4">Check eligibility criteria and requirements</p>
//                 <Button asChild className="w-full bg-secondary-blue hover:bg-primary-blue">
//                   <Link href="/admission/eligibility">Check Eligibility</Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <FileText className="h-12 w-12 text-accent-pink mb-4" />
//                 <CardTitle>Documents</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray mb-4">List of required documents for admission</p>
//                 <Button asChild className="w-full bg-accent-pink hover:bg-pink-600">
//                   <Link href="/admission/documents">View Documents</Link>
//                 </Button>
//               </CardContent>
//             </Card>

//             <Card className="hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <CreditCard className="h-12 w-12 text-primary-blue mb-4" />
//                 <CardTitle>Fee Structure</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-medium-gray mb-4">Detailed fee structure and payment options</p>
//                 <Button asChild className="w-full bg-primary-blue hover:bg-secondary-blue">
//                   <Link href="/admission/fee-structure">View Fees</Link>
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Important Dates */}
//       <section className="py-16 bg-light-blue">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Important Dates</h2>
//           <div className="max-w-4xl mx-auto">
//             <Card>
//               <CardContent className="p-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   <div>
//                     <h3 className="text-xl font-semibold text-dark-navy mb-4">Application Timeline</h3>
//                     <div className="space-y-4">
//                       <div className="flex justify-between items-center border-b pb-2">
//                         <span className="text-medium-gray">Application Start</span>
//                         <span className="font-semibold text-primary-blue">June 1, 2024</span>
//                       </div>
//                       <div className="flex justify-between items-center border-b pb-2">
//                         <span className="text-medium-gray">Application End</span>
//                         <span className="font-semibold text-accent-pink">July 15, 2024</span>
//                       </div>
//                       <div className="flex justify-between items-center border-b pb-2">
//                         <span className="text-medium-gray">NEET Counseling</span>
//                         <span className="font-semibold text-secondary-blue">August 2024</span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <span className="text-medium-gray">Classes Begin</span>
//                         <span className="font-semibold text-primary-blue">September 2024</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold text-dark-navy mb-4">Contact for Admission</h3>
//                     <div className="space-y-3">
//                       <p className="text-medium-gray">
//                         <span className="font-semibold">Phone:</span> +91 7774055233 / 7774059624
//                       </p>
//                       <p className="text-medium-gray">
//                         <span className="font-semibold">Email:</span> presidentsnbp@gmail.com
//                       </p>
//                       <p className="text-medium-gray">
//                         <span className="font-semibold">Office Hours:</span> 9:00 AM - 5:00 PM (Mon-Fri)
//                       </p>
//                       <Button asChild className="w-full mt-4 bg-primary-blue hover:bg-secondary-blue">
//                         <Link href="/contact">Contact Us</Link>
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
'use client'

import Head from "next/head"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  FileText,
  CreditCard,
  CheckCircle,
  Calendar,
  Users,
} from "lucide-react"

export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-light-gray">
      <Head>
        <title>Admission 2024-25 | SNBP Institute of Nursing</title>
        <meta name="description" content="Apply for B.Sc. Nursing 2024-25 at SNBP Institute of Nursing. Get information on eligibility, process, fees, and scholarships." />
      </Head>

      {/* Breadcrumb */}
      <nav className="bg-light-gray py-3 px-4 text-sm">
        <div className="container mx-auto text-medium-gray">
          <Link href="/" className="hover:underline text-primary-blue">Home</Link> / Admission 2025-26
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-bg py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Admission 2025-26</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join our prestigious nursing college and embark on a rewarding career in healthcare
          </p>
          <div className="bg-white text-primary-blue px-6 py-3 rounded-lg inline-block text-lg font-semibold">
            🎓 Applications Now Open - Limited Seats Available
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center border-t-4 border-t-primary-blue">
              <CardHeader>
                <Users className="h-10 w-10 mx-auto text-primary-blue mb-2" />
                <CardTitle className="text-2xl">50</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Total Seats</p>
              </CardContent>
            </Card>
            <Card className="text-center border-t-4 border-t-secondary-blue">
              <CardHeader>
                <Calendar className="h-10 w-10 mx-auto text-secondary-blue mb-2" />
                <CardTitle className="text-2xl">4 Years</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Course Duration</p>
              </CardContent>
            </Card>
            <Card className="text-center border-t-4 border-t-accent-pink">
              <CardHeader>
                <GraduationCap className="h-10 w-10 mx-auto text-accent-pink mb-2" />
                <CardTitle className="text-2xl">100%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Placement Rate</p>
              </CardContent>
            </Card>
            <Card className="text-center border-t-4 border-t-primary-blue">
              <CardHeader>
                <CheckCircle className="h-10 w-10 mx-auto text-primary-blue mb-2" />
                <CardTitle className="text-2xl">MUHS</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray">Affiliated</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Admission Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Application", desc: "Submit online application with required documents", color: "bg-primary-blue" },
              { step: "2", title: "NEET Score", desc: "Valid NEET-UG score required for admission", color: "bg-secondary-blue" },
              { step: "3", title: "Counseling", desc: "Participate in centralized admission counseling", color: "bg-accent-pink" },
              { step: "4", title: "Admission", desc: "Complete admission formalities and fee payment", color: "bg-primary-blue" },
            ].map(({ step, title, desc, color }) => (
              <Card key={step} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-xl">{step}</span>
                  </div>
                  <CardTitle className="text-lg">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-gray">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Info Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Admission Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary-blue mb-4" />
                <CardTitle>B.Sc. Nursing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray mb-4">Complete course details and curriculum information</p>
                <Button asChild className="w-full bg-primary-blue hover:bg-secondary-blue">
                  <Link href="/admission/bsc-nursing">View Details</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-secondary-blue mb-4" />
                <CardTitle>Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray mb-4">Check eligibility criteria and requirements</p>
                <Button asChild className="w-full bg-secondary-blue hover:bg-primary-blue">
                  <Link href="/admission/eligibility">Check Eligibility</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-accent-pink mb-4" />
                <CardTitle>Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray mb-4">List of required documents for admission</p>
                <Button asChild className="w-full bg-accent-pink hover:bg-pink-600">
                  <Link href="/admission/documents">View Documents</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CreditCard className="h-12 w-12 text-primary-blue mb-4" />
                <CardTitle>Fee Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medium-gray mb-4">Detailed fee structure and payment options</p>
                <Button asChild className="w-full bg-primary-blue hover:bg-secondary-blue">
                  <Link href="/admission/fee-structure">View Fees</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Important Dates</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-dark-navy mb-4">Application Timeline</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-medium-gray">Application Start</span>
                        <span className="font-semibold text-primary-blue">June 1, 2024</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-medium-gray">Application End</span>
                        <span className="font-semibold text-accent-pink">July 15, 2024</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-medium-gray">NEET Counseling</span>
                        <span className="font-semibold text-secondary-blue">August 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-medium-gray">Classes Begin</span>
                        <span className="font-semibold text-primary-blue">September 2024</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-navy mb-4">Contact for Admission</h3>
                    <div className="space-y-3">
                      <p className="text-medium-gray"><strong>Phone:</strong> +91 7774055233 / 7774059624</p>
                      <p className="text-medium-gray"><strong>Email:</strong> presidentsnbp@gmail.com</p>
                      <p className="text-medium-gray"><strong>Office Hours:</strong> 9:00 AM - 5:00 PM (Mon–Fri)</p>
                      <Button asChild className="w-full mt-4 bg-primary-blue hover:bg-secondary-blue">
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Summary Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Eligibility at a Glance</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300">
              <thead className="bg-light-blue text-dark-navy">
                <tr>
                  <th className="border p-3">Requirement</th>
                  <th className="border p-3">Details</th>
                </tr>
              </thead>
              <tbody className="text-medium-gray">
                <tr>
                  <td className="border p-3 font-semibold">Age</td>
                  <td className="border p-3">Minimum 17 years as on 31st December of admission year</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Qualification</td>
                  <td className="border p-3">10+2 with Physics, Chemistry, Biology & English (min 45%)</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">NEET</td>
                  <td className="border p-3">Valid NEET-UG score required</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold">Medical Fitness</td>
                  <td className="border p-3">Candidate should be medically fit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-light-blue">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-navy mb-10">Scholarships & Financial Aid</h2>
          <div className="max-w-3xl mx-auto text-medium-gray text-lg leading-relaxed space-y-6">
            <p>
              SNBP Institute of Nursing supports meritorious and economically weaker students with a variety of scholarships and financial aid options.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Merit-Based:</strong> Scholarships for high NEET scores or academic performance.</li>
              <li><strong>Government Schemes:</strong> Available for SC/ST/OBC/Minority students.</li>
              <li><strong>Fee Waiver:</strong> Partial assistance for eligible economically disadvantaged students.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-navy mb-10">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto text-medium-gray space-y-6 text-lg">
            <div>
              <h3 className="font-semibold text-dark-navy">Is NEET mandatory for B.Sc. Nursing?</h3>
              <p>Yes, as per MUHS and government norms, a valid NEET-UG score is required.</p>
            </div>
            <div>
              <h3 className="font-semibold text-dark-navy">Is hostel accommodation available?</h3>
              <p>Yes, we offer on-campus hostel facilities for both girls and boys with all amenities.</p>
            </div>
            <div>
              <h3 className="font-semibold text-dark-navy">Does SNBP provide placement support?</h3>
              <p>Yes. We have a dedicated placement cell with 100% assistance in reputed hospitals and clinics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Nursing Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Start your application today and take the first step toward a rewarding and impactful nursing career with SNBP.
          </p>
          <Button asChild className="bg-white text-primary-blue hover:bg-secondary-blue hover:text-white font-semibold px-6 py-3">
            <Link href="/admission/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
