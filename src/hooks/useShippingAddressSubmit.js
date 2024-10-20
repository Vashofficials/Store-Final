import { notifyError, notifySuccess } from "@utils/toast";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

//internal import
import { getUserSession } from "@lib/auth";
import { countries } from "@utils/countries";
import CustomerServices from "@services/CustomerServices";

const useShippingAddressSubmit = (id) => {
  const router = useRouter();
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedValue, setSelectedValue] = useState({
    country: "",
    city: "",
    area: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userInfo = getUserSession();

  // const { handlerTextTranslateHandler } = useTranslationValue();

  const {
    register,
    handleSubmit,
    setValue,
    // clearErrors,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (
      !selectedValue?.country ||
      !selectedValue?.city ||
      !selectedValue?.area
    ) {
      return notifyError("Country, city and area is required!");
    }
    setIsSubmitting(true);
    try {
      const res = await CustomerServices.addShippingAddress({
        userId: userInfo?.id,
        shippingAddressData: {
          ...data,
          country: selectedValue.country,
          city: selectedValue.city,
          area: selectedValue.area,
        },
      });

      notifySuccess(res.message);
      setIsSubmitting(false);
      router.push("/user/my-account");

      // console.log("onSubmit", data);
    } catch (err) {
      setIsSubmitting(false);
      notifyError(err ? err?.response?.data?.message : err?.message);
    }
  };

  const handleInputChange = (name, value) => {
    // console.log("handleInputChange", name, "value", value);
    setSelectedValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (name === "country") {
      const result = countries?.find(
        (country) => country?.name === value
      ).cities;
      setCities(result);
      setAreas([]);
    }
    if (name === "city") {
      const result = cities?.find((city) => city?.name === value).areas;
      setAreas(result);
    }
  };

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const { shippingAddress } = await CustomerServices.getShippingAddress(
            {
              userId: userInfo?.id,
            }
          );
          // console.log("shippingAddress", shippingAddress);
          if (shippingAddress) {
            setValue("name", shippingAddress.name);
            setValue("address", shippingAddress.address);
            setValue("contact", shippingAddress.contact);
            setValue("email", shippingAddress.email || userInfo?.email);
            setValue("country", shippingAddress.country);
            setValue("city", shippingAddress.city);
            setValue("area", shippingAddress.area);
            setValue("zipCode", shippingAddress.zipCode);
            setSelectedValue({
              country: shippingAddress.country,
              city: shippingAddress.city,
              area: shippingAddress.area,
            });
            setCities([
              {
                name: shippingAddress.city,
              },
            ]);
            setAreas([shippingAddress.area]);
          }
        } catch (err) {
          notifyError(err?.response?.data?.message || err?.message);
        }
      })();
    } else {
      setValue("email", userInfo?.email);
    }
  }, [id]);

  return {
    register,
    onSubmit,
    errors,
    cities,
    areas,
    setValue,
    handleSubmit,
    selectedValue,
    isSubmitting,
    handleInputChange,
  };
};

export default useShippingAddressSubmit;
