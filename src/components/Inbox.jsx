import React, { useContext } from 'react'
import { UserContext } from '../pages/Home'
import Call from './Call'

const Inbox = () => {
  const { calls, isLoading } = useContext(UserContext)

  return (
    <div className="">
      {isLoading && <div>Loading</div>}
      {!isLoading &&
        calls.map((call) => {
          if (!call.is_archived) {
            return <Call key={call.id} call={call} />
          }
        })}
    </div>
  )
}

export default Inbox
