import React, { useState, useEffect, createContext, useContext, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
export default function DicoJsonCarousel({
  children = [],
  options = {}
}) {
  const {
    perPanel = 4,
    speed = 800,
    autoplay = false,
    interval = 2500,
    dots = false,
    count = false,
    loop = true
  } = options;
  const maxPage = Math.ceil(children.length / perPanel);
  const [page, setPage] = useState(0);
  const transitionDefault = `transform ${speed}ms ease-in-out`;
  const [x, setX] = useState(-100 / 3);
  const [moving, setMoving] = useState(false); // const [autoplayState, setAutoplayState] = useState(autoplay);

  const [trasitionValue, setTransitionValue] = useState(transitionDefault);
  const direction = useRef(0);
  direction.current = 0;

  const onTransitionEnd = () => {
    setMoving(false);
    setTransitionValue("none");
    let next = x > -1 ? page - 1 : page + 1;

    if (next < 0 && !loop) {
      next = maxPage;
    }

    if (next > maxPage && !loop) {
      next = 1;
    }

    setPage(next);
    setX(-100 / 3);
  };

  const onMovePage = count => {
    if (moving) return;
    direction.current = 0;
    setX(count > 0 ? -100 / 3 * 2 : 0);
    setMoving(true);
    direction.current = count;
  };

  useEffect(() => {
    if (trasitionValue === "none") setTransitionValue(transitionDefault);
  }, [x]);
  const components = [];

  if (loop) {
    for (let i = (page - 1) * perPanel; i < (page + 2) * perPanel; i++) {
      if (i < 0) components.push( /*#__PURE__*/React.createElement("div", {
        key: "a" + components.length
      }, children[(i % children.length + children.length) % children.length]));else components.push( /*#__PURE__*/React.createElement("div", {
        key: "a" + components.length
      }, children[i % children.length]));
    }
  } else {
    for (let i = perPanel * (page - 1); i < children.length; i++) {
      components.push( /*#__PURE__*/React.createElement("div", {
        key: "a" + components.length
      }, children[i]));
    }
  }

  if (!children && children.length === 0) return null;
  const slideStyles = {
    transform: `translate3d(${x}%, 0, 0)`,
    transition: trasitionValue
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, !children || children.length === 0 ? null : /*#__PURE__*/React.createElement(DicoJsonCarouselContainer, null, /*#__PURE__*/React.createElement(CarouselTrack, null, /*#__PURE__*/React.createElement(CarouselListStyle, {
    style: slideStyles,
    perPanel: perPanel,
    onTransitionEnd: onTransitionEnd
  }, components)), /*#__PURE__*/React.createElement(CarouselArrows, {
    className: "carousel-arrows"
  }, /*#__PURE__*/React.createElement(CarouselLeftArrow, {
    onClick: () => onMovePage(-1),
    active: loop || page > 0
  }, /*#__PURE__*/React.createElement(FaChevronLeft, null)), /*#__PURE__*/React.createElement(CarouselRightArrow, {
    onClick: () => onMovePage(1),
    active: loop || page < maxPage - 1
  }, /*#__PURE__*/React.createElement(FaChevronRight, null))), dots && /*#__PURE__*/React.createElement(Dots, null), count && /*#__PURE__*/React.createElement(Count, {
    className: "carousel-count"
  }, page + 1, "/", maxPage + 1)));
}
const DicoJsonCarouselContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 5vh;
  box-sizing: border-box;
  margin: 0 4rem;
  * {
      box-sizing: border-box;
  }
`;
const CarouselTrack = styled.div`
  overflow: hidden;
  position: relative;
`;
const CarouselListStyle = styled.div`
  display: grid;
  width: 300%;
  grid-template-columns: repeat(${props => props.perPanel * 3}, 1fr);
  & > * {
    margin-right: 0.5rem;
    &:nth-child(${props => props.perPanel}n + 1) {
      margin-right: 1rem;
    }
    &:not(:nth-child(${props => props.perPanel}n + 1)) {
      margin-left: 0.5rem;
    }
    &:nth-child(${props => props.perPanel}n) {
      margin-right: 0rem;
      margin-left: 1rem;
    }
  }
`;
const CarouselArrows = styled.div`
  position: absolute;
  width: calc(100% + 7rem);
  top: calc(50% - 1.625rem);
  left: -3.5rem;
  display: flex;
  justify-content: space-between;
  & > * {
    padding: 1rem;
    line-height: 1rem;
    font-size: 1.25rem;
    cursor: pointer;
  }
`;
const CarouselLeftArrow = styled.div`
  opacity: ${props => props.active ? 1 : 0.5};
  user-select: ${props => props.active ? "initial" : "none"};
  pointer-events: ${props => props.active ? "initial" : "none"};
`;
const CarouselRightArrow = styled.div`
  opacity: ${props => props.active ? 1 : 0.5};
  user-select: ${props => props.active ? "initial" : "none"};
  pointer-events: ${props => props.active ? "initial" : "none"};
`;
const Dots = styled.div``;
const Count = styled.div``;