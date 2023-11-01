"use-client";
import React, { useState } from 'react'
import Layout from '../layout'
import SectionHeading from '../Sectionheading'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { sendEmail } from '@/app/action/sendEmail';
import { toast } from 'react-hot-toast';
export default function Contact() {

  return (
 <>
 <Layout clasName="scroll-mt-28  ">

 <div id='Contact' className='scroll-mt-28  rounded-xl w-[31rem] '>
 <SectionHeading>Contact </SectionHeading>

    <div className='bg-white shadow rounded-xl p-2 dark:bg-gray-700'>
    <p className='max-w-[11rem text-center text-gray-500 dark:text-gray-200'>Please Contact me directly at {""}
    <a href="mailto:robanigirma2021@gmail.com" className='text-black font-bold  dark:text-white'>robanigirma2021@gmail.com</a>
    </p>
    <form className='p-2 flex flex-col gap-2  '
action={async (formData) => {
  const { data, error } = await sendEmail(formData);

  if (error) {
    toast.error(error);
    return;
  }

  toast.success("Email sent successfully!");
}}
    >

      <input type="email" required
          maxLength={500}
 placeholder='Email' name="senderemail" className='h-11 rounded-xl border dark:bg-gray-700 dark:border-white   border-black/10 w-full outline-none p-2' />
    <textarea required
          maxLength={5000} name="message" id="" className="border border-black/10 dark:border-white outline-none rounded-xl dark:bg-gray-700 p-2" cols={40} rows={10}></textarea>
    <button  
    className='bg-gray-900 dark:bg-white dark:text-black p-2 text-white flex justify-center items-center hover:bg-gray-700 rounded-xl      ' type='submit'>Send{""}<PaperAirplaneIcon className='w-6 h-4'/> </button>
    </form>
    </div>
 </div>
    </Layout></>
  )
}
