import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ParentSociety() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-dark-gray mb-8">Our Parent Society</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>About Our Foundation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-light-black mb-4">
              Our nursing college is established under the aegis of a renowned parent society dedicated to healthcare
              education and community service. The society has been instrumental in promoting quality education in the
              healthcare sector for over two decades.
            </p>
            <p className="text-light-black">
              With a vision to create competent healthcare professionals, our parent society has consistently worked
              towards establishing institutions that meet the highest standards of medical and nursing education.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mission & Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-light-black space-y-2">
              <li>Promoting excellence in healthcare education</li>
              <li>Fostering research and innovation in nursing</li>
              <li>Serving the community through healthcare initiatives</li>
              <li>Developing ethical and compassionate healthcare professionals</li>
              <li>Maintaining the highest standards of academic integrity</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Leadership</CardTitle>
          <CardDescription>Meet our dedicated leadership team</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-dark-gray mb-2">Chairman</h3>
              <p className="text-light-black">
                Our chairman brings decades of experience in healthcare administration and has been pivotal in
                establishing multiple healthcare institutions across the region.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-dark-gray mb-2">Secretary</h3>
              <p className="text-light-black">
                The secretary oversees the day-to-day operations and ensures that all academic and administrative
                activities align with our mission of excellence in healthcare education.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
