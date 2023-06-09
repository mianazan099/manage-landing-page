import { useEffect } from "react";
import "swiper/swiper-bundle.min.css";
import avatarAli from "../assets/image/avatar-ali.png";
import avatarAnisha from "../assets/image/avatar-anisha.png";
import avatarRichard from "../assets/image/avatar-richard.png";
import avatarShanai from "../assets/image/avatar-shanai.png";

function Testimonial() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js";
    script.async = true;
    document.body.appendChild(script);
    // let promise = new Promise((resolve, reject) => {
    //   const interval = setInterval(() => {
    //     try {
    //       if (Swiper) {
    //         resolve();
    //         clearInterval(interval);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }, 1000);
    // });
    // promise.then(() => {
    //   new Swiper(".swiper", {
    //     loop: true,
    //     slidesPerView: "auto",
    //     centeredSlides: true,
    //     spaceBetween: 30,
    //     autoplay: {
    //       delay: 5000,
    //       disableOnInteraction: false,
    //     },
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //   });
    // });
    const interval = setInterval(() => {
      try {
        new Swiper(".swiper", {
          loop: true,
          slidesPerView: "auto",
          centeredSlides: true,
          spaceBetween: 30,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
        clearInterval(interval);
      } catch (error) {
        console.log(error);
      }
    }, 1000);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="mt-20 text-center lg:mt-40">
      <h2>What they've said</h2>
      <div className="swiper">
        <div className="swiper-wrapper mb-20 mt-24 ">
          <Slide
            img={avatarAnisha}
            name="Anisha Li"
            text="“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
          />
          <Slide
            img={avatarAli}
            name="Ali Bravo"
            text="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
          />
          <Slide
            img={avatarRichard}
            name="Richard Watts"
            text="“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”"
          />
          <Slide
            img={avatarShanai}
            name="Shanai Gough"
            text="“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
          />
        </div>
        <div className="swiper-pagination lg:hidden"></div>
      </div>
      <button className="btn bg-orange-800 text-white hover:bg-orange-600">
        Get Started
      </button>
    </section>
  );
}

function Slide({ img, name, text }) {
  return (
    <div className="swiper-slide relative w-[calc(100%-2rem)] bg-[hsl(0,0%,98%)] px-8 pb-12 pt-16 lg:w-fit lg:px-12">
      <img
        src={img}
        alt="testimonial__img"
        className="absolute -top-9 left-1/2 h-[4.5rem] w-[4.5rem] -translate-x-1/2"
      />
      <h3 className="mb-5">{name}</h3>
      <p className="mx-auto max-w-[45ch]">{text}</p>
      {/* 42.75 */}
    </div>
  );
}

// // function Testimonial() {
// //   return (
// //     <section className="mt-20 text-center lg:mt-40">
// //       <h2>What they've said</h2>
// //       <div className="swiper">
// //         <div className="swiper-wrapper mb-12 mt-24 lg:mb-20">
// //           <Slide
// //             img={avatarAnisha}
// //             name="Anisha Li"
// //             text="“Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
// //           />
// //           <Slide
// //             img={avatarAli}
// //             name="Ali Bravo"
// //             text="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
// //           />
// //           <Slide
// //             img={avatarRichard}
// //             name="Richard Watts"
// //             text="“Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!”"
// //           />
// //           <Slide
// //             img={avatarShanai}
// //             name="Shanai Gough"
// //             text="“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
// //           />
// //         </div>
// //         <div className="swiper-pagination"></div>
// //       </div>
// //       <button className="btn">Get Started</button>
// //     </section>
// //   );
// // }

export default Testimonial;
