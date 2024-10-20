import { useSearchParams } from "next/navigation";

//internal imports
import Dashboard from "./dashboard";
import Error from "@components/form/Error";
import { countries } from "@utils/countries";
import InputArea from "@components/form/InputArea";
import SelectOption from "@components/form/SelectOption";
import useShippingAddressSubmit from "@hooks/useShippingAddressSubmit";

const AddShippingAddress = () => {
  const id = useSearchParams().get("id");

  //   console.log("id", id);

  const {
    register,
    onSubmit,
    errors,
    cities,
    areas,
    handleSubmit,
    selectedValue,
    isSubmitting,
    handleInputChange,
  } = useShippingAddressSubmit(id);

  //   console.log("selectedValues", selectedValue);

  return (
    <Dashboard
      title="add-shipping-address"
      description="This is my account page"
    >
      <div className="max-w-screen-2xl">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h2 className="text-xl font-semibold mb-5">
                Add Shipping Address
              </h2>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="mt-10 sm:mt-0">
              <div className="md:grid-cols-6 md:gap-6">
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="lg:mt-6 mt-4 bg-white">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Full Name"
                          name="name"
                          type="text"
                          placeholder="Input your full name"
                        />

                        <Error errorName={errors.name} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Full Address"
                          name="address"
                          type="text"
                          placeholder="Input your full address"
                        />

                        <Error errorName={errors.address} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Phone"
                          name="contact"
                          type="tel"
                          placeholder="Phone/Mobile"
                        />

                        <Error errorName={errors.contact} />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Email"
                          name="email"
                          type="tel"
                          placeholder="Email"
                          readOnly={true}
                        />

                        <Error errorName={errors.email} />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <SelectOption
                          name="country"
                          label="Country"
                          //   register={register}
                          //   required={true}
                          //   setValue={setValue}
                          options={countries?.map((country) => country?.name)}
                          onChange={handleInputChange}
                          value={selectedValue?.country}
                        />
                        <Error errorName={errors.country} />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <SelectOption
                          name="city"
                          label="City"
                          //   register={register}
                          //   required={true}
                          //   setValue={setValue}
                          options={cities?.map((city) => city?.name)}
                          onChange={handleInputChange}
                          value={selectedValue?.city}
                        />
                        <Error errorName={errors.city} />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <SelectOption
                          name="area"
                          label="Area"
                          options={areas?.map((area) => area)}
                          //   register={register}
                          //   required={true}
                          //   setValue={setValue}
                          onChange={handleInputChange}
                          value={selectedValue?.area}
                        />
                        <Error errorName={errors.area} />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <InputArea
                          register={register}
                          label="Zip Code"
                          name="zipCode"
                          type="text"
                          placeholder="Zip Code"
                          required={false}
                        />

                        <Error errorName={errors.zipCode} />
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-5 text-right">
                      {isSubmitting ? (
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="cursor-progress md:text-sm leading-5 inline-flex items-center transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-cyan-600 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-cyan-700 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
                        >
                          <img
                            src="/loader/spinner.gif"
                            alt="Loading"
                            width={20}
                            height={10}
                          />
                          <span className=" ml-2 font-light">Processing</span>
                        </button>
                      ) : (
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-cyan-600 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-cyan-700 h-12 mt-1 text-sm lg:text-sm w-full sm:w-auto"
                        >
                          Add Shipping Address
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Dashboard>
  );
};

export default AddShippingAddress;
