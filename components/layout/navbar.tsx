"use client";
 
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { Japan } from "../shared/icons";
import Popover from "@/components/shared/popover";
import { useState } from "react";
import { LOCALE_LIST } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  const [openPopover2, setOpenPopover2] = useState(false);
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams();

  console.log(router)
  console.log(pathname)
  console.log(searchParams.toString())
  const thisUrl = `${pathname}?${searchParams.toString()}`

  const localeClickhandler = () => {
    setOpenPopover2(!openPopover2)
  }


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
          <Link href="/" className="flex items-center font-display text-2xl">
            <Japan />
            <p className="p-2">All of Japan</p>
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
              <Popover
                content={
                  <div className="w-full rounded-md bg-white p-2 sm:w-40">
                    {LOCALE_LIST.map((locale) => {
                    return (
                        <Link href="/" locale={locale.key} passHref key={locale.key}
                          className="flex w-full items-center justify-start space-x-2 rounded-md p-2 text-left 
                          text-sm transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">{locale.label}</Link>
                    )})}
                  </div>}
                openPopover={openPopover2}
                setOpenPopover={setOpenPopover2}
              >
                <button
                  onClick={localeClickhandler}
                  className="flex w-40 items-center justify-between rounded-md border border-gray-300 px-4 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
                >
                  <p className="text-gray-600">locale</p>
                  <ChevronDown
                    className={`h-4 w-4 text-gray-600 transition-all ${
                      openPopover2 ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
