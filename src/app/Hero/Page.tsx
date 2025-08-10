import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-end gap-10 px-4 py-10 ">
      <div className="text-center md:text-left pt-6">
        <h1 className="text-2xl md:text-3xl">
          Hi, I'm{" "}
          <span className="text-red-400 text-3xl md:text-4xl font-bold">Lokesh</span>{" "}
          <span className="text-3xl md:text-4xl font-bold">Otti</span>
        </h1>
        <p className="text-gray-600 mt-2 text-lg md:text-xl">Software Engineer</p>
        <div className="flex justify-center md:justify-start gap-4 text-gray-600 mt-3 text-2xl">
          <a href="https://github.com/LokeshOtti29" target="_blank" className="hover:text-gray-900 transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/lokesh-otti-8b661526a/" target="_blank" className="hover:text-gray-900 transition-colors">
            <FaLinkedin />
          </a>
          <a href="https://x.com/lkot370978" target="_blank" className="hover:text-gray-900 transition-colors">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/its_lokesh_otti/" target="_blank" className="hover:text-gray-900 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://leetcode.com/u/lokeshOtti_2003/" target="_blank" className="hover:text-gray-900 transition-colors">
            <SiLeetcode />
          </a>
        </div>
        <div className="flex justify-center md:justify-start mt-5">
          <a
            href="/Lokesh_Otti.pdf"
            download
            className="border rounded bg-yellow-400 px-5 py-2 text-white hover:bg-yellow-500 transition"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          src="Image.jpg"
          alt="lokeshotti"
          className="h-48 w-48 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
