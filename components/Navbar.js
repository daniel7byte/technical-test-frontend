import Image from 'next/image'
import { ShoppingCart } from 'react-feather'

export default function Navbar () {
  return (
    <>
      <div className={"container-fluid bg-red-wine"}>
        <div className={"container"}>
          <p className={"my-0 py-2 h5 text-white text-center"}>HOT SALE - 3% EN SANDALIAS</p>
        </div>
      </div>
      <div className={"container-fluid  bg-gray"}>
        <div className={"container"}>
          <div className={"row text-end"}>
            <p className='my-1 text-dark-gray'>
              <span className='fw-light pe-3'>DIRECTORIO DE TIENDAS</span>
              <span className='fw-light pe-3'>SERVICIO AL CLIENTE</span>
              <span className='fw-light pe-3'>MI CUENTA</span>
            </p>
          </div>
          <p className={"text-end text-gray my-0"}>
          </p>
        </div>
      </div>
      <div className={'content-fluid'}>
        <div className={'container'}>
          <div className={'row justify-content-between'}>
            <div className={'col-3'}>
              <Image src={'/logo.svg'} width={'200'} height={'100'} />
            </div>
            <div className={'col-3'}>
              <div className={'row'}>
                <input type="email" className="form-control  my-2 rounded-0" placeholder="Buscar" />
              </div>
              <div className={'row'}>
                <p className='text-end text-red-wine'>
                  ENVÍOS GRATIS PARA PEDIDOS SUPERIORES A $300.000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'content-fluid'}>
        <div className={'container'}>
          <div className={'row justify-content-between text-serif'}>
            <div className={'col-6'}>
              <span className={'my-0 py-2 pe-3'}>HOMBRE</span>
              <span className={'my-0 py-2 pe-3'}>MUJER</span>
              <span className={'my-0 py-2 pe-3'}>BLOG</span>
              <span className={'my-0 py-2 pe-3'}>HISTORIA</span>
              <span className={'my-0 py-2 pe-3'}>TIENDA</span>
            </div>
            <div className={'col-2'}>
              <span className={'my-0 py-2 pe-3'}><ShoppingCart size={15} className='me-3' />CARRITO</span>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  )
}
