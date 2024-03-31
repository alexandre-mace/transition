"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Send } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SendToClipboard = ({ content }: { content: string }) => {
  const [isCopying, setIsCopying] = useState(false);

  useEffect(() => {
    if (isCopying) {
      setTimeout(() => {
        setIsCopying(false);
      }, 1500);
    }
  }, [isCopying]);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
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
              {!isCopying && <Send size={16} />}
            </>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copier le lien</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SendToClipboard;
