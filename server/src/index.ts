import * as express from 'express';
import * as socketIo from 'socket.io';
import * as http from 'http';
import {socketHandler} from './handlers/socket';

// Инициализируем приложение.
const appExpress: express.Express = express();
const server: http.Server = http.createServer(appExpress);
const io: socketIo.Server = socketIo(server);

// Прослушиваем соединения через Socket.io.
io.on('connection', socketHandler);

// Добавляем слушатели событий.
server.listen(8400, () => {
  console.log('Запуск прослушки *:8400')
});
