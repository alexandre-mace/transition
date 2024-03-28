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

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  return (
    <main className={"space-y-10"}>
      <section className="relative mx-auto flex flex-col gap-2 py-8 md:gap-3">
        <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 lg:text-6xl">
          Transitions
        </h1>
        <p className="mx-auto max-w-4xl text-center text-xl text-zinc-500 sm:text-xl">
          Explorer les idées reçues de la transition énergétique
        </p>
      </section>

      <section className={"container flex justify-center"}>
        <Input
          placeholder={"Je recherche"}
          className={"z-10 max-w-sm bg-white"}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </section>

      <section className={"container flex flex-wrap gap-2"}>
        {tags
          .sort((a, b) => a.localeCompare(b))
          .map((tag) => (
            <Button
              variant={"secondary"}
              className={`h-auto border px-2 py-1 text-xs ${selectedTags.includes(tag) ? "border-black" : ""}`}
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
              className={`mx-auto h-auto self-center px-2 py-1 text-xs`}
              onClick={() => {
                setSelectedTags([]);
                setSearch("");
              }}
            >
              Réinitialiser
            </Button>
            <SearchResults
              search={search}
              setSearch={setSearch}
              selectedTags={selectedTags}
            />
          </div>
        )}
        {search === "" && (
          <div className={"space-y-10"}>
            <div className={"space-y-4"}>
              <h2 className={"text-3xl font-bold"}>Les solutions</h2>
              <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
                {debunks
                  .filter((debunk) => debunk.category === CATEGORY_SOLUTIONS)
                  .map((debunk, index) => (
                    <Debunk key={debunk.question} debunk={debunk} />
                  ))}
              </div>
            </div>

            <div className={"space-y-4"}>
              <h2 className={"text-3xl font-bold"}>Les conséquences</h2>
              <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
                {debunks
                  .filter((debunk) => debunk.category === CATEGORY_CONSEQUENCES)
                  .map((debunk, index) => (
                    <Debunk key={debunk.question} debunk={debunk} />
                  ))}
              </div>
            </div>

            <div className={"space-y-4"}>
              <h2 className={"text-3xl font-bold"}>Les causes</h2>
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
    </main>
  );
}
