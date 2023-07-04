import React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card"

function PayCard({
  title,
  desc,
  feature,
  price,
}: {
  title: any
  desc: any
  feature: string[]
  price: any
}) {
  return (
    <div>
      <Card className="p-5 rounded-xl">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="flex flex-col gap-3">
            {feature.map((e) => {
              return <li key={e.length}>{e}</li>
            })}
          </ul>

          <h1 className=" mt-10 text-4xl font-bold">${price}</h1>
        </CardContent>
      </Card>
    </div>
  )
}

export default PayCard
