import './Main.css'
import Button from '../ui/Button'

function Main() {
    return (
    <main>
        <div>
            <h3>A healthy meal delivered to your door, every single day</h3>
            <p>The smart 365-days-per-year food subscription that will make you 
                eat healthy again. Tailored to your personal tastes and nutritional needs.</p>
            <Button className="button" onClick={() => alert('Start eating well')}>Start eating well</Button>
            <Button className="buttonWrite" onClick={() => alert('Learn more')}>Learn more</Button>
        </div>
        <img src="https://omnifood.dev/img/hero.webp" alt="omniFoof-foto"/>           
    </main>
    )
}

export default Main