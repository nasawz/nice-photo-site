import Head from "next/head";

export function LandingPageGlobalStyles() {
  return (
    <Head>
      <style>
        {`
          .dark footer,
          .dark body {
            background-color: black !important;
          }

          .dark .nextra-nav-container .nextra-nav-container-blur  {
            background-color: rgba(0,0,0,.5) !important;
          }

          body {
            min-height: 100vh;
          }

          .nx-mx-auto {
            min-height:100%;
          }
    `}
      </style>
    </Head>
  );
}
