import { center } from "@/constants";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Footer = () => {
  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      import.meta.env.VITE_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY",
  });

  // Handle map load
  const onLoad = (map: google.maps.Map) => {
    // Set map object in state once it's loaded

    // Set bounds to fit the center
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds); // Fit bounds to the provided center
  };

  // If map is not loaded, show a loading message
  if (!isLoaded) return <h1>Fail to load map</h1>;

  return (
    <div className="w-full" style={{ position: "relative", height: "500px" }}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%", // Full width
          height: "100%", // Full height (you can adjust this based on your design)
        }}
        center={center}
        zoom={10}
        onLoad={onLoad} // Pass onLoad function to get the map instance
      >
        {/* Child components like markers or info windows can go here */}
        {/* Example: */}
        {/* <Marker position={center} /> */}
      </GoogleMap>
    </div>
  );
};

export default Footer;
