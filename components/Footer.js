import Head from 'next/head'
import Image from 'next/image'

export default function Footer () {
  return (
    <>
      <div className={'content-fluid bg-gray py-3'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className='col-12'>
              <p className={'text-center h4 text-serif text-dark-gray'}>
                @HUSHPUPPIESCO
              </p>
              <div className='row justify-content-center'>
                <div className='col-1'>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className={'row justify-content-center'}>
            <div className={'col-1'}>
              Facebook
              {/* <Image src={'/logo.svg'} width={'100'} height={'100'} /> */}
            </div>
            <div className={'col-1'}>
              Instagram
              {/* <Image src={'/logo.svg'} width={'100'} height={'100'} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className={'content-fluid py-3'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-3'}>
              <p className={'fw-semibold'}>
                SERVICIO AL CLIENTE
              </p>
              <p>CONTACTENOS</p>
              <p>CAMBIOS Y DEVOLUCIONES</p>
              <p>POLÍTICAS DE LA TIENDA</p>
              <p>POLÍTICAS DE DATOS</p>
            </div>
            <div className={'col-3'}>
              <p className={'fw-semibold'}>
                MI CUENTA
              </p>
              <p>MIS PEDIDOS</p>
              <p>MIS DEVOLUCIONES</p>
            </div>
            <div className={'col-3'}>
              <p className={'fw-semibold'}>
                RECURSOS
              </p>
              <p>TIENDA</p>
              <p>DEVOLUCIONES</p>
            </div>
            <div className={'col-3'}>
              <p className={'fw-semibold'}>
                NEWSLETTER
              </p>
              <p>Registrate para ser el primero en recibir nuestras oticias</p>
              <input type="email" className="form-control  my-2 rounded-0" placeholder="E-MAIL" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={'content-fluid py-3'}>
        <div className={'container'}>
          <div className={'row'}>
            Logos promocionales
          </div>
        </div>
      </div>
    </>
  )
}
