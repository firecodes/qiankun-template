# element-plus-vite-starter

    "install": "npm-run-all --serial install:*",
    "install:sub-vue": "cd sub-vue && npm i",
    "install:sub-react": "cd sub-react && npm i",
    "install:sub-html": "cd sub-html && npm i",
    "start": "npm-run-all --parallel start:*",
    "start:sub-react": "cd sub-react && npm start",
    "start:sub-vue": "cd sub-vue && npm start",
    "start:sub-html": "cd sub-html && npm start",
    "build": "npm-run-all build:* && bash ./scripts/bundle.sh",
    "build:sub-react": "cd sub-react && npm run build",
    "build:sub-vue": "cd sub-vue && npm run build",
    "build:sub-html": "cd sub-html && npm run build",
    "build:main": "cd main && npm run build",
    "test": "echo \"Error: no test specified\" && exit 1"",

## Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

### Compiles and minifies for production

```bash
npm run build
```

## Usage

```bash
git clone https://github.com/element-plus/element-plus-vite-starter
cd element-plus-vite-starter
npm i
npm run dev
```

### Custom theme

See `src/styles/element/index.scss`.
