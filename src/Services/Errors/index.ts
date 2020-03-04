import { Errors } from './State'

export class ErrorService {
    public errorDeterminator(errorCode: number) {
        return Errors[errorCode];
    }
}