"use client";
 
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { Japan } from "../shared/icons";
import { useState, useEffect } from "react";
import DropdownLang from "./dropdown-lang";
import { useParams } from "next/navigation";


export default function NavBar({ session}: { 
  session: Session | null
 }) {
  // const dict = await getLocales(lang)
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const param = useParams()

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href={`/${param.lang}`} className="flex items-center font-display text-2xl">
            <Japan />
            <p className="p-2">タイトル</p>
          </Link>
          <div className="grid grid-cols-2 gap-1">
            <div className="">
              {session ? (
                <UserDropdown session={session} />
              ) : (
                <button
                  className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign In
                </button>
              )}
            </div>
            <div className="">
              <DropdownLang />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
