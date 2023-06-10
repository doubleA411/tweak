import React from "react"

function Feature({ title, desc, url }: { title: any; desc: any; url: any }) {
  return (
    <div className="flex-col mt-40">
      <p className="text-4xl font-extrabold text-center mb-4">{title}</p>
      <p className="mb-10 text-muted-foreground text-lg text-center">{desc}</p>

      <video
        className="rounded-xl shadow-xl"
        autoPlay
        muted
        loop
        src={url}
      ></video>
    </div>
  )
}

export default Feature
