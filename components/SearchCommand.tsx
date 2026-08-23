"use client";

import {
  Command,
  CommandDialog,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { LinkIcon } from "lucide-react";
import { SearchTrigger } from "@/components/ui/search-trigger";
import React from "react";
import { Debunk, debunks } from "@/data/debunks";
import Link from "next/link";
import { slugify } from "@/lib/utils";

const SearchCommand = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <SearchTrigger onOpen={() => setOpen(true)} />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Rechercher..." />
          <CommandList
            renderEmptyState={() => (
              <div className="py-6 text-center text-sm text-muted-foreground">
                🤷
              </div>
            )}
          >
            {debunks.map((debunk) => (
              <CustomCommandItem
                setOpen={setOpen}
                debunk={debunk}
                key={"command" + debunk.question}
              />
            ))}
          </CommandList>
        </Command>
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
  return (
      <CommandItem
        href={"/idee-recue/" + slugify(debunk.question)}
        textValue={debunk.question}
        onAction={() => setOpen(false)}
        className={"data-disabled:opacity-100"}
      >
        <LinkIcon className="mr-2 h-4 w-4" />
        <div>{debunk.question}</div>
      </CommandItem>
  );
};

export default SearchCommand;
