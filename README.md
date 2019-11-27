# Rent a doge!

A totally legitimate dog renting application, I swear.

![alt text](https://media.giphy.com/media/HCTfYH2Xk5yw/giphy.gif)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

# How to run

### 1. Install dependencies

```
  npm install
```

### 2. Create environment files

```
  src/environments/environment.ts
  src/environments/environment.prod.ts
```

### 3. Add your firebase credentials & graphql url

```
  export const environment = {
  production: false,
  graphql: "http://localhost:3000/graphql",
  firebase: {
    apiKey: "<YOUR API KEY>",
    authDomain: "< YOUR AUTH DOMAIN >",
    databaseURL: "< YOUR DATABASE URL >",
    projectId: "< YOUR PROJECT ID >",
    storageBucket: "< YOUR STORAGE BUCKET >",
    messagingSenderId: "< YOUR MESSAGING SENDER ID >",
    appId: "< YOUR APP ID >"
  }
};
```

### 4. Run it baby.

```
  npm run start
```

# Further help

Figure it out.
