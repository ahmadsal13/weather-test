window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector("temperature-section");
    const temperatureSpan = document.querySelector("temperature-section span");

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/bbb13d0f1f9641eff1544e93f5fbf570/${lat},${long}`;

            
        fetch(api)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const { temperature, summary, icon } = data.currently;
            
            //SET DOM ELEMENTS from the API
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone;
            //Set Icon 
            setIcons(icon, document.querySelector(".icon"));


            //Change temperature to Celsius/Fahreinhiet
        });
     });
    }



    function setIcon(icon, iconId); {
        const skycons = new skycons({color: "white"});
        const currentIcon = icon.replacce(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, skycons[currentIcon]);
    }
});

