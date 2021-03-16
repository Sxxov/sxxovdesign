import strings from '../strings';
import { ClientError } from './client.error';

export class JSONParseError extends ClientError {
	constructor(message?: string) {
		super(`${strings.common.errors.JSON_PARSE}${message ? `: ${message}` : ''}`);
	}
}
