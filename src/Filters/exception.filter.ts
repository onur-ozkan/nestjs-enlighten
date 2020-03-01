import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import * as fs from 'fs';
import * as ejs from 'ejs';

@Catch()
export class ExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();
    const request = ctx.getRequest<any>();

    const compiledView = ejs.render(fs.readFileSync(`${__dirname}/../views/index.ejs`, 'utf8'), {
      response: exception.response,
      baseUrl: `${request.protocol}://${request.headers.host}/`
    });

    response.status(response.statusCode).send(compiledView);
  }
}
