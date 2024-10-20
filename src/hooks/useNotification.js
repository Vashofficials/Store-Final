import { addSetting, removeSetting } from "@redux/slice/settingSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import io from "socket.io-client";

// Create a single socket instance
// const socket = io(process.env.NEXT_PUBLIC_API_SOCKET_URL);
// const socket = io("https://kachabazar-backend-theta.vercel.app");

const useNotification = () => {
  const dispatch = useDispatch();
  const [socket, setSocket] = useState(null);

  // console.log("socket", socket);

  // useEffect(() => {
  //   // setSocket(io(process.env.NEXT_PUBLIC_API_SOCKET_URL));
  //   setSocket(io("http://localhost:5055"));
  // }, []);

  // useEffect(() => {
  //   // Listen for the 'notification' event from the server
  //   socket?.on("notification", (notification) => {
  //     // Update data in real-time here
  //     console.log("notification", notification);
  //     if (notification?.option === "globalSetting") {
  //       dispatch(removeSetting("globalSetting"));
  //       const globalSettingData = {
  //         ...notification.globalSetting,
  //         name: "globalSetting",
  //       };
  //       dispatch(addSetting(globalSettingData));
  //     }
  //     if (notification?.option === "storeCustomizationSetting") {
  //       dispatch(removeSetting("storeCustomizationSetting"));

  //       const storeCustomizationSettingData = {
  //         ...notification.storeCustomizationSetting,
  //         name: "storeCustomizationSetting",
  //       };
  //       dispatch(addSetting(storeCustomizationSettingData));
  //     }
  //   });

  //   return () => {
  //     // Disconnect the socket when the component unmounts
  //     socket?.disconnect();
  //   };
  // }, [socket]);
  // console.log("socket", socket);

  return {
    socket, // You can still return the socket instance if needed
  };
};

export default useNotification;
