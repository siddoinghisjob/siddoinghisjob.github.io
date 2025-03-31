import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { PageTransition } from "~/components/layout/utils/Pagetransition";

export default component$(() => {
  const blogData = {
    title: "TypeScript Tips and Tricks for Everyday Development",
    publishDate: "February 15, 2025",
    readTime: "7 min read",
    author: "Soumya Deep Sarkar",
    tags: ["TypeScript", "JavaScript", "Tips"],
    lastUpdated: "March 20, 2025",
    content: `
      <h1>TypeScript Tips and Tricks for Everyday Development</h1>
      
      <p>TypeScript has become an essential tool in modern JavaScript development, providing static type-checking and improved tooling. In this post, I'll share some practical tips and tricks that can help you be more productive with TypeScript.</p>
      
      <h2>1. Use Type Aliases for Better Readability</h2>
      
      <p>Type aliases help you create more readable and maintainable code by giving meaningful names to complex types.</p>
      
      <pre><code class="language-typescript">
// Instead of this
function processUser(user: { id: string; name: string; email: string; role: 'admin' | 'user' | 'guest' }) {
  // ...
}

// Do this
type UserRole = 'admin' | 'user' | 'guest';

type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

function processUser(user: User) {
  // ...
}
      </code></pre>
      
      <h2>2. Leverage Utility Types</h2>
      
      <p>TypeScript provides several utility types that can help you transform existing types in useful ways.</p>
      
      <h3>Partial&lt;T&gt;</h3>
      
      <p>Creates a type with all properties of T set to optional.</p>
      
      <pre>
      <code class="language-typescript">
          interface User {
            id: string;
            name: string;
            email: string;
          }

          // All fields are optional in UserUpdate
          type UserUpdate = Partial<User>;

          function updateUser(userId: string, update: UserUpdate) {
            // ...
          }
      </code></pre>
      
      <h3>Pick&lt;T, K&gt;</h3>
      
      <p>Creates a type by picking the set of properties K from T.</p>
      
      <pre>
        <code class="language-typescript">
          interface User {
            id: string;
            name: string;
            email: string;
            role: 'admin' | 'user' | 'guest';
          }

          // Only id and name are included in UserPreview
          type UserPreview = Pick<User, 'id' | 'name'>;

          function getUserPreview(userId: string): UserPreview {
            // ...
          }
        </code>
      </pre>
    `,
    recommendedBlogs: [
      {
        id: "getting-started-with-qwik",
        title: "Getting Started with Qwik: A Comprehensive Guide",
        tags: ["Qwik", "JavaScript", "Web Development"],
      },
      {
        id: "python-best-practices",
        title: "Python Best Practices for Clean and Maintainable Code",
        tags: ["Python", "Best Practices", "Clean Code"],
      },
    ],
  };

  return (
    <PageTransition>
      <main class="mx-auto flex max-w-3xl flex-col gap-8 p-4 md:p-8">
        {/* Blog Header */}
        <header class="bg-card rounded p-6 shadow">
          <span class="group relative mb-4">
            <p class="absolute top-[0.95rem] w-4 border-[1px]"></p>
            <p class="absolute top-3 ml-4 h-2 w-2 scale-100 rounded-full bg-white transition-all group-hover:scale-150"></p>
            <h1 class="font-heading ml-8 text-3xl font-semibold">
              {blogData.title}
            </h1>
          </span>

          <div class="mt-4 mb-3 ml-8 flex flex-wrap items-center gap-2">
            <span class="text-secondary text-sm">{blogData.publishDate}</span>
            <span class="bg-secondary h-1 w-1 rounded-full"></span>
            <span class="text-secondary text-sm">{blogData.readTime}</span>
            <span class="bg-secondary h-1 w-1 rounded-full"></span>
            <span class="text-sm">By {blogData.author}</span>
            {blogData.lastUpdated && (
              <>
                <span class="bg-secondary h-1 w-1 rounded-full"></span>
                <span class="text-secondary text-sm">
                  Updated: {blogData.lastUpdated}
                </span>
              </>
            )}
          </div>

          <div class="mt-4 ml-8 flex flex-wrap gap-2">
            {blogData.tags.map((tag) => (
              <span key={tag} class="bg-background rounded px-2 py-1 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Blog Content */}
        <article
          class="bg-card prose prose-invert max-w-none rounded p-6 shadow"
          dangerouslySetInnerHTML={blogData.content}
        />

        {/* Recommended Posts */}
        <div class="bg-card mt-8 rounded p-6 shadow">
          <h2 class="font-heading mb-4 text-2xl font-semibold">
            Recommended Reading
          </h2>
          <div class="flex flex-col gap-4">
            {blogData.recommendedBlogs.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.id}`}
                class="group bg-background rounded p-4 transition-transform hover:-translate-y-1"
              >
                <h3 class="font-heading group-hover:text-secondary text-lg font-semibold transition-colors">
                  {post.title}
                </h3>

                <div class="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} class="bg-card rounded px-2 py-1 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div class="bg-card rounded p-4 text-center shadow md:p-6">
          <p class="font-main">
            Have a question or comment about this article?
            <Link href="/contact" class="text-secondary ml-1 hover:underline">
              Let me know
            </Link>
            .
          </p>
        </div>
      </main>
    </PageTransition>
  );
});

export const head: DocumentHead = {
  title: "TypeScript Tips and Tricks | Soumya Deep Sarkar",
  meta: [
    {
      name: "description",
      content:
        "Level up your TypeScript skills with these practical tips and tricks that will make your development experience more productive and your code more robust.",
    },
  ],
};
