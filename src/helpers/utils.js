import {
  BsFillQuestionCircleFill,
  BsFillTelephoneInboundFill,
  BsFillTelephoneOutboundFill,
  BsVoicemail,
} from 'react-icons/bs'
import axios from 'axios'

export const determineCallLogo = (callType, direction) => {
  switch (true) {
    case callType === 'missed' && direction === 'inbound':
      return (
        <BsFillTelephoneInboundFill
          size="1.5rem"
          className="text-red-600 inline"
        />
      )
    case callType === 'answered' && direction === 'inbound':
      return (
        <BsFillTelephoneInboundFill
          size="1.5rem"
          className="text-green-600 inline"
        />
      )
    case callType === 'missed' && direction === 'outbound':
      return (
        <BsFillTelephoneOutboundFill
          size="1.5rem"
          className="text-red-600 inline"
        />
      )
    case callType === 'answered' && direction === 'outbound':
      return (
        <BsFillTelephoneOutboundFill
          size="1.5rem"
          className="text-red-600 inline"
        />
      )
    case callType === 'voicemail':
      return <BsVoicemail size="1.5rem" className="text-slate-600 inline" />
    default:
      return (
        <BsFillQuestionCircleFill
          size="1.5rem"
          className="text-green-600 inline"
        />
      )
  }
}

export const convertSecToHrMinSec = (sec) => {
  const seconds =
    Math.floor(sec % 60) < 10
      ? Math.floor(sec % 60)
          .toString()
          .padStart(2, '0')
      : Math.floor(sec % 60).toString()
  const minutes =
    Math.floor(sec / 60) % 60 < 10
      ? (Math.floor(sec / 60) % 60).toString().padStart(2, '0')
      : (Math.floor(sec / 60) % 60).toString()
  const hours =
    Math.floor(sec / 60) / 60 >= 1
      ? Math.floor(Math.floor(sec / 60) / 60)
          .toString()
          .padStart(2, '0')
      : 0
  return (
    (hours !== 0 ? hours + ':' : '') +
    (minutes + ':') +
    (seconds || (Number(minutes) !== 0) !== false ? seconds : '')
  )
}

const getBaseUrl = () => {
  let url
  switch (process.env.NODE_ENV) {
    case 'production':
      url =
        'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app'
      break
    case 'development':
    default:
      url =
        'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app'
  }

  return url
}

export const serverAPI = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})
