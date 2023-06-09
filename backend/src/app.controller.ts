//コントローラーは、クライアントからのリクエストを処理し、レスポンスを返す。
import { helloWorld, loginService, registerService } from './app.service';
import { Request, Response } from 'express';

export const helloWorldController =
  (service: typeof helloWorld) => (req: Request, res: Response) => {
    res.send(service.getHello());
  };

export const loginController =
  (service: typeof loginService) => (req: Request, res: Response) => {
    const name = req.body.name;
    const password = req.body.password;

    // 入力の検証とクリーニングを行う（実際のコードでは必須）

    const result = service.login(name, password);

    if (result) {
      res.status(200).send({ success: true });
    } else {
      res.status(401).send({ error: 'Invalid username or password' });
    }
  };

export const registerController =
  (service: typeof registerService) => async (req: Request, res: Response) => {
    const username = req.body.username;
    const password = req.body.password;

    // 入力の検証とクリーニング。
    const result = service.register(username, password);

    if (await result === 'User registered successfully!') {
      res.status(200).send({ success: true });
    } else {
      res.status(400).send({ error: result });
    }
  };

export const appController =
  (service: typeof helloWorld) => {
    return (req: Request, res: Response) => {
      res.send(service.getHello());
    };
  };
