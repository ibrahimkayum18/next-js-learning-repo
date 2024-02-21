import Link from "next/link";

export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users= await res.json()
    const ids = users.map(user => {
        return {
            id: user.id+""
        }
    })
    return ids;
}

const UserDetails = async ({params}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json();
    return (
        <div className="card-body bg-gray-200 rounded-lg">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <p>Phone Number: {user.phone}</p>
            <div className="card-actions justify-end">
              <Link href={`/users`}><button className="btn btn-primary">Back</button></Link>
            </div>
          </div>
    );
};

export default UserDetails;