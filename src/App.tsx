import { ImageSlider } from "./ImageSlider";
import img1 from "./assets/kari-shea-eMzblc6JmXM-unsplash.jpg";
import img2 from "./assets/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg";
import img3 from "./assets/michael-sum-LEpfefQf4rU-unsplash.jpg";
import img4 from "./assets/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg";

const IMAGES = [
  { url: img1, alt: "Gato Um" },
  { url: img2, alt: "Gato Dois" },
  { url: img3, alt: "Gato Três" },
  { url: img4, alt: "Gato Quatro" },
];

function App() {
  return (
    <div
      style={{
        maxWidth: "70em",
        width: "100%",
        aspectRatio: "16 / 9",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "2rem" }}>
        link
      </a>
    </div>
  );
}

export default App;
