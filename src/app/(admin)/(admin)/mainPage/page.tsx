
'use client';
import React, { useRef, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

// Input Field Component
const InputField = ({ label, value, onChange }) => (
  <div className="mb-4 w-full">
    <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
  </div>
);

// Text Area Component
const TextArea = ({ label, value, onChange }) => (
  <div className="mb-4 w-full">
    <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
  </div>
);

// Image Upload with Preview
const FileUpload = ({ label, onFileChange }) => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        onFileChange(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4 w-full">
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg px-6 py-8 text-center cursor-pointer hover:border-yellow-400 transition-all"
        onClick={handleImageClick}
      >
        {imagePreview ? (
          <img src={imagePreview} alt="Preview" className="mx-auto h-40 object-contain" />
        ) : (
          <>
            <FiUploadCloud className="mx-auto text-4xl text-yellow-400 mb-2" />
            <p className="text-sm text-gray-500 mb-1">Click or drag to upload</p>
          </>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

// Section Heading
const SectionHeader = ({ title }) => (
  <h2 className="text-xl font-bold text-yellow-500 mt-10 mb-4 border-b-2 border-yellow-400 pb-1">
    {title}
  </h2>
);

export default function SchoolContentForm() {
  // State for Main Page
  const [mainImage, setMainImage] = useState(null);
  const [mainIntro, setMainIntro] = useState('');

  // State for Senior School
  const [seniorImage, setSeniorImage] = useState(null);
  const [seniorTitle, setSeniorTitle] = useState('');
  const [seniorStages, setSeniorStages] = useState('');
  const [seniorYears, setSeniorYears] = useState('');
  // State for middle School
  const [middleImage, setmiddleImage] = useState(null);
  const [middleTitle, setmiddleTitle] = useState('');
  const [middleStages, setmiddleStages] = useState('');
  const [middleYears, setmiddleYears] = useState('');
  // Why Choose Section
  const [leftImg, setLeftImg] = useState(null);
  const [rightImg, setRightImg] = useState(null);
  const [chooseTitle, setChooseTitle] = useState('');
  const [chooseDesc, setChooseDesc] = useState('');

  // Features Section
  const [features, setFeatures] = useState(Array(8).fill({ title: '', desc: '' }));
  const handleFeatureChange = (index, field, value) => {
    const updated = [...features];
    updated[index][field] = value;
    setFeatures(updated);
  };

  // Teach/Learn Features
  const [teachHeading, setTeachHeading] = useState('');
  const [sub1, setSub1] = useState('');
  const [sub2, setSub2] = useState('');
  const [sub3, setSub3] = useState('');

  // Learning Journey
  const [journeyImages, setJourneyImages] = useState(Array(4).fill(null));
  const handleJourneyImg = (index, file) => {
    const updated = [...journeyImages];
    updated[index] = file;
    setJourneyImages(updated);
  };

  // Teaching Methodology
  const [sidebar, setSidebar] = useState('');
  const [timetable, setTimetable] = useState('');
  const [methods, setMethods] = useState(Array(2).fill({ title: '', desc: '', image: null }));
  const handleMethodChange = (index, field, value) => {
    const updated = [...methods];
    updated[index][field] = value;
    setMethods(updated);
  };


  const handleMainUpload = () => {
    console.log('Main Page:', {
      image: mainImage,
      intro: mainIntro,
    });
  };

  const handleSeniorUpload = () => {
    console.log('Senior School:', {
      image: seniorImage,
      title: seniorTitle,
      stages: seniorStages,
      years: seniorYears,
    });
  };
  const handleMiddleUpload = () => {
    console.log('Senior School:', {
      image: middleImage,
      title: middleTitle,
      stages: middleStages,
      years: middleYears,
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Main Page */}
      <SectionHeader title="Main Page" />
      <FileUpload label="Add Hero Section Slider Image" onFileChange={setMainImage} />
      <TextArea label="Introduction Content" value={mainIntro} onChange={setMainIntro} />
      <button
        onClick={handleMainUpload}
        className="mb-6 px-4 py-2 bg-yellow-400 text-[#003366] rounded hover:bg-yellow-500"
      >
        Upload Main Page
      </button>

      {/* Senior School */}
      <SectionHeader title="Senior School" />
      <div className="grid md:grid-cols-2 gap-6">
        <FileUpload label="Senior School Picture" onFileChange={setSeniorImage} />
        <div>
          <InputField label="Title" value={seniorTitle} onChange={setSeniorTitle} />
          <InputField label="Key Stages" value={seniorStages} onChange={setSeniorStages} />
          <InputField label="Years | Ages" value={seniorYears} onChange={setSeniorYears} />
        </div>
      </div>
      <button
        onClick={handleSeniorUpload}
        className="mb-6 px-4 py-2 bg-yellow-400 text-[#003366] rounded hover:bg-yellow-500"
      >
        Upload Senior School
      </button>

      {/* You can continue this pattern for other sections like Middle School, Why Choose, etc. */}
    {/* middle School */}
    <SectionHeader title="middle School" />
      <div className="grid md:grid-cols-2 gap-6">
        <FileUpload label="middle School Picture" onFileChange={setmiddleImage} />
        <div>
          <InputField label="Title" value={seniorTitle} onChange={setmiddleTitle} />
          <InputField label="Key Stages" value={seniorStages} onChange={setmiddleStages} />
          <InputField label="Years | Ages" value={seniorYears} onChange={setmiddleYears} />
        </div>
      </div>
      <button
        onClick={handleMiddleUpload}
        className="mb-6 px-4 py-2 bg-yellow-400 text-[#003366] rounded hover:bg-yellow-500"
      >
        Upload middle School
      </button>
{/* why choose */}
 {/* Why Choose */}
 <SectionHeader title="Why Choose Al-Madinah" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <FileUpload label="Left Image" onFileChange={setLeftImg} />
          <FileUpload label="Right Image" onFileChange={setRightImg} />
        </div>
        <div>
          <InputField label="Title" value={chooseTitle} onChange={setChooseTitle} />
          <TextArea label="Description" value={chooseDesc} onChange={setChooseDesc} />
        </div>
      </div>
      <button
        onClick={() =>
          console.log('Why Choose:', {
            leftImg,
            rightImg,
            chooseTitle,
            chooseDesc,
          })
        }
        className="mb-6 px-4 py-2 bg-yellow-400 text-[#003366] rounded hover:bg-yellow-500"
      >
        Upload Why Choose
      </button>

      {/* Features */}
      <SectionHeader title="Al-Madinah School System Features" />
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50">
            <h3 className="font-semibold text-gray-700 mb-2">Feature {i + 1}</h3>
            <InputField
              label="Title"
              value={f.title}
              onChange={(val) => handleFeatureChange(i, 'title', val)}
            />
            <TextArea
              label="Description"
              value={f.desc}
              onChange={(val) => handleFeatureChange(i, 'desc', val)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => console.log('School Features:', features)}
        className="mb-6 px-4 py-2 my-4 bg-yellow-400 text-[#003366] rounded hover:bg-yellow-500"
      >
        Upload School Features
      </button>

      {/* Teach/Learn Features */}
      <SectionHeader title="Teach / Learn Features" />
      <InputField label="Heading" value={teachHeading} onChange={setTeachHeading} />
      <div className="grid md:grid-cols-2 gap-4">
        <InputField label="Sub-heading 1" value={sub1} onChange={setSub1} />
        <InputField label="Sub-heading 2" value={sub2} onChange={setSub2} />
      </div>
      <InputField label="Sub-heading 3" value={sub3} onChange={setSub3} />
      <button
        onClick={() =>
          console.log('Teach / Learn Features:', {
            heading: teachHeading,
            sub1,
            sub2,
            sub3,
          })
        }
        className="mb-6 px-4 py-2 bg-yellow-400 text-[#003366] rounded hover:bg-yellow-500"
      >
        Upload Teach/Learn Features
      </button>

      {/* Learning Journey */}
      <SectionHeader title="Learning Journey" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {journeyImages.map((img, i) => (
          <FileUpload key={i} label={`Upload Image ${i + 1}`} onFileChange={(file) => handleJourneyImg(i, file)} />
        ))}
      </div>
      <button
        onClick={() => console.log('Learning Journey Images:', journeyImages)}
        className="mb-6 px-4 py-2 bg-yellow-400 text-[#003366] rounded hover:bg-yellow-500"
      >
        Upload Learning Journey
      </button>

      {/* Teaching Methodology */}
      <SectionHeader title="Teaching Methodology" />
      <InputField label="Sidebar Contents" value={sidebar} onChange={setSidebar} />
      <InputField label="Live Timetabled Content" value={timetable} onChange={setTimetable} />
      <div className="grid md:grid-cols-2 gap-6">
        {methods.map((m, i) => (
          <div key={i} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50">
            <h3 className="font-semibold text-gray-700 mb-2">Method {i + 1}</h3>
            <InputField
              label="Title"
              value={m.title}
              onChange={(val) => handleMethodChange(i, 'title', val)}
            />
            <TextArea
              label="Description"
              value={m.desc}
              onChange={(val) => handleMethodChange(i, 'desc', val)}
            />
            <FileUpload
              label={`Upload Methodology Image ${i + 1}`}
              onFileChange={(file) => handleMethodChange(i, 'image', file)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() =>
          console.log('Teaching Methodology:', {
            sidebar,
            timetable,
            methods,
          })
        }
        className="mb-6 px-4 py-2 mt-4 bg-yellow-400 text-[#003366] rounded hover:bg-yellow-500"
      >
        Upload Teaching Methodology
      </button>
     
    </div>
  );
}

