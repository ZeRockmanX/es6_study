### 01 ###
```
cd 01
init /01/ [index.html]
init /01/dist/ is empty
init /01/src/ [index.js]

npm init -y
#it will create package.json

npm install -g babel-cli
#babel can use es6 change to es5
#cli mean commnad

npm install --save-dev babel-preset-es2015 babel-cli

#create .babelrc on /root
{
    "presets": [
        "es2015"
    ],
    "plugins": []
}

# build es6 to es5
babel src/index.js -o dist/index.js

# Or you can modify package.json add:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src/index.js -o dist/index.js"
  },
# And you can use command
npm run build
```