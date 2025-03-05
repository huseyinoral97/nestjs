import { IsObjectId } from "class-validator-mongo-object-id";

export class UpdateUserParams {
  @IsObjectId()
  id: string;
}
