import strings from '../strings';
import { ClientError } from './client.error';

export class IncorrectUsageError extends ClientError {
	constructor(message: string) {
		super(`${strings.common.errors.INCORRECT_USAGE}${message ? `: ${message}` : ''}`);
	}
}
