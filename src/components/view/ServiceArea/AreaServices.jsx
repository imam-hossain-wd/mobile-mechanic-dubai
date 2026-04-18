// pages/ServiceArea/sections/AreaServices.tsx
import React from 'react';
import { 
  Wrench, 
  Battery, 
  Thermometer, 
  Gauge, 
  AlertCircle, 
  Zap,
  Fan,
  Fuel,
  Car,
  Braces,
  Wind
} from 'lucide-react';



// Map service names to icons
const serviceIcons = {
  'Car Battery Replacement': <Battery className="h-6 w-6" />,
  'Car Jump Start Service': <Zap className="h-6 w-6" />,
  'Car AC Repair': <Thermometer className="h-6 w-6" />,
  'Alternator Repair': <Gauge className="h-6 w-6" />,
  'Starter Motor Repair': <Car className="h-6 w-6" />,
  'Brake Pad Replacement': <Braces className="h-6 w-6" />,
  'Car Radiator Repair': <Wind className="h-6 w-6" />,
  'Fuel Pump Repair': <Fuel className="h-6 w-6" />,
  'Emergency Car Repair': <AlertCircle className="h-6 w-6" />,
  'Engine Diagnostic': <Gauge className="h-6 w-6" />
};

export default function AreaServices({ area }) {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            Our Services in {area?.name}
          </h2>
          <div className="h-1 w-20 bg-emerald-500 rounded"></div>
        </div>
        <span className="text-sm text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full">
          24/7 Available
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {area?.services?.map((service, index) => (
          <div
            key={index}
            className="group flex items-start gap-3 p-4 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all cursor-pointer"
          >
            <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
              <div className="text-emerald-600">
                {serviceIcons[service] || <Wrench className="h-6 w-6" />}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                {service}
              </h3>
              <p className="text-xs text-slate-500 mt-1">Starting from AED 199</p>
            </div>
          </div>
        ))}
      </div>

      {/* Service Note */}
      <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
        <p className="text-sm text-slate-600">
          <span className="font-semibold text-emerald-600">All services include:</span> Free diagnostics, 
          genuine parts, and 12-month warranty on repairs. Mobile mechanic arrives at your location in {area?.name}.
        </p>
      </div>
    </section>
  );
}