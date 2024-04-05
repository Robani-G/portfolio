import React, { useState } from 'react'
import Layout from '../layout'
import SectionHeading from '../Sectionheading'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-hot-toast';
import { sendEmail } from '@/app/action/sendEmail';
import { experimental_useFormStatus } from 'react-dom';
import { sendmail } from '@/app/lib/mail';
export default function Contact() {
  // const pending = experimental_useFormStatus();
  const handlesubmit=async(formdata:FormData)=>{
    "use Server"

    
    console.log(formdata);
    // await sendmail(formdata);
  }
  return (
 <>
 <Layout clasName="scroll-mt-28  ">

 <div id='Contact' className='scroll-mt-28  rounded-xl w-[31rem] '>
 <SectionHeading>Contact </SectionHeading>

    <div className='bg-white shadow rounded-xl p-2 dark:bg-black border '>
    <p className='max-w-[11rem text-center text-gray-500 dark:text-gray-200'>Please Contact me directly at {""}
    <a href="mailto:robanigirma2021@gmail.com" className='text-black font-bold  dark:text-white'>robanigirma2021@gmail.com</a>
    </p>
    <form className='p-2 flex flex-col gap-2  '
action={handlesubmit}
method='POST'
// onSubmit={handlesubmit}
    >

      <input type="email"  required
          maxLength={500}
 placeholder='Email' name="senderemail" className='h-11 rounded-xl border dark:bg-black dark:border-white   border-black/10 w-full outline-none p-2' />
    <textarea required
          maxLength={5000} name="message" id="" className="border border-black/10 dark:border-white outline-none rounded-xl dark:bg-black p-2" cols={40} rows={10}></textarea>
    <button  
    type="submit"
// disabled={pending}
    className='bg-gray-900 dark:bg-white  dark:text-black p-2 text-white flex justify-center items-center hover:bg-gray-700 rounded-xl      '>Send{""}<PaperAirplaneIcon className='w-6 h-4'/> </button>
    </form>
    </div>
 </div>
    </Layout></>
  )
}
