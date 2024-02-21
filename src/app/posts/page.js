import Link from "next/link";

const Posts = async () => {

    const res = await fetch('http://localhost:5000/posts',{
        next:{
            revalidate: 5
        }
    });
    const posts = await res.json();
    // console.log(post);

    return (
        <div>
            <h1>Total Posts: {posts.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
                {
                    posts.map(post => <div key={post.id} className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                      <h2 className="card-title">{post.title}</h2>
                      <p>{post.description}</p>
                      <p>Likes: {post.like_count}</p>
                      <div className="card-actions justify-end">
                        <Link href={`/posts/${post.id}`}><button className="btn btn-primary">See More...</button></Link>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Posts;