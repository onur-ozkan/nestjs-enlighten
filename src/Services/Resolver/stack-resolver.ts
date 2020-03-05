import * as stackTrace from 'stack-trace'

export class StackResolverService {
    private exception: any;

    constructor(exception: any) {
        this.exception = exception;
    }

    public async getProperErrorStack(): Promise<object> {
        const errorStack = await stackTrace.parse(this.exception)

        errorStack.map((_stack, index) => {
            const relativeFileName = errorStack[index].getFileName().indexOf(process.cwd())
            if (relativeFileName > -1) {
                errorStack[index].fileName = errorStack[index].getFileName().replace(process.cwd(), '').replace(/\\|\//, '')
            } else {
                errorStack[index].fileName = errorStack[index].getFileName();
            }
        })

        return errorStack;
    }
}