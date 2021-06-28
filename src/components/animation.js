import gsap from "gsap";

export const close = (navToggle, li1, li2, li3) => {
  var tl = gsap.timeline({ defaults: { duration: 0.5 } });

  tl.to([li1, li2, li3], {
    y: 70,
    ease: "power1.inOut",
    stagger: { amount: 0.3 },
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

export const projectAni = (article, image, heading, line, disc) => {
  article.current.forEach((el, index) => {
    gsap.from(image.current[index], {
      duration: 1.5,
      opacity: 0,
      x: 50,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top center",
      },
    });

    gsap.from(heading.current[index], {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top center",
      },
    });

    gsap.from(line.current[index], {
      duration: 1.5,
      opacity: 0,
      scaleX: 0,
      transformOrigin: "left",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top center",
      },
    });

    gsap.from(disc.current[index], {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top center",
      },
    });
  });
};

export const projectAni2 = (article2, image2, heading2, line2, disc2) => {
  article2.current.forEach((el, index) => {
    gsap.from(image2.current[index], {
      duration: 1.5,
      opacity: 0,
      x: -50,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top center",
      },
    });

    gsap.from(heading2.current[index], {
      duration: 1.5,
      opacity: 0,
      y: 50,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top center",
      },
    });

    gsap.from(line2.current[index], {
      duration: 1.5,
      opacity: 0,
      scaleX: 0,
      transformOrigin: "right",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top center",
      },
    });

    gsap.from(disc2.current[index], {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top center",
      },
    });
  });
};

export const proLineAni = (proLine) => {
  proLine.current.forEach((el, index) => {
    gsap.from(el, {
      duration: 1.5,
      scaleX: 0,
      transformOrigin: "left",
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: el,
        start: "top center",
      },
    });
  });
};

export const proHeadAni = (proLine, proHead) => {
  gsap.from([...proHead.current], {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.inOut",
    stagger: 0.4,
    scrollTrigger: {
      trigger: proLine.current[0],
      start: "top center",
    },
  });
};

export const aboutHeadAni = (aboutHead, proLine) => {
  gsap.from(aboutHead, {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: proLine.current[4],
      start: "top center",
    },
  });
};

export const aboutSecAni = (
  aboutSec,
  aboutImage,
  aboutTitle,
  aboutLine,
  aboutDisc
) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutSec,
      start: "top center",
    },
  });

  tl.from(aboutImage, {
    duration: 1.5,
    x: 50,
    opacity: 0,
    ease: "power3.inOut",
  })
    .from(
      aboutTitle,
      {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.inOut",
      },
      "-=1.5"
    )
    .from(
      aboutLine,
      {
        duration: 1.5,
        scaleX: 0,
        transformOrigin: "left",
        opacity: 0,
        ease: "power3.inOut",
      },
      "-=1.5"
    )
    .from(
      [aboutDisc],
      {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power3.inOut",
      },
      "-=1.5"
    );
};

export const contactAni = (
  contactSec,
  contactHead,
  contactLink,
  contactLine,
  contactMedia
) => {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: contactSec,
      start: "top center",
    },
  });

  tl.from([contactHead, contactLink], {
    duration: 1.5,
    y: 50,
    opacity: 0,
    stagger: { amount: 0.5 },
    ease: "power.inOut3",
  })
    .from(
      contactLine,
      {
        duration: 1,
        scaleX: 0,
        transformOrigin: "left",
        ease: "power.inOut3",
      },
      "-=1.5"
    )
    .from(
      contactMedia,
      {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power.inOut3",
      },
      "-=1.5"
    );
};

export const heroTitleAni = (heroTitle) => {
  gsap.from([...heroTitle.current], {
    duration: 1.5,
    opacity: 0,
    y: 50,
    stagger: { amount: 0.5 },
    ease: "power3.inOut",
  });
};

export const navItemAni = (navItem) => {
  gsap.from([...navItem.current], {
    duration: 1.5,
    delay: 0.8,
    opacity: 0,
    y: 50,
    stagger: { amount: 0.5 },
    ease: "power3.inOut",
  });
};

export const headItemsAni = (headItems) => {
  gsap.from([...headItems.current], {
    duration: 1.5,
    opacity: 0,
    ease: "power3.inOut",
  });
};

export const navScroll = (navSpan, section) => {
  gsap.to(navSpan.current[0], {
    duration: 0.5,
    scaleX: 1,
    transformOrigin: "left",
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: section.current[0],
      start: "top center",
      end: "bottom center",
      toggleActions: "restart reverse restart reverse",
    },
  });

  gsap.to(navSpan.current[1], {
    duration: 0.5,
    scaleX: 1,
    transformOrigin: "left",
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: section.current[1],
      start: "top center",
      end: "bottom center",
      toggleActions: "restart reverse restart reverse",
    },
  });

  gsap.to(navSpan.current[2], {
    duration: 0.5,
    scaleX: 1,
    transformOrigin: "left",
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: section.current[2],
      start: "top center",
      toggleActions: "restart reverse restart reverse",
    },
  });
};
