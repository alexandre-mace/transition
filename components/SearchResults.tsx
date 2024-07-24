import RenderOnViewportEntry from "@/components/RenderOnViewportEntry";
const Debunk = lazy(() => import("@/components/Debunk"));
import React, { lazy, Suspense, useMemo } from "react";
import filterDebunks from "@/lib/filterDebunks";

const SearchResults = ({
  search,
  selectedTags,
}: {
  search: string;
  selectedTags: string[];
}) => {
  const filteredDebunks = useMemo(
    () => filterDebunks(search, selectedTags),
    [search, selectedTags],
  );

  return (
    <div className={"space-y-10"}>
      <div className={"space-y-4"}>
        {filteredDebunks.length > 0 && (
          <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
            {filteredDebunks.slice(0, 5).map((debunk, index) => (
              <RenderOnViewportEntry
                key={"default" + debunk.question}
                threshold={0.25}
              >
                {" "}
                <Debunk key={debunk.question} debunk={debunk} />
              </RenderOnViewportEntry>
            ))}
          </div>
        )}
        {filteredDebunks.length === 0 && (
          <div className={"mx-auto text-center text-7xl"}>🤷</div>
        )}
      </div>
    </div>
  );
};

export default React.memo(SearchResults);
