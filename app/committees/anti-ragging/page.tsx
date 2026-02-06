import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Phone, AlertTriangle } from "lucide-react"

export default function AntiRaggingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Anti-Ragging Committee</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-red-500" />
              <span>Our Commitment</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">
              Our institution is committed to providing a safe and secure environment for all students. We have zero
              tolerance for ragging in any form and have established a robust Anti-Ragging Committee to prevent and
              address any incidents.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-secondary-pink">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-secondary-pink" />
              <span>What is Ragging?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">
              Ragging includes any act of physical or mental abuse, harassment, or humiliation of a student by another
              student. It is a punishable offense under the law and institutional regulations.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Committee Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-dark-gray mb-2">Chairperson</h3>
              <p className="text-light-black">Dr. [Name] - Principal</p>
            </div>
            <div>
              <h3 className="font-semibold text-dark-gray mb-2">Faculty Members</h3>
              <ul className="text-light-black space-y-1">
                <li>Prof. [Name] - Vice Principal</li>
                <li>Dr. [Name] - HOD, Medical Surgical Nursing</li>
                <li>Prof. [Name] - HOD, Community Health Nursing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-dark-gray mb-2">Student Representatives</h3>
              <ul className="text-light-black space-y-1">
                <li>[Name] - Final Year Student</li>
                <li>[Name] - Third Year Student</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-dark-gray mb-2">External Member</h3>
              <p className="text-light-black">Dr. [Name] - Community Representative</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Preventive Measures</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-light-black space-y-2">
              <li>Orientation programs for new students</li>
              <li>Anti-ragging awareness campaigns</li>
              <li>Regular monitoring of hostel and campus areas</li>
              <li>Mentorship programs for junior students</li>
              <li>Anonymous complaint mechanisms</li>
              <li>Regular committee meetings and reviews</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-secondary-pink" />
              <span>Report Ragging</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-dark-gray">24/7 Helpline</h4>
                <p className="text-light-black">+91 8446301404 /9730174284</p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray">Email</h4>
                <p className="text-light-black">snbp.nursing@snbpinstitutes.in</p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray">UGC Anti-Ragging Helpline</h4>
                <p className="text-light-black">1800-180-5522</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-700 font-semibold">
                  All complaints will be treated with strict confidentiality and immediate action will be taken.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
