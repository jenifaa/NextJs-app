import BlogCard from "@/components/modules/Blogs/BlogCard";
import ContactUs from "@/components/modules/Home/ContactUs";
import FAQ from "@/components/modules/Home/FAQ";
import Hero from "@/components/modules/Home/Hero";
import { IBlog } from "@/types";

export default async function HomePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      tags: ["BLOGS"],
    },
  });

  const result = await res.json();

  console.log("Server", result);

  const blogs: IBlog[] = result.data || [];

  return (
    <div>
      <Hero />

      <h2 className="my-5 text-center text-4xl">Featured Posts</h2>

      <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  max-w-7xl mx-auto">
        {blogs.slice(2, 6).map((blog) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
      <ContactUs></ContactUs>
      <FAQ></FAQ>
    </div>
  );
}
