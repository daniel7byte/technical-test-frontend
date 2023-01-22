import Head from 'next/head'
import Image from 'next/image'

export default function Navbar () {
  return (
    <>
      <div className={"bg-tierra"}>
        <div className={"container"}>
          <p className={"py-2 h5 text-white text-center"}>HOT SALE - 3% EN SANDALIAS</p>
        </div>
      </div>
      <div className={"bg-gris"}>
        <div className={"container position-relative"}>
          <span className={"text-end text-gray"}>Hola, Iniciar sesión</span>
        </div>
      </div>
    </>
  )
}
