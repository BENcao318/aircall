import React, { useContext } from 'react'
import { UserContext } from '../pages/Home'
import Activity from './Activity'

const Inbox = () => {
  const { calls, isLoading } = useContext(UserContext)

  return (
    <div className="">
      {isLoading && <div>Loading</div>}
      {!isLoading &&
        calls.map((call) => {
          if (!call.is_archived) {
            return <Activity key={call.id} call={call} />
          }
        })}
    </div>
  )
}

export default Inbox
