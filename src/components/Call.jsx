import React from 'react'
import { BsFillTelephoneInboundFill } from 'react-icons/bs'

const Call = ({ call }) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-300 rounded-2xl shadow hover:bg-gray-100 mx-auto my-6 cursor-pointer">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h6 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white inlin w-full flex justify-between">
          <BsFillTelephoneInboundFill
            size="1.5rem"
            className="text-red-600 inline"
          />
          {}
          Number: &nbsp; &nbsp;{call.to ? call.to : 'Unknown'}
          <div></div>
        </h6>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  )
}

export default Call
