import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = id => {
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('deleted successfully');
                    const remainingUsers = users.filter(user => user._id !== id)
                    setUsers(remainingUsers);
                }
            })
    }
    return (
        <div className="m-20">
            <h1 className="text-center text-4xl font-bold">Users</h1>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            {/* <th></th> */}
                            <th>Email</th>
                            <th>Creation Time</th>
                            <th>Action</th>
                            {/* <th>Favorite Color</th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <tr key={user._id}>

                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
            <Link to='/'><button className='btn items-center bg-[#E3B577]  m-6'>Home</button></Link>
        </div>
    );
};

export default Users;