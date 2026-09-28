import { NextResponse } from "next/server";

export const blogs = [
  {
    id: 4,
    title: "Getting Started with Next.js",
    content:
      "Next.js is a powerful React framework for building modern, fast, and scalable web applications. It provides features such as server-side rendering, routing, and image optimization.",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    isFeatured: true,
    tags: ["Next.js", "React", "Web Development"],
    views: 0,
    authorId: 3,
    createdAt: "2026-09-01T19:41:27.953Z",
    updatedAt: "2026-09-01T19:41:27.953Z",
  },
  {
    id: 5,
    title: "Getting Started with React Framework",
    content:
      "Next.js is a powerful React framework for building modern, fast, and scalable web applications. It provides features such as server-side rendering, routing, and image optimization.",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    isFeatured: true,
    tags: ["Next.js", "React", "Web Development"],
    views: 0,
    authorId: 3,
    createdAt: "2026-09-20T16:22:20.524Z",
    updatedAt: "2026-09-20T16:22:20.524Z",
  },
  {
    id: 6,
    title: "Getting Started with React",
    content:
      "Next.js is a powerful React framework for building modern, fast, and scalable web applications. It provides features such as server-side rendering, routing, and image optimization.",
    thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
    isFeatured: true,
    tags: ["Next.js", "React", "Web Development"],
    views: 0,
    authorId: 3,
    createdAt: "2026-09-20T16:32:57.139Z",
    updatedAt: "2026-09-20T16:32:57.139Z",
  },
  {
    id: 7,
    title: "Getting Started with Next.js Server Actions",
    content:
      "Server Actions make it easier to handle server-side operations directly from your Next.js application. Instead of creating a separate API route for every simple form submission, you can define a server action and connect it directly to a form. This approach can make your code simpler and easier to maintain. In this article, we will explore how Server Actions work, how to submit FormData, and how they can be used to create and update blog posts.",
    thumbnail: "https://i.ibb.co.com/ks0r1KDG/physics.png",
    isFeatured: true,
    tags: ["React", "Nextjs"],
    views: 0,
    authorId: 3,
    createdAt: "2026-09-25T19:07:06.259Z",
    updatedAt: "2026-09-25T19:07:06.259Z",
  },
];

export const GET = async () => {
  return Response.json(blogs);
};

export const POST = async (request: Request) => {
  const blog = await request.json();
  const newBlog = {
    ...blog,
    id: blogs.length + 1,
  };

  blogs.push(newBlog);

  return new NextResponse(JSON.stringify(newBlog), {
    status: 201,
    headers: {
      "content-type": "application/json",
    },
  });
};
