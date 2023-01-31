import React from 'react'
import Content from './Content'

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState('Inbox')
  console.log(openTab)
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-1/2 mx-auto min-w-min">
          <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row sticky top-0 z-50 bg-white">
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center mx-6">
              <a
                className={
                  'text-sm font-bold px-3 py-3 shadow-lg rounded-xl block leading-normal ' +
                  (openTab === 'Inbox'
                    ? 'text-white bg-purple-600'
                    : 'text-slate-800 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab('Inbox')
                }}
                data-toggle="tab"
                href="#"
              >
                Inbox
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center ">
              <a
                className={
                  'text-sm font-bold px-3 py-3 shadow-lg rounded-xl block leading-normal' +
                  (openTab === 'Archive'
                    ? 'text-white bg-purple-600'
                    : 'text-slate-800 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault()
                  setOpenTab('Archive')
                }}
                data-toggle="tab"
                href="#"
              >
                Archive
              </a>
            </li>
          </ul>
          <Content openTab={openTab} />
        </div>
      </div>
    </>
  )
}

export default Tabs
