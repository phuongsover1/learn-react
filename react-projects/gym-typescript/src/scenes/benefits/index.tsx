import { BenefitType, SelectedPage } from '@/shared/types';
import React from 'react';
import { motion } from 'framer-motion';
import HText from '@/shared/HText';
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import Benefit from './Benefit';

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'State of the Art Facilities',
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim',
  },

  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim',
  },

  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description:
      'Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member
          </p>
        </div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Benefits;
