import { notion } from "@/notion";
import { NotionPage } from "@/components/notion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";

const rootPageId = "a3d92eef15454a5fb20f3fae2d808f13";

async function getData(rootPageId: string) {
  return await notion.getPage(rootPageId);
}
export default async function Home() {
  const data = await getData(rootPageId);

  return (
    <main className={""}>
      <div className="relative mx-auto flex max-w-5xl flex-col gap-4 py-20">
        <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
          Transitions
        </h1>
        <p className="mx-auto max-w-4xl text-center text-lg text-zinc-500 sm:text-xl">
          Explorer les idées reçues de la transition énergétique
        </p>
        <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
          <Button asChild>
            <Link href={"#content"}>C'est parti 👇</Link>
          </Button>
        </div>
      </div>
      <div id={"content"}>
        <NotionPage recordMap={data} rootPageId={rootPageId} />
      </div>
    </main>
  );
}
