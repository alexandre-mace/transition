"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { LinkIcon } from "lucide-react";
import { SearchTrigger } from "@/components/ui/search-trigger";
import React from "react";
import { useRouter } from "next/navigation";
import { Debunk, debunks } from "@/data/debunks";
import { slugify } from "@/lib/utils";

const SearchCommand = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <SearchTrigger onOpen={() => setOpen(true)} />
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Rechercher..." />
          <CommandList>
            <CommandEmpty className="text-muted-foreground">🤷</CommandEmpty>
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
  const router = useRouter();

  return (
      <CommandItem
        value={debunk.question}
        onSelect={() => {
          setOpen(false);
          router.push("/idee-recue/" + slugify(debunk.question));
        }}
      >
        <LinkIcon className="mr-2 h-4 w-4" />
        <div>{debunk.question}</div>
      </CommandItem>
  );
};

export default SearchCommand;
