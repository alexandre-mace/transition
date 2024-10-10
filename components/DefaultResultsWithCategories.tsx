import {
  CATEGORY_ANNEXES,
  CATEGORY_CAUSE,
  CATEGORY_CONSEQUENCES,
  CATEGORY_SOLUTIONS,
  debunks,
} from "@/data/debunks";
const Debunk = lazy(() => import("@/components/Debunk"));
import React, { lazy, Suspense } from "react";
import RenderOnViewportEntry from "@/components/RenderOnViewportEntry";

const solutionDebunks = debunks.filter(
  (debunk) => debunk.category === CATEGORY_SOLUTIONS,
);
const consequencesDebunks = debunks.filter(
  (debunk) => debunk.category === CATEGORY_CONSEQUENCES,
);
const causeDebunks = debunks.filter(
  (debunk) => debunk.category === CATEGORY_CAUSE,
);
const annexesDebunks = debunks.filter(
  (debunk) => debunk.category === CATEGORY_ANNEXES,
);

const config = [
  {
    label: "Les solutions",
    debunks: solutionDebunks,
  },
  {
    label: "Les conséquences",
    debunks: consequencesDebunks,
  },
  {
    label: "Les causes",
    debunks: causeDebunks,
  },
  {
    label: "Les annexes",
    debunks: annexesDebunks,
  },
];

const DefaultResultsWithCategories = () => {
  return (
    <div className={"mt-8 space-y-10 sm:mt-0"}>
      {config.map((item) => (
        <div key={item.label} className={"space-y-1 sm:space-y-2"}>
          <h2 className={"text-base font-bold sm:text-lg"}>{item.label}</h2>
          <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
            {item.debunks.map((debunk, index) => (
              <RenderOnViewportEntry
                key={"default" + debunk.question}
                threshold={0.25}
              >
                <Debunk debunk={debunk} />
              </RenderOnViewportEntry>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(DefaultResultsWithCategories);
