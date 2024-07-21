import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchBar = ({
  setSearch,
}: {
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  const [value, setValue] = useState("");
  const [valueDebounced] = useDebounce(value, 200);

  useEffect(() => {
    setSearch(valueDebounced);
  }, [setSearch, valueDebounced]);

  return (
    <section className={"container flex justify-center"}>
      <div className={"relative flex"}>
        <Input
          placeholder={"Je recherche"}
          className={
            "z-10 max-w-sm bg-white text-center font-medium placeholder:font-medium sm:min-w-80"
          }
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Search
          size={18}
          color={"#71717A"}
          className={"absolute left-4 top-1/2 z-10 -translate-y-1/2"}
        />
      </div>
    </section>
  );
};

export default SearchBar;
