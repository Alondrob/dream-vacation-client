import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderLayout from "../../components/header/HeaderLayout";
import HostPropertyCard from "../../components/shared-components/host/HostPropertyCard";
import { getUserProperties } from "../../redux/api-requests/userRequests";

const HostPage = () => {
  const dispatch = useDispatch();
  const userProperties = useSelector((state) => state.user.userProperties);

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getUserProperties(user));
  }, []);



  return (
    <div>
      <HeaderLayout />
      <div className="bg-night-theme w-full h-screen">
        <div className="bg-night-theme text-center text-white font-extrabold italic mt-0 ">
          {`Hey ${user.user.userName}!, Check out your hosting spots !!`}
        </div>

        <div className=" grid grid-cols-3 px-18 gap-4 ml-2 mb-24 bg-night-theme ">
          {userProperties.map((item, key) => (
            <HostPropertyCard property={item}/>
      
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostPage;
