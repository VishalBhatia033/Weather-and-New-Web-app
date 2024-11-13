import { useEffect, useState } from "react";

import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Loder from "./components/Loder";
import FiveDayForcast from "./components/FiveDayForcast";
import AirPolution from "./components/AirPolution";
import PollutionTable from "./components/PollutionTable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import News from "./components/News";
import Info from "./components/Info";


function App() {
  const [currentData, setCurrentData] = useState(null);
  const [fiveDayData, setFiveDayData] = useState(null);
  const [polutionData, setPollutionData] = useState(null);
  const [news, setNews] = useState(null);
  const api_key = "c827b9aca137574cc26dbff3c01927d9";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async function (position) {
      const lat = await position.coords.latitude;
      const lon = await position.coords.longitude;
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=API_KEY`
        );
        setCurrentData(await response.json());

        const response2 = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=6cf281a70781c3706ca21a7e50c61193`
        );
        setFiveDayData(await response2.json());

        const response4 = await fetch(
          `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${api_key}`
        );
        setNews(await response4.json());
        const response3 = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&units=metric&start=1723096876&end=1723096876&appid=6cf281a70781c3706ca21a7e50c61193`
        );
        setPollutionData(await response3.json());
      } catch (e) {
        console.log(e.message);
      }
    });
  }, []);
  return (
    <>
      {polutionData ? <Header data={currentData} /> : null}
      <div className="h-full w-full flex flex-col lg:flex-row justify-around  my-6 ">
        {polutionData ? (
          <>
            <div className="w-12/12 lg:w-7/12 flex flex-col items-center">
              <h1 className="font-semibold mb-4 text-2xl text-slate-600">
                Current Weather
              </h1>
              <CurrentWeather currentData={currentData} />
              <h2 className="font-semibold mt-6 text-2xl text-slate-600">
                5 Days 3 Hour Forcast
              </h2>
              <FiveDayForcast list={fiveDayData.list} />
              <Info text={currentData.weather[0].description}/>
            </div>
            <div className="w-12/12 lg:w-4/12 mt-6 lg:mt-0 flex flex-col">
              <AirPolution list={polutionData.list[0].components} />
              <PollutionTable />
              <News newsData={news.articles}/>
            </div>
          </>
        ) : (
          <Loder />
        )}
      </div>
      {polutionData ? <Footer data={currentData} /> : null}
    </>
  );
}

export default App;
