import React from "react";
import HotelsGallery from "./core/components/HotelsGallery";
import HotelPage from "./core/components/HotelPage";
import hotelsData from "./static/hotels";
import ThemeContext from "./Context/ThemeContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./core/header/Header";
import kebabCase from "./helpers/kebab-case";


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          return (
            <div className={context}>
              <BrowserRouter>
                <Header />
                <Routes>
                  {/* Main Route */}
                  <Route path="/hotels-app" element={[<HotelsGallery hotelsData={hotelsData} />]} />

                  {/* Hotels Routes */}
                  {hotelsData.map((hotelObj, index) => {
                    return <Route path={`/hotel/${encodeURI(kebabCase(hotelObj.name))}`} element={[<HotelPage hotel={hotelObj} />]}  />
                  })}
                </Routes>
                
              </BrowserRouter>
            </div>
          )
        }}
      </ThemeContext.Consumer>
        
    );
  }
}

export default App;

