// Firebase Function: updateFounderConfig (secured)
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.updateFounderConfig = functions.https.onCall(async (data, context) => {
  const { vaultMargin, referralCap } = data;

  await admin.firestore().collection("system").doc("founderConfig").set({
    vaultMargin,
    referralCap,
    updatedAt: Date.now()
  }, { merge: true });

  return { success: true, message: "Founder config updated." };
});
