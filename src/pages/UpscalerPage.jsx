import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Buffer } from 'buffer';
import { Riple } from 'react-loading-indicators'

const RemovePage = () => {
  let [image, setImage] = useState(false)
  let [imageProcess, setImageProcess] = useState(false)
  let [done, setDone] = useState(false)
  let [loading, setLoading] = useState(false)
  const BASEURL = `https://imagedit-server.vercel.app`
  
  const sendImage = async (e) => {
    let theImage = e.target.files[0]
    let buffer = await theImage.arrayBuffer()
    let array = Buffer.from(buffer)
    setImageProcess(array)
    console.log(array)
    setImage(URL.createObjectURL(theImage))
  }
  
  const processImage = async (e) => {
    console.log('Button pressed')
    setLoading(true)
    let { data } = await axios.post(BASEURL+'/api/upscale', {
      buffer: imageProcess
    }, { responseType: "arraybuffer" })
    const blob = new Blob([data], { type: 'image/png' })
    setImage(URL.createObjectURL(blob))
    setLoading(false)
    setDone(true)
  }
  
  const downloadImage = (e) => {
    const a = document.createElement('a');
  a.href = image;
  a.download = 'result.png'
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(image);
  }
  
  const resetHandler = () => {
    setImage(false)
    setImageProcess(false)
    setDone(false)
    setLoading(false)
  }
  
  const buttonHandler = () => {
    if (!image) return
    if(loading) return <button class="bg-slate-950 py-3 w-full rounded-xl text-white shadow-lg">Loading..</button>
    if(done) return <div><button onClick={downloadImage} class="bg-slate-950 py-3 w-full rounded-xl text-white shadow-lg">Download The Result</button><button onClick={resetHandler} class="text-slate-950 bg-white drop-shadow-xl py-3 w-full my-5 rounded-xl">Wanna try other image?</button></div>
    if (!done) return <button onClick={processImage} class="bg-slate-950 py-3 w-full rounded-xl text-white shadow-lg">Process The Image</button>
  }
  return (
    <>
      <Navbar />
      <section class="bg-transparent my-20 lg:grid lg:h-screen lg:place-content-center">
  <div class="mx-auto w-screen max-w-screen-xl px-8 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
    <div class="mx-auto max-w-prose text-center">
      <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl">
        Enchance your image resolution right now!
      </h1>
      {image && (
      <>
      <div class={`flex justify-center items center ${loading ? 'relative inline-block' : ''}`}>
        <img src={image} class={`bg-gray-50 border-gray-300 rounded-lg border rounded-lg shadow-sm my-6 h-auto ${loading ? 'opacity-75' : 'opacity-100'}`}  />
        {loading && (
        <div className="absolute inset-0 flex items-center opacity-100 justify-center">
            <Riple color="#000000" size="medium" text="" textColor="" />
        </div>
        )}
      </div>
      </>
      )}
      {!image && (
      <label
  for="File"
  class={`flex flex-col items-center rounded-lg border border-gray-300 p-4 text-gray-900 shadow-sm sm:p-6 bg-gray-50 my-5 py-20 lg:py-32`}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="size-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
    />
  </svg>

  <span class="mt-4 font-medium"> Upload your image </span>

  <span
    class="mt-2 inline-block rounded border border-gray-200 bg-gray-50 px-3 py-1.5 text-center text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-100"
  >
    Browse files
  </span>

  <input required type="file" id="File" class="sr-only" onChange={sendImage} accept="image/*" />
  
</label>
)}
{buttonHandler()}
    </div>
  </div>
</section>
<Footer />
    </>)
}

export default RemovePage