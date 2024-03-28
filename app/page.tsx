import {
  CATEGORY_ANNEXES,
  CATEGORY_CAUSE,
  CATEGORY_CONSEQUENCES,
  CATEGORY_SOLUTIONS,
  debunks,
} from "@/data/debunks";
import Debunk from "@/components/Debunk";
import "react-medium-image-zoom/dist/styles.css";

export default function Home() {
  return (
    <main className={"space-y-16"}>
      <section className="relative mx-auto flex flex-col gap-2 py-8 md:gap-3 md:pb-10 md:pt-20">
        <h1 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 lg:text-6xl">
          Transitions
        </h1>
        <p className="mx-auto max-w-4xl text-center text-xl text-zinc-500 sm:text-xl">
          Explorer les idées reçues de la transition énergétique
        </p>
      </section>

      <section className={"container space-y-6"}>
        <div className={"space-y-10"}>
          <div className={"space-y-4"}>
            <h2 className={"text-3xl font-bold"}>Les solutions</h2>
            <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
              {debunks
                .filter((debunk) => debunk.category === CATEGORY_SOLUTIONS)
                .map((debunk, index) => (
                  <Debunk key={debunk.question} debunk={debunk} />
                ))}
            </div>
          </div>

          <div className={"space-y-4"}>
            <h2 className={"text-3xl font-bold"}>Les conséquences</h2>
            <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
              {debunks
                .filter((debunk) => debunk.category === CATEGORY_CONSEQUENCES)
                .map((debunk, index) => (
                  <Debunk key={debunk.question} debunk={debunk} />
                ))}
            </div>
          </div>

          <div className={"space-y-4"}>
            <h2 className={"text-3xl font-bold"}>Les causes</h2>
            <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
              {debunks
                .filter((debunk) => debunk.category === CATEGORY_CAUSE)
                .map((debunk, index) => (
                  <Debunk key={debunk.question} debunk={debunk} />
                ))}
            </div>
          </div>

          <div className={"space-y-4"}>
            <h2 className={"text-3xl font-bold"}>Les annexes</h2>
            <div className={"mb-96 grid gap-6 xl:grid-cols-2"}>
              {debunks
                .filter((debunk) => debunk.category === CATEGORY_ANNEXES)
                .map((debunk, index) => (
                  <Debunk key={debunk.question} debunk={debunk} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
