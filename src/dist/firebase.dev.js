"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

require("firebase/storage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseApp = _firebase["default"].initializeApp({
  apiKey: "AIzaSyDpCrQbsPmoG5LMvr1OlXKqyouRCPoSgkc",
  authDomain: "poapool-site.firebaseapp.com",
  projectId: "poapool-site",
  storageBucket: "poapool-site.appspot.com",
  messagingSenderId: "34215386119",
  appId: "1:34215386119:web:565f6ab8a2458564e09ea2",
  measurementId: "G-E5PDGKCPSD"
});

var db = firebaseApp.firestore();
exports.db = db;