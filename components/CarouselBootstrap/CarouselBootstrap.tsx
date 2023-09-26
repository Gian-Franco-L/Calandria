'use client'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./slider.css"

export default function CarouselBootstrap() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="/grey-background.jpg" alt="asd" />
        <Carousel.Caption>
          <h3>Primer slide</h3>
          <p>***********************************?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/grey-background.jpg" alt="asd" />
        <Carousel.Caption>
          <h3>Segundo slide</h3>
          <p>***********************************?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/grey-background.jpg" alt="asd" />
        <Carousel.Caption>
          <h3>Tercer slide</h3>
          <p>***********************************?</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}