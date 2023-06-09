# 基本となるイメージを指定
FROM node:14

# アプリケーションの作業ディレクトリを設定
WORKDIR /app

# package.jsonをコピー
COPY package*.json /app

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー(相対パスを記述したほうが安全。)
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 3000

# アプリケーションを起動するコマンドを指定
CMD [ "npm", "start" ]