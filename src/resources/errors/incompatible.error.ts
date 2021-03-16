import strings from '../strings';
import { ClientError } from './client.error';

export class IncompatibleError extends ClientError {
	constructor(message: string) {
		super(`${strings.common.errors.INCOMPATIBLE}${message ? `:\n\n${message}` : ''}`);
	}
}
