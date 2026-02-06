// "use client";

// import React, { useState } from "react";

// const Page = () => {
//   const baseUrl = process.env.NEXT_PUBLIC_STATIC_ASSETS;

//   // Constitution images (Constitution1.jpeg to Constitution9.jpeg)
//   const constitutionImages = Array.from(
//     { length: 9 },
//     (_, i) => `Constitution${i + 1}.jpeg`
//   );

//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <div className="container my-4 text-center">
//       {/* Main Heading */}
//       <h1 className="display-6 fw-bold text-dark mb-4">
//         Extracurricular Activities
//       </h1>

//       {/* Constitution Day Celebration Heading */}
//       <h5 className="text-center mb-4 fw-bold text-dark d-inline-block px-4 py-3">
//         📜 Constitution Day Celebration
//       </h5>

//       {/* Gallery */}
//       <div className="row g-4 mb-5">
//         {constitutionImages.map((img, index) => (
//           <div className="col-12 col-sm-6 col-md-3" key={index}>
//             <div
//               className="card gallery-card"
//               onClick={() => setSelectedImage(`${baseUrl}/Activities/${img}`)}>
//               <img
//                 src={`${baseUrl}/Activities/${img}`}
//                 alt={`Constitution Gallery ${index + 1}`}
//                 className="card-img-top"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Bootstrap Modal */}
//       <div
//         className={`modal fade ${selectedImage ? "show d-block" : ""}`}
//         tabIndex={-1}
//         role="dialog"
//         style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
//         onClick={() => setSelectedImage(null)}>
//         <div
//           className="modal-dialog modal-dialog-centered"
//           role="document"
//           onClick={(e) => e.stopPropagation()}>
//           <div className="modal-content bg-transparent border-0 text-center">
//             <button
//               type="button"
//               className="btn-close position-absolute top-0 end-0 m-3"
//               aria-label="Close"
//               onClick={() => setSelectedImage(null)}></button>
//             {selectedImage && (
//               <img
//                 src={selectedImage}
//                 alt="Preview"
//                 className="img-fluid rounded shadow modal-img"
//               />
//             )}
//           </div>
//         </div>
//       </div>

//       {/* CSS */}
//       <style jsx>{`
//         .gallery-card {
//           cursor: pointer;
//           border: none;
//           border-radius: 12px;
//           overflow: hidden;
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }

//         .gallery-card img {
//           height: 180px;
//           object-fit: cover;
//         }

//         .gallery-card:hover {
//           transform: translateY(-6px) scale(1.03);
//           box-shadow: 0 18px 35px rgba(0, 0, 0, 0.3);
//         }

//         .modal-img {
//           max-width: 90vw;
//           max-height: 80vh;
//           width: auto;
//           height: auto;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Page;




"use client";

import React, { useState } from "react";

const Page = () => {
  const baseUrl = process.env.NEXT_PUBLIC_STATIC_ASSETS;

  // Constitution images (Constitution1.jpeg to Constitution9.jpeg)
  const constitutionImages = Array.from(
    { length: 9 },
    (_, i) => `Constitution${i + 1}.jpeg`
  );

  // Lamp images (Lamp1.jpeg to Lamp25.jpeg)
  const lampImages = Array.from(
    { length: 25 },
    (_, i) => `Lamp${i + 1}.jpeg`
  );

  // Video URLs
  const videos = [
    `${baseUrl}/videos/1.mp4`,
    `${baseUrl}/videos/2.mp4`,
    `${baseUrl}/videos/3.mp4`,
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container my-4 text-center">
      {/* Main Heading */}
      <h1 className="display-6 fw-bold text-dark mb-4">
        Extracurricular Activities
      </h1>

      {/* Constitution Day Celebration Heading */}
      <h5 className="text-center mb-4 fw-bold text-dark d-inline-block px-4 py-3">
        📜 Constitution Day Celebration
      </h5>

      {/* Constitution Image Gallery */}
      <div className="row g-4 mb-5">
        {constitutionImages.map((img, index) => (
          <div className="col-12 col-sm-6 col-md-3" key={index}>
            <div
              className="card gallery-card"
              onClick={() => setSelectedImage(`${baseUrl}/Activities/${img}`)}
            >
              <img
                src={`${baseUrl}/Activities/${img}`}
                alt={`Constitution Gallery ${index + 1}`}
                className="card-img-top"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <h5 className="text-center mb-4 fw-bold text-dark d-inline-block px-4 py-3">
        🎥 Lamp Lighting and Oath Taking Ceremony Celebration
      </h5>

      <div className="row g-4 mb-5">
        {videos.map((video, index) => (
          <div className="col-12 col-md-4" key={index}>
            <div className="card video-card p-2 h-100">
              <video
                src={video}
                controls
                autoPlay
                muted
                loop
                className="w-100 rounded shadow"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lamp Images Gallery */}
      <div className="row g-4 mb-5">
        {lampImages.map((img, index) => (
          <div className="col-12 col-sm-6 col-md-3" key={index}>
            <div
              className="card gallery-card"
              onClick={() => setSelectedImage(`${baseUrl}/Activities/${img}`)}
            >
              <img
                src={`${baseUrl}/Activities/${img}`}
                alt={`Lamp Gallery ${index + 1}`}
                className="card-img-top"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Bootstrap Modal for images */}
      <div
        className={`modal fade ${selectedImage ? "show d-block" : ""}`}
        tabIndex={-1}
        role="dialog"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        onClick={() => setSelectedImage(null)}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content bg-transparent border-0 text-center">
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-3"
              aria-label="Close"
              onClick={() => setSelectedImage(null)}
            ></button>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Preview"
                className="img-fluid rounded shadow modal-img"
              />
            )}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .gallery-card {
          cursor: pointer;
          border: none;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-card img {
          height: 180px;
          object-fit: cover;
        }

        .gallery-card:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.3);
        }

        .modal-img {
          max-width: 90vw;
          max-height: 80vh;
          width: auto;
          height: auto;
        }

        .video-card {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-card video {
          object-fit: cover;
          max-height: 250px;
        }

        .video-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Page;

