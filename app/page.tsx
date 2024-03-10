import Image from "next/image";
import {notion} from "@/notion";
import {NotionPage} from "@/components/notion";

const rootPageId = "a3d92eef15454a5fb20f3fae2d808f13"

async function getData(rootPageId: string) {
  return await notion.getPage(rootPageId)
}
export default async function Home() {
  const data = await getData(rootPageId)

  return (
      <main className={""}>
          <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-64 h-screen"><h1
              className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight text-center">Transitions
          </h1><p className="mt-6 text-2xl leading-normal text-slate-600 text-center max-w-4xl mx-auto">Explorer les idées reçues de la transition énergétique</p>
              <div className="mt-6 sm:mt-56 flex justify-center space-x-6 mb-96"><a
                  className="bg-slate-900 hover:bg-slate-700 text-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
                  href="#content">C'est parti 👇</a>
              </div>
          </div>
          <div id={"content"}>
              <NotionPage recordMap={data} rootPageId={rootPageId}/>
          </div>
      </main>
  );
}
