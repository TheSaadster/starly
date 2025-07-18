import { useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Be the first to try Starly ⭐</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>

      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <iframe
          data-tally-src="https://tally.so/r/mK25Q8"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Be the first to try Starly ⭐"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            border: 0,
          }}
        ></iframe>
      </div>
    </>
  );
}
