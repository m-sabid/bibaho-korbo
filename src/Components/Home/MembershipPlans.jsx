import { TiTick, TiTimes } from "react-icons/ti";

const MembershipPlans = () => {
  return (
    <>
      <div className="bg-gray-200">
        <div className="container-90">
          <h1 className="text-4xl font-bold text-center my-3">
            <span className="text-cusRed"> Membership </span>
            Plans
          </h1>
          <p className="text-center py-3">
            Primarily it`s free to search any profiles. Upgrade For customized
            the search. With a paid membership, you can seamlessly connect with
            your prospects and get more responses. Many have found their love.
            Are you ready to meet your Soul Mate?
          </p>

          <div className="md:flex justify-center items-center my-10">
            <ul className="flex flex-col gap-3 bg-white py-10 px-5 rounded-l-lg h-full">
                <h1 className="text-cusRed text-3xl font-bold">FREE</h1>
              <li className="flex gap-2 items-center">
                <span className="bg-primary text-gray-200 rounded-full">
                  <TiTick />
                </span>
                Search Profiles
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-primary text-gray-200 rounded-full">
                  <TiTick />
                </span>
                Shortlist & Send Interest
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-primary text-gray-200 rounded-full">
                  <TiTick />
                </span>
                Photo Album
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-primary text-gray-200 rounded-full">
                  <TiTimes />
                </span>
                Chat & Messaging
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-primary text-gray-200 rounded-full">
                  <TiTimes />
                </span>
                View contacts of members you like
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-primary text-gray-200 rounded-full">
                  <TiTimes />
                </span>
                Priority customer support
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-primary text-gray-200 rounded-full">
                  <TiTimes />
                </span>
                Profile Boost
              </li>
              <button className="btn my-10 gap-2 md:ml-0 m-auto">
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
              Free Register
            </button>
            </ul>

            <ul className="flex flex-col gap-3 bg-cusRed px-5 py-16 text-white rounded drop-shadow-md">
            <h1 className="text-white text-3xl font-bold">PRO</h1>
              <li className="flex gap-2 items-center">
                <span className="bg-white text-gray-700 rounded-full">
                  <TiTick />
                </span>
                Search Profiles
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-white text-gray-700 rounded-full">
                  <TiTick />
                </span>
                Shortlist & Send Interest
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-white text-gray-700 rounded-full">
                  <TiTick />
                </span>
                Photo Album
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-white text-gray-700 rounded-full">
                  <TiTick />
                </span>
                Chat & Messaging
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-white text-gray-700 rounded-full">
                  <TiTick />
                </span>
                View contacts of members you like
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-white text-gray-700 rounded-full">
                  <TiTick />
                </span>
                Priority customer support
              </li>
              <li className="flex gap-2 items-center">
                <span className="bg-white text-gray-700 rounded-full">
                  <TiTick />
                </span>
                Profile Boost
              </li>
              <button className="btn bg-white border-none text-gray-700 my-10 gap-2 md:ml-0 m-auto">
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
              Brows Plan
            </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipPlans;
