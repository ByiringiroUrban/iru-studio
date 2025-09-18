// Simple, reusable animation variants for Framer Motion
// Keep these generic so components can compose them easily

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

export const staggerContainer = (stagger: number = 0.12, delayChildren: number = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren
    }
  }
});

export const scaleHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } }
};

export const floatIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};


