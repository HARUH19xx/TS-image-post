import { helloWorld, loginService, registerService } from './app.service';
import { Request, Response } from 'express';
export declare const helloWorldController: (service: typeof helloWorld) => (req: Request, res: Response) => void;
export declare const loginController: (service: typeof loginService) => (req: Request, res: Response) => void;
export declare const registerController: (service: typeof registerService) => (req: Request, res: Response) => Promise<void>;
export declare const appController: (service: typeof helloWorld) => (req: Request, res: Response) => void;
