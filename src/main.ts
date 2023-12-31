/*
 * @Author: ian-kevin126 kevinliao125@163.com
 * @Author: ian-kevin126 kevinliao125@163.com
 * @Date: 2023-07-10 23:43:42
 * @LastEditors: ian-kevin126 kevinliao125@163.com
 * @LastEditTime: 2023-07-11 22:51:48
 * @FilePath: /nest_best_practice/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
