import strings from '../strings';
import { ClientError } from './client.error';

export class UnreachableError extends ClientError {
	constructor(message: string) {
		super(`${strings.common.errors.UNREACHABLE}${message ? `: ${message}` : ''}`);
	}
}
