import Link from "next/link"

import { data } from "@/config/data"
import { Button } from "@/components/ui/button"
import Feature from "@/components/ui/feature"

// public\1.mp4
export default function IndexPage() {
  return (
    <section className="flex  justify-center items-center mt-20 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-3">
        <h1 className="2xl:text-5xl font-extrabold leading-tight tracking-tighter text-center md:text-4xl xs:text-start text-2xl m-3">
          Design beautiful screenshots <br className="hidden sm:inline" />
          for your tweets and posts.
        </h1>
        <div className="flex gap-3 mb-3">
          <Link href={"https://doubleapy.gumroad.com/l/mlaemx"}>
            <Button>Download</Button>
          </Link>
          <Link href={""}>
            <Button variant={"outline"}>Github</Button>
          </Link>
        </div>
        <p className=" max-w-[700px] text-lg text-muted-foreground mb-3 xs: text-center ">
          Make your boring screenshots look neat and clean now in Windows
        </p>
        <img
          src="https://public-files.gumroad.com/ij588hwj8hqsxeh73h7kjo0nl8qz"
          alt=""
          className=" rounded-lg"
        />
        {data.map((e, index) => {
          return (
            <Feature key={index} title={e.title} desc={e.desc} url={e.url} />
          )
        })}

        {/* <div className="flex gap-2 justify-center items-center mt-8">
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
        <Link href={"https://portfolio-aa.vercel.app/"}>
          <div className=" flex gap-2">
            <p className=" text-muted-foreground">Made by Minimal Mind</p>
            <img src="logo.png" alt="logo" width={"30px"} />
          </div>
        </Link> */}
      
      </div>
    </section>
  )
}
