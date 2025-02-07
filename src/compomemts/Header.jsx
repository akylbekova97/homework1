import "./Header.css"

function Header() {
    
    return (
        <header className='header'>
            <img className="logo" src="https://omnifood.dev/img/omnifood-logo.png" alt="iconcaOmniFood" />
            <div>
                <p>How it works</p>
                <p>Meals</p>
                <p>Testimonials</p>
                <p>Pricing</p>
                <button onClick={() => alert('Try for free')}>Try for free</button>
            </div>
        </header>
    )
}
export default Header