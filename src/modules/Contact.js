import { model, models, Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    name: String,
    email: String,
    phone: String,
    message: String,
  },
  { timestamps: true }
);

const Contact = models?.Contact || model("Contact", ContactSchema);

export default Contact;
