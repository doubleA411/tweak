import React from "react"

function Feature({ title, desc, url }: { title: any; desc: any; url: any }) {
  return (
    <div className="flex-col lg: mt-32">
      <p className="sm: text-2xl lg:text-4xl font-extrabold text-center mb-4">
        {title}
      </p>
      <p className="text-sm mb-10 text-muted-foreground text-center">
        {desc}
      </p>

      <video
        className=" rounded-xl shadow-xl"
        autoPlay
        muted
        loop
        src={url}
      ></video>
    </div>
  )
}

export default Feature
