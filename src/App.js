import Column from './components/column';
import "./styles/main.css";

function App() {
  return (
    <div className="container">
      <Column carName="Sedans" description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."/>
      <Column carName="SUVs" description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."/>
      <Column carName="Luxury" description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."/>

    </div>
  );
}

export default App;
