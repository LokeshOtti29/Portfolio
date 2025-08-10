import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <div className="flex flex-row-reverse justify-center gap-10 px-4">
      <div className="mt-4 text-center md:text-left pt-6">
        <h1 className="text-2xl">
          Hi, I'm{" "}
          <span className="text-blue-600 text-3xl font-bold">Lokesh</span>{" "}
          <span className="text-blue-600 text-3xl font-bold">Otti</span>
        </h1>
        <p className="text-gray-600 mt-2 text-xl">Software Engineer</p>
        <div className="flex gap-4 text-gray-600 mt-2">
          <a
            href="https://github.com/LokeshOtti29"
            target="_blank"
            className="hover:text-gray-900 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/lokesh-otti-8b661526a/"
            target="_blank"
            className="hover:text-gray-900 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/lkot370978"
            target="_blank"
            className="hover:text-gray-900 transition-colors"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.instagram.com/its_lokesh_otti/"
            target="_blank"
            className="hover:text-gray-900 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://leetcode.com/u/lokeshOtti_2003/"
            target="_blank"
            className="hover:text-gray-900 transition-colors"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
      <div>
        <img
          src="Image.jpg"
          alt="lokeshotti"
          className="h-45 w-45 rounded-full  object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
