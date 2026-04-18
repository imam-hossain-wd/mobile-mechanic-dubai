// pages/ServiceArea/sections/AreaWhyChooseUs.tsx
import React from 'react';
import { CheckCircle, Clock, Shield, Truck, Award, Users, ThumbsUp, Sparkles } from 'lucide-react';


const benefitIcons = [
  <Clock className="h-5 w-5" />,
  <Truck className="h-5 w-5" />,
  <Shield className="h-5 w-5" />,
  <Award className="h-5 w-5" />,
  <Users className="h-5 w-5" />,
  <ThumbsUp className="h-5 w-5" />
];

export default function AreaWhyChooseUs({ area }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-emerald-50 rounded-lg">
          <Sparkles className="h-5 w-5 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-800">Why Choose Us</h3>
      </div>

      <div className="space-y-3">
        {area?.whyChooseUs?.map((reason, index) => (
          <div key={index} className="flex items-start gap-3 group">
            <div className="p-1 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
            </div>
            <p className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">
              {reason}
            </p>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-100">
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600">98%</div>
          <div className="text-xs text-slate-500">Customer Satisfaction</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-600">5k+</div>
          <div className="text-xs text-slate-500">Repairs Done</div>
        </div>
      </div>
    </div>
  );
}