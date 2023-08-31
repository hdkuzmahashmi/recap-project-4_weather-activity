import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState("weather", {
    defaultValue: [true],
  });

  const isGoodWeatherEntries = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  function handleAddActivity(data) {
    setActivities([...data, ...activities]);
  }
  useEffect(() => {
    async function weatherApi() {
      try {
        const url = "https://example-apis.vercel.app/api/weather/europe";
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error();
      }
    }

    const interval = setInterval(weatherApi, 5000);
    return () => clearInterval(interval);
  }, []);

  function handelDeleteActivity(id) {
    console.log("delete", id);
    const newActivities = activities.filter(
      (filterActivity) => filterActivity.id !== id
    );
    setActivities(newActivities);
  }

  const sunnyStyle = {
    background: "url(./sunny.jpg)",
    backgroundSize: "contain",
  };

  return (
    <main
      style={
        weather.isGoodWeather === true
          ? {
              background: "url(./sunny.jpg)",
              backgroundSize: "auto 100%",
            }
          : {
              background: "url(./rainy.jpg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
      }>
      <Form onAddActivity={handleAddActivity} />
      <h2 className="weather__headline">
        {weather.temperature} {weather.condition}
      </h2>
      <List
        activities={isGoodWeatherEntries}
        headline={weather.isGoodWeather ? "Good" : "Bad"}
        onDeleteActivity={handelDeleteActivity}
      />
    </main>
  );
}
export default App;
