import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users`);
      const data = res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("admin making successful");
          refetch();
        }
        console.log(data);
      });
  };

  if (isLoading) {
    return <progress className="progress w-full"></progress>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {console.log(users)}
          {users?.map((user, i) => (
            <tr key={user?._id}>
              <th>{i + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user?.role === "admin" ? (
                  <button className="btn btn-xs btn-primary">admin</button>
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user?._id)}
                    className="btn btn-xs btn-secondary"
                  >
                    update
                  </button>
                )}
              </td>
              <td>
                <button className="btn btn-xs">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
