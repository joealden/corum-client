import stringToBoolean from '~/utils/stringToBoolean'

// Only logs to console if process.env.PROD is false

const logIfDev = (logType, message) => {
  if (stringToBoolean(process.env.PROD) === false) {
    console[logType](message)
  }
}

export default logIfDev
