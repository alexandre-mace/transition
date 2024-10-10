import { debunks } from "@/data/debunks";

const filterDebunks = (search: string, selectedTags: string[]) => {
  let splittedSearch = search.split(" ");
  splittedSearch = splittedSearch.filter(
    (splittedSearchText) => splittedSearchText !== "",
  );

  return debunks.filter((debunk) => {
    if (splittedSearch.length > 0) {
      return splittedSearch.some((searchItem) => {
        return (
          debunk.question.toLowerCase().includes(searchItem.toLowerCase()) ||
          debunk.answer.toLowerCase().includes(searchItem.toLowerCase()) ||
          debunk.sources.some((source) => {
            if (typeof source === "object") {
              return (
                source.name.toLowerCase().includes(searchItem.toLowerCase()) ||
                source.url.toLowerCase().includes(searchItem.toLowerCase())
              );
            }
            return source.toLowerCase().includes(searchItem.toLowerCase());
          })
        );
      });
    }

    if (splittedSearch.length === 0) {
      return debunk.tags.some((tag) => selectedTags.includes(tag));
    }
  });
};

export default filterDebunks;
