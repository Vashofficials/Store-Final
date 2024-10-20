import { useSession } from "next-auth/react";

const getUserSession = () => {
  const { data } = useSession();

  // console.log(
  //   "data",
  //   data,
  //   dayjs(data?.expires).format("DD, MMM, YYYY, h:mm A")
  // );

  const userInfo = data?.user || null;
  return userInfo;
};

export { getUserSession };
