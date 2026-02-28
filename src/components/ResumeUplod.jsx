import React,{useState} from "react";
import pdfIcon from '../assets/icons/resume-picker.svg'
import pdf from '../assets/icons/pdf-logo.svg'
function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Only PDF or DOC files allowed");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      alert("File must be under 5MB");
      return;
    }

    setFile(selectedFile);
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        Resume / CV <span className="text-[#EE5125] ml-1">*</span>
      </label>

      <div className="relative">

        {/* Hidden Input */}
        <input
          type="file"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
        />

        {/* Upload Box */}
        <div className="border border-dashed border-black/30 rounded-[10px] p-8 text-center bg-[#00000008]">

          {!file ? (
            <>
              <div className="flex justify-center mb-4">
                <div className="w-[54px] h-[54px] flex items-center justify-center   rounded-lg">
                  <img src={pdfIcon}/>
                </div>
              </div>

              <p className="text-sm text-black/70">
                Drag & Drop or Click to Upload
              </p>

              <p className="text-xs mt-2 text-black/50">
                PDF, DOC up to 5MB
              </p>
            </>
          ) : (
            <>
              <div className="flex justify-center mb-4">
                <img
                  src={pdf}
                  alt="pdf"
                  className="w-[54px] h-[54px]"
                />
              </div>

              <p className="text-sm text-black/70">
                {file.name}
              </p>

              <button
                type="button"
                onClick={() => setFile(null)}
                className="mt-3 text-sm underline text-black"
              >
                Change File
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}
export default ResumeUpload