import { Plus } from "lucide-react";

const courses = [
  "Fall Protection 101",
  "Confined Space Awareness",
  "Crane Signalman",
];

export function LMSDashboard() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Main container with soft shadow */}
      <div className="relative bg-[hsl(220,20%,97%)] rounded-[32px] p-6 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)]">
        {/* Header badges */}
        <div className="flex gap-3 mb-6">
          <div className="px-4 py-2 bg-white rounded-full border border-gray-200 text-xs font-semibold tracking-wider text-gray-400">
            LMS DASHBOARD
          </div>
          <div className="px-4 py-2 bg-[hsl(200,85%,95%)] rounded-full text-xs font-semibold tracking-wider text-[hsl(200,85%,45%)]">
            AI ACTIVE
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-6" />

        {/* AI Course Generator Card */}
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <div className="flex items-center gap-4 mb-4">
            {/* AI Icon */}
            <div className="w-16 h-16 bg-[hsl(220,25%,15%)] rounded-2xl flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[hsl(220,25%,15%)] font-display">
                AI Course Generator
              </h3>
              <p className="text-xs font-semibold tracking-wider text-gray-400 mt-1">
                TOPIC: HIGH-VOLTAGE SAFETY
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 mb-4" />

          {/* Progress bar */}
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-gray-300 to-gray-400 rounded-full animate-pulse"
              style={{ width: '65%' }}
            />
          </div>
        </div>
      </div>

      {/* Course Catalog Card - overlapping */}
      <div className="relative -mt-2 ml-4 mr-4 bg-white rounded-3xl p-6 shadow-[0_12px_48px_-12px_rgba(0,0,0,0.15)]">
        <h3 className="text-2xl font-bold text-[hsl(220,25%,15%)] font-display mb-1">
          Course Catalog
        </h3>
        <p className="text-xs font-semibold tracking-wider text-[hsl(200,85%,45%)] mb-4">
          READY TO DEPLOY
        </p>

        {/* Course list */}
        <div className="space-y-0">
          {courses.map((course, index) => (
            <div key={index}>
              <div className="flex items-center justify-between py-4">
                <span className="font-semibold text-[hsl(220,25%,15%)]">
                  {course}
                </span>
                <Plus size={20} className="text-[hsl(82,85%,45%)]" strokeWidth={2.5} />
              </div>
              {index < courses.length - 1 && (
                <div className="h-px bg-gray-100" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
