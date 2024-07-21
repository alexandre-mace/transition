const Footer = () => {
  return (
    <footer className={"mt-20 text-center sm:mt-56"}>
      <div className={"mx-auto text-lg font-bold md:text-3xl"}>Transitions</div>
      <div className={"mx-auto mt-10 pb-10 text-sm md:mt-20 md:text-base"}>
        Fait avec amour par{" "}
        <a
          className={"ml-1 inline-block underline hover:text-slate-700"}
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/alexandre-mace"
        >
          alexandre-mace
        </a>
      </div>
    </footer>
  );
};

export default Footer;
