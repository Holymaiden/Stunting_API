const coba = async (req, res) => {
  const start_location = {
    latitude: -4.547182,
    longitude: 120.329925,
  };

  const end_location = {
    latitude: -4.5459503,
    longitude: 120.3268113,
  };

  const apiKey = "AIzaSyBEMiAdMOBk5hxM-B8oY9ckRYbsqVJmOSk";

  const data = await fetch(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${start_location.latitude},${start_location.longitude}&destination=${end_location.latitude},${end_location.longitude}&alternatives=true&mode=driving&optimize:true&key=${apiKey}`
  ).then((res) => res.json());

  let routes = data.routes;
  let map = routes.map((route) => {
    steps = route.legs[0].steps;
    steps = steps.map((step, i) => {
      return {
        start_location: step.start_location,
        end_location: step.end_location,
        distance: step.distance,
        duration: step.duration,
      };
    });
    return steps;
  });
  let maps = [];
  map.map((route) => {
    route.map((step) => {
      maps.push(step);
    });
  });

  maps = maps.map((step, i) => {
    return {
      ...step,
      id: `${i}`,
    };
  });

  // filter duplicate start_location and end_location
  maps = maps.filter(
    (obj, i) =>
      maps.findIndex(
        (item) =>
          item.start_location.lat === obj.start_location.lat &&
          item.start_location.lng === obj.start_location.lng &&
          obj.end_location.lat === item.end_location.lat &&
          obj.end_location.lng === item.end_location.lng
      ) === i
  );

  maps = maps.map((step, i) => {
    return {
      name: `step-${i}`,
      source: `${step.start_location.lat},${step.start_location.lng}`,
      target: `${step.end_location.lat},${step.end_location.lng}`,
      lat: step.start_location.lat,
      lng: step.start_location.lng,
      weight: step.distance.value,
    };
  });

  return res.json(maps);
};

router.get("/coba", coba);
