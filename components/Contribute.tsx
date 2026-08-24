"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import "@fillout/react/style.css";
import { FilloutSliderEmbed } from "@fillout/react";

const Contribute = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button
        variant={"outline"}
        className={"text-xs sm:text-sm"}
        size={"sm"}
        onClick={() => setIsOpen(true)}
      >
        Suggestions 🗳️
      </Button>

      {isOpen && (
        <FilloutSliderEmbed
          filloutId="4YMtj3kp4Kus"
          inheritParameters
          parameters={{}}
          onClose={() => setIsOpen(false)}
          sliderDirection="right"
        />
      )}
    </div>
  );
};

export default Contribute;
