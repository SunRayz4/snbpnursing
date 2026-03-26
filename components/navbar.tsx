"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeChildDropdown, setActiveChildDropdown] = useState<string | null>(
    null
  );
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
        setActiveChildDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (title: string) => {
    setOpenDropdown((prev) => (prev === title ? null : title));
    setActiveChildDropdown(null);
  };

  const toggleChildDropdown = (title: string) => {
    setActiveChildDropdown((prev) => (prev === title ? null : title));
  };

  const navigationItems = [
    {
      title: "Home",
      href: "/",
      items: [{ title: "Admissions are Open 🎓", href: "/#highlight" }],
    },
    {
      title: "About Us",
      href: "/about",
      items: [
        { title: "President's Message", href: "/about/president-message" },
        {
          title: "Chairman's & Secretary Message",
          href: "/about/chairman-message",
        },
        {
          title: "Trustee & Director's Message",
          href: "/about/director-message",
        },
        { title: "Principal's Message", href: "/about/principal-message" },
        { title: "Vision & Mission", href: "/about/vision-mission" },
      ],
    },
    {  
      title: "Committees",
      href: "/committees",
      items: [
        { title: "Anti-Ragging Committee", href: "/committees/anti-ragging" },
        {
          title: "Internal Complaint Committee",
          href: "/committees/internal-complaint",
        },
        { title: "Curriculum Committee", href: "/committees/curriculum" },
        { title: "Vishakha Committee", href: "/committees/VishakhaCommittee" },
        { title: "Ethics Committee", href: "/committees/ethics" },
        { title: "IQAC", href: "/committees/iqac" },
        { title: "SNA", href: "/committees/sna" },
        { title: "Faculty Committee", href: "/committees/faculty" },
      ],
    },
    {
      title: "Faculty",
      href: "/faculty",
      items: [
        {
          title: "Full-Time Teaching Faculty",
          href: "/faculty/fulltimefaculty" ,
          // href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/Staff/fulltimeteachingFaculty.pdf`,
          // target: "_blank",
        },
        { title: "Visiting Faculty", href: "/faculty/visiting" },
      ],
    },
    {
      title: "Courses",
      href: "/courses",
      items: [{ title: "B.Sc. Nursing", href: "/courses/bsc-nursing" }],
    },
    {
      title: "Facilities",
      href: "/facilities",
      items: [
        { title: "College Campus", href: "/facilities/campus" },
        { title: "Classrooms", href: "/facilities/classrooms" },
        { title: "Nursing Foundation Lab", href: "/facilities/nursingfoundation" },
        { title: "Pre-Clinical Lab", href: "/facilities/pre-clinical-lab" },
        {
          title: "Community Health Nursing Lab",
          href: "/facilities/community-health-lab",
        },
        {
          title: "Child Health Nursing Lab",
          href: "/facilities/ChildHealthNursingLab",
        },
         {
          title: "Obstetric & Gynecology Lab",
          href: "/facilities/obstetric-gynecology-lab",
        },
        { title: "Pediatric Lab", href: "/facilities/pediatric-lab" },
        { title: "Nutrition Lab", href: "/facilities/nutrition-lab" },
        { title: "Computer Lab", href: "/facilities/computer-lab" },
        { title: "Library", href: "/facilities/library" },
        { title: "Auditorium", href: "/facilities/auditorium" },
        { title: "Transport Facility", href: "/facilities/TransportFacility" },
        { title: "Multipurpose Hall", href: "/facilities/multipurpose-hall" },
        { title: "Common Room", href: "/facilities/common-room" },
          { title: "Conference Room", href: "/facilities/ConferenceRoom" },
        { title: "Hostel Facilities", href: "/facilities/hostel" },
      ],
    },
    {
      title: "Activities",
      href: "/activities",
      items: [
        { title: "Curricular Activities", href: "/activities/Diabeties" },
        { title: "Classroom Activities", href: "/activities/classroom" },
        {
          title: "Clinical Teaching Methods",
          href: "/activities/clinical-teaching",
        },
        {
          title: "Extracurricular Activities",
          href: "/activities/extracurlicular",
        },
        { title: "Sports", href: "/activities/sports" },
        { title: "Projects", href: "/activities/projects" },
        { title: "Health Camps", href: "/activities/health-camps" },
        { title: "Entertainment", href: "/activities/entertainment" },
      ],
    },
    {
      title: "FRA Fee Structure",
      href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/Fees/FRAfeestructure.pdf`,
      target: "_blank", // opens in a new tab
      items: [], // no dropdown items
    },

    {
      title: "Admission",
      href: "/admission",
      items: [
        {
          title: "B.Sc. Nursing",
          href: "#",
          children: [
            { title: "Eligibility Criteria", href: "/admission/eligibility" },
            { title: "Documents Required", href: "/admission/documents" },
            { title: "Fee Structure", href: "/admission/fee-structure" },
          ],
        },
      ],
    },
    {
      title: "Syllabus",
      href: "/syllabus",
      items: [
        {
          title: "B.Sc. Nursing",
          href: "#",
          children: Array.from({ length: 8 }, (_, i) => ({
            title: `Semester ${i + 1}`,
            href: `/syllabus/semester-${i + 1}`,
          })),
        },
      ],
    },
    
    {
  title: "MUHS Mandate",
  href: "/muhs-mandate",
  items: [
    {
      title: "A.Y. 2026-27",
      href: "/muhs-mandate/ay-2026-27",
      children: [
        { title: "Annexures Overview", href: "/muhs-mandate/annexures" },
        {
          title: "Annexure I-Seat Matrix",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/ANNEXURI.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure II-Infrastructure details",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/ANNEXURE-II.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure III-Trust Deed",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/AnnexureIII.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure IV-LIBARAY DETAILS",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-IV.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure V-Clinical Material in Hospital",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/ANNEXUREV.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure VI-Total Teaching Staff Information",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/ANNEXURE-VI.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure VII-Teaching Staff Information",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-VII.pdf`,
          target: "_blank",
        },
        
        {
          title: "Annexure VIII-Details of Part Time Teachers",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-VIII.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure IX-Non- Teaching Staff",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-IX.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure X-Information of Workshops, Activities performed in last one year",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-X.pdf`,
          target: "_blank",
        },
         {
          title: "Annexure X-Information of Workshops, Activities",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-X(2).pdf`,
          target: "_blank",
        },
        {
          title: "Annexure XI-Information of Workshops, Activities",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-XI.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure XII-AISHE Certificate",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-XII.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure XIII-Online Transmission of Question Papers",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-XIII.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure XIII(A)-Subject wise Eligible Examiners List ",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-XIII(A).pdf`,
          target: "_blank",
        },
        {
          title: "Annexure XIII(B)-Subject wise Eligible Examiners List (PG Courses)",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-XIV(B).pdf`,
          target: "_blank",
        },
        {
          title: "Annexure XIV-Result",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-XIV.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure XV-Hostel Facility",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-XV.pdf`,
          target: "_blank",
        },
        {
          title: "Annexure XVI-Declaration",
          href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-XVI.pdf`,
          target: "_blank",
        },
        // {
        //   title: "Annexure XVII",
        //   href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-XVII.pdf`,
        //   target: "_blank",
        // },
        // {
        //   title: "Annexure XVIII",
        //   href: `${process.env.NEXT_PUBLIC_STATIC_ASSETS}/PDF/muh/Annexure-XVIII.pdf`,
        //   target: "_blank",
        // },
      ],
    },
    {
      title: "A.Y. 2027-28",
      href: "/muhs-mandate/ay-2027-28",
      // children: [
     
      // ],
    },
  ],
},

    { title: "Gallery", href: "/gallery", items: [] },
    { title: "Sitemap", href: "/sitemap", items: [] },
  ];

  const singleItems = [
    { title: "Placement", href: "/placement" },
    { title: "Careers", href: "/careers" },
    { title: "Alumni Members", href: "/committees/alumni-members" },
    { title: "Contact Us", href: "/contact" },
  ];

  // Split navigation into two rows
  const firstRowItems = navigationItems.slice(0, 8); // Home to Activities
  const secondRowItems = [
    ...navigationItems.slice(8),
    ...singleItems.map((item) => ({ ...item, items: [] })),
  ];

  interface NavItem {
    title: string;
    href: string;
    target?: string;
    children?: { title: string; href: string; target?: string }[];
  }

  const renderMenuItems = (
    items: NavItem[],
    parentTitle?: string,
    isChild = false
  ) => (
    <ul
    className={`py-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 z-50 text-sm ${
  isChild
    ? "absolute left-full top-0 ml-1 max-h-[400px] overflow-y-auto"
    : "max-h-[80vh] overflow-y-auto"
}`}>
      {items.map((item) => (
        <li key={item.title} className="relative group/item">
          {item.children ? (
            <div className="relative">
              <div
                className="flex items-center justify-between px-4 py-2.5 hover:bg-blue-50 rounded cursor-pointer text-gray-800"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleChildDropdown(item.title);
                }}>
                <span className="font-medium">{item.title}</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </div>
              {activeChildDropdown === item.title &&
                renderMenuItems(item.children, parentTitle, true)}
            </div>
          ) : item.target === "_blank" ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2.5 rounded text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition">
              {item.title}
            </a>
          ) : (
            <Link
              href={item.href}
              className="block px-4 py-2.5 rounded text-gray-800 hover:bg-blue-50 hover:text-blue-700 transition"
              onClick={() => {
                setOpenDropdown(null);
                setActiveChildDropdown(null);
                setIsOpen(false);
              }}>
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  const renderNavItem = (item: {
    title: string;
    href: string;
    target?: string;
    items: NavItem[];
  }) => (
    <div
      key={item.title}
      className="relative">
      {item.items.length > 0 ? (
        <>
          <button
            onClick={() => toggleDropdown(item.title)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 ${
              openDropdown === item.title
                ? "bg-white/20 text-white"
                : "text-white/90 hover:text-white hover:bg-white/10"
            }`}>
            {item.title}
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                openDropdown === item.title ? "rotate-180" : ""
              }`}
            />
          </button>
          {openDropdown === item.title && (
            <div className="absolute top-full left-0 mt-1 z-50">
              {renderMenuItems(item.items, item.title)}
            </div>
          )}
        </>
      ) : item.target === "_blank" ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded transition-all duration-200">
          {item.title}
        </a>
      ) : (
        <Link
          href={item.href}
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded transition-all duration-200">
          {item.title}
        </Link>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full shadow-xl" ref={navbarRef}>
      {/* Marquee Banner */}
      <div className="bg-white text-foreground py-2 px-4 overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="whitespace-nowrap animate-marquee">
            <span className="font-medium text-sm">
              🎓 Admissions Open for 2025-26 Academic Year | Limited Seats
              Available | Apply Now!
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 py-2 mr-6">
              <div className="w-26 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src="https://nursing.snbpinstitutes.com/images/logo-snbp.png"
                  alt="SNBP Logo"
                  width={96} // 24 * 4 = 96px
                  height={96}
                  className="rounded-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Two Rows */}
            <div className="hidden lg:flex flex-col flex-1 py-2">
              {/* First Row */}
              <nav className="flex items-center justify-center gap-1 py-1">
                {firstRowItems.map(renderNavItem)}
              </nav>
              {/* Second Row */}
              <nav className="flex items-center justify-center gap-1 py-1">
                {secondRowItems.map(renderNavItem)}
              </nav>
            </div>

            {/* Mobile Menu */}
            <div className="flex lg:hidden ml-auto">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10">
                    {isOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-[85%] sm:w-[350px] bg-white text-gray-800 px-4 pt-6">
                  <SheetHeader className="mb-4">
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                        <Image
                          src="https://nursing.snbpinstitutes.com/images/logo-snbp.png"
                          alt="SNBP Logo"
                          width={64}
                          height={64}
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  </SheetHeader>

                  <div className="space-y-2 max-h-[80vh] overflow-y-auto">
                    {[
                      ...navigationItems,
                      ...singleItems.map((item) => ({ ...item, items: [] })),
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="border-b border-gray-100 pb-2">
                        {item.items && item.items.length > 0 ? (
                          <Collapsible>
                            <CollapsibleTrigger className="flex justify-between items-center w-full py-2 font-medium text-sm text-gray-800 hover:text-blue-700">
                              <span>{item.title}</span>
                              <ChevronDown className="h-4 w-4" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-4 pt-1 space-y-1">
                              {item.items.map((subItem: NavItem) =>
                                subItem.children ? (
                                  <Collapsible key={subItem.title}>
                                    <CollapsibleTrigger className="flex justify-between items-center w-full py-1.5 text-sm hover:text-blue-700">
                                      <span>{subItem.title}</span>
                                      <ChevronDown className="h-3 w-3" />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="pl-4 pt-1 space-y-1">
                                      {subItem.children.map((childItem) => 
                                        childItem.target === "_blank" ? (
                                          <a
                                            key={childItem.title}
                                            href={childItem.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                                            {childItem.title}
                                          </a>
                                        ) : (
                                          <Link
                                            key={childItem.title}
                                            href={childItem.href}
                                            className="block px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
                                            onClick={() => setIsOpen(false)}>
                                            {childItem.title}
                                          </Link>
                                        )
                                      )}
                                    </CollapsibleContent>
                                  </Collapsible>
                                ) : subItem.target === "_blank" ? (
                                  <a
                                    key={subItem.title}
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
                                    {subItem.title}
                                  </a>
                                ) : (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    className="block px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded"
                                    onClick={() => setIsOpen(false)}>
                                    {subItem.title}
                                  </Link>
                                )
                              )}
                            </CollapsibleContent>
                          </Collapsible>
                        ) : (item as any).target === "_blank" ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 text-sm font-medium text-gray-800 hover:text-blue-700">
                            {item.title}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="block py-2 text-sm font-medium text-gray-800 hover:text-blue-700"
                            onClick={() => setIsOpen(false)}>
                            {item.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}