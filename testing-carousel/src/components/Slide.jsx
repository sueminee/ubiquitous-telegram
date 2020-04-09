import React from "react";
import styled from "styled-components";

export default function Slide({img}) {
  return <Image src={img} />
}

const Image = styled.img`
  width: 100%;
  height: 70vh;
`

