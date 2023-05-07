//app.controllerでは、HTTPリクエストをハンドルするためのコントローラーを用意する。コントローラーはクライアントからリクエストを受け取り、それぞれのサービスに処理を委任し、クライアントへのレスポンスを返す。
//要するにルーター。
import { appService, ArsService } from './app.service';
import { Request, Response } from 'express';

export const appController =
  (service: typeof appService) => (req: Request, res: Response) => {
    res.send(service.getHello());
  };

export const ArsController =
  (service: typeof ArsService) => (req: Request, res: Response) => {
    res.send(service.getArs());
  };
