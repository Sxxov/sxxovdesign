import strings from '../strings';
import { ClientError } from './client.error';

export class UnexpectedValueError extends ClientError {
	constructor(message: string) {
		super(`${strings.common.errors.UNEXPECTED_VALUE}${message ? `: ${message}` : ''}`);
	}
}
