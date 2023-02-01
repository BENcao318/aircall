import React, { useContext } from 'react'
import { UserContext } from '../pages/Home'
import Call from './Activity'
import Archive from './Archive'

const Archives = () => {
  const { calls, isLoading } = useContext(UserContext)

  return (
    <div className="">
      {isLoading && <div>Loading</div>}
      {!isLoading &&
        calls.map((call) => {
          if (call.is_archived) {
            return <Archive key={call.id} call={call} />
          }
        })}
    </div>
  )
}

export default Archives
