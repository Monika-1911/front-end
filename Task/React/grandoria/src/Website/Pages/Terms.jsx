import React from 'react'
import Header from '../coman/Header'
import Footer from '../coman/Footer'

function Terms() {
  return (
    <div>
        <Header/>
       <main className="main">
  {/* Page Title */}
  <div className="page-title light-background">
    <div className="container d-lg-flex justify-content-between align-items-center">
      <h1 className="mb-2 mb-lg-0">Terms</h1>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Terms</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Terms Of Service Section */}
  <section id="terms-of-service" className="terms-of-service section">
    <div className="container" data-aos="fade-up">
      {/* Page Header */}
      <div className="tos-header text-center" data-aos="fade-up">
        <span className="last-updated">Last Updated: February 27, 2025</span>
        <h2>Terms of Service</h2>
        <p>Please read these terms of service carefully before using our services</p>
      </div>
      {/* Content */}
      <div className="tos-content" data-aos="fade-up" data-aos-delay={200}>
        {/* Agreement Section */}
        <div id="agreement" className="content-section">
          <h3>1. Agreement to Terms</h3>
          <p>By accessing our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.</p>
          <div className="info-box">
            <i className="bi bi-info-circle" />
            <p>These terms apply to all users, visitors, and others who access or use our services.</p>
          </div>
        </div>
        {/* Intellectual Property */}
        <div id="intellectual-property" className="content-section">
          <h3>2. Intellectual Property Rights</h3>
          <p>Our service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
          <ul className="list-items">
            <li>All content is our exclusive property</li>
            <li>You may not copy or modify the content</li>
            <li>Our trademarks may not be used without permission</li>
            <li>Content is for personal, non-commercial use only</li>
          </ul>
        </div>
        {/* User Accounts */}
        <div id="user-accounts" className="content-section">
          <h3>3. User Accounts</h3>
          <p>When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
          <div className="alert-box">
            <i className="bi bi-exclamation-triangle" />
            <div className="alert-content">
              <h5>Important Notice</h5>
              <p>You are responsible for safeguarding the password and for all activities that occur under your account.</p>
            </div>
          </div>
        </div>
        {/* Prohibited Activities */}
        <div id="prohibited" className="content-section">
          <h3>4. Prohibited Activities</h3>
          <p>You may not access or use the Service for any purpose other than that for which we make it available.</p>
          <div className="prohibited-list">
            <div className="prohibited-item">
              <i className="bi bi-x-circle" />
              <span>Systematic retrieval of data or content</span>
            </div>
            <div className="prohibited-item">
              <i className="bi bi-x-circle" />
              <span>Publishing malicious content</span>
            </div>
            <div className="prohibited-item">
              <i className="bi bi-x-circle" />
              <span>Engaging in unauthorized framing</span>
            </div>
            <div className="prohibited-item">
              <i className="bi bi-x-circle" />
              <span>Attempting to gain unauthorized access</span>
            </div>
          </div>
        </div>
        {/* Disclaimers */}
        <div id="disclaimer" className="content-section">
          <h3>5. Disclaimers</h3>
          <p>Your use of our service is at your sole risk. The service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied.</p>
          <div className="disclaimer-box">
            <p>We do not guarantee that:</p>
            <ul>
              <li>The service will meet your requirements</li>
              <li>The service will be uninterrupted or error-free</li>
              <li>Results from using the service will be accurate</li>
              <li>Any errors will be corrected</li>
            </ul>
          </div>
        </div>
        {/* Limitation of Liability */}
        <div id="limitation" className="content-section">
          <h3>6. Limitation of Liability</h3>
          <p>In no event shall we be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages arising out of or in connection with your use of the service.</p>
        </div>
        {/* Indemnification */}
        <div id="indemnification" className="content-section">
          <h3>7. Indemnification</h3>
          <p>You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities, damages, losses, and expenses arising out of your use of the service.</p>
        </div>
        {/* Termination */}
        <div id="termination" className="content-section">
          <h3>8. Termination</h3>
          <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        </div>
        {/* Governing Law */}
        <div id="governing-law" className="content-section">
          <h3>9. Governing Law</h3>
          <p>These Terms shall be governed by and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.</p>
        </div>
        {/* Changes */}
        <div id="changes" className="content-section">
          <h3>10. Changes to Terms</h3>
          <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.</p>
          <div className="notice-box">
            <i className="bi bi-bell" />
            <p>By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.</p>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="tos-contact" data-aos="fade-up" data-aos-delay={300}>
        <div className="contact-box">
          <div className="contact-icon">
            <i className="bi bi-envelope" />
          </div>
          <div className="contact-content">
            <h4>Questions About Terms?</h4>
            <p>If you have any questions about these Terms, please contact us.</p>
            <a href="#" className="contact-link">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Terms Of Service Section */}
</main>
<Footer/>

    </div>
  )
}

export default Terms;