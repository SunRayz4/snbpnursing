// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Mail, Phone, MapPin, Clock } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function ContactInfo() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold text-dark-gray mb-8 text-center">Contact Us</h1>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <div className="space-y-6">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center space-x-2">
//                 <Mail className="h-5 w-5 text-secondary-pink" />
//                 <span>Email</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-light-black">presidentsnbp@gmail.com</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center space-x-2">
//                 <Phone className="h-5 w-5 text-secondary-pink" />
//                 <span>Phone</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-light-black">+91 7774055233</p>
//               <p className="text-light-black">+91 7774059624</p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center space-x-2">
//                 <MapPin className="h-5 w-5 text-secondary-pink" />
//                 <span>Address</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-light-black">
//                 GAT.NO.71/1, 90, 94, RIVER RESIDENCY,
//                 <br />
//                 DEHU-ALANDI ROAD, CHIKALI-PUNE-411062
//               </p>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center space-x-2">
//                 <Clock className="h-5 w-5 text-secondary-pink" />
//                 <span>Office Hours</span>
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p className="text-light-black">Monday - Friday: 9:30 AM - 5:30 PM</p>
//               <p className="text-light-black">Saturday: 9:30 AM - 1:30 PM</p>
//               <p className="text-light-black">Sunday: Closed</p>
//             </CardContent>
//           </Card>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle>Send us a Message</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-light-black mb-2">Name</label>
//               <input
//                 type="text"
//                 className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-pink focus:border-transparent"
//                 placeholder="Your full name"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-light-black mb-2">Email</label>
//               <input
//                 type="email"
//                 className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-pink focus:border-transparent"
//                 placeholder="your.email@example.com"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-light-black mb-2">Phone</label>
//               <input
//                 type="tel"
//                 className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-pink focus:border-transparent"
//                 placeholder="+91 XXXXXXXXXX"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-light-black mb-2">Message</label>
//               <textarea
//                 rows={4}
//                 className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary-pink focus:border-transparent"
//                 placeholder="Your message here..."
//               ></textarea>
//             </div>
//             <Button className="w-full bg-secondary-pink text-dark-gray hover:bg-primary-pink">Send Message</Button>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
// app/contact/page.tsx or any page route
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="contact-page py-12 px-4" style={{ fontFamily: 'Georgia, sans-serif' }}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold text-dark-gray mb-2">Contact Us</h1>
        <p className="text-gray-600 text-lg">We're here to help. Reach out anytime.</p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Info Cards */}
        <div className="space-y-6">
          {[
            {
              title: 'Email',
              icon: <Mail className="h-5 w-5 text-blue-600" />,
              content: (
                <p className="text-gray-700">presidentsnbp@gmail.com</p>
              )
            },
            {
              title: 'Phone',
              icon: <Phone className="h-5 w-5 text-blue-600" />,
              content: (
                <>
                  <p className="text-gray-700">+91 7774055233</p>
                  <p className="text-gray-700">+91 7774059624</p>
                </>
              )
            },
            {
              title: 'Address',
              icon: <MapPin className="h-5 w-5 text-blue-600" />,
              content: (
                <p className="text-gray-700 leading-relaxed">
                  GAT.NO.71/1, 90, 94, RIVER RESIDENCY, <br />
                  DEHU-ALANDI ROAD, CHIKALI-PUNE-411062
                </p>
              )
            },
            {
              title: 'Office Hours',
              icon: <Clock className="h-5 w-5 text-blue-600" />,
              content: (
                <>
                  <p className="text-gray-700">Monday - Friday: 9:30 AM - 5:30 PM</p>
                  <p className="text-gray-700">Saturday: 9:30 AM - 1:30 PM</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </>
              )
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-sm border border-gray-200 bg-white p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4 space-x-2">
                {card.icon}
                <h3 className="text-lg font-semibold text-blue-900">{card.title}</h3>
              </div>
              <div className="text-sm">{card.content}</div>
            </motion.div>
          ))}
        </div>

        {/* Right Side - Message Form */}
        <motion.div
          className="rounded-xl shadow-sm border border-gray-200 bg-white p-6 space-y-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Send us a Message</h3>
          {['Name', 'Email', 'Phone'].map((label) => (
            <div key={label}>
              <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
              <input
                type={label === 'Email' ? 'email' : label === 'Phone' ? 'tel' : 'text'}
                className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder={`Your ${label.toLowerCase()}...`}
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={4}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button className="w-full bg-blue-700 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition">
            Send Message
          </button>
        </motion.div>
      </div>
    </div>
  );
}
