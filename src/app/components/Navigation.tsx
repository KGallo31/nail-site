import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/booking">Booking</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation

