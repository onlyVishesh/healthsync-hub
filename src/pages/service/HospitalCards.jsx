import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { hospitalData as initialHospitalData } from "../../config";
import "./HospitalCards.css";

const HospitalCards = () => {
  const [showForm, setShowForm] = useState(false);
  const [hospitalData, setHospitalData] = useState(initialHospitalData);
  const [newHospital, setNewHospital] = useState({
    id: "",
    name: "",
    detail: "",
    address: "",
    panoramaURL: "",
    imageURL: "",
    floors: [{ name: "Ground Floor", rooms: [] }],
    specialize: [],
  });
  const [floorCount, setFloorCount] = useState(1);
  const [roomsError, setRoomsError] = useState("");

  const logHospitalData = () => {
    console.log(hospitalData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let capitalizedValue = value;

    // Capitalize first letter of each word for certain fields
    if (name === "name" || name === "specialize") {
      capitalizedValue = value.replace(/\b\w/g, (char) => char.toUpperCase());
    } else if (name === "address" || name === "detail") {
      capitalizedValue = value.replace(/^\w/, (char) => char.toUpperCase());
    } else if (name === "rooms") {
      capitalizedValue = value
        .split(",")
        .map((room) =>
          room.trim().replace(/\b\w/g, (char) => char.toUpperCase())
        )
        .join(",");
    }

    if (name === "specialize") {
      setNewHospital({
        ...newHospital,
        specialize: capitalizedValue.split(","),
      });
    } else {
      setNewHospital({ ...newHospital, [name]: capitalizedValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextId =
      Math.max(...hospitalData.map((hospital) => hospital.id), 0) + 1;
    const newHospitalWithId = { ...newHospital, id: nextId };
    setHospitalData([...hospitalData, newHospitalWithId]);
    setNewHospital({
      id: "",
      name: "",
      detail: "",
      address: "",
      panoramaURL: "",
      imageURL: "",
      floors: [{ name: "Ground Floor", rooms: [] }],
      specialize: [],
    });
    setFloorCount(1);
    setShowForm(false);
  };

  const handleFloorsChange = (index, e) => {
    const { name, value } = e.target;
    const floors = [...newHospital.floors];
    floors[index] = { ...floors[index], [name]: value.split(",") };
    setNewHospital({ ...newHospital, floors });
  };

  const addFloor = () => {
    const lastFloorIndex = newHospital.floors.length - 1;
    const lastFloorRooms = newHospital.floors[lastFloorIndex].rooms;
    if (
      lastFloorRooms.length === 0 ||
      lastFloorRooms.some((room) => room.trim() === "")
    ) {
      setRoomsError(
        "Please fill in the rooms for the previous floor before adding another floor."
      );
      setTimeout(() => {
        setRoomsError("");
      }, 5000);
      return;
    }

    const floorNames = [
      "Ground Floor",
      "First Floor",
      "Second Floor",
      "Third Floor",
      "Fourth Floor",
      "Fifth Floor",
      "Sixth Floor",
      "Seventh Floor",
      "Eighth Floor",
      "Ninth Floor",
      "Tenth Floor",
    ];
    const newFloorName =
      floorCount < floorNames.length
        ? floorNames[floorCount]
        : `Floor ${floorCount + 1}`;
    setNewHospital({
      ...newHospital,
      floors: [...newHospital.floors, { name: newFloorName, rooms: [] }],
    });
    setFloorCount(floorCount + 1);
  };

  const openImageLink = () => {
    window.open("https://example.com", "_blank");
  };

  return (
    <>
      <h1 className="service-page-heading">Hospitals</h1>
      <section className="card_container">
        <ul className="card_lists">
          {hospitalData.map((hospital) => (
            <Link to={"hospital/" + hospital.id} key={hospital.id}>
              <li className="card_list">
                <div className="card_listImage">
                  <img
                    src={hospital.imageURL}
                    alt={hospital.name}
                    width={"250px"}
                    height={"200px"}
                  />
                </div>
                <h3 className="card_listTitle">
                  <strong>{hospital.name}</strong>
                </h3>
              </li>
            </Link>
          ))}
          <li className="card_list" onClick={() => setShowForm(true)} key="new">
            <div className="card_listImage">
              <div className="new-hospital">
                <h3 className="card_listTitle">
                  <strong>Add New Hospital</strong>
                </h3>
              </div>
            </div>

            <p className="card_listText"></p>
          </li>
        </ul>
        <button onClick={logHospitalData}>Log hospitalData</button>
      </section>

      {showForm && (
        <div className="modal">
          <div className="modal_content">
            <span className="close" onClick={() => setShowForm(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <h2 className="hospital-form-heading">Add New Hospital</h2>
            <form className="form-hospital" onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={newHospital.name}
                  onChange={handleInputChange}
                  placeholder="Enter hospital Name"
                  required
                />
              </label>
              <label>
                Detail:
                <input
                  type="text"
                  name="detail"
                  value={newHospital.detail}
                  onChange={handleInputChange}
                  placeholder="Enter hospital Detail"
                  required
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={newHospital.address}
                  onChange={handleInputChange}
                  placeholder="Enter hospital Address"
                  required
                />
              </label>
              <label>
                Image URL:
                <input
                  type="text"
                  name="imageURL"
                  value={newHospital.imageURL}
                  onChange={handleInputChange}
                  placeholder="Enter hospital Image URL"
                  required
                />
              </label>
              <label>
                Panorama URL:
                <input
                  type="text"
                  name="panoramaURL"
                  value={newHospital.panoramaURL}
                  onChange={handleInputChange}
                  placeholder="Enter hospital Panorama Image URL"
                  required
                />
              </label>
              <p className="image-url-text">
                Does not have an image URL?{" "}
                <span className="image-url-link" onClick={openImageLink}>
                  Click here to get one.
                </span>
              </p>
              <label>
                Specialization (Comma-separated):
                <input
                  type="text"
                  name="specialize"
                  value={newHospital.specialize.join(",")}
                  onChange={handleInputChange}
                  placeholder="like Orthopedics, Ophthalmology, Neurology"
                  required
                />
              </label>
              {newHospital.floors.map((floor, index) => (
                <div key={index}>
                  <label>
                    Floor Name:
                    <input
                      type="text"
                      name="name"
                      value={floor.name}
                      onChange={(e) => handleFloorsChange(index, e)}
                      required
                    />
                  </label>
                  <label>
                    Rooms (Comma-separated):
                    <input
                      type="text"
                      name="rooms"
                      value={
                        Array.isArray(floor.rooms) ? floor.rooms.join(",") : ""
                      }
                      onChange={(e) => handleFloorsChange(index, e)}
                      placeholder="like 30 rooms, Emergency Hall, Pharmacy"
                      required
                    />
                  </label>
                </div>
              ))}
              <div style={{ color: "red", marginBottom: "10px" }}>
                {roomsError}
              </div>
              <button className="modal_button" type="button" onClick={addFloor}>
                Add Floor
              </button>
              <button className="modal_button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HospitalCards;
