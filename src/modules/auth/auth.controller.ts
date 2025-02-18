import { Body, Controller, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return "Hello from AuthController!";
  }

  @Get("signin")
  signin(): string {
    return this.authService.signin();
  }

  @Get("signup")
  signup(@Body() dto: AuthDto): string {
    return this.authService.signup();
  }
}
