import Image from "next/image";
import { TiTick } from "react-icons/ti";
import { FiPlayCircle } from "react-icons/fi";

const WhyUs = () => {
  return (
    <>
      <div className="bg-gray-200 p-20">
        <div className="container-90 grid grid-cols-12">
          <div className="col-span-6 flex flex-col justify-center">
            <h1 className="text-2xl font-bold">
              Why choose
              <span className="text-cusRed font-philosopher">
                {" "}
                bibaho-korbo{" "}
              </span>
            </h1>
            <ul>
              <li className="flex items-center">
                <span className="bg-primary rounded-full">
                  {" "}
                  <TiTick />{" "}
                </span>{" "}
                Register for Free!
              </li>
              <li className="flex items-center">
                <span className="bg-primary rounded-full">
                  {" "}
                  <TiTick />{" "}
                </span>{" "}
                100% human verified profiles
              </li>
              <li className="flex items-center">
                <span className="bg-primary rounded-full">
                  {" "}
                  <TiTick />{" "}
                </span>{" "}
                Chat, Voice & Video calling
              </li>
              <li className="flex items-center">
                <span className="bg-primary rounded-full">
                  {" "}
                  <TiTick />{" "}
                </span>{" "}
                Private, personalized, and highly confidential service
              </li>
              <li className="flex items-center">
                <span className="bg-primary rounded-full">
                  {" "}
                  <TiTick />{" "}
                </span>{" "}
                Halal, safe and secured Matrimony site in Bangladesh
              </li>
            </ul>
          </div>
          <div className="col-span-6 relative min-h-[350px] rounded-xl overflow-hidden">
            <label htmlFor="my-modal-4" className="btn min-h-[350px] w-full">
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
              <label className="relative h-[90vh] w-10/12 bg-cusRed" htmlFor="">
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
