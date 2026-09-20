


/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";

const DEFAULT_AUTHOR_IMAGE =
  "https://cdn-icons-png.flaticon.com/512/9385/9385289.png";

function getImageUrl(url: string | null | undefined) {
  if (!url) {
    return DEFAULT_AUTHOR_IMAGE;
  }

  // If backend returns:
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
      <main className="flex min-h-[60vh] items-center justify-center px-4">
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

  const thumbnail = blog.thumbnail
    ? getImageUrl(blog.thumbnail)
    : null;

  const formattedDate = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">

        {/* =========================
            BLOG HEADER
        ========================== */}

        <div className="mx-auto max-w-4xl text-center">

          {/* Featured */}
          {blog.isFeatured && (
            <div className="mb-5">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                Featured Article
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {blog.title || "Untitled Blog"}
          </h1>

          {/* Author information */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Image
              src={authorImage}
              alt={blog.author?.name || "Author"}
              width={52}
              height={52}
              className="h-[52px] w-[52px] rounded-full object-cover"
            />

            <div className="text-left">
              <div className="flex items-center gap-1">
                <p className="font-semibold">
                  {blog.author?.name || "Unknown Author"}
                </p>

                {blog.author?.isVerified && (
                  <span className="text-blue-500">✔</span>
                )}
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                {formattedDate && <span>{formattedDate}</span>}

                <span>•</span>

                <span>{blog.views ?? 0} views</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            BLOG IMAGE
        ========================== */}

        {thumbnail && (
          <div className="relative mx-auto mt-10 h-[280px] max-w-5xl overflow-hidden rounded-2xl sm:h-[400px] lg:h-[520px]">
            <Image
              src={thumbnail}
              alt={blog.title || "Blog thumbnail"}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        )}

        {/* =========================
            BLOG DETAILS
        ========================== */}

        <article className="mx-auto mt-10 max-w-4xl">

          {/* Tags */}
          {Array.isArray(blog.tags) && blog.tags.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {blog.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Content */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8 lg:p-10">
            <h2 className="mb-6 text-2xl font-bold">
              {blog.title || "Blog Details"}
            </h2>

            <div className="whitespace-pre-line text-base leading-8 text-muted-foreground sm:text-lg">
              {blog.content || "No content available for this blog."}
            </div>
          </div>
        </article>

        {/* =========================
            BLOG INFORMATION
        ========================== */}

        <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">

          {/* Views */}
          <div className="rounded-xl border bg-card p-5 text-center">
            <p className="text-2xl font-bold">
              {blog.views ?? 0}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Views
            </p>
          </div>

          {/* Published */}
          <div className="rounded-xl border bg-card p-5 text-center">
            <p className="text-2xl font-bold">
              {formattedDate || "N/A"}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Published
            </p>
          </div>

          {/* Tags */}
          <div className="rounded-xl border bg-card p-5 text-center">
            <p className="text-2xl font-bold">
              {blog.tags?.length ?? 0}
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              Tags
            </p>
          </div>
        </div>

        {/* =========================
            AUTHOR
        ========================== */}

        {blog.author && (
          <section className="mx-auto mt-12 max-w-4xl border-t pt-10">

            <h2 className="mb-6 text-2xl font-bold">
              About the Author
            </h2>

            <div className="flex flex-col gap-5 rounded-2xl border bg-card p-6 sm:flex-row sm:items-center">

              <Image
                src={authorImage}
                alt={blog.author.name || "Author"}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">
                    {blog.author.name || "Unknown Author"}
                  </h3>

                  {blog.author.isVerified && (
                    <span className="text-blue-500">✔</span>
                  )}
                </div>

                {blog.author.email && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {blog.author.email}
                  </p>
                )}

                {blog.author.phone && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {blog.author.phone}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

