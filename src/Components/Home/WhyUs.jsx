import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { FiPlayCircle } from "react-icons/fi";

const WhyUs = () => {
  return (
    <>
      <div className="bg-gray-200 py-20">
        <div className="container-80 grid grid-cols-12">
          <div className="md:col-span-6 col-span-12 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-6">
              Why choose
              <span className="text-cusRed font-philosopher">
                {" "}
                React-matrimony{" "}
              </span>
            </h1>
            <ul className="ml-5 flex flex-col gap-3">
              <li className="flex gap-2 items-center">
                <span className="bg-primary rounded-full">
                  {" "}
                  <TiTick />{" "}
                </span>{" "}
                Register for Free!
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-primary rounded-full">
                  {" "}
                  <TiTick />{" "}
                </span>{" "}
                100% human verified profiles
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-primary rounded-full">
                  {" "}
                  <TiTick />{" "}
                </span>{" "}
                Chat, Voice & Video calling
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-primary rounded-full">
                  {" "}
                  <TiTick />{" "}
                </span>{" "}
                Private, personalized, and highly confidential service
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-primary rounded-full">
                  {" "}
                  <TiTick />{" "}
                </span>{" "}
                Halal, safe and secured Matrimony site in Bangladesh
              </li>
            </ul>
            <button className="btn w-64 my-10 gap-2 md:ml-0 m-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Find Your Partner
            </button>
          </div>
          <div className="md:col-span-6 col-span-12 relative min-h-[350px] rounded-xl">
            <label
              htmlFor="my-modal-4"
              className="btn bg-gray-200 border-none min-h-[350px] w-full relative overflow-hidden shadow-lg"
            >
              <div className="v-icon absolute z-20">
                <FiPlayCircle />
              </div>

              <Image
                src={
                  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                alt=""
                fill
                className="object-cover"
              />
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
              <label
                className="relative h-[90vh] w-10/12 rounded overflow-hidden"
                htmlFor=""
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/JNKZN8uq1H8?controls=0&amp;start=21"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </label>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
