import React, { useRef } from 'react';
import { Section } from './Section'
import { getInTouch as content } from '../data/content-text'
import emailjs from '@emailjs/browser';


const SendMessage = () => {

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
    <Section styling="flex my-20 flex-wrap gap-10 ">
        <div className='basis-7/12 lg:basis-full'>
            <p>{content.pre.toUpperCase()}</p>
            <h4 className='text-4xl font-extrabold'>{content.lead}</h4>

            <form ref={form} onSubmit={sendEmail} className='flex flex-wrap py-5 gap-y-4 justify-between shrink-0'>
                <input className='p-3 rounded-xl bg-stone-200 sm:basis-full ' type="text" name="first_name" placeholder="First Name" />
                <input className='p-3 rounded-xl bg-stone-200 sm:basis-full' type="text" name="last_name" placeholder="Last Name" />
                <input className='basis-full p-3 rounded-xl bg-stone-200' type="email" name="user_email" placeholder="user@vifoundation.com" />
                <input className='basis-full p-3 rounded-xl bg-stone-200' type="text" name="subject" placeholder="Subject" />
                <textarea className='basis-full p-3 rounded-xl bg-stone-200' rows="4" name='message' placeholder="message"></textarea>
                <input className="btn button" type="submit" value="Send a Message" />
            </form>
        </div>
        <div className='flex  basis-3/12 lg:basis-full'>
            <img src={`/assets/images/${content.image}`}  width="100%" height="100%" alt={content.alt} />
        </div>
    </Section>
  )
}

export default SendMessage