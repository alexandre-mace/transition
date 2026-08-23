"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Send } from "lucide-react";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";

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
    <TooltipTrigger>
          <Button
            variant={"outline"}
            className={"h-auto p-2"}
            onPress={() => {
              navigator.clipboard.writeText(content);
              setIsCopying(true);
            }}
          >
            <>
              {isCopying && <Check size={16} />}
              {!isCopying && <Send size={16} />}
            </>
          </Button>
        <Tooltip>Copier le lien</Tooltip>
    </TooltipTrigger>
  );
};

export default SendToClipboard;
