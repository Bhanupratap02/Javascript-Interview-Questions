/** @format */

const locationButton = document.getElementById("get-location-btn");
async function getWheather(lat, long) {
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?q=${lat},
        ${long}&key=c08ea84eb4094f6abf6171703252401&aqi=yes`);
  const wheather = await res.json();
  console.log(wheather);
}
locationButton.addEventListener("click", () => {
  const result = navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("my position", position);
      getWheather(position.coords.latitude, position.coords.longitude);
    },
    (err) => {
      console.log(err, "something went wrong");
    }
  );
});
