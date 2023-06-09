import { model, models, Schema } from "mongoose";

const FrequentlySchema = new Schema({
  
  slide1: Object,
});

const Home = models?.Home || model("Home", FrequentlySchema);

export default Home;
