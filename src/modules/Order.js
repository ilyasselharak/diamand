import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    packages: String,
    firstName: String,
    lastName: String,
   
    bedRoom: Number,
    bathRoom: Number,
    kitchen: Number,
    date: String,
    time: String,
    email: String,
    phone: String,
    address: String,
    apt: String,
    comment: String,
  },
  { timestamps: true }
);

const Order = models?.Order || model("Order", OrderSchema);

export default Order;
