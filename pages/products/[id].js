import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

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
      <main className={'container'}>
        <div className={'row'}>
          <p>
            HUSHPUPPIES / CALZADO / ZAPATILLA HOMBRE PELIKAN
          </p>
        </div>
        <div className={'row'}>
          <div className={'col-6'}>
            <Image src={'/img/7.jpg'} width={'500'} height={'500'} />
          </div>
          <div className={'col-6'}>
            <h1 className='h3'>ZAPATILLA HOMBRE PELIKAN</h1>
            <p className='my-1'>$90.000</p>
            <p className='my-1'>Cod. de producto zap-005</p>
            <p className='my-1'>Color</p>
            <p className='my-1'>Talla</p>
            <p className='my-1'>GUÍA DE TALLAS</p>
            <button type="button" class="btn btn-primary bg-tierra">AÑADIR AL CARRITO</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
