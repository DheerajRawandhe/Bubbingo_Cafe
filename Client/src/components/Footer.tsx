
// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-center text-gray-300 py-8 px-4">
//       <p className="text-sm">
//           &copy; 2025 BuBBinGo_Cafe. All rights reserved.
//         </p> 
//     </footer>
//   );
// };

// export default Footer;


import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Left: Brand Info */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">BuBBinGo Café</h2>
          <p className="text-sm text-gray-400">
            Taste the best food anytime, anywhere.
          </p>
          <p className="flex items-center gap-2 mt-4 text-center">
            <MapPin size={18} />Amravati, Maharashtra, India
          </p>
        </div>

        {/* Middle: Contact Info */}
        <div className="w-full md:w-1/3 text-center">
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="flex justify-center items-center gap-2">
            <Phone size={18} /> +91 **********
          </p>
          <p className="flex justify-center items-center gap-2 mt-2">
            <Mail size={18} /> support@bubbingocafe.com
          </p>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://www.instagram.com/bubbingo_cafe/" className="hover:text-pink-500 transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <Twitter size={22} />
            </a>
            <a href="#" className="hover:text-red-500 transition">
              <Youtube size={22} />
            </a>
          </div>
        </div>

        {/* Right: Google Map */}
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-semibold text-white mb-3 text-center md:text-right">Find Us</h3>
          <iframe
            title="BuBBinGo Cafe Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88591.96734452325!2d77.67709271889187!3d20.886305647589783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a5f40252bbeb%3A0x49e00a7df58bc170!2sBuBBinGo!5e1!3m2!1sen!2sin!4v1759676656863!5m2!1sen!2sin"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © 2025 <span className="text-white font-semibold">BuBBinGo Fast Food Cafe</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
