import strings from '../strings';
import { ClientError } from './client.error';

export class PublishError extends ClientError {
	constructor(message: string) {
		super(`${strings.common.errors.PUBLISH}${message ? `: ${message}` : ''}`);
	}
}
