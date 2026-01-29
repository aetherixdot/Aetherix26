import React from "react";
import styled from "styled-components";

type GridPatternProps = {
  className?: string;
};

const GridPattern = ({ className }: GridPatternProps) => {
  return (
    <Wrapper className={className}>
      <div className="grid-wrapper">
        <div className="grid-background" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  .grid-wrapper {
    height: 100%;
    width: 100%;
    position: relative;
    background-color: transparent;
  }

  .grid-background {
    position: absolute;
    inset: 0;
    z-index: 0;

    background-image:
      linear-gradient(
        to right,
        rgba(226, 232, 240, 0.25) 1px,
        transparent 1px
      ),
      linear-gradient(
        to bottom,
        rgba(226, 232, 240, 0.25) 1px,
        transparent 1px
      );

    background-size: 20px 30px;

    opacity: 0.35;

  -webkit-mask-image:
    radial-gradient(
      ellipse 70% 60% at 50% 50%,
      #000 55%,
      transparent 100%
    ),
    linear-gradient(
      to bottom,
      transparent 0%,
      #000 18%,
      #000 82%,
      transparent 100%
    );

  -webkit-mask-composite: intersect;
  mask-composite: intersect;

  mask-image:
    radial-gradient(
      ellipse 70% 60% at 50% 50%,
      #000 55%,
      transparent 100%
    ),
    linear-gradient(
      to bottom,
      transparent 0%,
      #000 18%,
      #000 82%,
      transparent 100%
    );
  }
`;

export default GridPattern;
