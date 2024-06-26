const Footer = () => {
  return (
    <footer className={"mt-28 text-center sm:mt-56"}>
      <div className={"mx-auto text-3xl font-bold"}>Transitions</div>
      <div className={"mx-auto mt-20 pb-10"}>
        Fait avec amour par{" "}
        <a
          className={"ml-1 underline hover:text-slate-700"}
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
