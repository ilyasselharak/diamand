import Frequentlys from "../../modules/Frequently";

export async function findAllQuestions() {
  return Frequentlys.find().exec();
}
