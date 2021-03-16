import strings from '../strings';
import { ClientError } from './client.error';

export class UnsupportedOperationError extends ClientError {
	constructor(message: string) {
		super(`${strings.common.errors.UNSUPPORTED_OPERATION}${message ? `: ${message}` : ''}`);
	}
}
