/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getBlogById } from "@/services/PostServices";

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);

  if (!res.ok) {
    return [];
  }

  const result = await res.json();

  const blogs = result.data ?? [];

  return blogs.slice(0, 2).map((blog: any) => ({
    blogId: String(blog.id),
  }));
};







export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

const result = await getBlogById(blogId)

   return {
    title: result.data?.title || "Blog Details",
    description: result.data?.excerpt || "Read this blog",
  };
};




const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;


  const blog = await getBlogById(blogId)

  console.log(blog);

  return (
    <main className="min-h-screen bg-background">
      <BlogDetailsCard blog={blog.data} />
    </main>
  );
};

export default BlogDetailsPage;
