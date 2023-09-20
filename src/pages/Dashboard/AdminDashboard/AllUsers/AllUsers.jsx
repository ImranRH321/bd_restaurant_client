import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";

const AllUsers = () => {
    // Queries
    const { refetch, data: users = [] } = useQuery(["users"], async () => {
        const res = await axios.get("http://localhost:5000/users");
        return res.data;
    });

 /* Add admin new user role updated Admin role code  */
    const handleMakeAdminUserRole = (user) => {
        axios.patch(`http://localhost:5000/users/roleSet/${user.emailUser}`, {
            method: 'PATCH',
        })
            .then(res => {
                console.log('role admin res me ;', res);
                if (res.data.matchedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.nameUser} via onar promotion hoice role admin`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    };

    //   user deleted 
    const handleDeletedUser = (user) => {
        axios.delete(`http://localhost:5000/users/${user._id}`)
            .then(res => {
                console.log('res me d data:', res);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.nameUser} user is deleted`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    refetch()
                }
            })
    };
    
    return (
        <div className="w-full px-12">
            <h1>all user : {users?.length} </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr className="bg-base-200" key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.nameUser}</td>
                                <td>{user.emailUser}</td>

                                <td>
                                    {user.role === "admin" ? (
                                        "Admin Role"
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => handleMakeAdminUserRole(user)}
                                                className="btn btn-ghost btn-sm bg-success"
                                            >
                                                <FaUserShield></FaUserShield>
                                            </button>
                                        </>
                                    )}
                                </td>
                                <td>
                                    {" "}
                                    <button
                                        onClick={() => handleDeletedUser(user)}
                                        className="btn btn-ghost btn-sm bg-red-600"
                                    >
                                        <FaRegTrashAlt></FaRegTrashAlt>
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {/* row 1 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;