function updateTime() {
    // Pretoria
    let pretoriaElement = document.querySelector("#pretoria");
    if (pretoriaElement) {
      let pretoriaDateElement = pretoriaElement.querySelector(".date");
      let pretoriaTimeElement = pretoriaElement.querySelector(".time");
      let pretoriaTime = moment().tz("Africa/Johannesburg");
  
      pretoriaDateElement.innerHTML = pretoriaTime.format("MMMM	Do YYYY");
      pretoriaTimeElement.innerHTML = pretoriaTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  
    // luanda
    let luandaElement = document.querySelector("#luanda");
    if (luandaElement) {
      let luandaDateElement = luandaElement.querySelector(".date");
      let luandaTimeElement = luandaElement.querySelector(".time");
      let luandaTime = moment().tz("Africa/Luanda");
  
      luandaDateElement.innerHTML = luandaTime.format("MMMM	Do YYYY");
      luandaTimeElement.innerHTML = luandaTime.format(
        "h:mm:ss [<small>]A[</small>]"
      );
    }
  }
  
  function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();

    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    <a href="index.html">All Cities</a>
    `;
  }
  
  updateTime();
  setInterval(updateTime, 1000);
  
  let citiesSelectElement = document.querySelector("#city");
  citiesSelectElement.addEventListener("change", updateCity);