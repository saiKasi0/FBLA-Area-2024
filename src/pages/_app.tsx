import { type AppType } from "next/app";
import Head from "next/head";
import Link from "next/link";
import "~/styles/globals.css";
import { api } from "~/utils/api";
import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
    <ClerkProvider {...pageProps} >
        <Head>
          <title>Apply Saivest </title>
          <meta name="description" content="💡" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* navbar */}
        <div className="p-4">
        <nav className="bg-white dark:bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600" >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">APPLY_SAITECH.</span>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="text-white bg-stone-900 hover:bg-stone-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-stone-700 dark:hover:bg-stone-800 dark:focus:ring-blue-800">Get started</button>
              <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="/favicon.ico" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 px-3 text-white bg-black rounded md:bg-transparent md:text-black md:hover:underline md:p-0 md:dark:text-black" aria-current="page">Why Us</Link>
              </li>
              <li>
                <Link href="/jobs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:underline md:p-0  dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700">Potential Jobs</Link>
              </li>
              <li>
                <Link href="/apply" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:underline md:p-0 md:dark:hover:text-black dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Application</Link>
              </li>

            </ul>
          </div>
          </div>
        </nav>
        </div>
        <Component {...pageProps} />
        <footer className="flex footer footer-center p-4 bg-base-300 bg-stone-700 text-white text-base-content">

            <p className="flex justify-center">Copyright © 2024 - All right reserved by Saivest</p>
        </footer>
      </ClerkProvider>

      
    </>
  );
};

export default api.withTRPC(MyApp);

// add bottom bar (navbar but on bottom)
// make sure can also go to to /apply from /openings