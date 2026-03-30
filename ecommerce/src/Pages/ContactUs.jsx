// import React from "react";

// const Contact = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen text-gray-800">

//       {/* Hero */}
//       <section className="bg-[#ece4da]  py-20 text-center px-6">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           Contact Us
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           We'd love to hear from you. Whether you have a question about products,
//           orders, or anything else.
//         </p>
//       </section>

//       {/* Contact Section */}
//       <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        
//         {/* Contact Form */}
//         <div className="bg-white rounded-2xl shadow-md p-8">
//           <h2 className="text-2xl font-semibold mb-6 text-gray-900">
//             Send a Message
//           </h2>

//           <form className="space-y-5">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />

//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />

//             <input
//               type="text"
//               placeholder="Subject"
//               className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             />

//             <textarea
//               rows="5"
//               placeholder="Your Message"
//               className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full bg-[#583101]  text-white py-3 rounded-lg font-medium hover:bg-[#9e5802]  transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Info */}
//         <div className="space-y-6">
          
//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="font-semibold text-lg mb-2">📍 Address</h3>
//             <p className="text-gray-600">
//               8502 Preston Rd. Inglewood, Maine 98380
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="font-semibold text-lg mb-2">📞 Phone</h3>
//             <p className="text-gray-600">+0123-456-789</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-md p-6">
//             <h3 className="font-semibold text-lg mb-2">📧 Email</h3>
//             <p className="text-gray-600">support@example.com</p>
//           </div>

//           <div className="bg-[#ece4da]  rounded-2xl p-6">
//             <h3 className="font-semibold text-lg mb-2 text-gray-900">
//               Customer Support
//             </h3>
//             <p className="text-gray-600">
//               Our team is available 24/7 to assist you with your queries.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Map Section */}
//       <section className="max-w-7xl mx-auto px-6 pb-16">
//         <div className="rounded-2xl overflow-hidden shadow-md">
//           <iframe
//             title="map"
//             src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
//             className="w-full h-80 border-0"
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Contact;

import React from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Truck,
  CreditCard,
  Headphones,
  Camera, // Added for "Stay Connected" section
} from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      

      {/* Hero Header */}
      <div className="py-20 text-center bg-[#fcfcfc]">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-sm text-gray-400 font-medium">Home / Contact Us</p>
      </div>

      {/* Main Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xs text-gray-400 mb-10 italic">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[13px] font-bold">Your Name *</label>
                <input
                  type="text"
                  placeholder="Ex. John Doe"
                  className="w-full border border-gray-100 p-4 rounded-sm bg-white text-sm focus:outline-none focus:border-[#5a1f0f] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[13px] font-bold">Email *</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-100 p-4 rounded-sm bg-white text-sm focus:outline-none focus:border-[#5a1f0f] transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold">Subject *</label>
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full border border-gray-100 p-4 rounded-sm bg-white text-sm focus:outline-none focus:border-[#5a1f0f] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold">Your Message *</label>
              <textarea
                rows="6"
                placeholder="Enter here.."
                className="w-full border border-gray-100 p-4 rounded-sm bg-white text-sm focus:outline-none focus:border-[#5a1f0f] transition-colors resize-none"
              ></textarea>
            </div>

            <button className="bg-[#2e140d] text-white px-8 py-4 rounded-sm text-sm font-bold hover:bg-black transition-colors uppercase tracking-widest">
              Send Message
            </button>
          </form>
        </div>

        {/* Sidebar Info */}
        <div className="bg-[#f8f8f8] p-10 rounded-sm h-fit space-y-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Address</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm text-gray-500">Phone : +0123-456-789</p>
            <p className="text-sm text-gray-500 mt-1">
              Email : example@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Open Time</h3>
            <div className="text-sm text-gray-500 space-y-1">
              <p className="flex justify-between">
                <span>Monday - Friday</span> <span>10:00 - 20:00</span>
              </p>
              <p className="flex justify-between">
                <span>Saturday - Sunday</span> <span>11:00 - 18:00</span>
              </p>
            </div>
          </div>

         
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-112.5 bg-gray-100 relative grayscale opacity-70">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194155!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4455%3A0x71607593c788647c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1647412345678"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* Bottom Service Grid */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">
        <Feature
          icon={<Truck size={32} strokeWidth={1} />}
          title="Free Shipping"
          desc="Free shipping for order above $180"
        />
        <Feature
          icon={<CreditCard size={32} strokeWidth={1} />}
          title="Flexible Payment"
          desc="Multiple secure payment options"
        />
        <Feature
          icon={<Headphones size={32} strokeWidth={1} />}
          title="24x7 Support"
          desc="We support online all days"
        />
      </div>

    </div>
  );
}

/* Helper Components */

function SocialIcon({ icon }) {
  return (
    <div className="bg-[#f3bc65] p-3 rounded-full text-[#2e140d] hover:bg-[#2e140d] hover:text-[#f3bc65] cursor-pointer transition-all duration-300">
      {icon}
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-6">
      <div className="text-slate-800">{icon}</div>
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-[13px] text-slate-400 font-medium">{desc}</p>
      </div>
    </div>
  );
}
