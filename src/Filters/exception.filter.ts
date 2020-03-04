import { Catch, ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { ViewCompilerService } from '../Services/ViewCompiler'

@Catch()
export class ExceptionFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<any>();

    const compiledView = new ViewCompilerService(host, exception).getCompiledView();
    response.status(response.statusCode).send(compiledView);
  }
}
