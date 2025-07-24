// Placeholder for Stripe webhook to update Firestore user balance

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.stripeWebhook = functions.https.onRequest((req, res) => {
  const event = req.body;

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const uid = session.client_reference_id;
    const beans = Number(session.metadata.beans);

    admin.firestore().collection("users").doc(uid).update({
      beans: admin.firestore.FieldValue.increment(beans)
    });
  }

  res.send({ received: true });
});
