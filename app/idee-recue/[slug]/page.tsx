"use client";

import Matomo from "@/components/Matomo";
import { debunks } from "@/data/debunks";
import { slugify } from "@/lib/utils";
import Debunk from "@/components/Debunk";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "react-medium-image-zoom/dist/styles.css";

export default function Page({ params }: { params: { slug: string } }) {
  const debunk = debunks.find(
    (debunk) => slugify(debunk.question) === slugify(params.slug),
  );

  if (typeof debunk === "undefined") {
    return null;
  }

  return (
    <main className={"space-y-4 sm:space-y-7"}>
      <section className={"container pt-20"}>
        <div className={"mx-auto max-w-2xl"}>
          <Debunk key={debunk.question} debunk={debunk} />
        </div>
      </section>
      <section className={"flex justify-center"}>
        <Button asChild>
          <Link href={"/"}>Découvrir les autres idées reçues</Link>
        </Button>
      </section>
      <Matomo />
    </main>
  );
}
