import React from "react";
import { useParams } from "react-router-dom";
import { hospitalData } from "../../config";
import "./Hospital.css";

const Hospital = () => {
  const { hosId } = useParams();

  // Find the hospital with the provided hosId
  const selectedHospital = hospitalData.find(
    (hospital) => hospital.id === parseInt(hosId)
  );

  // If no hospital found, display a message
  if (!selectedHospital) {
    return <div className="hospital">Hospital not found</div>;
  }

  return (
    <div className="hospital">
      <h1>{selectedHospital.name}</h1>
      <p>Detail: {selectedHospital.detail}</p>
      <p>Address: {selectedHospital.address}</p>
      <p>Specializations: {selectedHospital.specialize.join(", ")}</p>
      <img src={selectedHospital.imageURL} alt={selectedHospital.name} />
      <a
        href={selectedHospital.panoramaURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Panorama
      </a>
      <h2>Floors:</h2>
      {selectedHospital.floors.map((floor, index) => (
        <div key={index}>
          <h3>{Object.keys(floor)[0]}</h3>
          <p>Rooms: {floor[Object.keys(floor)[0]].join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Hospital;
