import Link from "next/link"
import { Nav, Navbar } from "reactstrap"

const Header = () => {
  return (
    <Navbar container='md' color="dark" dark>
    <Link href='/' passHref>
      <p className="navbar-brand">
        Home
      </p>
    </Link> 
    <Nav className="flex-row" navbar >
      <Link href="/products" passHref>
        <p className="nav-link me-2">
          Products
        </p>
      </Link>
      <Link href="/cart" passHref>
        <p className="nav-link">
          Cart
        </p>
      </Link>
    </Nav>  
  </Navbar>
  )
  
}

export default Header