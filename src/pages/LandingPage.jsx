import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import removeImage from '../assets/remove-background-tool.jpg'
import upscaleImage from '../assets/upscale-image-tool.jpg'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section class="bg-transparent my-20 lg:grid lg:h-screen lg:place-content-center">
  <div class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div class="mx-auto max-w-prose text-center">
      <h1 class="text-4xl font-bold text-gray-900 sm:text-5xl">
        A versatile tool to enhance your images!
      </h1>

      <p class="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
        We are a provider of AI Tools that are used to make it easier for users to edit their images. Try it for free now!
      </p>

      <div class="mt-4 flex justify-center gap-4 sm:mt-6">
        <a
          class="inline-block rounded-full border border-slate-950 bg-slate-950 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-slate-900 shadow-xl"
          href="#tools"
        >
          Lets Try
        </a>
      </div>
    </div>
  </div>
</section>
<section id="tools" class="p-6 lg:p-20 grid gap-4 lg:grid-cols-2 lg:gap-3 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
  <div class="bg-white rounded-xl border border-slate-900 gap-y-3 shadow-xl">
    <img class="rounded-t-xl" onload="lazy" src={removeImage} alt="Remove Background Image" />
    <div class="p-4 lg:my-4">
    <h1 class="text-xl font-bold">Remove Background</h1>
    <p class="text-lg font-medium text-gray-600">Remove background from the photo with the easiest way!</p>
    <div class="py-4">
    <a href="/removebg" class="bg-slate-950 px-4 py-2 rounded-full text-white">Click Here</a>
    </div>
    </div>
     
  </div>
  <div class="bg-white rounded-xl border border-slate-900 gap-y-3 shadow-xl">
    <img class="rounded-t-xl" onload="lazy" src={upscaleImage} alt="Upscale Image" />
    <div class="p-4">
    <h1 class="text-xl font-bold">Image Upscaler</h1>
    <p class="text-lg font-medium text-gray-600">Upscale your image resolution with this tools!</p>
    <div class="py-4">
    <a href="/upscaler" class="bg-slate-950 px-4 py-2 rounded-full text-white">Click Here</a>
    </div>
    </div>
    </div>
</section>
<Footer />
    </>
    )
}

export default LandingPage