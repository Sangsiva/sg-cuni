"use client";

import { useState, useRef, DragEvent } from "react";
import { Upload, X, FileText } from "lucide-react";

interface FileUploadProps {
  onFileSelect: (file: File | null) => void;
  accept?: string;
  maxSizeMB?: number;
}

export default function FileUpload({
  onFileSelect,
  accept = "image/*,.pdf,.ai,.eps,.svg",
  maxSizeMB = 5,
}: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (selected: File) => {
    setError(null);
    if (selected.size > maxSizeMB * 1024 * 1024) {
      setError(`File too large. Max ${maxSizeMB}MB.`);
      return;
    }
    setFile(selected);
    onFileSelect(selected);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) handleFile(dropped);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) handleFile(selected);
  };

  const removeFile = () => {
    setFile(null);
    setError(null);
    onFileSelect(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  if (file) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-gold/30 bg-gold/5 px-4 py-3">
        <FileText className="h-5 w-5 flex-shrink-0 text-gold" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-navy">{file.name}</p>
          <p className="text-xs text-slate-light">
            {(file.size / 1024).toFixed(0)} KB
          </p>
        </div>
        <button
          type="button"
          onClick={removeFile}
          className="flex-shrink-0 rounded-full p-1 text-slate-light hover:bg-slate-light/10 hover:text-navy transition-colors"
          aria-label="Remove file"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => inputRef.current?.click()}
        className={`cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-all ${
          isDragging
            ? "border-gold bg-gold/5"
            : "border-slate-light/30 bg-off-white hover:border-gold/50"
        }`}
      >
        <Upload
          className={`mx-auto h-8 w-8 ${
            isDragging ? "text-gold" : "text-slate-light"
          }`}
        />
        <p className="mt-2 text-sm font-medium text-navy">
          Drop your logo here or{" "}
          <span className="text-gold">click to browse</span>
        </p>
        <p className="mt-1 text-xs text-slate-light">
          PNG, JPG, PDF, AI, SVG — Max {maxSizeMB}MB
        </p>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          onChange={handleInputChange}
          className="hidden"
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
