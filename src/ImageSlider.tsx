import React from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./image-slider.css";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = React.useState(0);

  function showNextImg() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImg() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      aria-label="Slider de Imagens"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-images-slider-controls" className="skip-link">
        Pular o Carrosel de imagens
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <img
            key={url}
            src={url}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImg}
        className="img-slider-btn"
        style={{ left: "0" }}
        aria-aria-label="Ver Imagem Anterior"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImg}
        className="img-slider-btn"
        style={{ right: "0" }}
        aria-aria-label="Ver Próxima Imagem"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            onClick={() => setImageIndex(index)}
            aria-label={`Ver imagem ${index + 1}`}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-images-slider-controls" />
    </section>
  );
}
