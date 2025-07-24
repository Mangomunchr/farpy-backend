// Function: toggleChaosLock - Flip system lock
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.toggleChaosLock = functions.https.onCall(async (data, context) => {
  const { lock } = data;
  await admin.firestore().collection("system").doc("chaosLock").set({
    locked: lock,
    updatedAt: Date.now()
  });
  return { locked: lock };
});
