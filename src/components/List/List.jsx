import Activity from "../Activity/Activity";

export default function List({ activities, headline, onDeleteActivity }) {
  return (
    <>
      <h3>Weather : {headline}</h3>
      <ul>
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
    </>
  );
}
