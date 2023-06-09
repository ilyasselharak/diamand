import Home from "../../modules/Home";

export async function findAllContent() {
  return Home.find().exec();
}
