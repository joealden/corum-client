export default async event => {
  // you can use ES7 with async/await and even TypeScript in your functions :)

  await new Promise(resolve => setTimeout(resolve, 50))

  return {
    data: {
      message: `Hello ${event.data.name || 'World'}`
    }
  }
}
