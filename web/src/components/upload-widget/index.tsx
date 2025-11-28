import { Dropzone } from "./dropzone"
import { Header } from "./header"
import { UploadList } from "./upload-list"

export function UploadWidget() {
	return (
		<div className="bg-zinc-900 w-full overflow-hidden max-w-[360px] rounded-xl shadow-shape">
			<Header />

			<div className="flex flex-col gap-4 py-3">
				<Dropzone />

				<div className="h-px bg-zinc-800 border-t border-black/50 box-content" />

				<UploadList />
			</div>
		</div>
	);
}
