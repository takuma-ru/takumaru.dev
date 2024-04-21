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
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const media = window.matchMedia(query);
			setMatches(media.matches);
			const listener = () => setMatches(media.matches);

			media.addEventListener("change", listener);

			return () => media.removeEventListener("change", listener);
		}
	}, [query]);

	return matches;
};
