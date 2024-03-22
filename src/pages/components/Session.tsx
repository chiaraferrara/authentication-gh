import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Session({
  userData,
  accessToken,
  error,
}: {
  userData: any;
  accessToken: any;
  error: any;
}) {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("accessToken", accessToken);
      const userInfos: any = localStorage.getItem("user");
      setUser(JSON.parse(userInfos));
      router.replace("/");
    }
  }, []);

  return <h1>Loading...</h1>;
}
