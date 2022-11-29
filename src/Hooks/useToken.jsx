import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
      fetch(`https://doctors-portal-server-eosin-beta.vercel.app/jwt?email=${email}`)
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
