import Activity from "../Activity/Activity";
import "./List.css";

export default function List({ activities, headline, onDeleteActivity }) {
  return (
    <div className="weather__wrapper">
      <h3>
        Current Weather: <span className="current__weather">{headline}</span>
      </h3>
      <ul className="weather__list">
        {activities.map((activity) => (
          <Activity
            activity={activity.activity}
            isForGoodWeather={activity.isForGoodWeather}
            id={activity.id}
            onDeleteActivity={onDeleteActivity}
            key={activity.id}
          />
        ))}
      </ul>
    </div>
  );
}
