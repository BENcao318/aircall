import React, { useContext } from 'react'
import { UserContext } from '../pages/Home'
import Activity from './Activity'

const Inbox = () => {
  const { calls, isLoading } = useContext(UserContext)

  const filterUnarchievedCalls = (calls) => {
    return calls.filter((call) => call.is_archived === false)
  }

  return (
    <div className="">
      {isLoading && <div>Loading</div>}
      {!isLoading &&
        filterUnarchievedCalls(calls).map((call) => (
          <Activity key={call.id} call={call} />
        ))}
    </div>
  )
}

export default Inbox
