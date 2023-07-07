import React from "react"
import Link from "next/link"

import { Button } from "./button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
      <Card className=" w-[200px] rounded-xl">
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

          <h1 className="mt-10 flex items-baseline text-4xl font-bold">
            ${price}
            <p className=" text-sm">/Onetime</p>
          </h1>
        </CardContent>
        <CardFooter>
          <Link href={"https://doubleapy.gumroad.com/l/mlaemx"}>
            <Button>Download </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default PayCard
