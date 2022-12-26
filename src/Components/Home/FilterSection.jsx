import Link from "next/link";
import { useState } from "react";

const searchBy = [
  {
    itemsName: "Division",
    subItems: [
      "Dhaka",
      "Chittagong",
      "Sylhet",
      "Barisal",
      "Mymensing",
      "Khulna",
      "Rajshahi",
      "Rangpur",
    ],
  },
  {
    itemsName: "Education",
    subItems: [
      "Doctorate / Phd / MPhil",
      "Masters",
      "Bachelors",
      "FCPS / MD",
      "MBBS / BDS",
      "Undergraduate",
      "Diploma",
      "Professional Degree",
      "HSC / A-Label",
      "View More",
    ],
  },
  {
    itemsName: "Living Country",
    subItems: [
      "Bangladesh",
      "USA",
      "United Kingdom",
      "Canada",
      "Saudi Arabia",
      "Malaysia",
      "Italy",
      "Germany",
      "Japan",
      "Other Countries",
    ],
  },
  {
    itemsName: "Profession",
    subItems: [
      "Accounting & Banking",
      "Airline & Aviation",
      "Beauty & Fashion",
      "Engineering",
      "Education & Training",
      "Medical & Healthcare",
      "Business",
      "Defense",
      "View More",
    ],
  },
];

const FilterSection = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="min-h-[60vh] bg-light py-10">
        <div className="container-80">
          <h1 className="text-4xl font-bold text-center mb-5">
            Browse Profiles
          </h1>
          <p className="text-center my-5">
            We search in our system based on your preferences. With a paid
            membership, you can seamlessly connect with your prospects and get
            more responses. Browse the categories and Match with your partner.
          </p>

          {/* Search by */}

          <div className="flex justify-center items-center gap-6">
            {searchBy.map((dt, index) => {
              return (
                <>
                  <button
                    onClick={() => toggleTab(index)}
                    className={
                      toggleState === index
                        ? "border-b-2 border-cusRed text-lg font-semibold text-cusRed mb-1"
                        : " text-lg font-semibold text-black "
                    }
                  >
                    {dt.itemsName}
                  </button>
                </>
              );
            })}
          </div>

          {searchBy.map((dt, index) => {
            return (
              <>
                <div
                  className={
                    toggleState === index
                      ? "block md:w-1/2 mx-auto my-6 text-center"
                      : "hidden"
                  }
                >
                  {dt.subItems.map((subI, index) => {
                    return (
                      <div
                        key={index}
                        className="badge text-black py-4 bg-white m-1"
                      >
                        <Link
                          href={`/${subI.toLowerCase()}`}
                          className="flex w-full justify-center items-center text-center"
                        >
                          {subI}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FilterSection;
