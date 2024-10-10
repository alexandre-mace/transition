"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { LinkIcon } from "lucide-react";
import React, { useRef } from "react";
import { Debunk, debunks } from "@/data/debunks";
import Link from "next/link";
import { slugify } from "@/lib/utils";

const SearchCommand = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Recherche rapide{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Rechercher..." />
        <CommandList>
          <CommandEmpty>🤷</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {debunks.map((debunk, key) => (
              <CustomCommandItem
                setOpen={setOpen}
                debunk={debunk}
                key={"command" + debunk.question}
              />
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

const CustomCommandItem = ({
  debunk,
  setOpen,
}: {
  debunk: Debunk;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Link
      ref={ref}
      href={"/idee-recue/" + slugify(debunk.question)}
      onClick={() => setOpen(false)}
    >
      <CommandItem
        onSelect={(value) => ref?.current?.click()}
        className={"data-[disabled]:opacity-100"}
      >
        <LinkIcon className="mr-2 h-4 w-4" />
        <div>{debunk.question}</div>
      </CommandItem>
    </Link>
  );
};

export default SearchCommand;
