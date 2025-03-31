import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import Blog from "~/components/layout/utils/blog";
import { PageTransition } from "~/components/layout/utils/Pagetransition";

export default component$(() => {
  // Sample blog posts - replace with your actual blog data
  const blogPosts = [
    {
      id: "getting-started-with-qwik",
      title: "Getting Started with Qwik: A Comprehensive Guide",
      publishDate: "March 25, 2025",
      excerpt:
        "Learn how to build blazing-fast web applications with Qwik, the resumable JavaScript framework that's changing how we think about performance.",
      readTime: "8 min read",
      tags: ["Qwik", "JavaScript", "Web Development"],
    },
    {
      id: "python-best-practices",
      title: "Python Best Practices for Clean and Maintainable Code",
      publishDate: "March 10, 2025",
      excerpt:
        "Discover essential best practices for writing clean, maintainable, and efficient Python code that will make your projects more robust and easier to collaborate on.",
      readTime: "6 min read",
      tags: ["Python", "Best Practices", "Clean Code"],
    },
    {
      id: "microservices-with-go",
      title: "Building Microservices with Go and Docker",
      publishDate: "February 28, 2025",
      excerpt:
        "Explore how to design, build, and deploy scalable microservices using Go and containerize them with Docker for production environments.",
      readTime: "10 min read",
      tags: ["Go", "Microservices", "Docker", "Backend"],
    },
    {
      id: "typescript-tips",
      title: "TypeScript Tips and Tricks for Everyday Development",
      publishDate: "February 15, 2025",
      excerpt:
        "Level up your TypeScript skills with these practical tips and tricks that will make your development experience more productive and your code more robust.",
      readTime: "7 min read",
      tags: ["TypeScript", "JavaScript", "Tips"],
    },
    {
      id: "redis-caching-strategies",
      title: "Effective Caching Strategies with Redis",
      publishDate: "January 30, 2025",
      excerpt:
        "Learn how to implement effective caching strategies using Redis to significantly improve the performance of your web applications.",
      readTime: "9 min read",
      tags: ["Redis", "Caching", "Performance", "Backend"],
    },
  ];

  return (
    <PageTransition>
      <main class="flex flex-col gap-8 p-4 px-5 md:p-8">
        <div class="bg-card rounded p-4 shadow md:p-8">
          <h1 class="font-heading mb-4 text-3xl font-semibold">Blog</h1>
          <p class="font-main text-lg">
            Welcome to my blog where I share my thoughts, experiences, and
            tutorials on various topics in software development, from Python and
            Go to JavaScript frameworks like Qwik.
          </p>
        </div>

        <div class="flex flex-col gap-6">
          {blogPosts.map((post, key) => (
            <Blog
              key={key}
              title={post.title}
              id={post.id}
              publishDate={post.publishDate}
              readTime={post.readTime}
              tags={post.tags}
              exerpt={post.excerpt}
            />
          ))}
        </div>

        <div class="bg-card mt-4 rounded p-4 shadow md:p-6">
          <p class="font-main text-center">
            Looking for a specific topic? Feel free to
            <Link href="/contact" class="text-secondary ml-1 hover:underline">
              request a blog post
            </Link>
            .
          </p>
        </div>
      </main>
    </PageTransition>
  );
});

export const head: DocumentHead = {
  title: "Blog | Soumya Deep Sarkar",
  meta: [
    {
      name: "description",
      content:
        "Read Soumya Deep Sarkar's blog posts about software development, programming languages, and web technologies.",
    },
  ],
};
