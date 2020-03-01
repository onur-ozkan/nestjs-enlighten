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
    const status = exception.getStatus();

    const compiledView = ejs.render(fs.readFileSync(`${__dirname}/../views/index.ejs`, 'utf8'));

    // response
    //   .status(content)
    //   .json({
    //     statusCode: status,
    //     timestamp: new Date().toISOString(),
    //     path: request.url,
    //   });

     /**
      * TODO
      * Deal with errors and render them on HTML page
      */

    response.status(status).send(compiledView);

  }
}
