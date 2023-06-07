import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
export default function about() {
  return (
    <>
    <Head>
      <title>Home Comin</title>
    </Head>

    <div>
    <header>
  <nav className="navbar navbar-expand-lg bg-#e3f2fd;">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href=".">หน้าแรก</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link " href="about">เกี่ยวกับเรา</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            บริการของเรา
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link className="nav-link " href="Contact">ช่องทางการติดต่อ</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </header>
    </div>

<main>
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={2000}>
      <img src="/LOL(2).jpg" className="d-block w-100" alt="LOL(2)" />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>

    <div className="carousel-item" data-bs-interval={2000}>
      <img src="/LOL(1).jpg" className="d-block w-100" alt="LOL(1)" />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>

    <div className="carousel-item">
      <img src="/LOL(5).jpg" className="d-block w-100" alt="LOL(5)" />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<br/>

<div className="container marketing">
  <div className="row">
    <div className="col-lg-4">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <h2 className="fw-normal">Phoenix Next</h2>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>
    <div className="col-lg-4">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <h2 className="fw-normal">Luckpim</h2>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>
    <div className="col-lg-4">
      <svg className="bd-placeholder-img rounded-circle" width={140} height={140} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg>
      <h2 className="fw-normal">first page pro</h2>
      <p><a className="btn btn-secondary" href="#">View details »</a></p>
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Phoenix Next<span className="text-body-secondary"></span></h2>
      <p className="lead">ฟีนิกซ์ (อังกฤษ: Phoenix) เป็นสำนักพิมพ์ในประเทศไทยในเครือบริษัทคาโดคาวะ อมรินทร์จำกัด ก่อตั้งเมื่อปี พ.ศ. 2559 ตีพิมพ์และจัดจำหน่ายไลต์โนเวลและมังงะจากสำนักพิมพ์ในประเทศญี่ปุ่นในรูปแบบแปลเป็นฉบับภาษาไทยที่ถูกลิขสิทธิ์</p>
    </div>
    <div className="col-md-5">
      <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading fw-normal lh-1">Luckpim<span className="text-body-secondary"></span></h2>
      <p className="lead">รักพิมพ์ หรือ บริษัทรักพิมพ์ พับลิชชิ่ง จำกัด เป็นสำนักพิมพ์ไทย ที่ตีพิมพ์และจัดจำหน่ายหนังสือการ์ตูนญี่ปุ่น ในรูปแบบแปลเป็นฉบับภาษาไทยที่ถูกลิขสิทธิ์จากสำนักพิมพ์ญี่ปุ่นและเป็นสำนักพิมพ์แรกที่ใช้กระดาษถนอมสายตาพิมพ์เป็นหนังสือการ์ตูน</p>
    </div>
    <div className="col-md-5 order-md-1">
      <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg>
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">first page pro<span className="text-body-secondary">.</span></h2>
      <p className="lead">FirstPageProสำนักพิมพ์นิยายการ์ตูน,จัดจำหน่ายหนังสือการ์ตูนนิยายราคาพิเศษ,อดัมแห่งสนธยาการตูน,อดัมแห่งสนธยานิยาย,ผู้กล้าโล่ผงาด,โรงเรียนคุกนรก,ไซโคเมะ.</p>
    </div>
    <div className="col-md-5">
      <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="/Phoenix Next.png" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)" /><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em"></text></svg>
    </div>
  </div>
  <hr className="featurette-divider" />
</div>
</main>

<footer className="container">
<div>
  <div className="b-example-divider" />
  <div className="container">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</div>
</footer>
    </>
  )
}