import { model, models, Schema } from "mongoose";

const FrequentlySchema = new Schema({
  title: String,
  content: String,
});

const Frequentlys = models?.Frequently || model("Frequently", FrequentlySchema);

export default Frequentlys;
