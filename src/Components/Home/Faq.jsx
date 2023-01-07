import React from "react";
import { BsFillQuestionDiamondFill } from "react-icons/bs";

const faqData = [
  {
    faqTitle: "Is It FREE to create profile in react-matrimony.com?",
    faqDescription:
      "Absolutely. Creating a profile in BD Marriage is completely FREE and no service charge is required. Create your profile and enjoy the exciting services.",
  },
  {
    faqTitle: "How can i create my profile on react-matrimony.com?",
    faqDescription:
      "It's very easy & simple. Just click Register Now to go to the registration page and follow the steps by filling up all the required information.",
  },
  {
    faqTitle: "How long does it take to create my profile?",
    faqDescription:
      "It will take less than 10 minutes. However, we suggest you fill up all information nicely so that others will get a better understanding of you.",
  },
  {
    faqTitle: "Is mandatory to add a phone number & email address?",
    faqDescription:
      "Mobile is required. We would suggest you provide the email also. It will help you to get better notifications when someone communicates with you.",
  },
  {
    faqTitle: "What is the advantage of verifying a mobile number?",
    faqDescription:
      "Verifying your phone number helps you to get a better response. It will also build the trust and authenticity of your profile.",
  },
  {
    faqTitle: "What is Profile ID?",
    faqDescription:
      "Profile ID is a unique auto-generated Id. All members have a unique ID on bdmarriage.com. Other members can search your profile by your Profile ID.",
  },
  {
    faqTitle: "How to login my account?",
    faqDescription:
      "Please click the link below to login to your account and put all the necessary information to get access to your accounts. Link to log in",
  },
  {
    faqTitle: "Can I update my profile data?",
    faqDescription:
      "Yes. You can update your profile data any time you want. Just visit your profile and go to the edit my profile segment.",
  },
  {
    faqTitle: "Are my photos are secure?",
    faqDescription:
      "Yes. Your photos are secure. On bdmarriage.com, all photos are coded and tamper-proof.",
  },
  {
    faqTitle: "Is It FREE to create profile in BD Marriage?",
    faqDescription:
      "Absolutely. Creating a profile in BD Marriage is completely FREE and no service charge is required. Create your profile and enjoy the exciting services.",
  },
];

const Faq = () => {
  return (
    <div className="my-10 py-10">
      <div className="container-90">
        <div className="min-h-[80vh]">
          <div className="md:w-5/6 w-full m-auto bg-white p-10 shadow-xl">
            <h1 className="text-3xl font-bold mb-10 flex gap-3 justify-center items-center">
              <BsFillQuestionDiamondFill /> Frequently Asked Questions
            </h1>

            {faqData.map((dt) => {
              return (
                <>
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-md"
                  >
                    <div className="collapse-title text-md text-green-800 flex items-center font-small">
                      {dt.faqTitle}
                    </div>
                    <div className="collapse-content">
                      <p>{dt.faqDescription}</p>
                    </div>
                  </div>
                  <br />
                </>
              );
            })}

            <p className="text-green-700 mt-5">
              Looking for something else? Go to detailed FAQs page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
