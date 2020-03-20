import * as http from 'http';
import { Express } from 'express';

import app from './app';

export default class Server {
  private app: Express;
  private server?: http.Server;

  constructor(app: Express) {
    this.app = app;
  }

  run(port: string) {
    this.app.listen(port, () => {
      console.log(`서버 실행 시작. 포트 번호: ${port}`);
    });
  }

  stop() {
    if (this.server) {
      this.server.close();
      process.exit();
    }
  }
}

const server = new Server(app);

try {
  const port = process.env.PORT || '3000';
  server.run(port);

} catch(e) {
  console.log(e);
  server.stop();
}