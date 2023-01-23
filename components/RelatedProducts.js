import Head from 'next/head'
import Image from 'next/image'

export default function RelatedProducts () {
  return (
    <>
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
            <div className={'col-3'}>
              <div className={'row'}>
                <div className={'col-12'}>
                  <Image className='' src={'/img/11.jpg'} width={'200'} height={'200'} />
                </div>
              </div>
              <div className={'row justify-content-start'}>
                <div className={'col-4'}>
                  <Image className='' src={'/img/1.jpg'} width={'50'} height={'50'} />
                </div>
              </div>
              <div className={'row'}>
                <p className='text-center fw-semibold'>
                  ZAPATILLA HOMBRE PELIKAN
                </p>
              </div>
              <div className={'row'}>
                <p className='text-center text-red-wine'>
                  $80.000
                </p>
              </div>
              <button type="button" className="px-5 btn btn-primary bg-red-wine rounded-0 border border-warning-subtle">AÑADIR AL CARRITO</button>
            </div>
            <div className={'col-3'}>
              <div className={'row'}>
                <div className={'col-12'}>
                  <Image className='' src={'/img/6.jpg'} width={'200'} height={'200'} />
                </div>
              </div>
              <div className={'row justify-content-start'}>
                <div className={'col-4'}>
                  <Image className='' src={'/img/1.jpg'} width={'50'} height={'50'} />
                </div>
                <div className={'col-4'}>
                  <Image className='' src={'/img/2.jpg'} width={'50'} height={'50'} />
                </div>
              </div>
              <div className={'row'}>
                <p className='text-center fw-semibold'>
                  ZAPATILLA HOMBRE PELIKAN
                </p>
              </div>
              <div className={'row'}>
                <p className='text-center text-red-wine'>
                  $80.000
                </p>
              </div>
              <button type="button" className="px-5 btn btn-primary bg-red-wine rounded-0 border border-warning-subtle">AÑADIR AL CARRITO</button>
            </div>
            <div className={'col-3'}>
              <div className={'row'}>
                <div className={'col-12'}>
                  <Image className='' src={'/img/3.jpg'} width={'200'} height={'200'} />
                </div>
              </div>
              <div className={'row justify-content-start'}>
                <div className={'col-4'}>
                  <Image className='' src={'/img/7.jpg'} width={'50'} height={'50'} />
                </div>
                <div className={'col-4'}>
                  <Image className='' src={'/img/7.jpg'} width={'50'} height={'50'} />
                </div>
                <div className={'col-4'}>
                  <Image className='' src={'/img/7.jpg'} width={'50'} height={'50'} />
                </div>
              </div>
              <div className={'row'}>
                <p className='text-center fw-semibold'>
                  ZAPATILLA HOMBRE PELIKAN
                </p>
              </div>
              <div className={'row'}>
                <p className='text-center text-red-wine'>
                  $80.000
                </p>
              </div>
              <button type="button" className="px-5 btn btn-primary bg-red-wine rounded-0 border border-warning-subtle">AÑADIR AL CARRITO</button>
            </div>
            <div className={'col-3'}>
              <div className={'row'}>
                <div className={'col-12'}>
                  <Image className='' src={'/img/1.jpg'} width={'200'} height={'200'} />
                </div>
              </div>
              <div className={'row justify-content-start'}>
                <div className={'col-4'}>
                  <Image className='' src={'/img/7.jpg'} width={'50'} height={'50'} />
                </div>
                <div className={'col-4'}>
                  <Image className='' src={'/img/7.jpg'} width={'50'} height={'50'} />
                </div>
              </div>
              <div className={'row'}>
                <p className='text-center fw-semibold'>
                  ZAPATILLA HOMBRE PELIKAN
                </p>
              </div>
              <div className={'row'}>
                <p className='text-center text-red-wine'>
                  $80.000
                </p>
              </div>
              <button type="button" className="px-5 btn btn-primary bg-red-wine rounded-0 border border-warning-subtle">AÑADIR AL CARRITO</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
