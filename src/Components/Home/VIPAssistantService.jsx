import Image from "next/image";

const VIPAssistantService = () => {
  return (
    <>
      <div className="container-90">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-cusRed "> VIP Assistant </span>
          Service
        </h1>

        <div className="grid grid-cols-12 items-center ">
          <div className="md:col-span-6 col-span-12 relative min-h-[400px]">
            <Image src="/calcenter.svg" alt="" fill />
          </div>
          <div className="md:col-span-6 col-span-12">
            <ul className="steps steps-vertical w-full">
              <li data-content="⚪" className="step step-neutral">
                <span className="border-2 border-gray-300 p-2 w-full text-left">
                  {" "}
                  Assign Personal Advisor
                </span>
              </li>
              <li data-content="⚪" className="step step-neutral">
                <span className="border-2 border-gray-300 p-2 w-full text-left">
                  {" "}
                  Advisor Will Manage Your Profile
                </span>
              </li>
              <li data-content="⚪" className="step step-neutral">
                <span className="border-2 border-gray-300 p-2 w-full text-left">
                  {" "}
                  Handpick Matches For You
                </span>
              </li>
              <li data-content="⚪" className="step step-neutral">
                <span className="border-2 border-gray-300 p-2 w-full text-left">
                  {" "}
                  Arranging Meetings
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button className="btn my-10 gap-2 md:ml-0 m-auto ">
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
            View More Details
          </button>
        </div>
      </div>
    </>
  );
};

export default VIPAssistantService;
