import SettingServices from "@services/SettingServices";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = async () => {
  const storeSetting = await SettingServices.getStoreSetting();
  // console.log("res", storeSetting);
  if (!stripePromise) {
    // stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY}` || null);
    stripePromise = loadStripe(storeSetting?.stripe_key || null);
  }

  return stripePromise;
};

export default getStripe;
