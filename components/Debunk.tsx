"use client";

import { Button } from "@/components/ui/button";
import CopyToClipboard from "@/components/CopyToClipboard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type Debunk } from "@/data/debunks";
import DebunkImage from "@/components/DebunkImage";
import { slugify } from "@/lib/utils";
import SendToClipboard from "@/components/SendToClipboard";
import React from "react";
import DebunkSource from "@/components/DebunkSource";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Debunk = ({ debunk }: { debunk: Debunk }) => {
  return (
    <div
      className={"flex h-full flex-col gap-1 rounded-2xl border bg-white p-4"}
      id={slugify(debunk.question)}
    >
      <div className={"flex flex-wrap gap-2"}>
        {debunk.tags
          .sort((a, b) => a.localeCompare(b))
          .map((tag) => (
            <Button
              variant={"secondary"}
              className={`h-auto cursor-default border px-2 py-0.5 text-xs`}
              key={tag}
            >
              {tag}
            </Button>
          ))}
      </div>
      <div className={"text-base font-bold sm:text-lg"}>{debunk.question}</div>
      <div
        className={"text-sm "}
        dangerouslySetInnerHTML={{ __html: debunk.answer }}
      />
      {debunk.images.length > 0 && (
        <div className={"w-full px-4 py-4 md:px-12"}>
          <Carousel className={"max-w-full"}>
            <CarouselContent>
              {debunk.images.map((image) => (
                <CarouselItem key={image}>
                  <DebunkImage src={image} alt={debunk.question} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {debunk.images.length > 1 && (
              <>
                <CarouselPrevious className={"-left-6 h-4 w-4 md:h-6 md:w-6"} />
                <CarouselNext className={"-right-6 h-4 w-4 md:h-6 md:w-6"} />
              </>
            )}
          </Carousel>
        </div>
      )}
      <div>
        <>
          {debunk.sources.slice(0, 3).map((source) => (
            <DebunkSource
              key={
                typeof source === "string"
                  ? debunk.question + source
                  : debunk.question + source.name
              }
              debunk={debunk}
              source={source}
            />
          ))}
          {debunk.sources.length > 3 && (
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className={"border-b-0"}>
                <AccordionTrigger className={"py-2 text-xs underline"}>
                  Voir plus
                </AccordionTrigger>
                <AccordionContent>
                  {debunk.sources.slice(3).map((source) => (
                    <DebunkSource
                      key={
                        typeof source === "string"
                          ? debunk.question + source
                          : debunk.question + source.name
                      }
                      debunk={debunk}
                      source={source}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </>
      </div>
      <div className={"mt-auto"}>
        <div className={"mt-2 flex items-center gap-2"}>
          <CopyToClipboard
            content={`${debunk.answer} (${debunk.sources.map((source) => (typeof source === "string" ? source : source.url))})`}
          />
          <SendToClipboard
            content={
              typeof window !== "undefined"
                ? window.location.origin +
                  "/idee-recue/" +
                  slugify(debunk.question)
                : ""
            }
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Debunk);
