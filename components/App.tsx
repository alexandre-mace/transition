"use client";

import { useEffect, useState } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchResults from "@/components/SearchResults";
import DefaultResultsWithCategories from "@/components/DefaultResultsWithCategories";
import SearchBar from "@/components/SearchBar";
import TagFilters from "@/components/TagFilters";

const App = () => {
  const [search, setSearch] = useState("");
  const [hasReset, setHasReset] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    if (hasReset) {
      setSelectedTags([]);
      setSearch("");
      setTimeout(() => {
        setHasReset(false);
      }, 100);
    }
  }, [hasReset]);

  return (
    <>
      <section className="container relative mx-auto flex flex-col pt-2 md:gap-2 md:pt-8">
        <h1 className="text-center text-lg font-extrabold tracking-tight text-slate-900 lg:text-6xl">
          Transitions
        </h1>
        <p className="mx-auto max-w-4xl text-center text-sm text-zinc-500 sm:text-base">
          Explorer les idées reçues de la transition vers la neutralité carbone
        </p>
      </section>

      <SearchBar hasReset={hasReset} setSearch={setSearch} />

      {search === "" && <TagFilters setSelectedTags={setSelectedTags} />}

      <section className={"container space-y-6"}>
        {(search !== "" || selectedTags.length > 0) && (
          <div className={"flex flex-col justify-center space-y-6"}>
            <Button
              variant={"secondary"}
              size={"sm"}
              className={`mx-auto h-auto gap-1 self-center px-2 py-1 text-xs`}
              onClick={() => {
                setHasReset(true);
              }}
            >
              Réinitialiser <RotateCcw size={13} />
            </Button>
            <SearchResults search={search} selectedTags={selectedTags} />
          </div>
        )}
        {search === "" && selectedTags.length === 0 && (
          <DefaultResultsWithCategories />
        )}
      </section>
    </>
  );
};

export default App;
