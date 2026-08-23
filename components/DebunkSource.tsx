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
  <div className={"flex min-w-0 gap-2 text-xs"}>
    <span className={"inline-block"}>🔗</span>{" "}
    {typeof source === "string" && (
      <LinkButton
        href={source}
        target="_blank"
        variant={"link"}
        className={
          "h-auto min-w-0 flex-1 justify-start whitespace-pre-wrap break-all p-0 text-left text-xs text-muted-foreground"
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
          "h-auto min-w-0 flex-1 justify-start whitespace-pre-wrap break-all p-0 text-left text-xs text-muted-foreground"
        }
      >
        {source.name}
      </LinkButton>
    )}
  </div>
);

export default DebunkSource;
