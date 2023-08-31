import { ReactComponent as Trash } from "./trash.svg";
export default function Activity({
  activity,
  isForGoodWeather,
  id,
  onDeleteActivity,
}) {
  return (
    <li>
      {activity} {""} {isForGoodWeather ? <span>Good</span> : <span>Bad</span>}{" "}
      <button
        type="button"
        onClick={() => {
          onDeleteActivity(id);
        }}
      >
        <Trash />
      </button>
    </li>
  );
}
