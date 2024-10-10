import Image from "next/image";
import SearchCommand from "@/components/SearchCommand";
import Contribute from "@/components/Contribute";
import Link from "next/link";

const Header = () => (
  <header className="flex flex-wrap items-center justify-between gap-2 p-2">
    <div className={"flex flex-wrap gap-2"}>
      <a
        href="/"
        className={
          "hidden gap-2 text-sm font-medium sm:inline-flex sm:text-base"
        }
      >
        <Image
          src={
            "https://em-content.zobj.net/source/apple/391/flashlight_1f526.png"
          }
          alt={"Lampe torche"}
          height={20}
          width={20}
          className={"inline-block h-4 w-auto shrink-0 sm:h-5"}
        />{" "}
        Transitions
      </a>
    </div>
    <div className={"flex items-center gap-2 sm:gap-10"}>
      <div className={"hidden md:inline-block"}>
        <SearchCommand />
      </div>
      <div>
        <Contribute />
      </div>
      <div className="flex items-center text-xs md:text-sm">
        <div className={"mr-3 hidden md:inline-block"}>un outil du</div>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center rounded-lg bg-zinc-100 px-3 py-1 font-medium transition-all sm:px-4 sm:py-2 md:hover:bg-zinc-200"
          href="https://climatelab.fr"
        >
          <Image
            className="logo-img mr-1"
            src="https://em-content.zobj.net/thumbs/240/apple/285/alembic_2697-fe0f.png"
            alt="Alambic"
            width="27"
            height="27"
          />{" "}
          ClimateLab
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
