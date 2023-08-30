import { nanoid } from "nanoid";
import Activity from "../Activity/Activity";

export default function List({ activities }) {
  function testac() {
    console.log("List com", activities);
  }
  testac();

  return (
    <ul>
      {activities.map((activity) => (
        <Activity
          activity={activity.activity}
          isForGoodWeather={activity.isForGoodWeather}
          key={nanoid()}
        />
      ))}
    </ul>
  );
}
