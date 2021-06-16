import gsap from "gsap";

export const close = (navToggle, li1, li2, li3) => {
  var tl = gsap.timeline({ defaults: { duration: 0.8 } });

  tl.to([li1, li2, li3], {
    y: 70,
    ease: "power1.inOut",
    stagger: { amount: 0.7 },
  }).to(navToggle, { duration: 0.3, y: "-100%", ease: "power.inOut" });
};

export const openAni = (navToggle, li1, li2, li3) => {
  var tl = gsap.timeline({ defaults: { duration: 0.8 } });

  tl.to(navToggle, { y: "0%", ease: "power3.inOut" }).from(
    [li1, li2, li3],
    { duration: 1, y: 70, ease: "power1.inOut", stagger: { amount: 0.7 } },
    "-=.6"
  );
};
