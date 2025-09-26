import styles from "./Home.module.scss";
import { bindClass } from "@utils/classnames.tsx";
import { About, Activity, Admission, Campus, News, Program } from "./section";
import Slider from "./section/Slider";

const c = bindClass(styles);

function Home() {
  return (
    <div className={c("home", "p-lg-5")}>
      {/* Section: Slider */}
      <Slider />
      {/* Body */}
      <main className="container px-2 px-md-5">
        <div className={c("inner", "px-lg-5")}>
          {/* Section: about */}
          <About />
          {/* Section: program */}
          <Program />
          {/* Section: activity  */}
          <Activity />
          {/* Section: news */}
          <News />
          {/* Section: campus */}
          <Campus />
          {/* Section: Admission */}
          <Admission />
        </div>
      </main>
    </div>
  );
}

export default Home;
