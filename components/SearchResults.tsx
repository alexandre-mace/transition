import { CATEGORY_SOLUTIONS, debunks } from "@/data/debunks";
import Debunk from "@/components/Debunk";
import { Dispatch, SetStateAction } from "react";

const SearchResults = ({
  search,
  setSearch,
  selectedTags,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  selectedTags: string[];
}) => {
  let foundDebunks = debunks.filter(
    (debunk) =>
      debunk.question.toLowerCase().includes(search.toLowerCase()) ||
      debunk.answer.toLowerCase().includes(search.toLowerCase()) ||
      debunk.sources.some((source) => {
        if (typeof source === "object") {
          return (
            source.name.toLowerCase().includes(search.toLowerCase()) ||
            source.url.toLowerCase().includes(search.toLowerCase())
          );
        }
        return source.toLowerCase().includes(search.toLowerCase());
      }),
  );

  if (selectedTags.length > 0) {
    foundDebunks = foundDebunks.filter((debunk) =>
      debunk.tags.some((tag) => selectedTags.includes(tag)),
    );
  }

  return (
    <div className={"space-y-10"}>
      <div className={"space-y-4"}>
        {foundDebunks.length > 0 && (
          <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
            {foundDebunks.map((debunk, index) => (
              <Debunk key={debunk.question} debunk={debunk} />
            ))}
          </div>
        )}
        {foundDebunks.length === 0 && (
          <div className={"mx-auto text-center text-7xl"}>🤷</div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
