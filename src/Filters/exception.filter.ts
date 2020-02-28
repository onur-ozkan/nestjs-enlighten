import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class ExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<any>();
    const request = ctx.getRequest<any>();
    const status = exception.getStatus();

    // response
    //   .status(status)
    //   .json({
    //     statusCode: status,
    //     timestamp: new Date().toISOString(),
    //     path: request.url,
    //   });

     /**
     * TODO
     * Deal with errors and render them on HTML page
     */

  }
}
