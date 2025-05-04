import React from "react";

const StudentDetailPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#0D1B2A] px-4 py-10">
      <div className="w-full max-w-4xl bg-white dark:bg-[#1E2A38] rounded-2xl shadow-xl p-8 space-y-10">
        
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#003366] dark:text-white">
            Student Information
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Detailed profile of the student
          </p>
        </div>

        {/* Student Detail */}
        <section className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <h2 className="text-xl font-semibold text-[#003366] dark:text-white mb-4">
            Student Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <p><span className="font-medium">Name:</span> Emad Ali Khan</p>
            <p><span className="font-medium">Gender:</span> Male</p>
            <p><span className="font-medium">Date of Birth:</span> 3-12-2024</p>
            <p><span className="font-medium">Email:</span> emadalikhan5@gmail.com</p>
            <p><span className="font-medium">Phone:</span> +92 318 6342262</p>
            <p><span className="font-medium">Address:</span> R-54,55 Sector 2B Nizami Road Lines Area Karachi</p>
            <p><span className="font-medium">City:</span> Karachi</p>
          </div>
        </section>

        {/* Guardian Detail */}
        <section className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <h2 className="text-xl font-semibold text-[#003366] dark:text-white mb-4">
            Guardian Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <p><span className="font-medium">Name:</span> Rehan Ali Khan</p>
            <p><span className="font-medium">Relationship:</span> Father</p>
            <p><span className="font-medium">Email:</span> rehan@gmail.com</p>
            <p><span className="font-medium">Phone:</span> +92 318 6342262</p>
          </div>
        </section>

        {/* Previous School Info */}
        <section className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <h2 className="text-xl font-semibold text-[#003366] dark:text-white mb-4">
            Previous School Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <p><span className="font-medium">School Name:</span> Jamila Educational Academy</p>
            <p><span className="font-medium">Admission Date:</span> 12-4-2024</p>
          </div>
        </section>

        {/* Delete Button */}
        <button
          className="w-full py-3 text-lg font-semibold bg-red-600 hover:bg-red-700 text-white rounded-xl transition"
        >
          Delete Student
        </button>
      </div>
    </div>
  );
};

export default StudentDetailPage;
