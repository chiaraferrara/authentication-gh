import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getServerSideProps({ query }: { query: any }) {
  const code = query.code;

  if (code) {
    console.log(code);
    try {
      const response = await fetch(
        `https://github.com/login/oauth/access_token?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}&code=${code}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data);
      const accessToken = data.access_token;

      if (!accessToken) {
        throw new Error("Access token non esiste");
      }

      const userResponse = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      });

      const userData = await userResponse.json();

      return {
        props: {
          accessToken,
          userData,
        },
      };
    } catch (error: any) {
      console.error("Error:", error);
      return {
        props: {
          error: error.message,
        },
      };
    }
  }

  return {
    props: {},
  };
}

export default function Login({
  userData,
  error,
}: {
  userData: any;
  error: any;
}) {
  const router = useRouter();
  const code = router.query.code;

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      const userInfos: any = localStorage.getItem("user");
      setUser(JSON.parse(userInfos));
    }
  }, [code]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
      {user && (
        <div>
          <h1>Benvenuto {user.login}</h1>
          <img src={user.avatar_url} />
          <p>{user.bio}</p>
        </div>
      )}
      <button
        onClick={() => {
          localStorage.removeItem("user");
          router.push("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}
