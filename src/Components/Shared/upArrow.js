import { BsArrowUpSquareFill } from "react-icons/bs";

const upArrow = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={goToTop}
        className="fixed bottom-10 right-10 text-4xl text-primary bg-cusRed rounded-xl"
      >
        <BsArrowUpSquareFill />
      </button>
    </>
  );
};

export default upArrow;
