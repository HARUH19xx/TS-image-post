import * as express from 'express';
import mysql from 'mysql2/promise';
export declare const pool: mysql.Pool;
export declare const AppModule: () => express.Express;
