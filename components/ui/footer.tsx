import React from "react"
import Link from "next/link"

function Footer() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex gap-2 justify-center items-center mt-8">
        <img src="tweak.png" alt="" width={"30px"} />
        <p className=" font-extrabold text-3xl">Tweak</p>
      </div>
      <div className="flex gap-6 mt-7 justify-center items-center">
        <Link href={"https://twitter.com/aakashsuresh62"}>
          <p>Contact</p>
        </Link>
        <Link href={"/FAQ"}>
          <p>FAQ</p>
        </Link>
        <Link href={"/terms"}>
          <p>Terms & Conditions</p>
        </Link>
        <Link href={"/policy"}>
          <p>Privacy Policy</p>
        </Link>
      </div>
      <Link href={"https://portfolio-aa.vercel.app/"} className="my-10">
        <div className=" flex gap-2">
          <p className=" text-muted-foreground">Made by Minimal Mind</p>
          <img src="logo.png" alt="logo" width={"30px"} />
        </div>
      </Link>
    </div>
  )
}

export default Footer
