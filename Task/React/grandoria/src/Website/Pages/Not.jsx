import React from 'react'
import Header from '../coman/Header'
import Footer from '../coman/Footer'

function Not() {
  return (
    <div>
        <Header/>
        <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">404</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">404</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Error 404 Section */}
                <section id="error-404" className="error-404 section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="text-center">
                            <div className="error-icon mb-4" data-aos="zoom-in" data-aos-delay={200}>
                                <i className="bi bi-exclamation-circle" />
                            </div>
                            <h1 className="error-code mb-4" data-aos="fade-up" data-aos-delay={300}>404</h1>
                            <h2 className="error-title mb-3" data-aos="fade-up" data-aos-delay={400}>Oops! Page Not Found</h2>
                            <p className="error-text mb-4" data-aos="fade-up" data-aos-delay={500}>
                                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                            </p>
                            <div className="search-box mb-4" data-aos="fade-up" data-aos-delay={600}>
                                <form action="#" className="search-form">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search for pages..." aria-label="Search" />
                                        <button className="btn search-btn" type="submit">
                                            <i className="bi bi-search" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="error-action" data-aos="fade-up" data-aos-delay={700}>
                                <a href="/" className="btn btn-primary">Back to Home</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>

    </div>
  )
}

export default Not;