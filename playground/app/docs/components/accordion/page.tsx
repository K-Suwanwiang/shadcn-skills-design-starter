import { PageHeader } from "@/components/docs/page-header"
import { ComponentPreview } from "@/components/docs/component-preview"
import { ProductFaq } from "@/components/examples/product-faq"

const productFaqSource = `"use client"

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
      "Our flagship product combines cutting-edge technology with sleek design...",
      "Key features include advanced processing capabilities...",
    ],
  },
  // shipping-details, return-policy ...
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
}`

export default function AccordionDocsPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <PageHeader
        title="Accordion"
        description="A vertically stacked set of interactive headings that each reveal a section of content. Sourced from Figma node 308:14."
      />

      <ComponentPreview preview={<ProductFaq />} code={productFaqSource} />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Design notes</h2>
        <ul className="ml-6 list-disc space-y-2 text-sm text-muted-foreground leading-6">
          <li>
            Width fixed at <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">max-w-[503px]</code>{" "}
            to match the Figma container.
          </li>
          <li>
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">multiple={`{false}`}</code>{" "}
            restricts the accordion to a single open item, matching the four
            visual states in the source design.
          </li>
          <li>
            Trigger and content padding overridden to{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">py-4</code>{" "}
            /{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">pb-4</code>{" "}
            to land on the 52px row height from the design.
          </li>
        </ul>
      </section>
    </div>
  )
}
