// components/Footer.tsx
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm mb-4 md:mb-0">
          amirahnasihah, {new Date().getFullYear()}
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/amirahnasihah/nextjs-with-sanity"
            passHref
            target="_blank"
            className="text-sm text-white hover:text-gray-300 dark:text-gray-400 flex flex-row gap-3"
          >
            <BsGithub className="w-5 h-5" /> GitHub url
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
