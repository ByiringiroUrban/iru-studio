// Advanced, professional animation variants for Framer Motion
// Designed to create engaging and attractive user experiences

// Basic animations
export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

// Advanced entrance animations
export const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -180, scale: 0.8 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Hero section animations
export const heroText = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" }
  }
};

export const heroSubtext = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  }
};

export const heroButtons = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.4 }
  }
};

// Card animations
export const cardHover = {
  rest: { 
    scale: 1, 
    y: 0,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
  },
  hover: { 
    scale: 1.05, 
    y: -10,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const cardFloat = {
  rest: { y: 0 },
  hover: { 
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Service icon animations
export const iconBounce = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.2, 
    rotate: 360,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const iconPulse = {
  rest: { scale: 1 },
  hover: { 
    scale: [1, 1.1, 1],
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

// Text animations
export const textReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const textSlideUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Image animations
export const imageZoom = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const imageParallax = {
  rest: { y: 0 },
  hover: { 
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Button animations
export const buttonHover = {
  rest: { 
    scale: 1,
    boxShadow: "0 4px 15px rgba(79,117,255,0.3)"
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0 8px 25px rgba(79,117,255,0.4)",
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: { scale: 0.95 }
};

export const buttonGlow = {
  rest: { 
    boxShadow: "0 4px 15px rgba(79,117,255,0.3)"
  },
  hover: { 
    boxShadow: "0 0 20px rgba(79,117,255,0.6)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Stagger animations
export const staggerContainer = (stagger: number = 0.12, delayChildren: number = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren
    }
  }
});

export const staggerFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

// Loading animations
export const loadingSpinner = {
  animate: {
    rotate: 360,
    transition: { duration: 1, repeat: Infinity, ease: "linear" }
  }
};

export const loadingPulse = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.7, 1],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  }
};

// Advanced effects
export const morphing = {
  rest: { borderRadius: "20px" },
  hover: { 
    borderRadius: "50px",
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const shimmer = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { duration: 2, repeat: Infinity, ease: "linear" }
  }
};

export const floating = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

export const floatIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Scroll-triggered animations
export const scrollReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const scrollSlideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const scrollSlideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

// Additional exports that might be missing
export const scaleHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } }
};