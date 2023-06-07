function Feature({ num, name, info }) {
  return (
    <div>
      <h3>
        <span>{num}</span>
        {name}
      </h3>
      <p>{info}</p>
    </div>
  );
}
function About() {
  return (
    <section className="container grid">
      <div>
        <h2>What's different about Manage?</h2>
        <p>
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="flex">
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

    // <section class="about-section">
    //   <div class="container grid">

    //     <div class="container about__content">
    //       <h2 class="about__heading">What's different about Manage?</h2>
    //       <p class="about__info">
    //         Manage provides all the functionality your team needs, without
    //         the complexity. Our software is tailor-made for modern digital
    //         product teams.
    //       </p>
    //     </div>

    //     <div class="about__feature-list flex">
    //       <div class="about__feature">
    //         <h3 class="feature__heading">
    //           <span>01</span>Track company-wide progress
    //         </h3>
    //         <p class="feature__info">
    //           See how your day-to-day tasks fit into the wider vision. Go
    //           from tracking progress at the milestone level all the way done
    //           to the smallest of details. Never lose sight of the bigger
    //           picture again.
    //         </p>
    //       </div>

    //       <div class="about__feature">
    //         <h3 class="feature__heading">
    //           <span>02</span>Advanced built-in reports
    //         </h3>
    //         <p class="feature__info">
    //           Set internal delivery estimates and track progress toward
    //           company goals. Our customisable dashboard helps you build out
    //           the reports you need to keep key stakeholders informed.
    //         </p>
    //       </div>

    //       <div class="about__feature">
    //         <h3 class="feature__heading">
    //           <span>03</span>Everything you need in one place
    //         </h3>
    //         <p class="feature__info">
    //           Stop jumping from one service to another to communicate, store
    //           files, track tasks and share documents. Manage offers an
    //           all-in-one team productivity solution.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

export default About;
