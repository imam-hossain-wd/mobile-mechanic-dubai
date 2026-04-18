// pages/ServiceArea/sections/AreaProblems.tsx
import React from 'react';
import { AlertTriangle, Battery, Thermometer, Gauge, Car, Bell, Wind } from 'lucide-react';


const problemIcons = [
  <Battery className="h-5 w-5" />,
  <Thermometer className="h-5 w-5" />,
  <Gauge className="h-5 w-5" />,
  <Car className="h-5 w-5" />,
  <Bell className="h-5 w-5" />,
  <AlertTriangle className="h-5 w-5" />
];

export default function AreaProblems({ area }) {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-amber-50 rounded-lg">
          <AlertTriangle className="h-6 w-6 text-amber-600" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Common Car Problems in {area?.name}
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded"></div>
        </div>
      </div>

      <p className="text-slate-600 mb-6">
        Based on our service history in {area?.name}, these are the most frequent issues drivers face:
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {area?.commonProblems?.map((problem, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-200 hover:bg-amber-50/50 transition-all"
          >
            <div className="p-2 bg-amber-50 rounded-lg">
              <div className="text-amber-600">
                {problemIcons[index % problemIcons?.length]}
              </div>
            </div>
            <span className="text-sm font-medium text-slate-700">{problem}</span>
          </div>
        ))}
      </div>

      {/* Quick Solution Note */}
      <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-emerald-600">Quick solution:</span> Our mobile mechanics in {area?.name} 
          can diagnose and fix these issues within 30-60 minutes at your location.
        </p>
      </div>
    </section>
  );
}