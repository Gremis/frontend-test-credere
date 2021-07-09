import React, { useState } from "react";
import slider from "../../server/slider.json";
import "./Styled.css";

function Slider() {
  const [news, setNews] = useState([slider.news]);
  const [current, setCurrent] = useState(0);
  const length = news[0].length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(news) || news[0].length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        {news[0].map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" + index : "slide"}
              key={index}
            >
              {index === current && (
                <>
                  <img
                    src={slide.image}
                    alt="news"
                    className={"image" + index}
                  />
                  <div className={"details" + index}>
                    <h1 className={"title" + index}>{slide.title}</h1>
                    <h3 className={"description" + index}>
                      {slide.description}
                    </h3>
                    <p className={"paragraph" + index}>{slide.paragraph}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
        <button className="right-arrow" onClick={nextSlide}>
          Próximo
        </button>
      </section>
    </>
  );
}

export default Slider;
