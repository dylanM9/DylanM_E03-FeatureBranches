const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A blocky face");

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

const faceColors = [
  [
    "#2f200d",
    "#2f200d",
    "#2f200d",
    "#2f200d",
    "#2f200d",
    "#2f200d",
    "#2f200d",
    "#2f200d",
  ],
  [
    "#2f200d",
    "#2f200d",
    "#2f200d",
    "#2f200d",
    "#2f200d",
    "#2f200d",
    "#2f200d",
    "#2f200d",
  ],
  [
    "#2f200d",
    "#b6896c",
    "#b6896c",
    "#b6896c",
    "#b6896c",
    "#b6896c",
    "#b6896c",
    "#2f200d",
  ],
  [
    "#b6896c",
    "#b6896c",
    "#b6896c",
    "#b6896c",
    "#b6896c",
    "#b6896c",
    "#b6896c",
    "#b6896c",
  ],
  [
    "#b6896c",
    "#ffffff",
    "#523d88",
    "#b6896c",
    "#b6896c",
    "#523d88",
    "#ffffff",
    "#b6896c",
  ],
  [
    "#b6896c",
    "#b6896c",
    "#b6896c",
    "#6a4030",
    "#6a4030",
    "#b6896c",
    "#b6896c",
    "#b6896c",
  ],
  [
    "#b6896c",
    "#b6896c",
    "#40210c",
    "#b6896c",
    "#b6896c",
    "#40210c",
    "#b6896c",
    "#b6896c",
  ],
  [
    "#b6896c",
    "#b6896c",
    "#40210c",
    "#40210c",
    "#40210c",
    "#40210c",
    "#b6896c",
    "#b6896c",
  ],
];

let faceColorsIndex_X = 0;
let faceColorsIndex_Y = 0;
for (let y = 0; y < 200; y += 25) {
  for (let x = 0; x < 200; x += 25) {
    const newRect = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect",
    );
    newRect.setAttribute("x", "" + x);
    newRect.setAttribute("y", "" + y);
    newRect.setAttribute("width", "25");
    newRect.setAttribute("height", "25");
    newRect.setAttribute(
      "fill",
      faceColors[faceColorsIndex_Y][faceColorsIndex_X],
    );
    face.append(newRect);

    const randRect = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect",
    );
    randRect.setAttribute("x", "" + x);
    randRect.setAttribute("y", "" + y);
    randRect.setAttribute("width", "25");
    randRect.setAttribute("height", "15");
    randRect.setAttribute(
      "fill",
      "#04000048",
    );
    face.append(randRect);

    faceColorsIndex_X++;
  }
  faceColorsIndex_X = 0;
  faceColorsIndex_Y++;
}

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
