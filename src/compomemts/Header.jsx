import "./Header.css"

function Header() {
    
    return (
    <div>
        <header className='header'>
            <img className="logo" src="https://omnifood.dev/img/omnifood-logo.png" alt="iconcaOmniFood" />
            <div>
                <p>How it works</p>
                <p>Meals</p>
                <p>Testimonials</p>
                <p>Pricing</p>
                <button className="btn" onClick={() => alert('Try for free')}>Try for free</button>
            </div>
        </header>
        <main>
            <section>
                <div>
                    <h3>A healthy meal delivered to your door, every single day</h3>
                    <p>The smart 365-days-per-year food subscription that will make you 
                        eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
                    <button className="btn">Start eating well</button>
                    <button style={{backgroundColor: '#fff', color:' rgb(85, 85, 85)'}} className="btn">Learn more</button>
                </div>
                <img src="https://omnifood.dev/img/hero.webp" alt="omniFoof-foto"/>
            </section>
        </main>
    </div>
    )
}
export default Header