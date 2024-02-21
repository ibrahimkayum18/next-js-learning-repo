"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, []);
  // console.log(users.length);
  return <div>
    <h1>Users: {users.length}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {
            users.map(user => <div key={user.id} className="card-body bg-gray-200 rounded-lg">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
            <p>Phone Number: {user.phone}</p>
            <div className="card-actions justify-end">
              <Link href={`/users/${user.id}`}><button className="btn btn-primary">See More...</button></Link>
            </div>
          </div>)
        }
    </div>
    </div>;
};

export default Users;
