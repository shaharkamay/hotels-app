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
    this.state = { theme: 'theme-auto' };
  }
  themeChange = (theme) => {
    localStorage.setItem('theme', theme);
    this.setState({ theme });
  }
  render() {
    return (
      <ThemeContext.Provider value={localStorage.getItem('theme') || 'theme-auto'}>
        <div className={this.state.theme}>
              <BrowserRouter>
                <Header themeChange={this.themeChange} />
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
      </ThemeContext.Provider>
    );
  }
}

export default App;

