/* eslint-disable no-useless-escape */
export const normalizeText = (str = "") =>
	str
		.trim()
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^\w\-]+/g, "-");
