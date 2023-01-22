import Head from 'next/head'
import Image from 'next/image'

export default function Footer () {
  return (
    <>
      <div className={'content-fluid bg-gris py-3'}>
        <div className={'container'}>
          <div className={'row'}>
            <p className={'text-center h4'}>
              @HUSHPUPPIESCO
            </p>
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
    </>
  )
}
