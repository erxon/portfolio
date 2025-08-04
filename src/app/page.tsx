import Navigation from "./components/Navigation";
import Home from "./sections/Home";

export default function Page() {
  return (
    <div className="items-center min-h-screen font-[family-name:var(--inter-font)]">
      <div className="p-12 px-24">
        <Navigation />
        <Home />
      </div>
    </div>
  );
}
