if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(logPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
  function logPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Current Position:", latitude, longitude);
  }