import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award } from "lucide-react"

export default function GoverningBodyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Governing Body</h1>

      <div className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">About Our Governing Body</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Our Governing Body comprises distinguished professionals from healthcare, education, and administration
              who provide strategic guidance and oversight to ensure the institution maintains the highest standards of
              nursing education and healthcare training.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-24 h-24 bg-primary-pink rounded-full mx-auto mb-4"></div>
            <CardTitle>Dr. [Chairman Name]</CardTitle>
            <p className="text-light-black">Chairman</p>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">
              Distinguished healthcare administrator with over 25 years of experience in medical education and hospital
              management.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-24 h-24 bg-primary-pink rounded-full mx-auto mb-4"></div>
            <CardTitle>Prof. [Secretary Name]</CardTitle>
            <p className="text-light-black">Secretary</p>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">
              Renowned nursing educator and researcher with extensive experience in curriculum development and academic
              administration.
            </p>
          </CardContent>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-24 h-24 bg-primary-pink rounded-full mx-auto mb-4"></div>
            <CardTitle>Dr. [Member Name]</CardTitle>
            <p className="text-light-black">Member</p>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">
              Senior medical professional specializing in community health and preventive medicine with a focus on
              nursing education.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-secondary-pink" />
              <span>Responsibilities</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-light-black space-y-2">
              <li>Strategic planning and policy formulation</li>
              <li>Academic quality assurance and standards</li>
              <li>Financial oversight and resource allocation</li>
              <li>Faculty recruitment and development</li>
              <li>Infrastructure development and maintenance</li>
              <li>Community engagement and partnerships</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-secondary-pink" />
              <span>Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-light-black space-y-2">
              <li>MUHS affiliation and recognition</li>
              <li>State-of-the-art infrastructure development</li>
              <li>100% placement record for graduates</li>
              <li>Excellence in nursing education awards</li>
              <li>Strong industry partnerships</li>
              <li>Community health program initiatives</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
