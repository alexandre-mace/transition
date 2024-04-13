import { debunks } from "@/data/debunks";

const Raw = () => {
  return (
    <div className={"container space-y-4"}>
      {debunks.map((debunk) => (
        <div key={debunk.question} className={""}>
          <h2 className={"text-xl"}>{debunk.question}</h2>
          <h3>Réponse</h3>
          <div
            className={""}
            dangerouslySetInnerHTML={{ __html: debunk.answer }}
          />
          <div>
            <h3 className={"text-lg"}>Images</h3>
            <ul className={"list-disc pl-3"}>
              {debunk.images.map((image) => (
                <li key={debunk.question + image}>{image}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={"text-lg"}>Sources</h3>
            <ul className={"list-disc pl-3"}>
              {debunk.sources.map((source) => (
                <li
                  key={
                    typeof source === "string"
                      ? debunk.question + source
                      : debunk.question + source.name
                  }
                >
                  {" "}
                  {typeof source === "string" && <span>{source}</span>}
                  {typeof source === "object" && <span>{source.name}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className={""}>
            <div>
              <h3 className={"text-lg"}>Étiquettes</h3>
              {debunk.tags
                .sort((a, b) => a.localeCompare(b))
                .map((tag) => (
                  <span key={"étiquette" + tag + debunk.question}>{tag}</span>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Raw;
