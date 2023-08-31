import "./Activity.css";
import { ReactComponent as Trash } from "./trash.svg";
export default function Activity({
  activity,
  isForGoodWeather,
  id,
  onDeleteActivity,
}) {
  return (
    <li className="weather__list-item">
      {activity} {""}{" "}
      {/* {isForGoodWeather ? <span>Good</span> : <span>Bad</span>}{" "} */}
      <button
        type="button"
        className="delete-button"
        onClick={() => {
          onDeleteActivity(id);
        }}>
        <Trash />
      </button>
    </li>
  );
}
