import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className=" flex flex-col justify-center items-center mx-32">
      <p className="my-10 text-3xl font-extrabold ">FAQ</p>
      <Accordion type="single" collapsible className="w-[300px] md:w-[500px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>How to download and install?</AccordionTrigger>
          <AccordionContent>
            The download button in the home page will redirct you to the
            download link.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can we copy the screenshot?</AccordionTrigger>
          <AccordionContent>
            Not possible for now, But thats coming soon.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is this tool paid?</AccordionTrigger>
          <AccordionContent>
            The answer is no and yes, If you want the product at no cost you
            can. Anyway if you want to tip me something i'd appreciate it.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Do we have to sign up or anything ?
          </AccordionTrigger>
          <AccordionContent>
            No need, Only mail id is enough for you to collect your purchase.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
