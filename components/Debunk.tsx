import { Button } from "@/components/ui/button";
import Link from "next/link";
import CopyToClipboard from "@/components/CopyToClipboard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type Debunk, tags } from "@/data/debunks";
import DebunkImage from "@/components/DebunkImage";
import { slugify } from "@/lib/utils";
import SendToClipboard from "@/components/SendToClipboard";

const Debunk = ({ debunk }: { debunk: Debunk }) => {
  return (
    <div
      className={"flex flex-col gap-2 rounded-2xl border bg-white p-4"}
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
      <div className={"text-lg font-bold"}>{debunk.question}</div>
      <div className={""} dangerouslySetInnerHTML={{ __html: debunk.answer }} />
      {debunk.images.length > 0 && (
        <div className={"px-12 py-4"}>
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
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </div>
      )}
      <div>
        {debunk.sources.map((source) => (
          <div
            key={
              typeof source === "string"
                ? debunk.question + source
                : debunk.question + source.name
            }
            className={"flex gap-2"}
          >
            <span className={"inline-block"}>🔗</span>{" "}
            {typeof source === "string" && (
              <Button
                asChild
                variant={"link"}
                className={
                  "h-auto whitespace-break-spaces p-0 text-muted-foreground"
                }
              >
                <Link href={source} target={"_blank"}>
                  {source}
                </Link>
              </Button>
            )}
            {typeof source === "object" && (
              <Button
                asChild
                variant={"link"}
                className={
                  "h-auto whitespace-break-spaces p-0 text-muted-foreground"
                }
              >
                <Link href={source.url} target={"_blank"}>
                  {source.name}
                </Link>
              </Button>
            )}
          </div>
        ))}
      </div>
      <div className={"mt-auto"}>
        <div className={"mt-2 flex items-center gap-2"}>
          <CopyToClipboard
            content={`${debunk.answer} (${debunk.sources.map((source) => (typeof source === "string" ? source : source.url))})`}
          />
          <SendToClipboard
            content={
              typeof window !== "undefined"
                ? window.location.origin + "#" + slugify(debunk.question)
                : ""
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Debunk;
