function Feature({ num, name, info }) {
  return (
    <div className="text-left">
      <h3 className="mb-4 rounded-bl-full rounded-tl-full bg-orange-100 text-sm lg:relative lg:bg-opacity-0 lg:text-base">
        <span className="mr-4 inline-block rounded-full bg-orange-800 px-6 text-base leading-[2.5] text-white lg:absolute lg:right-[calc(100%+1.75rem)] lg:top-1/2 lg:m-0 lg:-translate-y-1/2">
          {num}
        </span>
        {name}
      </h3>
      <p className="lg:max-w-[41.75ch]">{info}</p>
    </div>
  );
}
function About() {
  return (
    <section className="container mt-24 grid gap-14 lg:mt-32 lg:grid-cols-2 lg:gap-32">
      <div className="p-3.5 lg:p-0">
        <h2 className="mb-6 lg:mb-8">What's different about Manage?</h2>
        <p className="lg:max-w-[35ch]">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="flex flex-col gap-10 lg:items-end">
        <Feature
          num="01"
          name="Track company-wide progress"
          info="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
        />
        <Feature
          num="02"
          name="Advanced built-in reports"
          info="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
        />
        <Feature
          num="03"
          name="Everything you need in one place"
          info="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
        />
      </div>
    </section>
  );
}

export default About;
