import { format } from 'date-fns'
import React from 'react'
import { convertSecToHrMinSec, determineCallLogo } from '../helpers/utils'

const Call = ({ call }) => {
  const timeCalled = format(Date.parse(call.created_at), 'PPpp')

  return (
    <div className="flex flex-col items-center bg-white border border-gray-300 rounded-2xl shadow hover:bg-gray-100 mx-auto my-6 cursor-pointer">
      <div className="flex justify-between p-4 leading-normal w-full">
        <div className="my-auto mx-6">
          {determineCallLogo(call.call_type, call.direction)}
        </div>
        <h6 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 inline my-auto">
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            {call.direction === 'inbound'
              ? `From: \u00A0\u00A0 ${call.from ? call.from : 'Unknown'}`
              : `To: \u00A0\u00A0 ${call.to ? call.to : 'Unknown'}`}
          </p>
          <div className="text-base text-slate-600 font-semibold">
            {timeCalled}
          </div>
        </h6>
        <div className="text-sm text-slate-600 font-normal my-auto">
          Duration: {convertSecToHrMinSec(call.duration)}
        </div>
      </div>
    </div>
  )
}

export default Call
