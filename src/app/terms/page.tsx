export default function TermsOfService() {
  return (
    <div style={{ width: '100%' }}>
      {/* Hero Section */}
      <section className="section section-dark" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container">
          <div className="text-center">
            <h1 style={{ marginBottom: '1.5rem', color: 'white' }}>
              Terms of Service
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
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Agreement to Terms</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you and Pristine36 regarding your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Services</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                We provide specialist cleaning services for commercial and residential clients, including kitchen extract cleaning (TR19), biohazard cleaning, grease management, washroom deep cleaning, mould remediation, and other specialist services as described on our website.
              </p>
            </div>

            {/* Bookings and Cancellations */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Bookings, Rescheduling and Cancellations</h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ marginBottom: '0.5rem' }}>All bookings are subject to availability and confirmation.</li>
                <li style={{ marginBottom: '0.5rem' }}>Please provide at least 24 hours&apos; notice for cancellations or rescheduling to avoid charges.</li>
                <li style={{ marginBottom: '0.5rem' }}>Emergency call-outs are subject to separate rates.</li>
              </ul>
            </div>

            {/* Pricing and Payment */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Pricing and Payment</h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ marginBottom: '0.5rem' }}>Prices are provided via quotation and may vary based on site inspection.</li>
                <li style={{ marginBottom: '0.5rem' }}>Invoices are due within 14 days unless otherwise agreed in writing.</li>
                <li style={{ marginBottom: '0.5rem' }}>We reserve the right to charge interest on overdue amounts at the statutory rate.</li>
              </ul>
            </div>

            {/* Site Access and Safety */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Site Access and Safety</h2>
              <ul style={{ listStyle: 'disc', paddingLeft: '2rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                <li style={{ marginBottom: '0.5rem' }}>You agree to provide safe access to the premises and disclose any hazards.</li>
                <li style={{ marginBottom: '0.5rem' }}>We follow relevant health and safety regulations and may refuse service if conditions are unsafe.</li>
              </ul>
            </div>

            {/* Insurance and Liability */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Insurance and Liability</h2>
              <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                We carry appropriate public liability and employer&apos;s liability insurance. Our total liability for any claim arising from our services shall not exceed the total fees paid for the service that gave rise to the claim, except where prohibited by law.
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                We are not liable for pre-existing damage, wear and tear, or issues arising from factors outside our control, including structural defects, poor ventilation, or improper maintenance.
              </p>
            </div>

            {/* Compliance and Certificates */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Compliance and Certificates</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Where applicable, we provide certificates of completion and compliance (e.g., TR19) after the service. Certificates are issued only once invoices are fully paid.
              </p>
            </div>

            {/* Subcontractors */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Subcontractors</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                We may engage vetted subcontractors to deliver certain specialist services. All subcontractors are required to adhere to our quality and safety standards.
              </p>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Intellectual Property</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                All content on our website, including text, graphics, logos, and images, is the property of Pristine36 or its licensors and is protected by applicable intellectual property laws.
              </p>
            </div>

            {/* Privacy */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Privacy</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Your use of our services is also governed by our Privacy Policy, which explains how we collect and use your data.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Governing Law</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 style={{ marginBottom: '1rem', color: 'white' }}>Contact Us</h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                If you have any questions about these Terms, please contact us at info@pristine36.com or +44 123 456 789.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

