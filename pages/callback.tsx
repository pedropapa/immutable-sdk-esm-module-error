import { useEffect } from "react";
import dynamic from "next/dynamic";
import { config, passport } from "@imtbl/sdk";

const LoginCallback = () => {
    useEffect(() => {
        const client = new passport.Passport({
            baseConfig: {
            environment: config.Environment.PRODUCTION,
            },
            clientId: 'your-client-id',
            redirectUri: 'http://localhost:3000',
        });

        client.loginCallback();
    }, []);

  return (
    <main>
      <h1>Logging in...</h1>
    </main>
  );
};

export default dynamic(() => Promise.resolve(LoginCallback), {
  ssr: false,
});
