import { useEffect, useState } from "react";

/**
 * 引数のメディアクエリにマッチするかどうかを返す
 *
 * @param query media query
 * @returns queryにマッチするかどうか
 *
 * @example
 * ```tsx
 * const isSp = useMediaQuery("(max-width: 599px)");
 * ```
 */
export const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(window.matchMedia(query).matches);

	useEffect(() => {
		const media = window.matchMedia(query);
		const listener = () => setMatches(media.matches);

		media.addEventListener("change", listener);

		return () => media.removeEventListener("change", listener);
	}, [query]);

	return matches;
};
