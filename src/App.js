import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(data) {
    console.log(data);
    setActivities([...data, ...activities]);
    console.log(activities);
  }

  return (
    <>
      <Form onAddActivity={handleAddActivity} />
      <List activities={activities} />
    </>
  );
}
export default App;
