import {
  CATEGORY_ANNEXES,
  CATEGORY_CAUSE,
  CATEGORY_CONSEQUENCES,
  CATEGORY_SOLUTIONS,
  debunks,
} from "@/data/debunks";
import Debunk from "@/components/Debunk";

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

const DefaultResultsWithCategories = () => {
  return (
    <div className={"mt-8 space-y-10 sm:mt-0"}>
      <div className={"space-y-1 sm:space-y-4"}>
        <h2 className={"text-2xl font-bold sm:text-3xl"}>Les solutions</h2>
        <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
          {solutionDebunks.map((debunk, index) => (
            <Debunk key={debunk.question} debunk={debunk} />
          ))}
        </div>
      </div>

      <div className={"space-y-4"}>
        <h2 className={"text-2xl font-bold sm:text-3xl"}>Les conséquences</h2>
        <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
          {consequencesDebunks.map((debunk, index) => (
            <Debunk key={debunk.question} debunk={debunk} />
          ))}
        </div>
      </div>

      <div className={"space-y-4"}>
        <h2 className={"text-2xl font-bold sm:text-3xl"}>Les causes</h2>
        <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
          {causeDebunks.map((debunk, index) => (
            <Debunk key={debunk.question} debunk={debunk} />
          ))}
        </div>
      </div>

      <div className={"space-y-4"}>
        <h2 className={"text-3xl font-bold"}>Les annexes</h2>
        <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
          {annexesDebunks.map((debunk, index) => (
            <Debunk key={debunk.question} debunk={debunk} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DefaultResultsWithCategories;
