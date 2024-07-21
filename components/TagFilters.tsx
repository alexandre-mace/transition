import { tags } from "@/data/debunks";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const TagFilters = ({
  setSelectedTags,
}: {
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
}) => {
  const [localSelectedTags, setLocalSelectedTags] = useState<string[]>([]);
  const [valueDebounced] = useDebounce(localSelectedTags, 100);

  useEffect(() => {
    setSelectedTags(valueDebounced);
  }, [setSelectedTags, valueDebounced]);

  return (
    <section
      className={"container flex flex-wrap justify-center gap-2 px-2 md:px-4"}
    >
      {tags.map((tag) => (
        <Button
          variant={"secondary"}
          className={`h-auto border px-1 py-0.5 text-xs sm:px-2 sm:py-0.5 sm:text-sm ${localSelectedTags.includes(tag) ? "border-black" : ""}`}
          key={tag}
          onClick={() => {
            if (localSelectedTags.includes(tag)) {
              return setLocalSelectedTags(
                localSelectedTags.filter((selectedTag) => selectedTag !== tag),
              );
            }
            return setLocalSelectedTags([...localSelectedTags, tag]);
          }}
        >
          {tag}
        </Button>
      ))}
    </section>
  );
};

export default TagFilters;
