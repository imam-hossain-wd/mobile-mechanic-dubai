// pages/ServiceArea/sections/ServiceAreaIntro.tsx
import React from 'react';
import { CheckCircle, MapPin, Clock, Shield } from 'lucide-react';


export default function ServiceAreaIntro({ area }) {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-emerald-50 rounded-xl">
          <MapPin className="h-6 w-6 text-emerald-600" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            {area?.intro?.heading}
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded"></div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <p className="text-slate-600 leading-relaxed mb-6">
          {area?.intro?.content}
        </p>
      </div>

      {/* Local Presence Highlights */}
      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <div className="flex items-start gap-3">
          <div className="p-1 bg-emerald-50 rounded-full mt-0.5">
            <CheckCircle className="h-4 w-4 text-emerald-600" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800">Local Experts</h4>
            <p className="text-sm text-slate-600">Based in {area?.name} area</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-1 bg-emerald-50 rounded-full mt-0.5">
            <Clock className="h-4 w-4 text-emerald-600" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800">Quick Response</h4>
            <p className="text-sm text-slate-600">20-30 min arrival</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-1 bg-emerald-50 rounded-full mt-0.5">
            <Shield className="h-4 w-4 text-emerald-600" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800">Certified</h4>
            <p className="text-sm text-slate-600">RTA approved mechanics</p>
          </div>
        </div>
      </div>
    </section>
  );
}