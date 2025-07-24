// Function: injectXP - Adds XP to any user (Founder-only)
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.injectXP = functions.https.onCall(async (data, context) => {
  const { uid, amount } = data;
  await admin.firestore().collection("users").doc(uid).set({
    xp: admin.firestore.FieldValue.increment(amount)
  }, { merge: true });
  return { message: \`XP +\${amount} → \${uid}\` };
});
