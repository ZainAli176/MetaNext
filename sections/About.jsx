'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About MetaNext" textStyle="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        In futurism and science fiction,the
        <span className="font-extrabold text-white"> Metaverse</span> is a
        hypothetical iteration of the
        <span className="font-extrabold text-white"> Internet</span> as a
        single, universal and immersive virtual world that is facilitated by the
        use of
        <span className="font-extrabold text-white"> Virtual reality (VR)</span>
        and augmented reality (AR) headsets.In colloquial use, a metaverse is a
        network of <span className="font-extrabold text-white"> 3D</span>{' '}
        virtual worlds focused on social connection. Nevertheless, metaverse
        technologies promise the next level of interaction in the virtual and
        physical worlds, providing innovative new opportunities and business
        models
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28]"
      />
    </motion.div>
  </section>
);

export default About;
