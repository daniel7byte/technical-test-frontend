import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import RelatedProduct from '../../components/RelatedProduct'
import RecommendedProducts from '../../components/RecommendedProducts'

// JSON
import DataProducts from '../../json/products'

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
          <p className='text-black-50'>
            HUSHPUPPIES / CALZADO / ZAPATILLA HOMBRE PELIKAN
          </p>
        </div>
        <div className={'row'}>
          <div className={'col-6'}>
            <Image src={'/img/7.jpg'} width={'500'} height={'400'} />
            <hr />
            <div className={'row justify-content-between'}>
              <div className={'col-2'}>
                <Image src={'/img/6.jpg'} width={'70'} height={'70'} />
              </div>
              <div className={'col-2'}>
                <Image src={'/img/7.jpg'} width={'70'} height={'70'} />
              </div>
              <div className={'col-2'}>
                <Image src={'/img/8.jpg'} width={'70'} height={'70'} />
              </div>
              <div className={'col-2'}>
                <Image src={'/img/9.jpg'} width={'70'} height={'70'} />
              </div>
              <div className={'col-2'}>
                <Image src={'/img/10.jpg'} width={'70'} height={'70'} />
              </div>
            </div>
          </div>
          <div className={'col-6'}>
            <h1 className='h3 text-serif text-dark-gray'>ZAPATILLA HOMBRE PELIKAN</h1>
            <p className='my-1 text-red-wine text-serif'>$90.000</p>
            <p className='my-1 text-black-50'>Cod. de producto zap-005</p>
            <p className='my-1 mt-3'>COLOR</p>
            <div className='row'>
              <div className='col-2'>
                <div className={'border border-dark-subtle py-2 px-2'}>
                  <Image src={'/img/7.jpg'} width={'50'} height={'50'} />
                </div>
              </div>
            </div>
            <p className='my-1 mt-3'>TALLA</p>
            <div className='row'>
              <div className='col-2'>
                <div className='border border-dark-subtle my-1 py-3 text-center bg-gray'>5</div>
              </div>
              <div className='col-2'>
                <div className='border border-dark-subtle my-1 py-3 text-center bg-gray'>5.5</div>
              </div>
              <div className='col-2'>
                <div className='border border-dark-subtle my-1 py-3 text-center bg-gray'>6</div>
              </div>
              <div className='col-2'>
                <div className='border border-dark-subtle my-1 py-3 text-center bg-gray'>6.5</div>
              </div>
              <div className='col-2'>
                <div className='border border-dark-subtle my-1 py-3 text-center bg-gray'>7</div>
              </div>
            </div>
            <div className='row'>
              <div className='col-2'>
                <div className='border border-dark-subtle my-1 py-3 text-center bg-gray'>7.5</div>
              </div>
              <div className='col-2'>
                <div className='border border-dark-subtle my-1 py-3 text-center bg-gray'>8</div>
              </div>
              <div className='col-2'>
                <div className='border border-dark-subtle my-1 py-3 text-center bg-gray'>8.5</div>
              </div>
              <div className='col-2'>
                <div className='border border-dark-subtle my-1 py-3 text-center bg-gray'>9</div>
              </div>
              <div className='col-2'>
                <div className='border border-dark-subtle my-1 py-3 text-center bg-gray'>9.5</div>
              </div>
            </div>
            <p className='my-1 mt-3 text-decoration-underline'>GUÍA DE TALLAS</p>
            <button type="button" className="px-5 py-2 mt-3 btn text-white bg-red-wine rounded-0 border border-warning-subtle">
              AÑADIR AL CARRITO
            </button>
          </div>
        </div>
        <div className={'row'}>
          <div className={'col-12'}>
            <p className='text-serif text-dark-gray'>DETALLES DEL PRODUCTO</p>
            <hr />
            <p className='text-black-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sem est. Vivamus vitae felis non libero imperdiet pharetra tristique eu diam. Aliquam erat volutpat. Morbi iaculis augue tellus, eu molestie tortor lacinia nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu sodales sapien. Vestibulum fermentum feugiat quam ac lacinia. Vestibulum et vestibulum neque. Etiam consequat, augue in vulputate hendrerit, sem odio sollicitudin odio, sit amet aliquam felis massa nec magna. Nam gravida augue sem, sit amet egestas diam porttitor vel. Cras condimentum congue est, sed congue felis faucibus id. Cras rutrum, nibh nec ornare aliquet, nisl sapien semper urna, ac viverra velit tellus vel odio. Fusce sagittis massa ultricies libero interdum, malesuada tristique ante bibendum. Donec ligula magna, varius quis lacinia sit amet, vulputate in mauris. Ut placerat arcu ante. Nullam id efficitur nibh.</p>
          </div>
        </div>
        <div className={'row mt-4'}>
          <div className={'col-12'}>
            <p className='text-serif text-dark-gray'>TECNOLOGÍAS</p>
            <hr />
            <p className='text-black-50'>Curabitur rutrum, quam a rutrum blandit, nisl est maximus nisl, a mattis mauris tellus id lorem. Phasellus tempus felis vel quam interdum tincidunt. Donec nec nisl pharetra, tincidunt sem a, maximus tortor. Donec ac dui sagittis, imperdiet lacus vel, vestibulum magna. Suspendisse consequat mi leo, at consectetur diam cursus vel.</p>
          </div>
        </div>
        <div className={'content-fluid mt-4'}>
          <div className={'container'}>
            <div className={'row bg-gray py-1'}>
              <div className='col-12'>
                <p className='my-0 fw-semibold text-serif text-dark-gray'>
                  COMPLETA TU LOOK
                </p>
              </div>
            </div>
            <div className={'row justify-content-between my-2 mb-5'}>
              {
                DataProducts.products.map((product, index) => {
                  return <RelatedProduct product={product} key={index} />
                })
              }
            </div>
          </div>
        </div>
        <RecommendedProducts />
      </main>
      <Footer />
    </>
  )
}
