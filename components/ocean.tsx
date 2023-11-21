function Ocean() {
  return (
    <div className="min-h-screen flex flex-col sm:flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <p
          className="text-3xl md:text-6xl font-montserrat text-transparent 
       bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6"
        >
          Ocean of Opportunities
        </p>

        <div className="grid grid-cols-2 items-start sm:grid-cols-4 lg:grid-cols-3 mt-6 gap-4 mx-0 sm:mx-8 md:mx-0">
          <div
            className="flex flex-col justify-between border rounded-xl border-gray-500 bg-[#1d1d1d] 
      p-6 transition duration-300 hover:bg-white hover:text-black"
          >
            <p className="text-3xl mb-4">Front End</p>
            <div className="flex justify-between flex-col lg:flex-row lg:space-x-2">
              <p>React</p>
              <p>Angular</p>
              <p>Vue.js</p>
              <p>Nuxt.js</p>
            </div>
          </div>

          <div
            className="flex flex-col border rounded-xl border-gray-500 bg-[#1d1d1d] 
      p-6 transition duration-300 hover:bg-white hover:text-black"
          >
            <p className="text-3xl mb-4">Full Stack</p>
            <div className="flex justify-between flex-col lg:flex-row lg:space-x-2">
              <p>Spring</p>
              <p>Flask</p>
              <p>Nextjs</p>
              <p>Django</p>
            </div>
          </div>
          <div
            className="flex flex-col border rounded-xl border-gray-500 bg-[#1d1d1d] 
      p-6 transition duration-300 hover:bg-white hover:text-black"
          >
            <p className="text-3xl mb-4">ML DL</p>
            <div className="flex justify-between flex-col lg:flex-row lg:space-x-2">
              <p>SciKit</p>
              <p>Tensorflow</p>
              <p>PyTorch</p>
              <p>R</p>
            </div>
          </div>
          <div
            className="flex flex-col border rounded-xl border-gray-500 bg-[#1d1d1d] 
      p-6 transition duration-300 hover:bg-white hover:text-black"
          >
            <p className="text-3xl mb-4">App Dev</p>
            <div className="flex justify-between flex-col lg:flex-row lg:space-x-2">
              <p>Kotlin</p>
              <p>Java</p>
              <p>Flutter</p>
              <p>Swift</p>
            </div>
          </div>

          <div
            className="flex flex-col border rounded-xl border-gray-500 bg-[#1d1d1d] 
      p-6 transition duration-300 hover:bg-white hover:text-black"
          >
            <p className="text-3xl mb-4">DevOps</p>
            <div className="flex justify-between flex-col lg:flex-row lg:space-x-2">
              <p>Kubernetes</p>
              <p>Docker</p>
              <p>Jenkins</p>
              <p></p>
            </div>
          </div>

          <div
            className="flex flex-col border rounded-xl border-gray-500 bg-[#1d1d1d] 
      p-6 transition duration-300 hover:bg-white hover:text-black"
          >
            <p className="text-3xl mb-4">Cloud</p>
            <div className="flex justify-between flex-col lg:flex-row lg:space-x-2">
              <p>AWS</p>
              <p>GCP</p>
              <p>Azure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ocean;
