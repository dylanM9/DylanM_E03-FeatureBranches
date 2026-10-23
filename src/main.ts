const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// @deno-types="./asset-url.d.ts"
import eyeUrl_left from "./assets/Eye_left.png?no-inline";
import eyeUrl_right from "./assets/Eye_right.png?no-inline";
import mustaucheUrl from "./assets/mustauche.png?no-inline";

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute("aria-label", "A horrific face");

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const eyeImg_left = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
eyeImg_left.setAttribute("href", eyeUrl_left);
eyeImg_left.setAttribute("x", "50");
eyeImg_left.setAttribute("y", "60");
eyeImg_left.setAttribute("width", "40");
eyeImg_left.setAttribute("height", "40");
face.append(eyeImg_left);

const eyeImg_right = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
eyeImg_right.setAttribute("href", eyeUrl_right);
eyeImg_right.setAttribute("x", "110");
eyeImg_right.setAttribute("y", "60");
eyeImg_right.setAttribute("width", "40");
eyeImg_right.setAttribute("height", "40");
face.append(eyeImg_right);

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

const mustauche = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "image",
);
mustauche.setAttribute("href", mustaucheUrl);
mustauche.setAttribute("x", "50");
mustauche.setAttribute("y", "80");
mustauche.setAttribute("width", "100");
mustauche.setAttribute("height", "100");
face.append(mustauche);

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
