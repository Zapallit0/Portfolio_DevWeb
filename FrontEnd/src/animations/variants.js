// Reusable Framer Motion variants

export const fadeInLeft = {
  initial: { opacity: 0, x: -500 },
  animate: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeIn" } }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

export const staggerItem = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export const scaleIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.6 }
  }
};

export const softSkillsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

export const softSkillsTitle = {
  hidden: { opacity: 0, y: -30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const softSkillsInner = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Page transition variants
export const pageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4, ease: "easeIn" }
  }
};

// Door transition variants
export const doorVariants = {
  initial: {
    clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
  },
  animate: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  exit: {
    clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

export const doorVariantsRight = {
  initial: {
    clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
  },
  animate: {
    clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    transition: { duration: 0.8, ease: "easeInOut" }
  },
  exit: {
    clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};
