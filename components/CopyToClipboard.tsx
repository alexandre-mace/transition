"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Clipboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CopyToClipboard = ({ content }: { content: string }) => {
  const [isCopying, setIsCopying] = useState(false);

  useEffect(() => {
    if (isCopying) {
      setTimeout(() => {
        setIsCopying(false);
      }, 1500);
    }
  }, [isCopying]);

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant={"outline"}
            className={"h-auto p-2"}
            onClick={() => {
              navigator.clipboard.writeText(content);
              setIsCopying(true);
            }}
          >
            <>
              {isCopying && <Check size={16} />}
              {!isCopying && <Clipboard size={16} />}
            </>
          </Button>
        }
      />
      <TooltipContent>Copier le contenu</TooltipContent>
    </Tooltip>
  );
};

export default CopyToClipboard;
