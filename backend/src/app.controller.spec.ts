import { Test, TestingModule } from '@nestjs/testing';
import { appController } from './app.controller';
import { appService } from './app.service';

describe('appController', () => {
  let controllerFunction: ReturnType<typeof appController>;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [{ provide: 'appService', useValue: appService }],
    }).compile();

    const service = app.get<typeof appService>('appService');
    controllerFunction = appController(service);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const mockReq = {} as any;
      const mockRes = { send: jest.fn() } as any;
      controllerFunction(mockReq, mockRes);
      expect(mockRes.send).toHaveBeenCalledWith('Hello World!');
    });
  });
});
