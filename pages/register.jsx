import Image from "next/image";
import RegForm from "../src/Components/register/RegForm";

const register = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-br from-primary to-gray-600 h-screen w-screen">
        <Image
          src="https://images.pexels.com/photos/8819765/pexels-photo-8819765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt="pic"
          className="object-cover w-screen h-screen absolute top-0 mix-blend-overlay"
        />
        <RegForm />
      </div>
    </>
  );
};

export default register;
