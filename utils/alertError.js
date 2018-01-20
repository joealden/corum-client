// Formats a GraphQL error to display to the user

export const formatError = errorMessage => {
  const colonIndex = errorMessage.lastIndexOf(':')
  const cleanedMessage = errorMessage.substring(
    colonIndex + 2,
    errorMessage.length
  )
  return cleanedMessage
}

const alertError = errorMessage => {
  const cleanedMessage = formatError(errorMessage)
  alert(`Error: ${cleanedMessage}`)
}

export default alertError
