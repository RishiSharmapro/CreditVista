import React, { useRef, useState } from 'react';
import axios from 'axios';
import { NavLink } from "react-router";

const UploadCloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-gray-400"><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M18 8V2l-4 4"/><path d="M16 2h-3a2 2 0 0 0-2 2v2"/></svg>
);


const UploadPage = () => {
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');


    const handleReportUpload = async (e) => {
        e.preventDefault(); // prevent form reload

        const file = fileInputRef.current.files[0];
        if (!file) {
            console.warn("No file selected.");
            return;
        }

        const formData = new FormData();
        formData.append("data", file); // "data" is the field name expected by backend

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            window.location.href = "/dashboard";
        } catch (err) {
            console.error('Upload failed:', err);
        }
    }


    const handleFileChange = (e) => {
        console.log(e.target.files);
        const file = e.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };
    
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <div className="flex-grow flex items-center justify-center p-6">
                 <div className="w-full max-w-2xl text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upload Your Credit Report</h1>
                    <p className="text-lg text-gray-600 mb-8">Simply upload the XML file from the credit bureau to generate your dashboard.</p>
                    
                    <form onSubmit={handleReportUpload}>
                    <div 
                        className="relative border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center cursor-pointer hover:border-blue-500 transition-colors bg-white"
                        onClick={() => fileInputRef.current.click()}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        <div className="flex flex-col items-center">
                            <UploadCloudIcon />
                            <p className="mt-4 text-lg font-semibold text-gray-700">
                                {fileName ? `Selected: ${fileName}` : 'Click to browse or drag & drop your file here'}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">XML files only</p>
                        </div>

                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".xml, text/xml"
                        />
                    </div>
                        {fileName && (<button type="submit" className="mt-4 bg-blue-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700 transition-colors font-semibold"> 
                            Upload 
                        </button>)}
                        </form>
                     <NavLink to="/" className="mt-8 text-blue-600 hover:underline">
                        &larr; Back to Home
                    </NavLink>
                 </div>
            </div>
        </div>
    );
};

export default UploadPage;