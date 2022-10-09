import { PreparedFile, prepareFile } from "./prepareFile";

type Props = {
  id: string;
  className?: string;
  children: React.ReactNode;
  onFiles: (files: PreparedFile[]) => void;
};

export const FileUploadTarget = ({
  id,
  className,
  children,
  onFiles,
}: Props) => (
  <label
    htmlFor={id}
    className={className}
    onDrop={async (event) => {
      event.preventDefault();

      const files = event.dataTransfer.items
        ? Array.from(event.dataTransfer.items)
            .map((item) => (item.kind === "file" ? item.getAsFile() : null))
            .filter((file): file is File => file != null)
        : Array.from(event.dataTransfer.files);

      const preparedFiles = await Promise.all(files.map(prepareFile));

      onFiles(preparedFiles);
    }}
    onDragOver={(event) => {
      event.preventDefault();
    }}
  >
    {children}
    <input
      id={id}
      type="file"
      className="hidden"
      onChange={async (event) => {
        const files = Array.from(event.target.files ?? []);
        if (files.length) {
          const preparedFiles = await Promise.all(files.map(prepareFile));
          onFiles(preparedFiles);
        }
        // Reset file input so selecting the same file twice works
        event.target.value = "";
      }}
    />
  </label>
);
