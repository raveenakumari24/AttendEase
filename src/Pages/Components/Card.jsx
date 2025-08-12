import React from 'react'

const Card = ({icon,title,value}) => {
  return (
    <div className="flex items-center gap-5 bg-sky-100 shadow-sm rounded-md p-4">
      <div className="p-2 h-10 w-10 rounded-full bg-white text-primary">
        {icon}
      </div>
      <div>
        <h2 className="font-bold text-xl">{title}</h2>
        <h2 className="text-lg">{value}</h2>
      </div>
    </div>
  )
}

export default Card
