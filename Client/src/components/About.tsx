import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="bg-white text-gray-800 px-6 md:px-16 lg:px-28 py-16">
      {/* ---------- About Section ---------- */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
        About <span className="text-[#ff4b4b]">BuBBinGo Café</span>
      </h1>

      <div className="max-w-3xl mx-auto text-center space-y-5 text-lg leading-relaxed">
        <p>
          <span className="font-semibold text-gray-900">BuBBinGo Café</span> is a
          fast-food café located in{" "}
          <span className="font-semibold text-gray-900">
            Guruchhaya Colony, Amravati
          </span>
          . We serve delicious <span className="font-semibold">burgers</span>,{" "}
          <span className="font-semibold">fries</span>, and{" "}
          <span className="font-semibold">waffles</span> with quick and friendly
          service.
        </p>

        <p>
          Known for our quality fast food, BuBBinGo is also available for{" "}
          <span className="text-[#ff4b4b] font-semibold">
            <Link to="https://www.swiggy.com/city/amravati/bubbingo-fast-food-cafe-sai-nagar-guruchhaya-colony-rest1189624">
           
            online delivery via Swiggy
             </Link>
          </span>
          . Our café is <span className="font-semibold">family-friendly</span>,{" "}
          <span className="font-semibold">LGBTQ+ friendly</span>, and designed
          for comfort.
        </p>

        <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm text-left mt-10 mb-5">
          <p className="mb-3">
            <span className="font-semibold text-gray-900">Menu Highlights:</span>{" "}
            Cheese Burgers, Herb Chili Burgers, Loaded Fries, and a variety of
            Waffles.
          </p>

          <p className="mb-3">
            <span className="font-semibold text-gray-900">Amenities:</span>{" "}
            Wi-Fi, On-site Parking, Credit Card Payments accepted.
          </p>

          <p>
            <span className="font-semibold text-gray-900">Location:</span>{" "}
            Guruchhaya Colony, Amravati, Maharashtra.
          </p>
        </div>
      </div>

      {/* ---------- Owner Section ---------- */}
      <h2 className="text-3xl font-semibold text-center text-orange mb-6 ">
        Meet Our Founders
      </h2>

      <div className="grid sm:grid-cols-2 gap-8 justify-center">
        {/* Owner 1 */}
        <div className="flex flex-col items-center bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <img
            src="../../Founder/Ashish.jpg"
            alt="Owner 1"
            className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-orange"
          />
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Ashish Rawandhe
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            Co-Founder & Senior Analyst
          </p>
          <a
            href="https://www.instagram.com/ashish__rawandhe09/"
            target="_blank"
            rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
          >
            <Instagram size={28} />
          </a>
        </div>

        {/* Owner 2 */}
        <div className="flex flex-col items-center bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <img
            src="../../Founder/Kapil.jpg"
            alt="Owner 2"
            className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-orange"
          />
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Kapil Sable
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-3">
            Co-Founder & Head Chef
          </p>
          <a
            href="https://www.instagram.com/sablekapil/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <Instagram size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
