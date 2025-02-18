import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://huseyinoral:pBIVSUn75QZ7ASld@cluster0.svxx5.mongodb.net/",
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
