// Function: vaultCast - Sends system-wide message
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.vaultCast = functions.https.onCall(async (data, context) => {
  const { message } = data;
  await admin.firestore().collection("system").doc("vaultCast").set({
    message,
    timestamp: Date.now()
  });
  return { message: "Broadcast sent." };
});
