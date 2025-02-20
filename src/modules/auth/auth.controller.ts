import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { LoginDto } from "./dto/login.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return "Hello from AuthController!";
  }

  @Post("signin")
  signin(@Body() dto: LoginDto): Promise<{ token: string }> {
    return this.authService.signin(dto);
  }

  @Post("signup")
  signup(@Body() dto: AuthDto): Promise<{ token: string }> {
    return this.authService.signup(dto);
  }
}
