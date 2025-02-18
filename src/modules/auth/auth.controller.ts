import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

@Controller("auth")
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

  @Post("signup")
  signup(@Body() dto: AuthDto): Promise<{ token: string }> {
    return this.authService.signup(dto);
  }
}
