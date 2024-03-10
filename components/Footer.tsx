const Footer = () => {
  return (
    <footer className={"h-96 pt-64 mt-40 text-center"}>
      <div className={"mx-auto text-3xl font-medium"}>
        Le climat en 10 minutes ⏳
      </div>
      <div className={"mx-auto mt-32 pb-6"}>
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
