import { IllustrationIntro } from "../svg";

function Hero() {
  return (
    <section className="hero-section container mt-12 grid gap-8 lg:mt-28 lg:grid-cols-2 lg:items-center">
      <div className="lg:col-start-2 lg:col-end-3">
        <IllustrationIntro />
      </div>
      <div className="lg:col-start-1 lg:col-end-2 lg:row-start-1">
        <h1 className="mb-4 leading-tight lg:mb-9">
          Bring everyone together to build better products.
        </h1>
        <p className="mb-8 lg:mb-11 lg:max-w-[32ch]">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="btn bg-orange-800 text-white shadow-orange-600 hover:bg-orange-600">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
