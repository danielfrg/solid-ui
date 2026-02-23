import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@danielfrg/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@danielfrg/ui/card"

const items = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    title: "Is it styled?",
    content: "Yes. It comes with default styles that match the other components' aesthetic.",
  },
  {
    value: "item-3",
    title: "Is it animated?",
    content: "Yes. It's animated by default, but you can disable it if you prefer.",
  },
]

export function AccordionBasic() {
  return (
    <Accordion multiple={false} collapsible class="w-full">
      {items.map((item) => (
        <AccordionItem value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export function AccordionMultiple() {
  return (
    <Accordion multiple collapsible class="w-full">
      {items.map((item) => (
        <AccordionItem value={item.value}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export function AccordionDisabled() {
  return (
    <Accordion multiple={false} collapsible class="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function AccordionBorders() {
  return (
    <Accordion multiple={false} collapsible class="w-full rounded-md border">
      {items.map((item) => (
        <AccordionItem value={item.value} class="border-b last:border-b-0">
          <AccordionTrigger class="px-4">{item.title}</AccordionTrigger>
          <AccordionContent class="px-4">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export function AccordionCard() {
  return (
    <Card class="w-full">
      <CardHeader class="border-b">
        <CardTitle>Accordion</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion multiple={false} collapsible class="w-full">
          {items.map((item) => (
            <AccordionItem value={item.value}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
