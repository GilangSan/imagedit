const Navbar = () => {
  return (
     <>
       <header class="bg-transparent backdrop-blur-sm border border-b-slate-950/50 fixed w-full">
  <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <a class="block text-slate-950 font-bold text-lg" href="/">
      <span class="sr-only">Home</span>
      Imagedit
    </a>

    <div class="flex flex-1 items-center justify-end">
    
      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
          <a
            class="block rounded-md bg-slate-950 px-5 py-2.5 text-sm font-medium transition hover:bg-slate-900 text-white"
            href="https://github.com/GilangSan"
          >
            Github
          </a>
        </div>

      </div>
    </div>
  </div>
</header>
     </>
    )
}

export default Navbar