import { initMongoose } from "@/lib/mongoose";
import Order from "@/modules/Order";

export default async function handle(req, res) {
  await initMongoose();
  if (req.method !== "POST") {
    res.json("should a post but its not");
    return;
  }
  const {
    lname,
    fname,
    bedRoom,
    bathRoom,
    kitchen,
    date,
    time,
    email,
    address,
    phone,
    packages,
    comment,
    apt,
    //13
  } = req.body;
  const order = await Order.create({
    packages: packages,
    firstName: fname,
    lastName: lname,
    comment: comment,
    bedRoom: bedRoom,
    bathRoom: bathRoom,
    kitchen: kitchen,
    date: date,
    time: time,
    email: email,
    phone: phone,
    address: address,
    apt: apt,
  });
  order.save();
  res.redirect(302, "/success");
}
