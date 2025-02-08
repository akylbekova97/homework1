import Logo from "../logo/Logo"
import "./Header.css"
import Button from "../ui/Button"

function Header() {
    return (
        <header className='header'>
            <Logo className="logo"/>
            <div>
                <p>How it works</p>
                <p>Meals</p>
                <p>Testimonials</p>
                <p>Pricing</p>
                <Button className="button" onClick={() => alert('Try for free')}>Try for free</Button>
            </div>
        </header>
    )
}

export default Header 