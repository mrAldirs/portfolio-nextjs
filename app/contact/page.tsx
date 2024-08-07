'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea, TextareaProps } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+62) 815 2976 3081',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'aldirosidsaputra@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Bantul, DI Yogyakarta 55184',
  },
];

const Contact = () => {
  const phoneNumber = '+6281529763081';
  const message = 'Hi, I would like to collaborate with you 😊';
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[58%] order-2 xl:order-none'>
            <div className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-3xl text-accent'>
                Let&apos;s Work Toghether
              </h3>
              <p className='text-white/60'>
                Contact me if you&apos;re interested in a potential partnership.
                I look forward to collaborating.
              </p>
              <Button
                size='md'
                className='max-w-60 flex items-center gap-2'
                href={whatsappURL}
              >
                <span>Send Message</span>
                <FaWhatsapp className='text-lg' />
              </Button>
            </div>
          </div>
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272e] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-lg'>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
