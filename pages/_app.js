import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component }) {
  return (
    <>
      <Head>
        <title>Portfolio - Aoun Rizvi</title>
        <meta name="description" content="Portfolio - Aoun Rizvi" />
        <link rel="icon" href="/profile-pic-2.jpg" />
      </Head>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* <Navbar /> */}
      <Component />
      {/* <Footer /> */}
    </>
  )
}

export default MyApp
