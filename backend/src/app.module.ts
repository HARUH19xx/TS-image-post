import {
  helloWorldController,
  loginController,
  registerController,
} from './app.controller';
import {
  helloWorld,
  loginService,
  registerService,
} from './app.service';
import * as express from 'express';
import * as cors from 'cors';
import mysql from 'mysql2/promise';

// MySQLデータベースへの接続
export const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const AppModule: () => express.Express = () => {
  const app = express();

  // JSONボディパーサーの有効化
  app.use(express.json());

  const corsOptions = {
    origin: 'http://localhost:5500',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  };
  app.use(cors(corsOptions));

  // コントローラーを使用する
  app.get('/', helloWorldController(helloWorld));
  app.post('/login', loginController(loginService));
  app.post('/register', registerController(registerService));

  //　ユーザーインターフェース
  interface User {
    id: string;
    username: string;
    password: string;
  }

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

  return app as express.Express;
};



//　参考：手動のCORS設定
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
//   next();
// });
