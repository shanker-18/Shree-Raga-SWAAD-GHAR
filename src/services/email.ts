import emailjs from "@emailjs/browser";

export const sendWarehouseEmail = async (order: any) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_WAREHOUSE!,
      {
        order_id: order.id,
        customer_name: order.customerName,
        customer_phone: order.customerPhone,
        delivery_address: order.customerAddress,
        order_items: order.items.map((i: any) => `- ${i.name} x ${i.qty}`).join("\n"),
        total_price: order.totalPrice,
        payment_status: order.paymentStatus,
        delivery_date: order.deliveryDate,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
    );
    console.log("✅ Warehouse email sent");
  } catch (err) {
    console.error("❌ Error sending warehouse email:", err);
  }
};