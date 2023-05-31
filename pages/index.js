import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
export default function index() {
  return (
    <>
    <Head>
      <title>Home Comin</title>
    </Head>

    <div className='text-center'>
      <Image src="/NONO.jpg" className="rounded mx-auto d-block" alt="NONO" width={700} height={500} />
    </div>

    <div className='text-center'><button type="button" class="btn btn-info">Info</button></div>
    </>
  )
}

