import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/posts");
  const posts = await res.json();
  const ids = posts.map((post) => {
    return {
      id: post.id + "",
    };
  });
  // console.log(ids);
  return ids;
}

const PostDetails = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.id}`);
  const post = await res.json();
  // console.log(details);
  return (
    <div>
      <div className="card-body bg-gray-200">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.description}</p>
        <p>Likes: {post.like_count}</p>
        <div className="card-actions justify-end">
          <Link href={`/posts`}>
            <button className="btn btn-accent">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
