const _noopacity = {
  opacity: 0
};
export const figAnimate = {
  rest: _noopacity,
  hover: {
    opacity: 1,
    x: -200,
    y: -250
  }
};
export const partypopperAnimate = {
  rest: _noopacity,
  hover: {
    opacity: 1,
    x: 300,
    y: -250
  }
};

export const paintKitAnimate = {
  rest: _noopacity,
  hover: {
    opacity: 1,
    x: -475,
    y: -50
  }
}
export const cameraAnimate = {
  rest: _noopacity,
  hover: {
    opacity: 1,
    x: 475,
    y: 50
  }
};
export const phoneAnimte = {
  rest: _noopacity,
  hover: {
    opacity: 1,
    x: 0,
    y: 300,
  }
};

export const wavingHand = {
  rest: {
    rotate: [0, -30, 0, -30, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1]
    }
  },
  hover: {
    rotate: [0, -30, 0, -30, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 1
    }
  }
}

