import { format } from 'date-fns'
import React, { useContext } from 'react'
import { MdUnarchive } from 'react-icons/md'
import { toast } from 'react-toastify'
import {
  convertSecToHrMinSec,
  determineCallLogo,
  serverAPI,
} from '../helpers/utils'
import { UserContext } from '../pages/Home'

const Archive = ({ call }) => {
  const timeCalled = format(Date.parse(call.created_at), 'PPpp')
  const { setLoading } = useContext(UserContext)

  const handleClick = () => {
    serverAPI
      .patch(`/activities/${call.id}`, {
        is_archived: false,
      })
      .then((response) => {
        toast.success('Archive had been updated.', {
          position: 'bottom-center',
          autoClose: 3600,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        setLoading(true)
      })
      .catch((err) => {
        console.log(err)
        toast.error('Error updating archive.', {
          position: 'bottom-center',
          autoClose: 3600,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      })
  }

  return (
    <div
      className="relative flex flex-col items-center bg-white border border-gray-300 rounded-2xl shadow group mx-auto my-6 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-between p-4 leading-normal w-full group-hover:bg-gray-200 group-hover:opacity-10 z-20">
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

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:z-30 group-hover:block text-purple-800 text-3xl font-bold flex items-center justify-center uppercase w-full">
        <MdUnarchive size="2.6rem" className="inline mx-6 text-purple-800" />
        Click to unarchive
      </div>
    </div>
  )
}

export default Archive
