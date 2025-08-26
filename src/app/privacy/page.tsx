export default function PrivacyPolicy() {
  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center">
            <h1 style={{ marginBottom: '1.5rem', color: 'white' }}>
              Privacy Policy
            </h1>
            <p className="text-xl" style={{ maxWidth: '48rem', margin: '0 auto', color: 'rgba(255, 255, 255, 0.8)' }}>
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '6rem', backgroundColor: 'var(--background)' }}>
        <div className="container" style={{ maxWidth: '48rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Introduction */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Introduction</h2>
              <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                Pristine36 (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our website or services.
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not 
                access the site or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Information We Collect</h2>
              <h3 style={{ marginBottom: '0.75rem', color: 'rgba(255, 255, 255, 0.9)' }}>Personal Information</h3>
              <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                We may collect personal information that you provide to us, including but not limited to:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Name and contact information (email address, phone number, postal address)</li>
                <li style={{ marginBottom: '0.5rem' }}>Business information (company name, job title)</li>
                <li style={{ marginBottom: '0.5rem' }}>Service requirements and preferences</li>
                <li style={{ marginBottom: '0.5rem' }}>Payment and billing information</li>
                <li style={{ marginBottom: '0.5rem' }}>Communications and correspondence with us</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>How We Use Your Information</h2>
              <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                We use the information we collect for various purposes, including:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ marginBottom: '0.5rem' }}>To provide, maintain, and improve our services</li>
                <li style={{ marginBottom: '0.5rem' }}>To process your service requests and manage bookings</li>
                <li style={{ marginBottom: '0.5rem' }}>To communicate with you about services, updates, and promotions</li>
                <li style={{ marginBottom: '0.5rem' }}>To process payments and prevent fraudulent transactions</li>
                <li style={{ marginBottom: '0.5rem' }}>To comply with legal obligations and protect our rights</li>
                <li style={{ marginBottom: '0.5rem' }}>To improve customer service and support</li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Disclosure of Your Information</h2>
              <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                We may share your information in certain situations, including:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ marginBottom: '0.5rem' }}>With service providers who assist in our operations</li>
                <li style={{ marginBottom: '0.5rem' }}>With subcontractors who provide specialist cleaning services</li>
                <li style={{ marginBottom: '0.5rem' }}>To comply with legal obligations or court orders</li>
                <li style={{ marginBottom: '0.5rem' }}>To protect our rights, property, or safety</li>
                <li style={{ marginBottom: '0.5rem' }}>With your consent or at your direction</li>
              </ul>
            </div>

            {/* Communications */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Communications</h2>
              <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                All external communication with Pristine36 is conducted through enquiries@pristine36.co.uk. We maintain 
                strict communication policies to ensure consistency and security:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ marginBottom: '0.5rem' }}>All enquiries and bookings are routed to Hayat.S@pristine36.co.uk</li>
                <li style={{ marginBottom: '0.5rem' }}>Calendar booking notifications are processed via webhook to ensure you receive confirmations</li>
                <li style={{ marginBottom: '0.5rem' }}>For mould enquiries, you may submit photos through our contact form - these are used solely for assessment purposes</li>
                <li style={{ marginBottom: '0.5rem' }}>We delete photo attachments after quote decisions unless required for service delivery or by law</li>
                <li style={{ marginBottom: '0.5rem' }}>No client names or personal details are displayed publicly on our website - all testimonials are anonymised</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Data Security</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                We implement appropriate technical and organisational measures to protect your personal information against 
                unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the 
                internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Data Retention</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                We retain your personal information only for as long as necessary to fulfil the purposes for which it was 
                collected, including to satisfy any legal, accounting, or reporting requirements. When we no longer need 
                to retain your personal information, we will securely delete or anonymise it.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Your Rights</h2>
              <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                Under UK data protection laws, you have certain rights regarding your personal information:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ marginBottom: '0.5rem' }}>The right to access your personal information</li>
                <li style={{ marginBottom: '0.5rem' }}>The right to rectify inaccurate information</li>
                <li style={{ marginBottom: '0.5rem' }}>The right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
                <li style={{ marginBottom: '0.5rem' }}>The right to restrict processing</li>
                <li style={{ marginBottom: '0.5rem' }}>The right to data portability</li>
                <li style={{ marginBottom: '0.5rem' }}>The right to object to processing</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Cookies</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Our website uses cookies to enhance your experience. Cookies are small text files placed on your device 
                that help us analyse web traffic and improve our website. You can set your browser to refuse cookies, 
                but this may limit your ability to use some features of our website.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Contact Us</h2>
              <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div style={{ backgroundColor: 'var(--card-bg)', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--card-border)' }}>
                <p className="font-semibold" style={{ marginBottom: '0.5rem', color: 'white' }}>Pristine 36 Limited</p>
                <p style={{ marginBottom: '0.25rem', color: 'rgba(255, 255, 255, 0.8)' }}>Email: Hayat.S@pristine36.co.uk</p>
                <p style={{ marginBottom: '0.25rem', color: 'rgba(255, 255, 255, 0.8)' }}>Phone: 07860249950 / 07932020944</p>
                <p style={{ marginBottom: '0.25rem', color: 'rgba(255, 255, 255, 0.8)' }}>Company Number: 16213530</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Registered Address: 124 City Road, London, United Kingdom, EC1V 2NX</p>
              </div>
            </div>

            {/* Updates */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Changes to This Privacy Policy</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date. You are advised to review this Privacy
                Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
