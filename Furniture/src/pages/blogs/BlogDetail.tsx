import { posts } from "@/data/posts";
import { Link } from "react-router";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router";
import RichTextRenderer from "@/components/blogs/RichTextRenderer";

function BlogDetail() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === postId);
  return (
    <div className="container mx-auto px-4 lg:px-0">
      <section className="flex flex-col gap-10 lg:flex-row lg:items-start">
        <section className="w-full lg:w-3/4 lg:pr-16">
          <Button variant="outline" asChild className="mt-8 mb-6">
            <Link to="/blogs">
              <Icons.arrowLeft />
              All Posts
            </Link>
          </Button>
          {post ? (
            <>
              <h2 className="mb-3 text-3xl font-extrabold">{post.title}</h2>
              <div className="mt-2 ml-4 text-sm">
                <span>
                  by <span className="font-semibold"> {post.author} </span> on
                  <span className="font-semibold"> {post.updated_at}</span>
                </span>
              </div>
              <h3 className="my-6 text-base font-[400]">{post.content}</h3>
              <img
                src={post.image}
                alt={post.title}
                className="h-[450px] w-full rounded-xl object-cover"
              />
              <RichTextRenderer content={post.body} className="my-8" />
              <div className="mb-12 space-x-2">
                {post.tags.map((tag) => (
                  <Button key={tag} variant="secondary">
                    {tag}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <p className="text-muted-foreground mt-8 mb-16 text-center text-xl font-bold">
              No Posts Found
            </p>
          )}
        </section>
        <section className="w-full lg:w-1/4 lg:pt-28">
          <div className="mb-8 flex items-center gap-2 text-base font-semibold">
            <Icons.layers />
            <h3 className="">Other Blog Posts</h3>
          </div>
          <div className="grid grid-cols-1 space-y-5 md:grid-cols-2 lg:grid-cols-1">
            {posts.map((post) => (
              <Link
                to={`/blogs/${post.id}`}
                className="mb-6 flex items-start gap-2"
              >
                <img
                  src={post.image}
                  alt="blog post"
                  className="size-16 w-1/4 rounded object-cover"
                />
                <div className="text-muted-foreground w-3/4 text-sm font-[500]">
                  <p className="line-clamp-2">{post.content}</p>
                  <i>... see more</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogDetail;
