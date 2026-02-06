"use client";

import React, { useState } from "react";

const Page = () => {
  const baseUrl = process.env.NEXT_PUBLIC_STATIC_ASSETS;

  // Diabetes images (Diabetes1.jpeg to Diabetes14.jpeg)
  const diabetesImages = Array.from(
    { length: 14 },
    (_, i) => `Diabetes${i + 1}.jpeg`
  );

  // AIDS images (AIDS1.jpeg to AIDS12.jpeg)
  const aidsImages = Array.from({ length: 12 }, (_, i) => `AIDS${i + 1}.jpeg`);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container my-4 text-center">
      {/* Main Circular Heading */}
      <h1 className="display-6 fw-bold text-dark rounded-circle d-inline-block px-5 py-2 mb-2">
        Circular
      </h1>

      {/* Diabetes Gallery */}
      <h5 className="text-center mb-4 fw-bold text-dark">
        🎉 World Diabetes Day
      </h5>
      <div className="row g-4 mb-5">
        {diabetesImages.map((img, index) => (
          <div className="col-12 col-sm-6 col-md-3" key={`diabetes-${index}`}>
            <div
              className="card gallery-card"
              onClick={() => setSelectedImage(`${baseUrl}/Activities/${img}`)}>
              <img
                src={`${baseUrl}/Activities/${img}`}
                alt={`Diabetes Gallery ${index + 1}`}
                className="card-img-top"
              />
            </div>
          </div>
        ))}
      </div>

      {/* AIDS Gallery */}
      <h5 className="text-center mb-4 fw-bold text-dark">🎉 World AIDS Day</h5>
      <div className="row g-4">
        {aidsImages.map((img, index) => (
          <div className="col-12 col-sm-6 col-md-3" key={`aids-${index}`}>
            <div
              className="card gallery-card"
              onClick={() => setSelectedImage(`${baseUrl}/Activities/${img}`)}>
              <img
                src={`${baseUrl}/Activities/${img}`}
                alt={`AIDS Gallery ${index + 1}`}
                className="card-img-top"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={() => setSelectedImage(null)}>
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}>
            <div className="modal-content bg-transparent border-0 text-center position-relative">
              {/* Close button */}
              <button
                type="button"
                className="btn-close position-absolute top-0 end-0 m-3"
                aria-label="Close"
                onClick={() => setSelectedImage(null)}></button>

              {/* Modal Image */}
              <img
                src={selectedImage}
                alt="Preview"
                className="img-fluid rounded shadow modal-img"
              />
            </div>
          </div>
        </div>
      )}

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

        h1.rounded-circle {
          border-radius: 50%;
        }

        .modal-img {
          max-width: 90vw;
          max-height: 80vh;
          width: auto;
          height: auto;
        }
      `}</style>
    </div>
  );
};

export default Page;
