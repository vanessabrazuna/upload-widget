import { UploadItem } from "./upload-item"

export function UploadList() {
  const isUploadListEmpty = false

  return (
    <div className="px-3 flex flex-col gap-3">
      <span className="text-xs font-medium">
        Uploaded Files{' '}
        <span className="text-zinc-400">(2)</span>
      </span>

      {isUploadListEmpty ? (
        <span className="text-zinc-400 text-xs">
          No uploads added
        </span>
      ) : (
        <div className="space-y-2">
          <UploadItem />
          <UploadItem />
        </div>
      )}
    </div>
  )
}