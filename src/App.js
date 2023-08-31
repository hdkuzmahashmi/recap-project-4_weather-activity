import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { useState, useEffect } from "react";

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

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <h2>
        {weather.temperature} {weather.condition}
      </h2>
      <List
        activities={isGoodWeatherEntries}
        headline={weather.isGoodWeather ? "Good" : "Bad"}
        onDeleteActivity={handelDeleteActivity}
      />
    </>
  );
}
export default App;
