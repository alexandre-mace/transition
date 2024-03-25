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
import { type Debunk } from "@/data/debunks";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import DebunkImage from "@/components/DebunkImage";

const Debunk = ({ debunk }: { debunk: Debunk }) => {
  return (
    <div className={"flex flex-col gap-2 rounded-2xl border bg-white p-4"}>
      <div className={"text-lg font-bold"}>{debunk.question}</div>
      <div className={""}>{debunk.answer}</div>
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
          >
            {typeof source === "string" && (
              <Button
                asChild
                variant={"link"}
                className={
                  "h-auto whitespace-break-spaces p-0 text-muted-foreground"
                }
              >
                <Link href={source} target={"_blank"}>
                  🔗 {source}
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
                  🔗 {source.name}
                </Link>
              </Button>
            )}
          </div>
        ))}
      </div>
      <div className={"mt-auto"}>
        <div className={"mt-2"}>
          <CopyToClipboard
            content={`${debunk.answer} (${debunk.sources.map((source) => (typeof source === "string" ? source : source.url))})`}
          />
        </div>
      </div>
    </div>
  );
};

export default Debunk;
