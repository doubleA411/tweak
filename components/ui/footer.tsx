import React from "react"
import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-8 flex items-center justify-center gap-2">
        <Image src="/tweak.png" alt="tweak" width={40} height={30} />
        <p className=" text-3xl font-extrabold">Tweak</p>
      </div>
      <div className="sm: mt-7 flex items-center justify-center gap-6 text-xs ">
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
          <Image src="/logo.png" alt="logo" width={35} height={30} />
        </div>
      </Link>
    </div>
  )
}

export default Footer
