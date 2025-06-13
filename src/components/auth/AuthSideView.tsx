import React from "react";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AuthSideView = () => {
  const pathname = useLocation();
  const router = useNavigate();
  const isLogin = pathname.pathname === "/signup";

  const handleNavigate = () => {
    return isLogin ? router("/login") : router("/signup");
  };

  return (
    <>
      <div className="hidden bg-[url('/images/authBg.png')] bg-cover bg-center flex-1 lg:flex items-center justify-center p-4 md:p-8">
        <section className="bg-black/60 size-1/2 border border-[#EC3237] rounded-xl px-8 py-12 text-white flex flex-col justify-around">
          <Link to="/" className="mb-4">
            <img
              src="/images/logo.png"
              alt="Akotex Group Logo"
              className="h-10 w-auto rounded"
            />
          </Link>
          <h1 className="text-4xl font-extrabold">
            Grow Your Wealth with <span className="text-[#EC3237]">Confidence</span>
          </h1>
          <p>
            Access professionally managed investments and secure your financial
            future with Akotex Wealth Compass.
          </p>
          <Button
            className="w-full flex items-center justify-between px-4 py-8 text-lg"
            onClick={handleNavigate}
          >
            <span>{isLogin ? "Login" : "Register"}</span>
            <GoArrowUpRight size={40} />
          </Button>
        </section>
      </div>
    </>
  );
};

export default AuthSideView;
