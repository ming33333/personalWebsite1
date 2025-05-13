import React, { useRef } from "react";
import moneyImageSrc from "./money.png"; // Import the image

function Section({ id, title, items }) {
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  const handleMouseOver = () => {
    if (id === "scholarships") {
      const overlay = overlayRef.current;

      // Create the image element
      const moneyImage = document.createElement("img");
      moneyImage.src = moneyImageSrc
      moneyImage.className = "money-image";
      moneyImage.style.left = `${Math.random() * 100}%`; // Random horizontal position
      overlay.appendChild(moneyImage);

      // Remove the image after animation ends
      moneyImage.addEventListener("animationend", () => {
        moneyImage.remove();
      });
    }
  };

  return (
    <section id={id} ref={sectionRef} onMouseOver={handleMouseOver}>
      <div className="overlay" ref={overlayRef}></div>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default Section;