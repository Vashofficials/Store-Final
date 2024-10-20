import requests from "./httpServices";

const CouponServices = {
  getAllCoupons: async () => {
    return requests.get("/coupon");
  },
  getShowingCoupons: async () => {
    return requests.get("/coupon/show");
  },
};

export default CouponServices;
