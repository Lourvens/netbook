import React from 'react'


const centerStyle = ""
function Circle({ children }) {
  return (
    <div className="flex items-center ">
      <div className="relative w-4 h-4 mr-4">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-100 mr-2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
      </div>
      <span className="font-medium">
        {children}
      </span>
    </div>
  )
}

export default Circle