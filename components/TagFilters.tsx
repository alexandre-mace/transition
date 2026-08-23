import { tags } from "@/data/debunks";
import { TagFilterGroup, TagFilterItem } from "@/components/tag-filter";
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
    <section className={"container px-2 md:px-4"}>
      <TagFilterGroup
        selectionMode="multiple"
        aria-label="Filtrer par tag"
        selectedKeys={localSelectedTags}
        onSelectionChange={(keys) =>
          setLocalSelectedTags(Array.from(keys, String))
        }
        className="justify-center"
      >
        {tags.map((tag) => (
          <TagFilterItem key={tag} id={tag}>
            {tag}
          </TagFilterItem>
        ))}
      </TagFilterGroup>
    </section>
  );
};

export default TagFilters;
