import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    adress: "",
    place: "",
    landmark: "",
    nation: "",
    state: "",
    city: "",
    pin: "",
    checkbox: false,
  });

  
  const handleChange = (e) => {
      const { name, value, checked, type } = e.target;
      
      setData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }))
    };
    
    const hanldeSubmit = (e) => {
      e.preventDefault();
      console.log(data);
      localStorage.setItem("data", JSON.stringify(data));
      
    };
  return (
    <div className=" h-[calc(100vh-32px)] lg:flex lg:justify-center">
      <div className="round bg-red-100 m-3 rounded-2xl p-5 h-full w-full lg:flex lg:justify-center">
        <div className="max-w-5xl lg:mt-10 xl:mt-20">
          <h2 className="text-lg">Billing Adress</h2>
          <form action="" onSubmit={hanldeSubmit}>
            <div className="grid lg:grid-cols-[1fr_2fr] lg:gap-20">
              <div className="md:w-130 lg:w-70 lg:gap-y-30">
                <div className="flex justify-between mt-12  md:gap-5">
                  <label className="text-sm" htmlFor="fName">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fName"
                    name="fullName"
                    onChange={handleChange}
                    
                    className="bg-white md:w-100 lg:w-40"
                  />
                </div>
                {/* ================== */}
                <div className="flex justify-between mt-5 lg:mt-15 ">
                  <label className="text-sm" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    onChange={handleChange}
                    className="bg-white md:w-100 lg:w-40"
                  />
                </div>
                {/* ================== */}
                <div className="flex justify-between mt-5 lg:mt-15">
                  <label className="text-sm" htmlFor="EmailId">
                    Email Id
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    className="bg-white md:w-100 lg:w-40"
                  />
                </div>
              </div>

              {/* ======================================================== */}

              <div>
                {" "}
                <div className=" flex flex-col mt-5 lg:flex-row lg:justify-between lg:mt-12">
                  <label className="block mb-1 text-sm" htmlFor="adress">
                    Flat, House no, Building, Company
                  </label>

                  <input
                    type="text"
                    id="adress"
                    name="adress"
                    onChange={handleChange}
                    className="bg-white w-full lg:w-70"
                  />
                </div>
                {/* ================== */}
                <div className=" flex flex-col mt-5 lg:flex-row lg:justify-between lg:mt-15">
                  <label className="block mb-1 text-sm" htmlFor="place">
                    Area, Street, Village
                  </label>

                  <input
                    type="text"
                    id="place"
                    name="place"
                    onChange={handleChange}
                    className="bg-white w-full lg:w-70"
                  />
                </div>
                {/* ================== */}
                <div className=" flex flex-col mt-5 lg:flex-row lg:justify-between lg:mt-15">
                  <label className="block mb-1 text-sm" htmlFor="landmark">
                    Landmark
                  </label>

                  <input
                    type="text"
                    id="landmark"
                    name="landmark"
                    onChange={handleChange}
                    className="bg-white lg:w-70"
                  />
                </div>
              </div>
            </div>
            {/* ================== */}

            <div className="grid grid-cols-2 gap-x-15 gap-y-5 mt-6 lg:grid-cols-4 lg:grid-reverse lg:mt-15">
              <div className=" flex flex-col lg:flex-row lg:justify-between lg:order-3">
                <label className="block mb-1 text-sm" htmlFor="pin">
                  Pin Code
                </label>

                <input
                  type="text"
                  id="pin"
                  className="bg-white lg:w-30"
                  name="pin"
                  onChange={handleChange}
                />
              </div>
              <div className=" flex flex-col lg:flex-row lg:justify-between lg:order-2">
                <label className="block mb-1 text-sm" htmlFor="city">
                  City
                </label>

                <input
                  type="text"
                  id="city"
                  className="bg-white lg:w-30"
                  name="city"
                  onChange={handleChange}
                />
              </div>
              <div className=" flex flex-col lg:flex-row lg:justify-between lg:order-1">
                <label className="block mb-1 text-sm" htmlFor="state">
                  State
                </label>

                <input
                  type="text"
                  id="state"
                  name="state"
                  className="bg-white lg:w-30"
                  onChange={handleChange}
                />
              </div>
              <div className=" flex flex-col lg:flex-row lg:justify-between">
                <label className="block mb-1 text-sm" htmlFor="nation">
                  Nation
                </label>

                <input
                  type="text"
                  id="nation"
                  name="nation"
                  onChange={handleChange}
                  className="bg-white w-full lg:w-30"
                />
              </div>
            </div>
            {/* ================== */}

            <div className="mt-15 lg:flex lg:justify-center lg:items-center">
              <div className=" lg:flex lg:w-100 lg:items-center lg:justify-center">
                <input
                  type="checkbox"
                  className=" appearance-none w-3 h-3  border-2 border-black bg-transparent checked:bg-blue-500 mr-3"
                  name="checkbox"
                  id="checkbox"
                  checked={data.checkbox}
                  onChange={handleChange}
                />
                <label htmlFor="">Shipping address same as billing</label>
              </div>
              {/* ================== */}

              <div className="flex justify-center w-full lg:w-30">
                <button
                  className="bg-red-400 text-white px-2 rounded-sm my-6"
                  type="submit"
                  id="submit"
                >
                  Contiue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
