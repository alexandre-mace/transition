import Image from "next/image";

const Header = () => (
  <header className="flex flex-wrap justify-between">
    <div className={"flex flex-wrap gap-2 p-2"}>
      <a href="/" className={"p-2 font-medium"}>
        <Image
          src={
            "https://em-content.zobj.net/source/apple/391/flashlight_1f526.png"
          }
          alt={"Lampe torche"}
          height={20}
          width={20}
          className={"inline-block"}
        />{" "}
        Transitions
      </a>
    </div>
    <div className="md:text-md flex items-center p-2 text-sm">
      <div className={"mr-3 hidden md:inline-block"}>un outil du</div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center rounded-xl bg-zinc-100 px-4 py-2 transition-all md:hover:bg-zinc-200"
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
      </a>
    </div>
  </header>
);

export default Header;
