import Link from "next/link"

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Get in touch with Angelica for any inquiries or to schedule an appointment.</p>
      <div className="contact-info">
        <p>Email: shallow.nails@protonmail.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Location: D(M)V Gaithersburg/Travel Tech </p>
      </div>
      <div className="social-media">
        <h2>Follow me on Instagram</h2>
        <Link
          href="https://www.instagram.com/shallow.nails/"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram-link"
        >
          @shallow.nails
        </Link>
      </div>
    </div>
  )
}

