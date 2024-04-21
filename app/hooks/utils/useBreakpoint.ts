import { useMediaQuery } from "~/hooks/utils/useMediaQuery";

export type DisplayType = "sp" | "tab" | "pc";

type useBreakpointReturnType = {
	isSp: boolean;
	isTab: boolean;
	isPc: boolean;
	displayType: DisplayType;
};

const BREAKPOINT = {
	SP: "(max-width: 599px)",
	TAB: "(min-width: 600px) and (max-width: 1023px)",
	PC: "(min-width: 1024px)",
};

/**
 * 画面サイズに応じたブレイクポイントを返す
 *
 * @returns {Object}
 * @returns isSp - スマホサイズかどうか
 * @returns isTab - タブレットサイズかどうか
 * @returns isPc - PCサイズかどうか
 * @returns displayType - 画面サイズの種類
 *
 * @example
 * ```tsx
 * const { isSp, isTab, isPc, displayType } = useBreakpoint();
 *
 *
 * return (
 *  <div>
 *  {isSp && <p>スマホサイズです</p>}
 *  {isTab && <p>タブレットサイズです</p>}
 *  {isPc && <p>PCサイズです</p>}
 *  <p>画面サイズ: {displayType}</p>
 * </div>
 * ```
 */
export const useBreakpoint = (): useBreakpointReturnType => {
	const isSp = useMediaQuery(BREAKPOINT.SP);
	const isTab = useMediaQuery(BREAKPOINT.TAB);
	const isPc = useMediaQuery(BREAKPOINT.PC);

	const displayType = isSp ? "sp" : isTab ? "tab" : "pc";

	return { isSp, isTab, isPc, displayType };
};
