import strings from '../strings';
import { ClientError } from './client.error';

export class IOError extends ClientError {
	constructor(message: string, options: {
		fsError?: NodeJS.ErrnoException;
	}) {
		const {
			fsError,
		} = options;

		super(`${strings.common.errors.IO}${message ? `: ${message}` : ''}\n${fsError?.message ?? ''}\n${fsError?.stack ?? ''}`);
	}
}
