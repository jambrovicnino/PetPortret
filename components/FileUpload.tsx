
import React, { useRef, useState } from 'react';
import { Upload, X, ImageIcon } from 'lucide-react';

interface FileUploadProps {
  onUpload: (base64: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList) => {
    const file = files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div 
      className={`relative w-full max-w-xl mx-auto h-80 rounded-3xl border-4 border-dashed transition-all flex flex-col items-center justify-center p-8 cursor-pointer ${
        dragActive ? 'border-orange-500 bg-orange-50' : 'border-slate-200 bg-white hover:border-orange-300'
      }`}
      onDragEnter={onDrag}
      onDragLeave={onDrag}
      onDragOver={onDrag}
      onDrop={onDrop}
      onClick={onButtonClick}
    >
      <input 
        ref={inputRef}
        type="file" 
        className="hidden" 
        accept="image/*"
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
      />
      
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors ${
        dragActive ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-400'
      }`}>
        <Upload size={32} />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-2">Drop your photo here</h3>
      <p className="text-slate-500 mb-6 text-center">or click to browse from your device</p>
      
      <button className="bg-slate-900 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-slate-800 transition-all">
        Select Image
      </button>

      <div className="absolute bottom-6 flex gap-4">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
          <ImageIcon size={14} /> High-Res Recommended
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
