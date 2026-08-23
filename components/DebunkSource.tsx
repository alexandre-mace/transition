import { LinkButton } from "@/components/ui/button";
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
      <LinkButton
        href={source}
        target="_blank"
        variant={"link"}
        className={
          "h-auto whitespace-pre-wrap break-all p-0 text-xs text-muted-foreground"
        }
      >
        {source}
      </LinkButton>
    )}
    {typeof source === "object" && (
      <LinkButton
        href={source.url}
        target="_blank"
        variant={"link"}
        className={
          "h-auto whitespace-pre-wrap break-all p-0 text-xs text-muted-foreground"
        }
      >
        {source.name}
      </LinkButton>
    )}
  </div>
);

export default DebunkSource;
