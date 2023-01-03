const handleExit = () => {
  console.log('👋 Bye bye!')
  // server?.closeAllConnections()
  // server?.close()
  process.exit(0)
}

/**
 * @see https://stackoverflow.com/questions/14031763/doing-a-cleanup-action-just-before-node-js-exits
 */
export const setupProcess = () => {
  process.on('beforeExit', () => handleExit())

  process.on('SIGINT', () => handleExit())

  process.on('SIGUSR1', () => handleExit())
  process.on('SIGUSR2', () => handleExit())

  process.on('uncaughtException', () => handleExit())
}
