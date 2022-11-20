import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem("Token", data.token);
            setToken(data.token);
          }
          console.log(data);
        });
    }
  }, [email]);
  return [token];
};

export default useToken;
