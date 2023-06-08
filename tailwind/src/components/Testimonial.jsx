import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import avatarAli from "../assets/image/avatar-ali.png";
import avatarAnisha from "../assets/image/avatar-anisha.png";
import avatarRichard from "../assets/image/avatar-richard.png";
import avatarShanai from "../assets/image/avatar-shanai.png";

register();

function Testimonial() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    // swiperElRef.current.addEventListener("progress", (e) => {
    //   const [swiper, progress] = e.detail;
    //   console.log(progress);
    // });
    // swiperElRef.current.addEventListener("slidechange", (e) => {
    //   console.log("slide changed");
    // });
    // const swiper = new Swiper(".swiper", {
    //   loop: true,
    //   slidesPerView: "auto",
    //   centeredSlides: true,
    //   spaceBetween: 30,
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });
  }, []);

  return (
    <section className="mt-20 text-center lg:mt-40">
      <h2>What they've said</h2>
      <div className="mb-12 mt-24 lg:mb-20">
        <swiper-container
          ref={swiperElRef}
          loop="true"
          slides-per-view="auto"
          centered-slides="true"
          space-between="30"
          autoplay-delay="5000"
          autoplay-disable-on-interaction="false"
        >
          <swiper-slide class="w-full lg:w-fit">
            <Slide
              img={avatarAnisha}
              name="Anisha Li"
              text="“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
            />
          </swiper-slide>
          <swiper-slide class="w-full lg:w-fit">
            <Slide
              img={avatarAli}
              name="Ali Bravo"
              text="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
            />
          </swiper-slide>
          <swiper-slide class="w-full lg:w-fit">
            <Slide
              img={avatarRichard}
              name="Richard Watts"
              text="“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”"
            />
          </swiper-slide>
          <swiper-slide class="w-full lg:w-fit">
            <Slide
              img={avatarShanai}
              name="Shanai Gough"
              text="“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
            />
          </swiper-slide>
        </swiper-container>
      </div>
    </section>
  );
}

function Slide({ img, name, text }) {
  return (
    <div className="relative mx-auto w-[calc(100%-2rem)] bg-gray-100 bg-opacity-5 px-8 pb-12 pt-16 lg:px-12">
      <img
        src={img}
        alt="avatar"
        className="mx-auto mb-4 h-[4.5rem] w-[4.5rem]"
        // absolute -top-9 left-1/2 aspect-square -translate-x-1/2
      />
      <h3 className="mb-5">{name}</h3>
      <p className="mx-auto max-w-[45ch]">{text}</p>
    </div>
  );
}

// function Testimonial() {
//   return (
//     <section className="mt-20 text-center lg:mt-40">
//       <h2>What they've said</h2>
//       <div className="swiper">
//         <div className="swiper-wrapper mb-12 mt-24 lg:mb-20">
//           <Slide
//             img={avatarAnisha}
//             name="Anisha Li"
//             text="“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
//           />
//           <Slide
//             img={avatarAli}
//             name="Ali Bravo"
//             text="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
//           />
//           <Slide
//             img={avatarRichard}
//             name="Richard Watts"
//             text="“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”"
//           />
//           <Slide
//             img={avatarShanai}
//             name="Shanai Gough"
//             text="“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
//           />
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//       <button className="btn">Get Started</button>
//     </section>
//   );
// }

export default Testimonial;
