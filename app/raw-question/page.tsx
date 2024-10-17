import { debunks } from "@/data/debunks";

const Raw = () => {
  return (
    <div className={"container space-y-4"}>
      {debunks.map((debunk) => (
        <div key={debunk.question} className={""}>
          <h2 className={"text-xl"}>{debunk.question}</h2>
        </div>
      ))}
    </div>
  );
};

export default Raw;
