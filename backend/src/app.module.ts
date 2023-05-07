//app.moduleはアプリケーションの機能を整理し、依存関係を管理する。
//つまり、モジュールを使ってアプリケーションの構造を提示する。
import { appController, ArsController } from './app.controller';
import { ArsService, appService } from './app.service';
import * as express from 'express';
import * as cors from 'cors';

export const AppModule: () => express.Express = () => {
  const app = express();

  // CORS設定
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  //   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  //   res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  //   next();
  // });

  const corsOptions = {
    origin: 'http://localhost:5500/*',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  };
  app.use(cors(corsOptions));

  // appControllerを使用する
  app.get('/', appController(appService));
  app.get('/ars', ArsController(ArsService));

  // その他のミドルウェアや設定をここに追加する

  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });

  return app as express.Express;
};
