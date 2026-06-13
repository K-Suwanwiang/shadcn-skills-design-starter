"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    id: "product-information",
    question: "Product Information",
    paragraphs: [
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
      "Key features include advanced processing capabilities, and an intuitive user interface designed for both beginners and experts.",
    ],
  },
  {
    id: "shipping-details",
    question: "Shipping Details",
    paragraphs: [
      "We offer worldwide shipping through trusted courier partners. Standard delivery takes 3-5 business days, while express shipping ensures delivery within 1-2 business days.",
      "All orders are carefully packaged and fully insured. Track your shipment in real-time through our dedicated tracking portal.",
    ],
  },
  {
    id: "return-policy",
    question: "Return Policy",
    paragraphs: [
      "We stand behind our products with a comprehensive 30-day return policy. If you're not completely satisfied, simply return the item in its original condition.",
      "Our hassle-free return process includes free return shipping and full refunds processed within 48 hours of receiving the returned item.",
    ],
  },
]

export function ProductFaq() {
  return (
    <Accordion multiple={false} className="w-full max-w-[503px]">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="py-4">{item.question}</AccordionTrigger>
          <AccordionContent className="pb-4">
            {item.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
