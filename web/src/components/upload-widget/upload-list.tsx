import { UploadItem } from "./upload-item"
import { useUploads } from "../../store/uploads"

export function UploadList() {
  const uploads = useUploads(store => store.uploads)
  const isUploadListEmpty = uploads.size === 0

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
        <div className="flex flex-col gap-2">
          {Array.from(uploads).map(([uploadId, upload]) => {
            return (
              <UploadItem
                key={uploadId}
                upload={upload}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}