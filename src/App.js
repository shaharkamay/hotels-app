import HotelsGallery from "./core/components/HotelsGallery";
import HotelPage from "./core/components/HotelPage";
import CallNowButton from "./core/components/CallNowButton";
import hotelsData from "./static/hotels";

function App() {
  return (
    <div>
      <HotelsGallery hotelsData={hotelsData} />
      <HotelPage />
      <CallNowButton />
    </div>
  );
}

export default App;
