// pages/ServiceArea/sections/AreaLandmarks.tsx
import React from 'react';
import { MapPin, Landmark, Navigation } from 'lucide-react';


export default function AreaLandmarks({ area }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-emerald-50 rounded-lg">
          <Landmark className="h-5 w-5 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">Nearby Landmarks</h3>
      </div>

      <p className="text-sm text-slate-600 mb-4">
        We serve all areas around these landmarks:
      </p>

      <div className="space-y-3">
        {area?.landmarks?.map((landmark, index) => (
          <div key={index} className="flex items-center gap-3 group">
            <div className="p-1.5 bg-slate-100 rounded-lg group-hover:bg-emerald-50 transition-colors">
              <MapPin className="h-4 w-4 text-slate-500 group-hover:text-emerald-600" />
            </div>
            <span className="text-sm text-slate-600 group-hover:text-slate-800">
              {landmark}
            </span>
          </div>
        ))}
      </div>

      {/* Coverage Note */}
      <div className="mt-4 pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 text-xs text-emerald-600">
          <Navigation className="h-3 w-3" />
          <span>Full coverage within 5km radius</span>
        </div>
      </div>
    </div>
  );
}