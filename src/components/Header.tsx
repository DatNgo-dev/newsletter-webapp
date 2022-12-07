import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="justify-self-center self-center p-5 flex flex-col gap-4">
        <h1 className="text-6xl lg:text-8xl self-center">Welcome!</h1>
        <p className="text-md lg:text-2xl self-center">
          Join our newsletter service to stay up to date with the latest news in
          IT. If you are interested then please click the subscribe button to receive daily news article via your email
        </p>

        <Button style="self-center">Subscribe</Button>
        
      </div>

      <div className="rounded-xl h-full w-full bg-green-500 justify-self-center self-center overflow-hidden">
        <img
          src="src/assets/5524716_2868865.jpg"
          alt="Vector Image"
          className="object-fill h-full w-full"
        />
      </div>
    </div>
  );
};

export default Header;
