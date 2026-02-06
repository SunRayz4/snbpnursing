import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, Building, Award } from "lucide-react"

export default function PlacementPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Placement & Career Opportunities</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardHeader>
            <TrendingUp className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle>100%</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">Placement Rate</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Users className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle>500+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">Students Placed</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Building className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle>50+</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">Partner Hospitals</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Award className="h-12 w-12 mx-auto text-secondary-pink mb-4" />
            <CardTitle>₹4.5L</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">Average Package</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Placement Partners</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-dark-gray mb-2">Government Hospitals</h4>
                <ul className="list-disc list-inside text-light-black space-y-1">
                  <li>Sassoon General Hospital, Pune</li>
                  <li>BJ Medical College Hospital</li>
                  <li>Government Medical College, Miraj</li>
                  <li>District Hospitals across Maharashtra</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2">Private Healthcare</h4>
                <ul className="list-disc list-inside text-light-black space-y-1">
                  <li>Ruby Hall Clinic, Pune</li>
                  <li>Jehangir Hospital, Pune</li>
                  <li>Manipal Hospitals</li>
                  <li>Apollo Hospitals</li>
                  <li>Fortis Healthcare</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Career Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-dark-gray mb-2">Clinical Roles</h4>
                <ul className="list-disc list-inside text-light-black space-y-1">
                  <li>Staff Nurse</li>
                  <li>ICU/CCU Specialist</li>
                  <li>Operation Theater Nurse</li>
                  <li>Emergency Department Nurse</li>
                  <li>Pediatric Nurse</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray mb-2">Administrative Roles</h4>
                <ul className="list-disc list-inside text-light-black space-y-1">
                  <li>Nursing Supervisor</li>
                  <li>Ward In-charge</li>
                  <li>Quality Assurance Officer</li>
                  <li>Infection Control Nurse</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Placement Process</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-pink rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-dark-gray font-bold">1</span>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">Registration</h4>
              <p className="text-light-black text-sm">Students register with placement cell in final year</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-pink rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-dark-gray font-bold">2</span>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">Preparation</h4>
              <p className="text-light-black text-sm">Resume building, interview skills, and aptitude training</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-pink rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-dark-gray font-bold">3</span>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">Campus Drives</h4>
              <p className="text-light-black text-sm">Regular campus recruitment drives by partner hospitals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary-pink rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-dark-gray font-bold">4</span>
              </div>
              <h4 className="font-semibold text-dark-gray mb-2">Selection</h4>
              <p className="text-light-black text-sm">Final selection and job offer placement</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Salary Packages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-light-black">Government Sector</span>
                <span className="font-semibold text-dark-gray">₹3.5 - 5.5 LPA</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-light-black">Private Hospitals</span>
                <span className="font-semibold text-dark-gray">₹4.0 - 6.0 LPA</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-light-black">Corporate Hospitals</span>
                <span className="font-semibold text-dark-gray">₹4.5 - 7.0 LPA</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-light-black">International Opportunities</span>
                <span className="font-semibold text-dark-gray">₹8.0 - 15.0 LPA</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Placement Support Services</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-light-black space-y-2">
              <li>Dedicated placement cell with experienced counselors</li>
              <li>Regular industry interaction and guest lectures</li>
              <li>Mock interviews and group discussions</li>
              <li>Resume writing and soft skills training</li>
              <li>Career counseling and guidance</li>
              <li>Alumni network support</li>
              <li>International placement assistance</li>
              <li>Entrepreneurship development programs</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
