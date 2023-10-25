import React from "react";
import "./style.css";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <div className="about-page">
        <div className="bg-gray-200 p-4">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>
            Welcome to our music streaming platform. We are passionate about
            bringing the best music to your ears.
          </p>
          <h3 className="text-xl font-semibold mt-4">Our Mission</h3>
          <p>
            Our mission is to provide you with the most enjoyable and seamless
            music listening experience. We strive to bring you the latest and
            greatest music from around the world.
          </p>
          <h3 className="text-xl font-semibold mt-4">Meet the Team</h3>
          <ul>
            <li>
              <img
                src="john-doe.jpg"
                alt="John Doe"
                className="w-16 h-16 rounded-full"
              />
              John Doe - CEO
            </li>
            <li>
              <img
                src="jane-smith.jpg"
                alt="Jane Smith"
                className="w-16 h-16 rounded-full"
              />
              Jane Smith - CTO
            </li>
          </ul>
        </div>
      </div>
      <Footer/>
    </>
  );
}
