import Image from 'next/image'

function currencyFormat (num) {
  return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}

export default function RelatedProduct (props) {
  const product = props.product
  return (
    <>
      <div className={'col-3'}>
        <div className={'row'}>
          <div className={'col-12'}>
            <Image className='' src={`/img/${product.foto}`} width={'200'} height={'200'} />
          </div>
        </div>
        <div className={'row justify-content-start'}>
          <div className={'col-4'}>
            <Image className='' src={'/img/1.jpg'} width={'50'} height={'50'} />
          </div>
        </div>
        <div className={'row'}>
          <p className='text-center fw-semibold'>
            {product.nombre}
          </p>
        </div>
        <div className={'row'}>
          <p className='text-center text-red-wine'>
            {currencyFormat(product.precio)}
          </p>
        </div>
        <div className={'row'}>
          <div className={'col-12 text-center'}>
            <button type="button" className="btn btn-primary px-5 bg-red-wine rounded-0 border border-warning-subtle">AÑADIR AL CARRITO</button>
          </div>
        </div>
      </div>
    </>
  )
}
