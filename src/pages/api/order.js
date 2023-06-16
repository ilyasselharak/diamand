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
    feautures,
    apt,
    zip,
    city,
    region,
    dirty,
    surface,
    //13
  } = req.body;
  const order = await Order.create({
    feautures: feautures,
    packages: packages,
    fname: fname,
    lname: lname,
    dirty:dirty,
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
    zip: zip,
    city: city,
    surface: surface,
    region: region,
  });
  order.save();
}
