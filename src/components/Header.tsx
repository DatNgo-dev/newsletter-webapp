import React from "react";
import Button from "./Button";
import vectorImage from "../assets/freepik-image.jpg"

const Header = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="justify-self-center self-center p-5 flex flex-col gap-4">
        <h1 className="text-6xl lg:text-8xl self-center">Welcome!</h1>
        <p className="text-md lg:text-2xl self-center">
          Join our newsletter service to stay up to date with the latest news in
          IT. If you are interested then please click the subscribe button to receive daily news article via your email
        </p>

        <Button style="self-center text-white">Subscribe</Button>
        
      </div>

      <div className="rounded-xl h-full w-full justify-self-center self-center overflow-hidden">
        <img
          src={vectorImage}
          alt="Vector Image"
          className="object-fill h-full w-full"
        />
      </div>
    </div>
  );
};

export default Header;
