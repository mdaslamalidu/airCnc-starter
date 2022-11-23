import React, { useContext, useEffect, useState } from "react";
import { getImageApi } from "../../api/imageUploadApi";
import { getuser, hostDataApi } from "../../api/user";
import BecomeHostForm from "../../Components/Form/BecameHostForm";
import { AuthContext } from "../../contexts/AuthProvider";

const BecameAHost = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getuser(user?.email).then((data) => {
      console.log(data.role);
      setRole(data.role);
      setLoading(false);
    });
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const image = event.target.image.files[0];
    getImageApi(image).then((data) => {
      const hostData = {
        location: location,
        dataImg: data,
        email: user?.email,
        role: "request",
      };
      hostDataApi(hostData).then((data) => console.log(data));
    });
  };
  return (
    <>
      {role ? (
        <div className="h-screen text-gray-600 flex flex-col justify-center items-center pb-16 text-xl lg:text-3xl">
          Request Sent, wait for admin approval
        </div>
      ) : (
        <>{!loading && <BecomeHostForm handleSubmit={handleSubmit} />}</>
      )}
    </>
  );
};

export default BecameAHost;
