import Areas from "../../modules/Areas";

export async function findAllAreas() {
  return Areas.find().exec();
}
