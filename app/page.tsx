import Image from "next/image"
import Link from "next/link"

import { data } from "@/config/data"
import { Button } from "@/components/ui/button"
import Feature from "@/components/ui/feature"

// public\1.mp4
export default function IndexPage() {
  return (
    <section className="mt-20  flex items-center justify-center md:py-10">
      <div className="mx-3 flex max-w-[980px] flex-col items-center gap-3">
        <h1 className="xs:text-start m-4 text-center text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl 2xl:text-5xl">
          Design beautiful screenshots <br className="hidden sm:inline" />
          for your tweets and posts.
        </h1>
        <div className="mb-3 flex gap-3">
          <Link href={"https://doubleapy.gumroad.com/l/mlaemx"}>
            <Button>Download</Button>
          </Link>
          <Link href={""}>
            <Button variant={"outline"}>Github</Button>
          </Link>
        </div>
        <p className=" xs: mb-3 max-w-[700px] text-center text-lg text-muted-foreground ">
          Make your boring screenshots look neat and clean now in Windows
        </p>
        <Image
          src="/banner.jpeg"
          width={1200}
          height={500}
          alt=""
          className=" rounded-lg"
        />
        {data.map((e, index) => {
          return (
            <Feature key={index} title={e.title} desc={e.desc} url={e.url} />
          )
        })}
      </div>
    </section>
  )
}
