import { format } from "date-fns";
import React, { useContext, useState } from "react";
import { getImageApi } from "../api/imageUploadApi";
import { homeData } from "../api/Service";
import AddServiceForm from "../Components/Form/AddServiceForm";
import { AuthContext } from "../contexts/AuthProvider";

const AddHome = () => {
  const { user } = useContext(AuthContext);
  const [arrivalData, setArrivalData] = useState(new Date());
  const [departureData, setDepartureData] = useState(
    new Date(Date.now() + 3600 * 1000 * 24)
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = format(arrivalData, "P");
    const to = format(departureData, "P");
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const description = event.target.description.value;
    const image = event.target.image.files[0];

    getImageApi(image).then((data) => {
      const homesData = {
        location,
        title,
        from,
        to,
        price,
        total_guest,
        bedrooms,
        bathrooms,
        description,
        imageURL: data,
      };
      console.log(homesData);
      homeData(homesData).then((data) => {
        console.log(data);
      });
    });
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 py-8 text-center">
        Add Home
      </h1>
      <AddServiceForm
        handleSubmit={handleSubmit}
        arrivalData={arrivalData}
        setArrivalData={setArrivalData}
        departureData={departureData}
        setDepartureData={setDepartureData}
      />
    </>
  );
};

export default AddHome;
