"use client";

import RenderOnViewportEntry from "@/components/RenderOnViewportEntry";
import React from "react";
import Debunk from "@/components/Debunk";
import { type Debunk as DebunkType } from "@/data/debunks";

const SimilarDebunks = ({
  similarDebunks,
}: {
  similarDebunks: DebunkType[];
}) => {
  return (
    <section className={"container space-y-4"}>
      <h2 className={"text-lg font-bold sm:text-2xl"}>Découvrir également</h2>
      <div className={"grid gap-4 xl:grid-cols-2"}>
        {similarDebunks.slice(0, 2).map((similarDebunk, index) => (
          <div key={similarDebunk.question + index} className={""}>
            <RenderOnViewportEntry
              key={"default" + similarDebunk.question}
              threshold={0.25}
            >
              <Debunk debunk={similarDebunk} />
            </RenderOnViewportEntry>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarDebunks;
