import { initMongoose } from "@/lib/mongoose";
import Contact from "../../modules/Contact";

export default async function handle(req, res) {
  await initMongoose();
  if (req.method !== "POST") {
    res.json("should a post but its not");
    return;
  }
  const {
    firstName,
    email,
    phone,
    message,
    //13
  } = req.body;
  const contact = await Contact.create({
    name: firstName,

    email: email,
    phone: phone,

    message: message,
  });
  contact.save();
}
