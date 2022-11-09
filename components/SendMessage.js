import React, { useRef } from 'react';
import { Section } from './Section'
import emailjs from '@emailjs/browser';
import imageUrlBuilder from '@sanity/image-url'
import client, { urlFor } from '../config/sanityClient';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const SendMessage = ({data}) => {

  const builder =imageUrlBuilder(client);

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const aniVariant = {
    visible: {opacity: 1, y: 0, transition: {duration: 0.4}},
    hidden: {opacity: 0, y: 50}
  }
  
  const aniVariant2 = {
    visible: {opacity: 1, y: 0, transition: {duration: 0.7, delay: 0.4}},
    hidden: {opacity: 0, y: 50}
  }
  
  const aniVariant3 = {
    visible: {opacity: 1, y: 0, transition: {duration: 0.8, delay: 0.6}},
    hidden: {opacity: 0, y: 50}
  }

  useEffect(() => {
    if(inView){
      controls.start("visible");

    }
  }, [controls, inView])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9up7b9k', 'template_lh2ri39', form.current, 'OUClx9Jkq_gBIN529')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <Section styling="flex my-20 flex-wrap gap-5x items-center ">
        <div id='getintouch' className='basis-7/12 lg:basis-full'>
            <motion.p 
                ref={ref} 
                variants={aniVariant} 
                animate={controls} 
                initial="hidden"
                >{data.pre.toUpperCase()}</motion.p>
            <motion.h4 
                ref={ref} 
                variants={aniVariant2} 
                animate={controls} 
                initial="hidden"
                className='text-4xl font-extrabold'>{data.lead}</motion.h4>

            <form ref={form} onSubmit={sendEmail} className='flex flex-wrap py-5 gap-y-4 justify-between shrink-0'>
                <input className='p-3 rounded-xl bg-stone-200 sm:basis-full ' type="text" name="first_name" placeholder="First Name" />
                <input className='p-3 rounded-xl bg-stone-200 sm:basis-full' type="text" name="last_name" placeholder="Last Name" />
                <input className='basis-full p-3 rounded-xl bg-stone-200' type="email" name="user_email" placeholder="user@vifoundation.com" />
                <input className='basis-full p-3 rounded-xl bg-stone-200' type="text" name="subject" placeholder="Subject" />
                <textarea className='basis-full p-3 rounded-xl bg-stone-200' rows="4" name='message' placeholder="message"></textarea>
                <input className="btn button" type="submit" value={data.btn.toUpperCase()} />
            </form>
        </div>
        <motion.div 
            ref={ref} 
            variants={aniVariant3} 
            animate={controls} 
            initial="hidden"
            className='flexs  basis-5/12 lg:basis-full'>
            <img 
                src={urlFor(data.img).url()}
                width="100%"  
                alt={data.alt} />
        </motion.div>
    </Section>
  )
}

export default SendMessage