import { NotionPage } from "@/components/notion";
import { notion } from "@/notion";

const rootPageId = "a3d92eef15454a5fb20f3fae2d808f13";

async function getData(rootPageId: string) {
  return await notion.getPage(rootPageId);
}
const Sources = async () => {
  const data = await getData(rootPageId);

  return (
    <section className={"container space-y-6"}>
      <h2 className={"text-center text-3xl font-extrabold tracking-tight"}>
        Aller plus loin
      </h2>
      <NotionPage recordMap={data} rootPageId={rootPageId} />
    </section>
  );
};
