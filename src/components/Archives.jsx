import React, { useContext } from 'react'
import { UserContext } from '../pages/Home'
import Archive from './Archive'

const Archives = () => {
  const { calls, isLoading } = useContext(UserContext)

  const filterArchievedCalls = (calls) => {
    return calls.filter((call) => call.is_archived === true)
  }

  return (
    <div className="">
      {isLoading && <div>Loading</div>}
      {!isLoading &&
        filterArchievedCalls(calls).map((call) => (
          <Archive key={call.id} call={call} />
        ))}
    </div>
  )
}

export default Archives
