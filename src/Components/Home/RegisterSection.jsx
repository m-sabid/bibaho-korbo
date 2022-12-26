const RegisterSection = () => {
  return (
    <div className="bg-light p-10">
      <div className="container-80">
        <div className="bg-primary rounded-md p-10 grid grid-cols-12">
          <div className="md:col-span-6 md:block hidden">
            <h1 className="text-4xl text-white font-bold">
              Find Someone Special at <br />
              <span className=" font-philosopher"> bibaho-korbo </span>
            </h1>

            <p className="text-white">
              Safe, Secure and Trusted Matrimony site in Bangladesh
            </p>
          </div>

          <div className="md:col-span-6 col-span-12 flex justify-center items-center">
            <button className="bg-white px-3 py-1 rounded font-bold text-cusRed">Register Free Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
