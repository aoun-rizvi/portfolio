import { useState } from 'react';

import API from '@/components/Api';
import Toast from '@/components/Toast';
import BgBricks from '@/public/bg/bricks.jpg';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    const payload = {
      name: name,
      email: email,
      message: message
    };
    try {
      await API.email.send(payload).then(res => {
        setName('');
        setEmail('');
        setMessage('');
        console.log('res.data:', res.data);
        Toast.info('Email sent successfully!')
      });
    } catch (e) {
      console.error(e, 'Error sending email!');
      Toast.error('Error sending email!');
    }
  }

  return (
    <contact
      style={{ backgroundImage: `url(${BgBricks.src})`, width: '100%', height: '100%' }}
      className='pt-20 pb-2 w-full h-fit bg-gray-100 flex flex-col flex-wrap items-center text-center justify-center gap-4'
    >

      <div className='py-2 w-full'>
        <p className='text-3xl sm:text-5xl md:text-6xl text-gray-700 underline decoration-indigo-600'>Contact</p>
      </div>

      <div className='py-4 px-1 flex flex-col flex-wrap w-full max-w-md'>
        <form onSubmit={(e) => {sendEmail(e)}} method="POST" className="text-left space-y-2">
          <div className='flex flex-row items-center text-center justify-center'>
            <input
              type="name"
              id="name"
              placeholder="Subject"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              value={name}
              onChange={(e) => {setName(e.target.value)}}
            />
          </div>
          <div className='flex flex-row items-center text-center justify-center'>
            <input
              type="email"
              id="email"
              placeholder="your@email.com"
              required
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          <div className='flex flex-row items-center text-center justify-center'>
            <textarea
              id="message"
              rows="5"
              placeholder="Leave a comment..."
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              value={message}
              onChange={(e) => {setMessage(e.target.value)}}
            />
          </div>
          <button type="submit" className="py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-sky-700 sm:w-fit hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">Send Email</button>
        </form>
      </div>

    </contact>
  )
}
