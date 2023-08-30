export default function Activity({ activity, isForGoodWeather, id }) {
  function test() {
    console.log("activity com", activity);
    console.log("activity com", isForGoodWeather);
    console.log("activity com", id);
  }
  test();
  return (
    <li key={id}>
      {activity} {""} {isForGoodWeather ? <span>Good</span> : <span>Bad</span>}
    </li>
  );
}
