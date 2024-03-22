import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

  return {
    props: {
      CLIENT_ID,
      CLIENT_SECRET,
      REDIRECT_URI,
    },
  };
};

export default function Home({
  CLIENT_ID,
  REDIRECT_URI,
}: {
  CLIENT_ID: string;
  REDIRECT_URI: string;
}) {
  return (
    <>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo`}
      >
        Sign in with GitHub
      </a>
    </>
  );
}
