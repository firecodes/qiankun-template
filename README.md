# qiankun-example
    "install": "npm-run-all --serial install:*",
    "install:app1": "cd app1 && npm i",
    "install:app2": "cd app2 && npm i",
    "install:sub-html": "cd sub-html && npm i",
    "install:sub-vue": "cd sub-vue && npm i",
    "install:sub-vue2": "cd sub-vue2 && npm i",
    "install:sub-vue3": "cd sub-vue3 && npm i",
    "install:sub-react": "cd sub-react && npm i",
    "install:demo-react": "cd demo-react && npm i",
    "install:demo-vue2": "cd demo-vue2 && npm i",
    "install:demo-vue3": "cd demo-vue3 && npm i",
    "start": "npm-run-all --parallel start:*",
    "start:app1": "cd app1 && npm run dev",
    "start:app2": "cd app2 && npm run dev",
    "start:sub-html": "cd sub-html && npm start",
    "start:sub-react": "cd sub-react && npm start",
    "start:sub-vue": "cd sub-vue && npm run dev",
    "start:sub-vue2": "cd sub-vue2 && npm run start",
    "start:sub-vue3": "cd sub-vue3 && npm run start",
    "start:demo-react": "cd demo-react && npm start",
    "start:demo-vue2": "cd demo-vue2 && npm start",
    "start:demo-vue3": "cd demo-vue3 && npm run start",
    "build": "npm-run-all build:* && bash ./scripts/bundle.sh",
    "build:app1": "cd app1 && npm run build",
    "build:app2": "cd app2 && npm run build",
    "build:sub-html": "cd sub-html && npm run build",
    "build:sub-react": "cd sub-react && npm run build",
    "build:sub-vue": "cd sub-vue && npm run build",
    "test": "echo \"Error: no test specified\" && exit 1"

## 开始
安装根目录工程依赖
```
npm i
```
一键安装所有主子应用的依赖
```
npm run install
```

一键启动所有所有应用
```
npm start
```

通过 [http://localhost:8080/](http://localhost:8080/) 访问主应用。

## 发布
一键构建并打包所有主子应用
```
npm run build
```


