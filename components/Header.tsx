import SearchCommand from "@/components/SearchCommand";
import Contribute from "@/components/Contribute";
import { Brand } from "@/components/brand";
import { ClimateLabBadge } from "@/components/climatelab-badge";

const Header = () => (
  <header className="flex flex-wrap items-center justify-between gap-2 p-2">
    <div className={"flex flex-wrap gap-2"}>
      <Brand
        name="Transitions"
        logo="https://em-content.zobj.net/source/apple/391/flashlight_1f526.png"
        className="hidden sm:inline-flex"
      />
    </div>
    <div className={"flex items-center gap-2 sm:gap-10"}>
      <div className={"hidden md:inline-block"}>
        <SearchCommand />
      </div>
      <div>
        <Contribute />
      </div>
      <ClimateLabBadge />
    </div>
  </header>
);

export default Header;
