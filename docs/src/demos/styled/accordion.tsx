import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@danielfrg/solid-ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@danielfrg/solid-ui/card"
import { For } from "solid-js"

const faqItems = [
  {
    value: "item-1",
    trigger: "How do I reset my password?",
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
  },
  {
    value: "item-2",
    trigger: "Can I change my subscription plan?",
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
  },
  {
    value: "item-3",
    trigger: "What payment methods do you accept?",
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
  },
]

const settingsItems = [
  {
    value: "notifications",
    trigger: "Notification Settings",
    content:
      "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.",
  },
  {
    value: "privacy",
    trigger: "Privacy & Security",
    content:
      "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences.",
  },
  {
    value: "billing",
    trigger: "Billing & Subscription",
    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
  },
]

const billingItems = [
  {
    value: "plans",
    trigger: "What subscription plans do you offer?",
    content:
      "We offer three tiers: Starter ($9/month), Professional ($29/month), and Enterprise ($99/month). Each includes increasing storage, API access, and priority support.",
  },
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "Billing occurs automatically at the start of each cycle. We accept major credit cards, PayPal, and ACH transfers for enterprise customers.",
  },
  {
    value: "cancel",
    trigger: "How do I cancel my subscription?",
    content:
      "Cancel anytime from your account settings. No cancellation fees. Access continues until the end of your current billing period.",
  },
]

export function AccordionBasic() {
  return (
    <Accordion defaultValue={["item-1"]} class="max-w-lg">
      <For each={faqItems}>
        {(item) => (
          <AccordionItem value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        )}
      </For>
    </Accordion>
  )
}

export function AccordionMultiple() {
  return (
    <Accordion multiple defaultValue={["notifications"]} class="max-w-lg">
      <For each={settingsItems}>
        {(item) => (
          <AccordionItem value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        )}
      </For>
    </Accordion>
  )
}

export function AccordionDisabled() {
  return (
    <Accordion defaultValue={["item-1"]} class="max-w-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>Available Section</AccordionTrigger>
        <AccordionContent>This section can be toggled open and closed.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled Section</AccordionTrigger>
        <AccordionContent>This content is not accessible.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another Section</AccordionTrigger>
        <AccordionContent>This section is also available for interaction.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function AccordionBorders() {
  return (
    <Accordion defaultValue={["item-1"]} class="max-w-lg rounded-lg border px-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>What are your shipping options?</AccordionTrigger>
        <AccordionContent>
          We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on orders over $50.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How can I contact support?</AccordionTrigger>
        <AccordionContent>
          Reach us via email, live chat, or phone. We respond within 24 hours during business days.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function AccordionCard() {
  return (
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Subscription & Billing</CardTitle>
        <CardDescription>Common questions about your account, plans, payments, and cancellations.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={["plans"]}>
          <For each={billingItems}>
            {(item) => (
              <AccordionItem value={item.value}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            )}
          </For>
        </Accordion>
      </CardContent>
    </Card>
  )
}
