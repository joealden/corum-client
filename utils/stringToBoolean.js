// Helper function to handle process.env booleans

const stringToBoolean = stringBool => {
  if (stringBool === 'true') {
    return true
  } else if (stringBool === 'false') {
    return false
  } else {
    throw new Error(
      `Expected a string of 'true' or 'false', but got ${stringBool}`
    )
  }
}

export default stringToBoolean
