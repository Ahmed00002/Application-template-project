import { Link } from "react-router";
import { FileText, Download } from "lucide-react";
import hero from "../assets/images/hero.svg";

const Hero = () => {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white pt-28 pb-20">
      <div className="flex flex-col md:flex-row items-center gap-10 center">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
            Ready-Made{" "}
            <span className="text-blue-600">Application Templates</span>
            <br />
            Just Edit & Download Instantly!
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Choose from verified application templates, add your personal
            details, and get a polished PDF instantly — no formatting or typing
            hassles!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/templates"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium"
            >
              <FileText className="mr-2" size={20} />
              Browse Templates
            </Link>
            <Link
              to="/templates/edit"
              className="inline-flex items-center justify-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all font-medium"
            >
              Fill & Download <Download className="ml-2" size={18} />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={hero}
            alt="Application Illustration"
            className="w-80 md:w-[400px] "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
