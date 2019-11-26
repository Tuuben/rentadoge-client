// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  graphql: "http://localhost:3000/graphql",
  tempEmail: "tobbe.helsign@gmail.com",
  tempPassword: "asdqwe123",
  firebase: {
    apiKey: "AIzaSyALLbbBOr4a_I0KfULHjHdRvLOZFTJeT8M",
    authDomain: "rentadoge-staging.firebaseapp.com",
    databaseURL: "https://rentadoge-staging.firebaseio.com",
    projectId: "rentadoge-staging",
    storageBucket: "rentadoge-staging.appspot.com",
    messagingSenderId: "218134027053",
    appId: "1:218134027053:web:6e80d79df4fa4c33ab91a4"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
