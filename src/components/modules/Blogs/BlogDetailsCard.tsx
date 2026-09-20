
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

function getImageUrl(url: string | null | undefined) {
  if (!url) {
    return "https://cdn-icons-png.flaticon.com/512/9385/9385289.png";
  }

  // Handles URLs returned as Markdown:
  // [https://example.com/image.jpg](https://example.com/image.jpg)
  const markdownMatch = url.match(/^\[(.*?)\]\((.*?)\)$/);

  if (markdownMatch) {
    return markdownMatch[2];
  }

  return url;
}

export default function BlogDetailsCard({
  blog,
}: {
  blog: any;
}) {
  if (!blog) {
    return (
      <main className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Blog not found</h2>
          <p className="mt-2 text-muted-foreground">
            The blog you are looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  const authorImage = getImageUrl(blog.author?.picture);
  const thumbnail = getImageUrl(blog.thumbnail);

  const formattedDate = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Featured Badge */}
        {blog.isFeatured && (
          <div className="mb-5">
            <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Featured
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {blog.title}
        </h1>

        {/* Author & Meta */}
        <div className="mt-7 flex flex-wrap items-center gap-4 border-b pb-7">
          <Image
            src={authorImage}
            alt={blog.author?.name || "Author"}
            width={52}
            height={52}
            className="h-13 w-13 rounded-full object-cover"
          />

          <div>
            <div className="flex items-center gap-1">
              <p className="font-semibold">
                {blog.author?.name || "Unknown Author"}
              </p>

              {blog.author?.isVerified && (
                <span className="text-sm text-blue-500">✔</span>
              )}
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>{formattedDate}</span>
              <span>•</span>
              <span>{blog.views || 0} views</span>
            </div>
          </div>
        </div>

        {/* Blog Thumbnail */}
        <div className="relative mt-8 h-[280px] w-full overflow-hidden rounded-2xl sm:h-[400px] lg:h-[500px]">
          <Image
            src={thumbnail}
            alt={blog.title || "Blog thumbnail"}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1024px"
            className="object-cover"
          />
        </div>

        {/* Tags */}
        {blog.tags?.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-2">
            {blog.tags.map((tag: string) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <article className="mt-10 max-w-4xl">
          <p className="whitespace-pre-line text-lg leading-8 text-muted-foreground">
            {blog.content}
          </p>
        </article>

        {/* Author Information */}
        <section className="mt-12 border-t pt-8">
          <h2 className="mb-5 text-xl font-semibold">About the Author</h2>

          <div className="flex flex-col gap-4 rounded-2xl border bg-card p-6 sm:flex-row sm:items-center">
            <Image
              src={authorImage}
              alt={blog.author?.name || "Author"}
              width={72}
              height={72}
              className="h-[72px] w-[72px] rounded-full object-cover"
            />

            <div>
              <h3 className="text-lg font-semibold">
                {blog.author?.name || "Unknown Author"}
              </h3>

              {blog.author?.email && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {blog.author.email}
                </p>
              )}

              {blog.author?.phone && (
                <p className="mt-1 text-sm text-muted-foreground">
                  {blog.author.phone}
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

