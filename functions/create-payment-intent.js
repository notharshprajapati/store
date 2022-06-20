// domain/.netlify/functions/create-payment-intent

exports.handler = async function (event, content) {
  console.log(event);

  return {
    statusCode: 200,
    body: "payment intent",
  };
};
