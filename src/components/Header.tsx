import React from "react";


const Header = () => {
  return (
    <main className="grow grid place-content-center">
      <div className="grid grid-cols-2 place-items-center">
        <div className="p-5">
            <h1 className="text-6xl lg:text-8xl">Welcome!</h1>
            <p className="text-sm lg:text-xl">
            Join our newsletter service to stay up to date with the latest news in IT. If you are interested then please click the subscribe button to enter your email.
            </p>
            <div className="button">
                <a href="#">Subscribe</a>
            </div>
        </div>
        <div className="p-5 rounded">
          <img src="src/assets/jon-tyson-XmMsdtiGSfo-unsplash-md.jpeg" alt="Joking Image"/>
        </div>
      </div>
    </main>
  );
};

export default Header;
