import PostsList from "@/components/PostsList";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <PostsList />

      <Link href="/" className="underline hover:text-red-400">
        <button
          type="button"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Home page
          <span className="ml-2">
            <FaHome />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default BlogPage;
