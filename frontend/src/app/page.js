import LeftDash from "./components/LeftDash/LeftDash";
import RightDash from "./components/RightDash/RightDash";

export default function Home() {
  return (
    <div className="flex flex-wrap">
        <LeftDash />
        <RightDash />
    </div>

  );
}
