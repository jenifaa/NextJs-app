import Link from "next/link";
import Image from "next/image";
import { IBlog } from "@/types";

export default function BlogCard({ post }: { post: IBlog }) {
  return (
    <Link
      href={`/blogs/${post.id}`}
      className="group block transform transition-transform duration-300 hover:-translate-y-1"
    >
      {" "}
      <div className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-gray-900">
        {/* Thumbnail */}
        {post.thumbnail ? (
          <div className="relative h-56 w-full overflow-hidden">
            {" "}
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />{" "}
          </div>
        ) : (
          <div className="flex h-56 w-full items-center justify-center bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-300">
            No Image{" "}
          </div>
        )}

        <div className="p-6">
          {/* Tags */}
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-900/40 dark:text-blue-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-blue-600">
            {post.title}
          </h3>

          {/* Content */}
          <p className="mb-4 line-clamp-3 text-gray-700 dark:text-gray-300">
            {post.content}
          </p>

          {/* Post Information */}
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Author ID: {post.authorId}
            </div>

            <span className="text-sm text-gray-500 dark:text-gray-400">
              {post.views} views
            </span>
          </div>

          {/* Featured Badge */}
          {post.isFeatured && (
            <div className="mb-4">
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">
                ⭐ Featured
              </span>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between border-t pt-4 dark:border-gray-700">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(post.createdAt).toLocaleDateString()}
            </span>

            <span className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
