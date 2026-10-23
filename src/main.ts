const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

function buildFace() {
  // The prototype grew inline. Keep it this way until the refactoring checkpoint.
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute("aria-label", "A stern face");

  const faceGradient = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "linearGradient",
  );
  faceGradient.setAttribute("id", "faceGradient");
  faceGradient.setAttribute("x1", "0%");
  faceGradient.setAttribute("y1", "15%");

  faceGradient.setAttribute("x2", "0%");
  faceGradient.setAttribute("y2", "66%");

  faceGradient.setAttribute("x3", "0%");
  faceGradient.setAttribute("y3", "100%");

  const faceStop1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  faceStop1.setAttribute("offset", "15%");
  faceStop1.setAttribute("stop-color", "#ff01a6");

  const faceStop2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  faceStop2.setAttribute("offset", "66%");
  faceStop2.setAttribute("stop-color", "#b300ff");

  const faceStop3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  faceStop3.setAttribute("offset", "100%");
  faceStop3.setAttribute("stop-color", "#4000ff");

  faceGradient.appendChild(faceStop1);
  faceGradient.appendChild(faceStop2);
  faceGradient.appendChild(faceStop3);
  face.append(faceGradient);

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "url(#faceGradient)");
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

  const eyebrow_left = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  eyebrow_left.setAttribute("d", "M 90 80 C 30 80, 50 50, 50 50");
  eyebrow_left.setAttribute("stroke", "#302c29");
  face.append(eyebrow_left);

  const eyebrow_right = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  eyebrow_right.setAttribute("d", "M 110 80 C 170 80, 150 50, 150 50");
  eyebrow_right.setAttribute("stroke", "#302c29");
  face.append(eyebrow_right);

  return face;
}

const face = buildFace();

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
