import Head from 'next/head'
import {BsFillMoonStarsFill, BsFillMoonFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillYoutube,AiFillFacebook} from 'react-icons/ai'
import deved from '../public/dev-ed-wave.png'
import Image from 'next/image'
import { useState } from 'react'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'


export default function Home() {

const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark': ''}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
<main className=' bf-white px-10 dark:bg-slate-800 md:px-20 lg:px-40'>
  <section className='min-h-screen'>
<nav className='py-10 mb-12 flex justify-between'>
  <h1 className=' text-xl font-burtons dark:text-white'>developer</h1>
  <ul className='flex items-center'>
    <li>
<div onClick={() => setDarkMode(!darkMode)}>
 { darkMode ?  <BsFillMoonStarsFill className='text-gray-50' />: <BsFillMoonFill className='bg-white'/>}
</div>
    </li>
    <li><a className='bg-gradient-to-r from-cyan-500 to-teal-400 text-white py-2 px-4 rounded-md ml-8 ' href="#">Resume</a></li>
  </ul>
</nav>
<div className='text-center p-3'>
  <h2 className='text-3xl py-2 text-teal-600 font-medium animate-bounce font-semibold'>Murad Bulguchev</h2>
  <h3 className='text-2xl py-2 dark:text-gray-400'>Developer and designer.</h3>
  <p className='text-md py-1 leading-8 dark:text-gray-400 '>In today's episode, we'll be building out a sleek portfolio using React and  <span className='text-cyan-600'>Tailwind. This project</span> is a great way to learn all about Tailwind's utility classes, taking a mobile first approach, dark/light <span className='text-cyan-600'> mode, and more.</span></p>
</div>

<div className='flex py-3 justify-center items-center text-5xl text-gray-600 gap-16 '>
  <AiFillFacebook className='dark:hover:text-gray-50 transition-all'/>
  <AiFillTwitterCircle className='dark:hover:text-gray-50 transition-all'/>
  <AiFillYoutube className='hover:text-gray-50 transition-all'/>
</div>

<div className=' bg-gradient-to-r from-cyan-500 to-teal-400 w-80 h-80 rounded-full relative mx-auto mt-10 overflow-hidden'>
<Image className='' src={deved} layout="fill" objectFit='cover'/>
</div>
  </section>

<section>
  <div>
    <h3 className='text-2xl py-1  dark:text-gray-400'>Services I offer</h3>
    <p className='text-md py-1 leading-8 dark::text-gray-400 dark:text-gray-400'>This project is a great way to learn all about Tailwind's <span className='text-cyan-600'> utility classes,</span> taking a mobile first<span className='dark:text-cyan-400'> approach,</span> dark/light mode, and more.</p>
        <p className='text-md py-1 leading-8 text-gray-800 dark:text-gray-400'>I recently started using Tailwind and I am loving these kind of tutorials. all about Tailwind's <span className='text-cyan-600'> utility classes,</span> taking a mobile first<span className='text-cyan-600'> approach,</span> dark/light mode, and more.</p>
  </div>
<span className='mx-10'></span>

<div className='sm:flex sm:gap-2'>
  <div className='m-auto py-10 block text-center mx-auto rounded-lg shadow-2xl dark:bg-gray-800 dark:text-gray-400'>
<Image  src={design} width={100} height={100}/>
<h3 className='my-3 mt-10'>Building project with zero</h3>
<p className='py-2'>In today's episode, we'll be building out a sleek portfolio using React and </p>
<span className='text-cyan-600 '>Taking a mobile</span>
<p className='py-2'>Murad Bulguchev</p>
<p>portfolio using</p>
  </div>



    <div className='m-auto  sm:mx-none sm py-10 block text-center my-5 rounded-lg shadow-2xl dark:bg-gray-800 dark:text-gray-400'>
<Image  src={code} width={100} height={100}/>
<h3 className='my-3 mt-10'>Building project with zero</h3>
<p className='py-2'>In today's episode, we'll be building out a sleek portfolio using React and </p>
<span className='text-cyan-600 '>Taking a mobile</span>
<p className='py-2'>Murad Bulguchev</p>
<p>portfolio using</p>
  </div>

    <div className='m-auto py-10 block text-center mx-auto rounded-lg shadow-2xl dark:bg-gray-800 dark:text-gray-400'>
<Image  src={consulting} width={100} height={100}/>
<h3 className='my-3 mt-10'>Building project with zero</h3>
<p className='py-2'>In today's episode, we'll be building out a sleek portfolio using React and </p>
<span className='text-cyan-600 '>Taking a mobile</span>
<p className='py-2'>Murad Bulguchev</p>
<p>portfolio using</p>
  </div>

  <div className='m-auto py-10 block text-center mx-auto rounded-lg shadow-2xl dark:bg-gray-800 dark:text-gray-400'>
<Image  src={consulting} width={100} height={100}/>
<h3 className='my-3 mt-10'>Building project with zero</h3>
<p className='py-2'>In today's episode, we'll be building out a sleek portfolio using React and </p>
<span className='text-cyan-600 '>Taking a mobile</span>
<p className='py-2'>Murad Bulguchev</p>
<p>portfolio using</p>
  </div>

  
</div>
  
</section>
<section>
  <div className='py-5'>
    <h3 className='text-2xl py-1  dark:text-gray-400'>Services I offer</h3>
    <p className='text-md py-1 leading-8 dark::text-gray-400 dark:text-gray-400'>This project is a great way to learn all about Tailwind's <span className='text-cyan-600'> utility classes,</span> taking a mobile first<span className='dark:text-cyan-400'> approach,</span> dark/light mode, and more.</p>
        <p className='text-md py-1 leading-8 text-gray-800 dark:text-gray-400'>I recently started using Tailwind and I am loving these kind of tutorials. all about Tailwind's <span className='text-cyan-600'> utility classes,</span> taking a mobile first<span className='text-cyan-600'> approach,</span> dark/light mode, and more.</p>
  </div>

  <div className='sm:flex  sm:gap-5 sm:w-full '>
  <div className='gap-10 py-5 '>
      <Image className=' rounded-2xl ' src={web1} width={500} height={500} />
    </div>

  <div className='gap-10 py-5 '>
      <Image className=' rounded-2xl ' src={web2}width={500} height={500}/>
    </div>

  <div className='gap-10 py-5 '>
      <Image className=' rounded-2xl ' src={web3}width={500} height={500}/>
    </div>

      <div className='gap-10 py-5 '>
      <Image className='rounded-2xl ' src={web4}width={500} height={500}/>
    </div>

      <div className='gap-10 py-5 '>  
      <Image className='rounded-2xl ' src={web6}width={500} height={500}/>
    </div>
    </div>
</section>
</main>

    </div>
  )
}
