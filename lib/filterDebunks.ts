import { debunks } from "@/data/debunks";

const filterDebunks = (search: string, selectedTags: string[]) => {
  const splittedSearch = search.split(" ");

  return debunks.filter((debunk) =>
    splittedSearch.some(
      (searchItem) =>
        debunk.question.toLowerCase().includes(searchItem.toLowerCase()) ||
        debunk.answer.toLowerCase().includes(searchItem.toLowerCase()) ||
        (debunk.sources.some((source) => {
          if (typeof source === "object") {
            return (
              source.name.toLowerCase().includes(searchItem.toLowerCase()) ||
              source.url.toLowerCase().includes(searchItem.toLowerCase())
            );
          }
          return source.toLowerCase().includes(searchItem.toLowerCase());
        }) &&
          (selectedTags.length === 0 ||
            debunk.tags.some((tag) => selectedTags.includes(tag)))),
    ),
  );
};

export default filterDebunks;
