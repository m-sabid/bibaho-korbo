import Link from "next/link";

const RegForm = () => {
  return (
    <div className="bg-primary bg-opacity-90 md:w-[40%] w-[80%] absolute p-5 rounded-md ">
      <form className="flex flex-col gap-3 ">
        {/* Name */}
        <div className="flex flex-col gap-1 text-white ">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Type your name"
            name=""
            id=""
            className="bg-white bg-opacity-40 outline-none border-none px-3 py-2 rounded"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1 text-white ">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="example@gamil.com"
            name=""
            id=""
            className="bg-white bg-opacity-40 outline-none border-none px-3 py-2 rounded"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1 text-white ">
          <label htmlFor="">Mobile</label>
          <input
            type="tel"
            id="phone"
            placeholder="01985-5***77"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            className="bg-white bg-opacity-40 outline-none border-none px-3 py-2 rounded"
            required
          ></input>
        </div>
        {/* password */}
        <div className="flex flex-col gap-1 text-white ">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Type your password"
            name=""
            id=""
            className="bg-white bg-opacity-40 outline-none border-none px-3 py-2 rounded"
          />
        </div>
        {/* confirm password */}
        <div className="flex flex-col gap-1 text-white ">
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-type your password"
            name=""
            id=""
            className="bg-white bg-opacity-40 outline-none border-none px-3 py-2 rounded"
          />
        </div>
        {/* confirm password */}
        <div className="flex gap-5 items-center justify-center text-white ">
          <label htmlFor="">Gender </label>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" name="" value="Mail" />
            <span class="ml-2">Mail</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input type="radio" class="form-radio" name="" value="Femail" />
            <span class="ml-2">Femail</span>
          </label>
        </div>
        {/* T&C Agree */}
        <div className="flex gap-1 text-white ">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="outline-none border-none px-3 py-2 rounded"
            required
          ></input>

          <label
            for="remember"
            className="ml-2 text-sm font-medium text-white dark:text-gray-300"
          >
            I agree with the{" "}
            <Link
              href="#"
              class="text-blue-600 hover:underline dark:text-blue-500"
            >
              terms and conditions
            </Link>
            .
          </label>
        </div>


        {/* Submit */}
        <div className="flex gap-1 text-white ">
          <input
            type="submit"
            value="Submit"
            className="bg-gray-800 cursor-pointer px-3 py-2 rounded shadow-sm shadow-gray-200 hover:shadow-none"
          />
        </div>
        <p className="text-white text-center">
          Already have an account{" "}
          <Link
            href="/login"
            class="text-blue-600 hover:underline dark:text-blue-500"
          >
            Login
          </Link>
          .
        </p>
      </form>
    </div>
  );
};

export default RegForm;
