// import React from 'react'
// import Image from 'next/image'

// function LibraryPage() {
//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-blue-800 mb-4">College Library</h1>
//         <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
//         <p className="text-lg text-gray-700 max-w-3xl mx-auto">
//           Our well-stocked library serves as a knowledge hub for students and faculty, providing extensive resources for academic excellence.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8 mb-12">
//         <div>
//           <Image 
//             src="/images/library-1.jpg" 
//             alt="College Library" 
//             width={800} 
//             height={500}
//             className="rounded-lg shadow-lg w-full h-auto"
//           />
//         </div>
//         <div>
//           <h2 className="text-2xl font-semibold text-blue-700 mb-4">About Our Library</h2>
//           <p className="text-gray-700 mb-4">
//             The college has a well-organized and spacious library for the use of students and teachers. It is managed by a qualified librarian and provides a conducive environment for learning and research.
//           </p>
//           <p className="text-gray-700 mb-4">
//             The library houses a large collection of books in Nursing and Allied subjects, including the latest editions of textbooks and reference materials.
//           </p>
//           <p className="text-gray-700">
//             We maintain subscriptions to both Indian and foreign journals pertaining to Nursing and allied health sciences, keeping our faculty and students updated with current research and developments in the field.
//           </p>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6 mb-12">
//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
//           <h3 className="text-xl font-semibold text-blue-700 mb-3">Book Collection</h3>
//           <ul className="space-y-2 text-gray-700">
//             <li>• 10,000+ books in nursing</li>
//             <li>• 5,000+ reference books</li>
//             <li>• Latest editions of all textbooks</li>
//             <li>• Rare medical collections</li>
//           </ul>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
//           <h3 className="text-xl font-semibold text-blue-700 mb-3">Journal Collection</h3>
//           <ul className="space-y-2 text-gray-700">
//             <li>• 50+ Indian journals</li>
//             <li>• 30+ International journals</li>
//             <li>• E-journal subscriptions</li>
//             <li>• Back volumes available</li>
//           </ul>
//         </div>

//         <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
//           <h3 className="text-xl font-semibold text-blue-700 mb-3">Facilities</h3>
//           <ul className="space-y-2 text-gray-700">
//             <li>• Computerized catalog system</li>
//             <li>• High-speed internet access</li>
//             <li>• Reading room capacity: 100 students</li>
//             <li>• Photocopying facility</li>
//           </ul>
//         </div>
//       </div>

//       <div className="bg-blue-50 p-8 rounded-lg mb-12">
//         <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Reading Room Facilities</h2>
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div>
//             <Image 
//               src="/images/reading-room.jpg" 
//               alt="Reading Room" 
//               width={600} 
//               height={400}
//               className="rounded-lg shadow-md w-full h-auto"
//             />
//           </div>
//           <div>
//             <p className="text-gray-700 mb-4">
//               Our spacious reading room provides a quiet and comfortable environment for students to study and conduct research. The area is well-lit and air-conditioned, with ample seating capacity.
//             </p>
//             <p className="text-gray-700 mb-4">
//               The reading room includes individual study carrels as well as group study tables to accommodate different learning preferences. Students can access reference materials directly from the reading room.
//             </p>
//             <p className="text-gray-700">
//               The reading room remains open beyond regular library hours during examination periods to support students in their preparations.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
//         <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Library Hours</h2>
//         <div className="max-w-md mx-auto">
//           <table className="w-full text-gray-700">
//             <tbody className="divide-y divide-gray-200">
//               <tr>
//                 <td className="py-3 font-medium">Monday - Friday</td>
//                 <td className="py-3 text-right">8:00 AM - 8:00 PM</td>
//               </tr>
//               <tr>
//                 <td className="py-3 font-medium">Saturday</td>
//                 <td className="py-3 text-right">9:00 AM - 5:00 PM</td>
//               </tr>
//               <tr>
//                 <td className="py-3 font-medium">Sunday</td>
//                 <td className="py-3 text-right">10:00 AM - 4:00 PM</td>
//               </tr>
//               <tr>
//                 <td className="py-3 font-medium">Holidays</td>
//                 <td className="py-3 text-right">Closed</td>
//               </tr>
//             </tbody>
//           </table>
//           <p className="text-sm text-gray-500 mt-4 text-center">
//             * Extended hours during examination periods
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default LibraryPage\
import React from 'react'
import Image from 'next/image'

function LibraryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 relative overflow-hidden">
      {/* Decorative Background Gradient Circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-200/30 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-200/30 rounded-full blur-3xl z-0"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Our <span className="text-pink-600">College Library</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our well-stocked library serves as a knowledge hub for students and faculty, providing extensive resources for academic excellence.
        </p>
      </div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-20 relative z-10">
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src="/images/library-1.jpg"
            alt="College Library"
            width={800}
            height={500}
            className="rounded-xl object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-pink-600 mb-4">About Our Library</h2>
          <p className="text-gray-700 mb-4">
            The college has a well-organized and spacious library for the use of students and teachers. It is managed by a qualified librarian and provides a conducive environment for learning and research.
          </p>
          <p className="text-gray-700 mb-4">
            The library houses a large collection of books in Nursing and Allied subjects, including the latest editions of textbooks and reference materials.
          </p>
          <p className="text-gray-700">
            We maintain subscriptions to both Indian and foreign journals pertaining to Nursing and allied health sciences, keeping our faculty and students updated with current research and developments in the field.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16 relative z-10">
        {[
          {
            title: 'Book Collection',
            items: [
              '10,000+ books in nursing',
              '5,000+ reference books',
              'Latest editions of all textbooks',
              'Rare medical collections',
            ],
          },
          {
            title: 'Journal Collection',
            items: [
              '50+ Indian journals',
              '30+ International journals',
              'E-journal subscriptions',
              'Back volumes available',
            ],
          },
          {
            title: 'Facilities',
            items: [
              'Computerized catalog system',
              'High-speed internet access',
              'Reading room capacity: 100 students',
              'Photocopying facility',
            ],
          },
        ].map((section, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">{section.title}</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              {section.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Reading Room */}
      <div className="bg-pink-50 p-10 rounded-2xl shadow-md mb-16 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Reading Room Facilities</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="/images/reading-room.jpg"
              alt="Reading Room"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              Our spacious reading room provides a quiet and comfortable environment for students to study and conduct research. The area is well-lit and air-conditioned, with ample seating capacity.
            </p>
            <p className="text-gray-700 mb-4">
              The reading room includes individual study carrels as well as group study tables to accommodate different learning preferences. Students can access reference materials directly from the reading room.
            </p>
            <p className="text-gray-700">
              The reading room remains open beyond regular library hours during examination periods to support students in their preparations.
            </p>
          </div>
        </div>
      </div>

      {/* Library Hours */}
      <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Library Hours</h2>
        <div className="max-w-md mx-auto">
          <table className="w-full text-gray-700 text-sm">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 font-medium">Monday - Friday</td>
                <td className="py-3 text-right">8:00 AM - 8:00 PM</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Saturday</td>
                <td className="py-3 text-right">9:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Sunday</td>
                <td className="py-3 text-right">10:00 AM - 4:00 PM</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Holidays</td>
                <td className="py-3 text-right">Closed</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-4 text-center">
            * Extended hours during examination periods
          </p>
        </div>
      </div>
    </div>
  )
}

export default LibraryPage
