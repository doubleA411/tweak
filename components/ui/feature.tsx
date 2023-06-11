import React from "react"

function Feature({ title, desc, url }: { title: any; desc: any; url: any }) {
  return (
    <div className="lg: mt-32 flex-col">
      <p className="sm: mb-4 text-center text-2xl font-extrabold lg:text-4xl">
        {title}
      </p>
      <p className="mb-10 text-center text-sm text-muted-foreground">{desc}</p>

      <video
        className=" rounded-xl shadow-xl dark:shadow-violet-950"
        autoPlay
        muted
        loop
        src={url}
      ></video>
    </div>
  )
}

export default Feature
