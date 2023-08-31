import "./Form.css";
import { nanoid } from "nanoid";
export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const fromdataObj = [
      {
        id: nanoid(),
        activity: event.target.activity.value,
        isForGoodWeather: event.target.selectWeather.checked,
      },
    ];
    onAddActivity(fromdataObj);
    event.target.reset();
    event.target.activity.focus();
  }
  return (
    <main>
      <h1>Weather & Activities App</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="activity">Your activity:</label>
        <input type="text" name="activity" />
        <div className="form__checkbox-wrapper">
          <label htmlFor="selectWeather">Good weather:</label>
          <input type="checkbox" name="selectWeather" id="selectWeather" />
        </div>
        <button className="form__submit-button">Submit</button>
      </form>
    </main>
  );
}
