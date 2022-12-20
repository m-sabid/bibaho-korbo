import { RiChatHeartLine, RiHeartAddFill, RiUserAddLine } from "react-icons/ri";

const HowWorkThisSite = () => {
  const howItWorkData = [
    {
      title: "Create Your Profile",
      description:
        "Create your detail profile, add photos and describe your partner preference",
      icons: <RiUserAddLine />,
      bgCol: "#CDD55C",
    },
    {
      title: "Search Your Partner",
      description:
        "Search your preferred partner by location, education, interest and so on",
      icons: <RiHeartAddFill />,
      bgCol: "#F96B6B",
    },
    {
      title: "Start Communication",
      description:
        "Start communication with suitable profiles by sending message & emails",
      icons: <RiChatHeartLine />,
      bgCol: "#5DADE2",
    },
  ];
  return (
    <>
      <div className="md:mt-32 mt-64 h-1"></div>

      <div className="container-90 text-center">
        <h1 className="text-4xl font-bold">
          How
          <span className="text-cusRed font-philosopher"> bibaho-korbo </span>
          works
        </h1>
        <p>
          Get started in{" "}
          <span className="text-cusRed font-philosopher font-bold">
            {" "}
            bibaho-korbo.com{" "}
          </span>{" "}
          in 3 easy steps
        </p>

        <div className="grid grid-cols-6 gap-2 my-10">
          {howItWorkData.map((dt, index) => {
            return (
              <>
                <div className="flex flex-col md:col-span-2 col-span-6 items-center justify-center p-5">
                  <h1
                    className={`${
                      dt.bgCol === "#CDD55C"
                        ? "bg-[#CDD55C]"
                        : dt.bgCol === "#F96B6B"
                        ? "bg-[#F96B6B]"
                        : dt.bgCol === "#5DADE2"
                        ? "bg-[#5DADE2]"
                        : ""
                    } p-5 rounded-full text-5xl text-white`}
                  >
                    {dt.icons}
                  </h1>
                  <h2 className="text-xl font-semibold py-3">{dt.title}</h2>
                  <p>{dt.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HowWorkThisSite;
