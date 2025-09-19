import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  amount?: number;
};

const AnimatedSection = ({ children, className, amount = 0.2 }: AnimatedSectionProps) => {
  return (
    <motion.section
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;






