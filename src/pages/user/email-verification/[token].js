import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";

//internal import
import { notifySuccess } from "@utils/toast";
import Loading from "@components/preloader/Loading";
import CustomerServices from "@services/CustomerServices";

const EmailVerification = ({ params }) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // console.log("params", params);

  useEffect(() => {
    setLoading(true);
    const handleRegisterCustomer = async () => {
      try {
        const res = CustomerServices.registerCustomer(params?.token);
        router.push("/");
        setLoading(false);
        setSuccess(res.message);
        notifySuccess("Register Success!");
      } catch (error) {
        setLoading(false);
        setError(err ? err.response.data.message : err.message);
      }
    };
    handleRegisterCustomer();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      {loading ? (
        <Loading loading={loading} />
      ) : success ? (
        <div className="text-emerald-500">
          <IoCheckmarkCircle className="mx-auto mb-2 text-center text-4xl" />
          <h2 className="text-xl font-medium"> {success} </h2>
        </div>
      ) : (
        <div className="text-red-500">
          <IoCloseCircle className="mx-auto mb-2 text-center text-4xl" />
          <h2 className="text-xl font-medium"> {error} </h2>
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  return {
    props: { params },
  };
};

export default EmailVerification;
