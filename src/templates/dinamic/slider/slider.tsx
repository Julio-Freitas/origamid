import { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: "slide1",
    text: "Slide 1",
  },
  {
    id: "slide2",
    text: "Slide 2",
  },
  {
    id: "slide3",
    text: "Slide 3",
  },
];

const Slider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [moveItem, setMoveItem] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const { width } = sliderRef.current.getBoundingClientRect();
      setMoveItem(-(width * active));
    }
  }, [active]);

  const slidePrev = () => active > 0 && setActive(active - 1);

  const slideNext = () => active < slides.length - 1 && setActive(active + 1);

  return (
    <div className="container bg-white p-4 mx-auto my-5 truncate flex flex-col max-w-screen-xl">
      <div
        className="content"
        ref={sliderRef}
        style={{
          transform: `translateX(${moveItem}px)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="item">
            {slide.text}
          </div>
        ))}
      </div>
      <nav className="flex justify-between my-2">
        <button
          type="button"
          className={`nav-button ${active === 0 ? "disabled" : ""} `}
          onClick={slidePrev}
          disabled={active === 0}
        >
          Anterior
        </button>
        <button
          onClick={slideNext}
          className={`nav-button ${
            active === slides.length - 1 ? "disabled" : ""
          } `}
          disabled={active === slides.length - 1}
        >
          Próximo
        </button>
      </nav>
    </div>
  );
};

export default Slider;
