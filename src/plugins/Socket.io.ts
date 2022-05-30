// Socket.io.ts

import { io } from 'socket.io-client'

export default {
  install: (app: any, { connection, options }: { connection: string, options: object }) => {
    const socket = io(connection, options)
    app.config.globalProperties.$socket = socket
    app.provide('socket', socket)
  }
}
