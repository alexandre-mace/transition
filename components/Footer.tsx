import { MadeWithLove } from "@/components/made-with-love";

const Footer = () => {
  return (
    <footer className={"mt-auto pt-20 text-center sm:pt-56"}>
      <div className={"mx-auto text-lg font-bold md:text-3xl"}>Transitions</div>
      <MadeWithLove className="mt-10 pb-10 md:mt-20" />
    </footer>
  );
};

export default Footer;
