import React from 'react'

const sharedLoader = () => {
  return (
    <div className="fixed top-0 left-0 z-[1000] w-full h-full overflow-hidden bg-black cursor-not-allowed bg-opacity-10" >
      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <img src="./page-loader.gif" className="w-36" alt="Loading Spinner" />
      
      </div>
    </div>
  )
}

export default sharedLoader
