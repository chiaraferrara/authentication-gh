import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import Login from "./components/Login";

export default function Home() {
  const [parsedUserData, setParsedUserData] = useState<any>();
  const [isLogged, setIsLogged] = useState<boolean>(false);
  useEffect(() => {
    const access_token = localStorage.getItem("accessToken");
    setIsLogged(!!access_token);

    const userData = localStorage.getItem("user");
    if (userData) {
      setParsedUserData(JSON.parse(userData));
    }
  }, []);

  if (isLogged) {
    return (
      <>
        <h1>Hello {parsedUserData.login}</h1>
        <img src={parsedUserData.avatar_url} />
        <p>{parsedUserData.bio}</p>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("accessToken");
            setIsLogged(false);
          }}
        >
          Logout
        </button>
      </>
    );
  }

  return (
    <>
      <Login />
    </>
  );
}
