"use client";

import { AccordionRoot } from "./accordion-root";
import { AccordionItem } from "./accordion-item";
import { AccordionHeader } from "./accordion-header";
import { AccordionTrigger } from "./accordion-trigger";
import { AccordionContent } from "./accordion-content";

const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});

export { Accordion };
