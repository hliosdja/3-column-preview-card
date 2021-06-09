import Column from './components/column';
import "./styles/main.css";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Column class="sedans" carImage="/images/icon-sedans.svg" carName="Sedans" description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."/>
        <Column class="suvs" carImage="/images/icon-suvs.svg" carName="SUVs" description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."/>
        <Column class="luxury" carImage="/images/icon-luxury.svg"  carName="Luxury" description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."/>
      </div>
    </div>
  );
}

export default App;
