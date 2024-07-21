import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const SearchBar = ({
  hasReset,
  setSearch,
}: {
  hasReset: boolean;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  const [value, setValue] = useState("");
  const [valueDebounced] = useDebounce(value, 200);

  useEffect(() => {
    setSearch(valueDebounced);
  }, [setSearch, valueDebounced]);

  if (hasReset && value !== "") {
    setValue("");
  }

  return (
    <section className={"container "}>
      <div className={"flex justify-center"}>
        <div className={"relative flex w-full md:w-fit"}>
          <Input
            placeholder={"Je recherche"}
            className={
              "z-10 w-full bg-white text-center font-medium placeholder:font-medium sm:min-w-80 md:max-w-sm"
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
      </div>
    </section>
  );
};

export default SearchBar;
