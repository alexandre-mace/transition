"use client";

import {
  CATEGORY_ANNEXES,
  CATEGORY_CAUSE,
  CATEGORY_CONSEQUENCES,
  CATEGORY_SOLUTIONS,
  debunks,
  tags,
} from "@/data/debunks";
import Debunk from "@/components/Debunk";
import "react-medium-image-zoom/dist/styles.css";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import SearchResults from "@/components/SearchResults";
import { Button } from "@/components/ui/button";
import { RotateCcw, Search } from "lucide-react";
import Matomo from "@/components/Matomo";

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <main className={"space-y-4 sm:space-y-7"}>
      <section className="relative mx-auto flex flex-col gap-2 pt-8">
        <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 lg:text-6xl">
          Transitions
        </h1>
        <p className="mx-auto max-w-4xl text-center text-sm text-zinc-500 sm:text-base">
          Explorer les idées reçues de la transition vers la neutralité carbone
        </p>
      </section>

      <section className={"container flex justify-center"}>
        <div className={"relative flex"}>
          <Input
            placeholder={"Je recherche"}
            className={
              "z-10 max-w-sm bg-white text-center font-medium placeholder:font-medium sm:min-w-80"
            }
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <Search
            size={18}
            color={"#71717A"}
            className={"absolute left-4 top-1/2 z-10 -translate-y-1/2"}
          />
        </div>
      </section>

      <section className={"container flex flex-wrap justify-center gap-2"}>
        {tags
          .sort((a, b) => a.localeCompare(b))
          .map((tag) => (
            <Button
              variant={"secondary"}
              className={`h-auto border px-1 py-0.5 text-xs sm:px-2 sm:py-0.5 sm:text-sm ${selectedTags.includes(tag) ? "border-black" : ""}`}
              key={tag}
              onClick={() => {
                if (selectedTags.includes(tag)) {
                  return setSelectedTags(
                    selectedTags.filter((selectedTag) => selectedTag !== tag),
                  );
                }
                return setSelectedTags([...selectedTags, tag]);
              }}
            >
              {tag}
            </Button>
          ))}
      </section>

      <section className={"container space-y-6"}>
        {(search !== "" || selectedTags.length > 0) && (
          <div className={"flex flex-col justify-center space-y-6"}>
            <Button
              variant={"secondary"}
              className={`mx-auto h-auto gap-1 self-center px-2 py-1 text-sm`}
              onClick={() => {
                setSelectedTags([]);
                setSearch("");
              }}
            >
              Réinitialiser <RotateCcw size={13} />
            </Button>
            <SearchResults
              search={search}
              setSearch={setSearch}
              selectedTags={selectedTags}
            />
          </div>
        )}
        {search === "" && selectedTags.length === 0 && (
          <div className={"mt-8 space-y-10 sm:mt-0"}>
            <div className={"space-y-1 sm:space-y-4"}>
              <h2 className={"text-2xl font-bold sm:text-3xl"}>
                Les solutions
              </h2>
              <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
                {debunks
                  .filter((debunk) => debunk.category === CATEGORY_SOLUTIONS)
                  .map((debunk, index) => (
                    <Debunk key={debunk.question} debunk={debunk} />
                  ))}
              </div>
            </div>

            <div className={"space-y-4"}>
              <h2 className={"text-2xl font-bold sm:text-3xl"}>
                Les conséquences
              </h2>
              <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
                {debunks
                  .filter((debunk) => debunk.category === CATEGORY_CONSEQUENCES)
                  .map((debunk, index) => (
                    <Debunk key={debunk.question} debunk={debunk} />
                  ))}
              </div>
            </div>

            <div className={"space-y-4"}>
              <h2 className={"text-2xl font-bold sm:text-3xl"}>Les causes</h2>
              <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
                {debunks
                  .filter((debunk) => debunk.category === CATEGORY_CAUSE)
                  .map((debunk, index) => (
                    <Debunk key={debunk.question} debunk={debunk} />
                  ))}
              </div>
            </div>

            <div className={"space-y-4"}>
              <h2 className={"text-3xl font-bold"}>Les annexes</h2>
              <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
                {debunks
                  .filter((debunk) => debunk.category === CATEGORY_ANNEXES)
                  .map((debunk, index) => (
                    <Debunk key={debunk.question} debunk={debunk} />
                  ))}
              </div>
            </div>
          </div>
        )}
      </section>
      <Matomo />
    </main>
  );
}
