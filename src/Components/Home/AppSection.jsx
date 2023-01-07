import Image from "next/image";
import React from "react";

const AppSection = () => {
  return (
    <div className="container-90">
      <div className=" my-14">
        <div className="grid grid-cols-12">
          {/* col - 1 */}
          <div className="md:col-span-6 col-span-12 flex flex-col justify-center">
            <p className="text-gray-500 font-semibold">Connect with</p>

            <h1 className="text-4xl font-bold">
              <span className="text-cusRed font-philosopher">React-matrimony</span>
            </h1>

            <h2 className="font-semibold text-gray-700 text-xl my-10">
              Simple & Quick Search, Stay Notified and Get the best Experience
              of Matchmaking.
            </h2>

            <Image
              src={
                "https://i.ibb.co/VtzLryf/get-it-on-google-play-google-play-badge-png-logos-23.png"
              }
              alt="play store"
              width={200}
              height={200}
            />
          </div>
          {/* col-1 end */}

          <div className="md:col-span-6 col-span-12 flex justify-center items-center">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <h1 className="text-4xl font-extrabold">Mobile App</h1>
                </div>
              </div>
            </div>
          </div>
          {/* col - 2 end */}
        </div>
      </div>
    </div>
  );
};

export default AppSection;
