export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { order_id, amount, name, email } = req.body;

  const serverKey = process.env.MIDTRANS_SERVER_KEY;
  const authString = Buffer.from(`${serverKey}:`).toString("base64");

  const response = await fetch("https://app.sandbox.midtrans.com/snap/v1/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${authString}`,
    },
    body: JSON.stringify({
      transaction_details: {
        order_id,
        gross_amount: Number(amount)
      },
      customer_details: {
        first_name: name,
        email,
      },
      item_details: [
        {
          id: "IT-SURVIVAL-KIT",
          price: amount,
          quantity: 1,
          name: "IT Student Survival Kit",
        },
      ],
    }),
  });

  const data = await response.json();
  res.status(200).json(data);
}