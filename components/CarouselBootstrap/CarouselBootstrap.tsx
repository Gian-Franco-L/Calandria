'use client'
import { useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import greyBackground from '@/public/grey-background.jpg'
import "./slider.css"

export default function CarouselBootstrap() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image 
          src={greyBackground}
          alt="asd"
          width={500}
          height={500}
        />
        <Carousel.Caption>
          <h3>Primer slide</h3>
          <p>***********************************?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image 
          src={greyBackground}
          alt="asd"
          width={500}
          height={500}
        />
        <Carousel.Caption>
          <h3>Segundo slide</h3>
          <p>***********************************?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src={greyBackground}
          alt="asd"
          width={500}
          height={500}
        />
        <Carousel.Caption>
          <h3>Tercer slide</h3>
          <p>***********************************?</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}