import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/Navbar'

export default function Home () {
  return (
    <>
      <Head>
        <title>Hush Puppies</title>
        <meta name="description" content="Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1 className={''}>Hush Puppies</h1>
      </main>
    </>
  )
}
