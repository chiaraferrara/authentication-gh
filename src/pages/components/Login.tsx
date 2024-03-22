import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const navigate = () => {
    router.push(
      `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&scope=repo`
    );
  };

  return (
    <>
  {/* @ts-ignore */}
      <button dataCy="login-button"
        onClick={() => {
          navigate();
        }}
      >
        Login With Github
      </button>
    </>
  );
}
