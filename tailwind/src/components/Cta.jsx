function Cta() {
  return (
    <section className="mt-12 bg-orange-800 bg-ctaMobile bg-no-repeat py-16 lg:mt-44 lg:bg-ctaDesktop lg:bg-cover">
      <div className="container grid gap-8 lg:grid-cols-2 lg:gap-16">
        <h2 className="text-4xl text-white lg:text-[2.5rem]">
          Simplify how your team works today.
        </h2>
        <div className="lg:flex lg:items-center lg:justify-end">
          <button className="btn bg-white text-orange-800 hover:bg-opacity-95">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
