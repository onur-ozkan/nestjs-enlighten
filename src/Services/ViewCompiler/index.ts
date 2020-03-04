import { ArgumentsHost } from '@nestjs/common';
import { ErrorService } from '../Errors';

import * as fs from 'fs';
import * as ejs from 'ejs';
import * as stackTrace from 'stack-trace'

export class ViewCompilerService {
    private exception: any;
    private request: any;

    constructor(host: ArgumentsHost, exception: any) {
      this.exception = exception;
      this.request = host.switchToHttp().getRequest<any>();
    }

    public getCompiledView() {
      const errorStack = stackTrace.parse(this.exception);
      const errorObject = new ErrorService().errorDeterminator(this.exception.response.statusCode);
      const errorSolution = (!errorStack[0].typeName || !errorStack[0].methodName) ? errorObject.solutionOptions.notIntentional : errorObject.solutionOptions.intentional;

      const stylingRaw = fs.readFileSync(`${__dirname}/../../../assets/style/index.css`, 'utf8');
      const compiledView = ejs.render(fs.readFileSync(`${__dirname}/../../views/index.ejs`, 'utf8'), {
        response: this.exception.response,
        baseUrl: `${this.request.protocol}://${this.request.headers.host}/`,
        projectPath: process.env.PWD,
        stylingRaw,
        errorObject,
        errorSolution,
      });

      return compiledView;
    }
}