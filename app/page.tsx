"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Users, Award, Building } from "lucide-react";

const backgroundCarouselImages = [
  "/images/hero-image1.jpg",
  "/images/hero-image2.jpg",
  "/images/hero-image3.jpg",
];

export default function HomePage() {
  const [currentBgSlide, setCurrentBgSlide] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showScholarshipModal, setShowScholarshipModal] = useState(true);
  //const [currentBgSlide, setCurrentBgSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgSlide((prev) => (prev + 1) % backgroundCarouselImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Carousel */}
      <section className="relative py-24 min-h-[700px] overflow-hidden">
        <div className="absolute inset-0 transition-all duration-1000">
          {backgroundCarouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentBgSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Main Hero Content */}
          <div className="text-center mb-16 text-white">
            <div className="text-center mb-8">
              <div className="text-center mb-8">
                <p className="text-sm md:text-base text-gray-200 uppercase tracking-widest">
                  Subhadra's Educational Society's
                </p>
                <h2 className="text-2xl md:text-4xl font-bold text-white mt-2">
                  SNBP Institute of Nursing, Chikhali, Pune
                </h2>
                <div className="w-16 h-1 bg-accent-pink mt-4 mx-auto rounded-full" />
              </div>
            </div>

            {/* <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Excellence in <span className="text-accent-pink">Healthcare</span> Education
            </h2> */}

            <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
              Shaping the future of healthcare through comprehensive nursing
              education and practical training.
            </p>

            <div className="bg-white/90 border-l-4 border-accent-pink p-6 rounded-lg inline-block mb-8 shadow-lg max-w-2xl">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="text-accent-pink text-2xl">🎓</div>
                <h2 className="text-2xl font-bold text-dark-navy">
                  Admissions Open 2025–26
                </h2>
              </div>
              <div className="mt-4 space-x-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-blue hover:bg-secondary-blue">
                  <Link href="/admission">Apply Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white">
                  <Link href="/admission/eligibility">Check Eligibility</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Modern Campus",
                desc: "State-of-the-art infrastructure for quality education",
                url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Advanced Labs",
                desc: "Fully equipped laboratories for practical training",
                url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "Expert Faculty",
                desc: "Experienced professionals guiding your journey",
                url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
              {
                title: "100% Placement",
                desc: "Guaranteed career opportunities after graduation",
                url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${card.url}&auto=format&fit=crop&w=2070&q=80')`,
                  }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔔 HERO NOTICE OVERLAY (NO LAYOUT SHIFT) */}
        <div className="hidden lg:block absolute top-24 right-8 z-20 w-72">
          <div className="bg-white/95 backdrop-blur rounded-xl shadow-2xl border border-gray-200 p-4">
            <h3 className="text-center font-bold text-lg text-red-600 mb-3 animate-pulse">
              🎁 Notice!
            </h3>

            <ul className="space-y-2 text-sm font-medium text-blue-700">
              <li>
                <button
                  onClick={() => setShowImageModal(true)}
                  className="hover:underline flex items-center gap-2 text-blue-700">
                  🖼️ Application are invited for B.Sc. Nursing AY 2025-26
                </button>
              </li>

              <li>
                <a
                  href="https://nursing.snbpinstitutes.com/pdf/ListOfApplicant.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2 text-blue-700">
                  💰 List of Applicant for B.Sc. Nursing A.Y. 2025-26 (Selection
                  List-1)
                </a>
              </li>

              <li>
                <a
                  href="https://nursing.snbpinstitutes.com/pdf/generalMeritList.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2 text-blue-700">
                  📘 General Merit list for Institutional Level Round (STATE
                  QUOTA 85%)
                </a>
              </li>

              <li>
                <a
                  href="https://nursing.snbpinstitutes.com/pdf/QuotaWiseMerit.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2 text-blue-700">
                  📝 Quota wise Merit list for Institutional Level Round (STATE
                  QUOTA 85%)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {showImageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]">
            <div className="relative bg-white p-4 rounded-lg shadow-2xl max-w-3xl w-full mx-4 animate-fade-in">
              {/* Close button */}
              <button
                onClick={() => setShowImageModal(false)}
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl font-bold">
                &times;
              </button>

              {/* Image */}
              <img
                src="https://nursing.snbpinstitutes.com/images/admissionnotice.jpeg"
                alt="Admission Notice"
                className="rounded-lg w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary-blue">
              <CardHeader>
                <GraduationCap className="h-12 w-12 mx-auto text-primary-blue mb-4" />
                <CardTitle>Quality Education</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive B.Sc. Nursing program with modern curriculum and
                  dedicated faculty
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-secondary-blue">
              <CardHeader>
                <Building className="h-12 w-12 mx-auto text-secondary-blue mb-4" />
                <CardTitle>Modern Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Smart classrooms, library, labs, auditorium, and hostel
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-accent-pink">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-accent-pink mb-4" />
                <CardTitle>Expert Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Highly qualified and experienced academic mentors from the
                  field
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-primary-blue">
              <CardHeader>
                <Award className="h-12 w-12 mx-auto text-primary-blue mb-4" />
                <CardTitle>MUHS Affiliated</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Courses recognized by Maharashtra University of Health
                  Sciences
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Healthcare Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join our institute and become a part of the next generation of
            nursing professionals.
          </p>
          <div className="space-x-4">
            <Button
              asChild
              size="lg"
              className="bg-accent-pink text-white hover:bg-pink-600">
              <Link href="/admission">Apply Now</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-dark-navy bg-transparent">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      {showScholarshipModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70">
          <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 animate-fade-in">
            {/* ❌ Close Icon */}
            <button
              onClick={() => setShowScholarshipModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-2xl font-bold"
              aria-label="Close">
              &times;
            </button>

            {/* 🏆 Title */}
            <div className="p-4 border-b">
              <h2 className="text-xl font-bold text-center text-dark-navy">
                Lila Poonawala Scholarship Awardee
              </h2>
            </div>

            {/* 🖼️ Image */}
            <div className="p-4">
              <img
                src={`${process.env.NEXT_PUBLIC_STATIC_ASSETS}/images/poonawalaschoolship.jpeg`}
                alt="Lila Poonawala Scholarship Awardee"
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
