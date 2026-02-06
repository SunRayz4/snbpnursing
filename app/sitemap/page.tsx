export default function MapPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.504836010071!2d73.82786967496722!3d18.68588498244003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b799e0fb571f%3A0x7d344426585da772!2sSNBP%20College%20of%20Pharmacy!5e1!3m2!1sen!2sin!4v1752290932072!5m2!1sen!2sin"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
