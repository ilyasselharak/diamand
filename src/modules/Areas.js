import { model, models, Schema } from "mongoose";

const AreaSchema = new Schema({
  area: String,
});

const Areas = models?.Area || model("Area", AreaSchema);

export default Areas;
