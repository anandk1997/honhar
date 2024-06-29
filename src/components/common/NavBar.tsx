"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import MainButton from "./MainButton";
import Image from "next/image";
import { UserButton, useClerk } from "@clerk/nextjs";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const { signOut, session } = useClerk();

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 h-11">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in  p-4 ">
        <div className="flex justify-between items-center">
          <div>
            <Image
              src="/VisaMentor.png"
              width={150}
              height={150}
              className="mt-[-40px]"
              alt="logo"
            />
          </div>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none mt-[-40px]">
            <p
              className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
            >
              Destinations
            </p>
            <p
              className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
            >
              Hotels
            </p>
            <p
              className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
            >
              Flights
            </p>
            <p
              className={`hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2`}
            >
              Bookings
            </p>

            {!session?.id ? (
              <>
                <Link
                  href="/sign-in"
                  className="hover:text-primary text-navText font-[600] cursor-pointer flex items-center gap-2 "
                >
                  Login
                </Link>

                <Link href="/sign-up">
                  <MainButton
                    text="Sign up"
                    classes="bg-transparent text-navText font-[600] shadow-none rounded-normal border border-navText hover:border-none hover:text-white"
                  />
                </Link>
              </>
            ) : (
              <>
                <UserButton />
                <button
                  className="hover:text-primary text-navText border-2 border-red-600 py-2 px-8 rounded-full font-[600] cursor-pointer flex items-center gap-2 "
                  onClick={() => signOut({ redirectUrl: "/" })}
                >
                  Logout
                </button>
              </>
            )}

            <div className="flex gap-2 items-center cursor-pointer">
              <p className="font-[700]">EN</p>
              <div>
                <img src="/images/chevron-down.png" alt="chevron down" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] py-4 animate-in fade-in zoom-in h-[72px]  ${
          menu ? " bg-primary py-2" : "bg-white"
          // "bg-white"
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            {!menu && (
              <Image
                src="/VisaMentor1.png"
                width={80}
                height={80}
                className="mt-[-10px] overflow-hidden"
                alt="logo"
              />
            )}
          </div>

          <div className="flex justify-end items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <img
                src="/images/hamburger.svg"
                alt="logo"
                className="cursor-pointer animate-in fade-in zoom-in mt-[-37px]"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right bg-primary h-[100vh]">
            <div className="flex flex-col gap-8 mt-8 mx-4 ">
              <div className="flex gap-[20px] xl:gap-[50px] text-[16px] flex-col select-none ">
                <p
                  className={`hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2`}
                >
                  Destinations
                </p>
                <p
                  className={`hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2`}
                >
                  Hotels
                </p>
                <p
                  className={`hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2`}
                >
                  Flights
                </p>
                <p
                  className={`hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2`}
                >
                  Bookings
                </p>

                {!session?.id ? (
                  <>
                    <Link
                      href="/sign-in"
                      className="hover:text-white text-navText font-[600] cursor-pointer flex items-center gap-2 "
                    >
                      Login
                    </Link>

                    <Link href="/sign-up">
                      <MainButton
                        text="Sign up"
                        classes="bg-secondary hover:bg-secondary text-navText font-[600] shadow-none rounded-normal border border-none hover:text-white"
                      />
                    </Link>
                  </>
                ) : (
                  <>
                    <UserButton />
                    <button
                      className="hover:text-primary text-navText border-2 border-red-600 py-2 px-8 rounded-full font-[600] cursor-pointer flex items-center gap-2 "
                      onClick={() => signOut({ redirectUrl: "/" })}
                    >
                      Logout
                    </button>
                  </>
                )}

                <div className="flex gap-2 items-center cursor-pointer">
                  <p className="font-[700]">EN</p>
                  <div>
                    <img src="/images/chevron-down.png" alt="chevron down" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
