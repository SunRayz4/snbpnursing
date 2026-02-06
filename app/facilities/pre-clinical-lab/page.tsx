import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Microscope, Users, Clock, BookOpen } from "lucide-react"

export default function PreClinicalLabPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Pre-Clinical Laboratory</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Microscope className="h-6 w-6 text-secondary-pink" />
              <span>About the Lab</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black">
              Our Pre-Clinical Laboratory is designed to provide students with hands-on experience in fundamental
              nursing skills before they enter clinical practice. The lab is equipped with modern equipment and
              simulation tools to ensure comprehensive learning.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-secondary-pink" />
              <span>Capacity & Features</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-light-black space-y-2">
              <li>Capacity: 40 students per session</li>
              <li>Modern hospital beds and equipment</li>
              <li>Simulation mannequins for practice</li>
              <li>Audio-visual teaching aids</li>
              <li>Well-ventilated and spacious environment</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Equipment & Facilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary-pink p-4 rounded-lg">
              <h3 className="font-semibold text-dark-gray mb-2">Basic Nursing Equipment</h3>
              <ul className="text-light-black text-sm space-y-1">
                <li>Hospital beds with accessories</li>
                <li>IV stands and equipment</li>
                <li>Wheelchairs and stretchers</li>
                <li>Bedside tables and lockers</li>
              </ul>
            </div>
            <div className="bg-primary-pink p-4 rounded-lg">
              <h3 className="font-semibold text-dark-gray mb-2">Simulation Models</h3>
              <ul className="text-light-black text-sm space-y-1">
                <li>Adult nursing mannequins</li>
                <li>Injection practice models</li>
                <li>CPR training mannequins</li>
                <li>Wound care models</li>
              </ul>
            </div>
            <div className="bg-primary-pink p-4 rounded-lg">
              <h3 className="font-semibold text-dark-gray mb-2">Monitoring Equipment</h3>
              <ul className="text-light-black text-sm space-y-1">
                <li>Blood pressure monitors</li>
                <li>Thermometers (digital)</li>
                <li>Pulse oximeters</li>
                <li>Stethoscopes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-secondary-pink" />
              <span>Skills Practiced</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-light-black space-y-2">
              <li>Bed making and patient positioning</li>
              <li>Vital signs monitoring</li>
              <li>Injection techniques</li>
              <li>Wound care and dressing</li>
              <li>Patient hygiene and comfort</li>
              <li>Basic life support (BLS)</li>
              <li>Medication administration</li>
              <li>Patient communication skills</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-secondary-pink" />
              <span>Lab Schedule</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-dark-gray">Regular Hours</h4>
                <p className="text-light-black">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-light-black">Saturday: 9:00 AM - 1:00 PM</p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray">Practice Sessions</h4>
                <p className="text-light-black">Extended hours available for additional practice</p>
              </div>
              <div>
                <h4 className="font-semibold text-dark-gray">Supervision</h4>
                <p className="text-light-black">Qualified faculty and lab technicians always present</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
