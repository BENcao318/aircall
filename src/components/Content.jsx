import React from 'react'
import Archives from './Archives'
import Inbox from './Inbox'

const Content = ({ openTab }) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="px-4 py-5 flex-auto">
        <div className="tab-content tab-space">
          {openTab === 'Inbox' && <Inbox />}
          {openTab === 'Archive' && <Archives />}
        </div>
      </div>
    </div>
  )
}

export default Content
