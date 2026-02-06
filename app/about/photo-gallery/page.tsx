import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Users, Building, GraduationCap } from "lucide-react"

export default function PhotoGalleryPage() {
  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Section */}
      <section className="gradient-bg py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our vibrant campus life, modern facilities, and memorable moments
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary-blue">
            <CardHeader>
              <Building className="h-12 w-12 mx-auto text-primary-blue mb-4" />
              <CardTitle className="text-lg">Campus</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-gray">Infrastructure & Facilities</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-secondary-blue">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-secondary-blue mb-4" />
              <CardTitle className="text-lg">Student Life</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-gray">Activities & Events</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-accent-pink">
            <CardHeader>
              <GraduationCap className="h-12 w-12 mx-auto text-accent-pink mb-4" />
              <CardTitle className="text-lg">Academics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-gray">Classrooms & Labs</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary-blue">
            <CardHeader>
              <Camera className="h-12 w-12 mx-auto text-primary-blue mb-4" />
              <CardTitle className="text-lg">Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-medium-gray">Celebrations & Programs</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-dark-navy mb-6">Campus Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div
                    className="h-48 bg-light-blue"
                    style={{
                      backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-dark-navy mb-2">Campus Building {i}</h3>
                    <p className="text-medium-gray text-sm">
                      Modern infrastructure with state-of-the-art facilities for nursing education.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-navy mb-6">Laboratory Facilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Pre-Clinical Lab", desc: "Hands-on nursing skills practice" },
                { name: "Computer Lab", desc: "Digital learning and research" },
                { name: "Nutrition Lab", desc: "Dietary planning and nutrition studies" },
                { name: "Community Health Lab", desc: "Public health nursing training" },
                { name: "Pediatric Lab", desc: "Child healthcare simulation" },
                { name: "Obstetric Lab", desc: "Maternal and newborn care training" },
              ].map((lab, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div
                    className="h-48 bg-light-blue"
                    style={{
                      backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-dark-navy mb-2">{lab.name}</h3>
                    <p className="text-medium-gray text-sm">{lab.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-dark-navy mb-6">Student Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Annual Day Celebration", desc: "Cultural programs and performances" },
                { name: "Sports Day", desc: "Athletic competitions and games" },
                { name: "Health Camps", desc: "Community service initiatives" },
                { name: "Nursing Day", desc: "Professional day celebrations" },
                { name: "Cultural Events", desc: "Dance, music, and drama performances" },
                { name: "Academic Seminars", desc: "Educational workshops and conferences" },
              ].map((event, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div
                    className="h-48 bg-light-pink"
                    style={{
                      backgroundImage: `url('/placeholder.svg?height=200&width=300')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-dark-navy mb-2">{event.name}</h3>
                    <p className="text-medium-gray text-sm">{event.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">Share Your Memories</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-medium-gray mb-4">
              Have photos from college events or activities? We'd love to feature them in our gallery!
            </p>
            <p className="text-medium-gray">
              Send your photos to: <span className="font-semibold text-primary-blue">gallery@college.edu</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
