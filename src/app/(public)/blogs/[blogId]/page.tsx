/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const result = await res.json();
  const blogs = result.data;

  return blogs.slice(0, 2).map((blog: any) => ({
    blogId: String(blog.id),
  }));
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);

  const blog = await res.json();

  console.log(blog);

  return (
    <main className="min-h-screen bg-background">
      <BlogDetailsCard blog={blog.data} />
    </main>
  );
};

export default BlogDetailsPage;
