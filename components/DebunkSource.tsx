import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { type Debunk } from "@/data/debunks";

const DebunkSource = ({
  source,
  debunk,
}: {
  source: string | { name: string; url: string };
  debunk: Debunk;
}) => (
  <div className={"flex gap-2 text-xs"}>
    <span className={"inline-block"}>🔗</span>{" "}
    {typeof source === "string" && (
      <Button
        asChild
        variant={"link"}
        className={
          "h-auto whitespace-pre-wrap break-all p-0 text-xs text-muted-foreground"
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
          "h-auto whitespace-pre-wrap break-all p-0 text-xs text-muted-foreground"
        }
      >
        <Link href={source.url} target={"_blank"}>
          {source.name}
        </Link>
      </Button>
    )}
  </div>
);

export default DebunkSource;
