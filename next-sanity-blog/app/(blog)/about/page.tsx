"use client";

import Link from "next/link";

const About= () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="flex-1">
          <img
            src="https://media.istockphoto.com/id/2175031364/photo/smiling-arabic-female-entrepreneur-in-hijab-using-laptop-in-office.jpg?s=612x612&w=0&k=20&c=wLF_a_mk5LWh9AR-UgLUjQtjVZ4Hlo8xK4EAPkkT4gw="
            alt="About Us"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto lg:mx-0"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Welcome to our platform! We are dedicated to providing top-notch
            services and products to our customers. Our mission is to deliver
            quality and ensure customer satisfaction through innovation and
            excellence.
          </p>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            With a team of passionate individuals, we aim to make a positive
            impact on the industry and continue growing with our community.
          </p>

          {/* Call to Action */}
          <div className="mt-6">
            <Link
              href="/contact"
              className="bg-gray-800 text-white py-3 px-6 rounded-md shadow-lg hover:bg-gray-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
