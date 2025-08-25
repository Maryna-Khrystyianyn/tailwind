const Form = () => {
  return (
    <>
      <div className="round bg-red-100 m-3 rounded-2xl p-5">
        <h2 className="text-lg">Billing Adress</h2>
        <form action="">
          <div className="grid lg:grid-cols-[1fr_2fr]">
            <div className="flex justify-between mt-12">
              <label className="text-sm" htmlFor="fName">
                Full Name
              </label>
              <input type="text" id="fName" className="bg-white lg:" />
            </div>
            {/* ================== */}
            <div className="flex justify-between mt-5">
              <label className="text-sm" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input type="text" id="phoneNumber" className="bg-white " />
            </div>
            {/* ================== */}
            <div className="flex justify-between mt-5">
              <label className="text-sm" htmlFor="EmailId">
                Email Id
              </label>
              <input type="text" id="EmailId" className="bg-white " />
            </div>
            {/* ================== */}
            <div className=" flex flex-col mt-6">
              <label className="block mb-1 text-sm" htmlFor="EmailId">
                Flat, House no, Building, Company
              </label>

              <input type="text" id="EmailId" className="bg-white w-full" />
            </div>
            {/* ================== */}
            <div className=" flex flex-col mt-6">
              <label className="block mb-1 text-sm" htmlFor="EmailId">
                Area, Street, Village
              </label>

              <input type="text" id="EmailId" className="bg-white w-full" />
            </div>
            {/* ================== */}
            <div className=" flex flex-col mt-6">
              <label className="block mb-1 text-sm" htmlFor="EmailId">
                Landmark
              </label>

              <input type="text" id="EmailId" className="bg-white" />
            </div>
          </div>
            {/* ================== */}

          <div className="grid grid-cols-2 gap-x-15 gap-y-5 mt-6 lg:grid-cols-4">
            <div className=" flex flex-col lg:flex-row">
              <label className="block mb-1 text-sm" htmlFor="EmailId">
                Pin Code
              </label>

              <input type="text" id="EmailId" className="bg-white" />
            </div>{" "}
            <div className=" flex flex-col lg:flex-row">
              <label className="block mb-1 text-sm" htmlFor="EmailId">
                City
              </label>

              <input type="text" id="EmailId" className="bg-white" />
            </div>{" "}
            <div className=" flex flex-col lg:flex-row">
              <label className="block mb-1 text-sm" htmlFor="EmailId">
                State
              </label>

              <input type="text" id="EmailId" className="bg-white" />
            </div>{" "}
            <div className=" flex flex-col lg:flex-row">
              <label className="block mb-1 text-sm" htmlFor="EmailId">
                Nation
              </label>

              <input type="text" id="EmailId" className="bg-white w-full" />
            </div>
          </div>
            {/* ================== */}

          <div className="mt-15">
            <input type="checkbox" />
            <label htmlFor="">Shipping address same as billing</label>
          </div>
            {/* ================== */}

          <div className="flex justify-center w-full">
            <button className="bg-red-400 text-white px-2 rounded-sm my-6">
              Contiue
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
