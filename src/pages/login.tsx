import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const CLIENT_ID='9534d9c18209cacf0572'
const CLIENT_SECRET='97047a9b604dff95f93ed1419970101780ea46bb'
const REDIRECT_URI='http://localhost:3000/login'

export async function getServerSideProps({ query }: { query: any }) {
    const code = query.code;
  
    if (code) {
        console.log(code);
      try {
        const response = await fetch(
          `https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}`,
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
            },
          }
        );
  
        const data = await response.json();
        console.log(data);
        const accessToken = data.access_token;
  
        if (!accessToken) {
          throw new Error('Access token non esiste');
        }
  
        const userResponse = await fetch('https://api.github.com/user', {
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
      } catch (error :any ) {
        console.error('Error:', error);
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

export default function Login({ userData, error }: { userData: any, error: any }) {
    const router = useRouter();
    const code = router.query.code;

    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        if(userData){
       localStorage.setItem('user', JSON.stringify(userData));
       const userInfos : any = localStorage.getItem('user');
       setUser(JSON.parse(userInfos));}
       
    }, [code]);


    if (error) {
        return <div>Error: {error}</div>;
    }



    return (
        <div>
            {!user && <a href={`https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&scope=repo`}>Signin with GitHub</a>}
            {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
            {user && (
                <div>
                    <h1>Benvenuto {user.login}</h1>
                    <img src={user.avatar_url} />
                    <p>{user.bio}</p>
                </div>
            )}
            <button onClick={() => {
                localStorage.removeItem('user');
                router.push('/');
            }}>Logout</button>
        </div>
    );
}
