import "react-medium-image-zoom/dist/styles.css";
import Matomo from "@/components/Matomo";
import App from "@/components/App";

export default function Home() {
  return (
    <main className={"space-y-4 sm:space-y-7"}>
      <App />
      <Matomo />
    </main>
  );
}
