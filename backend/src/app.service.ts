//app.serviceはビジネスロジックを実装し、それをapp.controllerに渡す。
// app.service.ts
import { pool } from './app.module';
import * as bcrypt from 'bcrypt';

// 「こんにちは、みなさん！」というメッセージをフロントエンドに返す
export const helloWorld = {
  getHello: () => 'こんにちは、みなさん！',
};

// ユーザー登録処理
export const registerService = {
  // 新規ユーザーを登録する
  register: async (username: string, password: string) => {
    // ユーザーネームがすでに登録されていないかを確認
    const [existingUser] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    // TSの型推論が「existingUser.length」にエラーを出すかもしれないが、SQLの実行結果が配列で返ってくるので、問題ない。
    if (existingUser.length > 0) {
      return 'This username is already taken.';
    }

    // パスワードをハッシュ化
    const hashedPassword = await bcrypt.hash(password, 10);

    // ユーザーネームが登録されていなければ新規ユーザーを登録
    await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    return 'User registered successfully!';
  },

  // ユーザーを認証する
  authenticate: async (username: string, password: string) => {
    const [user] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    // TSの型推論が「user.length」にエラーを出すかもしれないが、SQLの実行結果が配列で返ってくるので、問題ない。
    if (user.length > 0) {
      // ハッシュ化されたパスワードと入力されたパスワードを比較
      const match = await bcrypt.compare(password, user[0].password);
      return match ? 'User authenticated successfully!' : 'Invalid username or password.';
    } else {
      return 'Invalid username or password.';
    }
  }
};

// ログイン処理
export const loginService = {
  //名前とパスワードを受け取り、ログイン処理を行う
  login: async (username: string, password: string) => {
    // ユーザー名とパスワードが一致するかを確認する
    const authenticationResult = await registerService.authenticate(username, password);
    return authenticationResult === 'User authenticated successfully!';
  },
};