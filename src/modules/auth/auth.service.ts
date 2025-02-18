import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  getHello(): string {
    return "Hello from AuthService!";
  }
  signin(): string {
    return "signin";
  }
  signup(): string {
    return "signup";
  }
}
