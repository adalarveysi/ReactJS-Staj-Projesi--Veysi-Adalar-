import Province from "./components/Province";
import Trip from "./components/Trip";
import { WeatherContext, WeatherProvider } from "./contexts/WeatherContext";

function App() {
  return (
    <>
      <WeatherProvider >
        <Province />
        <Trip/>
      </WeatherProvider>
    </>
  );
}

export default App;
