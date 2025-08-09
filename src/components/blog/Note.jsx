import { LightBulbSvg } from '../Icons';

export default function Note({ text, children }) {
	return (
		<div className="dark:bg-zinc-600/40 bg-zinc-300/40 rounded-md w-full md:px-4 px-3 md:py-3 py-2 my-4 flex gap-2 md:gap-3 shadow-md">
			<div className="flex justify-center items-center pr-2">
				<LightBulbSvg width="28" height="28" />
			</div>
			<div className="flex-1 md:text-sm text-xs italic flex items-center">{children || text}</div>
		</div>
	);
}
