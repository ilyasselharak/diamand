import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    feautures: Object,
    packages: String,
    fname: String,
    lname: String,
    city: String,
    zip: String,
    bedRoom: Number,
    bathRoom: Number,
    kitchen: Number,
    dirty: Number,
    date: String,
    time: String,
    email: String,
    phone: String,
    address: String,
    apt: String,
    region: String,
    surface: Number,
    comment: String,
  },
  { timestamps: true }
);

const Order = models?.Order || model("Order", OrderSchema);

export default Order;
