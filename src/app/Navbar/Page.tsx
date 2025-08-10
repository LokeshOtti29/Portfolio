import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-lg font-bold text-gray-800">@Lokesh_Otti</div>

        <div className="flex gap-6 text-gray-600">
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
        </div>
      </div>

      <div className="h-[1px] bg-gray-200"></div>
    </>
  );
};

export default Navbar;
