import React from 'react'
import Header from '../coman/Header';
import Footer from '../Coman/Footer';

function Starterpage() {
  return (
    <div>
<Header/>
         <main className="main">
  {/* Page Title */}
  <div className="page-title light-background">
    <div className="container d-lg-flex justify-content-between align-items-center">
      <h1 className="mb-2 mb-lg-0">Starter Page</h1>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Starter Page</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Starter Section Section */}
  <section id="starter-section" className="starter-section section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <span className="description-title">Starter Section</span>
      <h2>Starter Section</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>{/* End Section Title */}
    <div className="container" data-aos="fade-up">
      <p>Use this page as a starter for your own custom pages.</p>
    </div>
  </section>{/* /Starter Section Section */}
</main>
<Footer/>
    </div>
  )
}

export default Starterpage;