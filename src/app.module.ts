    
import { CacheModule, Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CacheModule.register(),
    HttpModule
  ],
  controllers: [AppController],
  providers:[AppService]
})
export class AppModule {}
