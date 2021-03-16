import strings from '../strings';
import { ClientError } from './client.error';

export class NetworkError extends ClientError {
	constructor(message: string) {
		super(`${strings.common.errors.NETWORK}${message ? `: ${message}` : ''}`);
	}
}
