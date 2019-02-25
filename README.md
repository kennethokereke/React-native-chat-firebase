# React-native-chat-firebase
An Application I made using React native and Firebase





## Requirements
The following packages are required to run this application example:
* [Node.js](https://nodejs.org)
* [Expo](https://expo.io) mobile app

## Installation

### 1. Clone this repository
First, clone this repository to your local computer:

```bash
git clone https://github.com/kennethokereke/React-native-chat-firebase.git
```

### 2. Install the dependencies
Next, `CD` to the project directory and install all of the dependencies:

```bash
# Go to the project directory
cd React-native-chat-firebase
Then cd NewChat

# Install all of the dependencies
yarn install
```

# Just in case you do not have yarn install

### Download Yarn
* [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

## 3. Set up your Firebase Config
If you have not sign up to firebase do so now https://firebase.google.com 
```js
// firebase.js

import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "",
    authDomain: "=",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
    
```

### 4. Run the application 🎉

Finally, run the packager to build the javascript files:

```bash
yarn start
```

### 5. Expo Users (like myself)

```bash
expo start
```

Click on either the ios simulator or the andriod emulator 

Make sure you connect your phone to the same network as your computer. 
