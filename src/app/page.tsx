import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-4xl font-bold">Next.js + Sanity (headless CMS)</h1>
        <p className="mt-2">
          This is a simple example of how you can integrate Next.js with a
          headless CMS like Sanity.
        </p>
      </div>

      <Link href="/blog" className="underline hover:text-red-400">
        <button
          type="button"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          To my blog
          <span className="ml-2">
            <FaArrowRight />
          </span>
        </button>
      </Link>
    </div>
  );
}
