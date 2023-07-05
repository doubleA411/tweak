import Image from "next/image"
import Link from "next/link"

import { data } from "@/config/data"
import { Button } from "@/components/ui/button"
import Feature from "@/components/ui/feature"
import PayCard from "@/components/ui/paycard"

// public\1.mp4
export default function IndexPage() {
  return (
    <section className="mt-20  flex items-center justify-center md:py-10">
      <div className="mx-3 flex max-w-[980px] flex-col items-center gap-3">
        <h1 className="xs:text-start m-4 text-center text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl 2xl:text-5xl">
          Design beautiful screenshots <br className="hidden sm:inline" />
          for your tweets and posts.
        </h1>
        <p className="text-muted-foreground font-bold">Windows Exclusive</p>
        <div className="mb-3 flex gap-3">
          <Link href={"https://doubleapy.gumroad.com/l/mlaemx"}>
            <Button>Download </Button>
          </Link>
        </div>
        <a
          href="https://www.producthunt.com/posts/tweak-6?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tweak&#0045;6"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=400148&theme=neutral"
            alt="Tweak - Make Beautiful Screenshots | Product Hunt"
            width={250}
            height={54}
          />
        </a>
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
        <h1 className="m-10 text-2xl font-bold md:text-3xl">
          Choose your variant
        </h1>
        <div className="flex flex-col gap-20 md:flex-row">
          <PayCard
            title={"Pro"}
            desc={"Get Exclusive Benefits"}
            price={7}
            feature={["No Watermark", "Copy Snaps Instantly"]}
          />
          <PayCard
            title={"Noob"}
            desc={"Get Some Benefits"}
            price={0}
            feature={["Watermark", "Save Snaps Locally"]}
          />
        </div>
      </div>
    </section>
  )
}
