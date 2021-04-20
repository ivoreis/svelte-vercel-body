import type { RequestHandler } from '@sveltejs/kit';

export const post: RequestHandler = async (req) => {
	const { headers, ...rest } = req;
	console.log(rest)
	return {
		body: {
			message: rest
		}
	};
};
