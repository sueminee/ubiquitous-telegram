import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import poodle1 from '../image/poodle1.png';
import poodle2 from '../image/poodle2.png';
import poodle3 from '../image/poodle3.png';
import poodle4 from '../image/poodle4.png';

const TOTAL_SLIDES = 2;


export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if(currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if(currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide])

  return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        <Slide img={poodle1} />
        <Slide img={poodle2} />
        <Slide img={poodle3} />
        <Slide img={poodle4} />
      </SliderContainer>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </Container>
  )
}



const Container = styled.div`
 width: 60%;
 overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리.
`;

const Button = styled.button`
  all: unset;
  border: 1px solid tomato;
  padding: 0.5em 2em;
  color: tomato;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: tomato;
    color: white;
  }
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex; // 이미지를 가로로 나열합니다.
`;