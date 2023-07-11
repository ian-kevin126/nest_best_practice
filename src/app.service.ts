/*
 * @Author: ian-kevin126 kevinliao125@163.com
 * @Date: 2023-07-10 23:43:42
 * @LastEditors: ian-kevin126 kevinliao125@163.com
 * @LastEditTime: 2023-07-11 22:49:30
 * @FilePath: /nest_best_practice/src/app.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
