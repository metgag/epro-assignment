import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  MessageCircle,
  TrendingUp,
  X,
  DollarSign,
  ShoppingBag,
  AlertCircle,
} from "lucide-react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "snap",
      slides: {
        perView: 3,
        spacing: 15,
        origin: "center",
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      breakpoints: {
        "(max-width: 768px)": {
          slides: {
            perView: 1,
            spacing: 10,
            origin: "center",
          },
        },
        "(max-width: 1024px)": {
          slides: {
            perView: 2,
            spacing: 12,
            origin: "center",
          },
        },
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const slides = [
    { icon: MessageCircle, text: "Chat numpuk", color: "text-cyan-500" },
    { icon: TrendingUp, text: "RTS tinggi", color: "text-cyan-500" },
    { icon: X, text: "LP gak convert", color: "text-cyan-500" },
    { icon: DollarSign, text: "Cashflow macet", color: "text-cyan-500" },
    { icon: ShoppingBag, text: "Marketplace stuck", color: "text-cyan-500" },
    { icon: AlertCircle, text: "Iklan kena restrict", color: "text-cyan-500" },
  ];

  return (
    <div className="w-full max-w-6xl">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, idx) => {
          const Icon = slide.icon;
          const isActive = idx === currentSlide;

          return (
            <div key={idx} className="keen-slider__slide">
              <div
                className={`
                    flex items-center justify-center gap-3 py-3 rounded-2xl border-2 transition-all duration-300
                    ${
                      isActive
                        ? "bg-transparent border-teal-900 shadow-lg"
                        : "bg-transparent/60 border-gray-200"
                    }
                  `}
              >
                <Icon
                  className={`shrink-0 ${
                    isActive ? slide.color : "text-gray-200"
                  }`}
                  size={24}
                />
                <span
                  className={`text-3xl font-bold ${
                    isActive ? "text-teal-900" : "text-gray-400"
                  }`}
                >
                  {slide.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSlider;

// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

// const HeroSlider = () => {
//   const [sliderRef] = useKeenSlider(
//     {
//       loop: true,
//     },
//     [
//       (slider) => {
//         let timeout;
//         let mouseOver = false;
//         function clearNextTimeout() {
//           clearTimeout(timeout);
//         }
//         function nextTimeout() {
//           clearTimeout(timeout);
//           if (mouseOver) return;
//           timeout = setTimeout(() => {
//             slider.next();
//           }, 2000);
//         }
//         slider.on("created", () => {
//           slider.container.addEventListener("mouseover", () => {
//             mouseOver = true;
//             clearNextTimeout();
//           });
//           slider.container.addEventListener("mouseout", () => {
//             mouseOver = false;
//             nextTimeout();
//           });
//           nextTimeout();
//         });
//         slider.on("dragStarted", clearNextTimeout);
//         slider.on("animationEnded", nextTimeout);
//         slider.on("updated", nextTimeout);
//       },
//     ]
//   );

//   return (
//     <>
//       <div ref={sliderRef} className="keen-slider">
//         <div className="keen-slider__slide number-slide1">Chat numpuk</div>
//         <div className="keen-slider__slide number-slide2">RTS tinggi</div>
//         <div className="keen-slider__slide number-slide3">LP gak convert</div>
//         <div className="keen-slider__slide number-slide4">Cashflow macet</div>
//         <div className="keen-slider__slide number-slide5">Marketplace stuck</div>
//         <div className="keen-slider__slide number-slide6">Iklan kena restrict</div>
//       </div>
//     </>
//   );
// };

// export default HeroSlider;
