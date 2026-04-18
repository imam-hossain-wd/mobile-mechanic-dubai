// pages/ServiceArea/sections/AreaFAQ.tsx
'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';


export default function AreaFAQ({ area }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
        Frequently Asked Questions in {area?.name}
      </h2>
      <div className="h-1 w-20 bg-emerald-500 rounded mb-6"></div>

      <div className="space-y-3">
        {area?.faq?.map((item, index) => (
          <div
            key={index}
            className="border border-slate-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-slate-50 transition-colors"
            >
              <span className="font-medium text-slate-800">{item?.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-emerald-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-400" />
              )}
            </button>
            
            {openIndex === index && (
              <div className="p-4 bg-slate-50 border-t border-slate-200">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item?.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Still Have Questions */}
      <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
        <p className="text-sm text-center text-slate-600">
          Still have questions about our services in {area?.name}?{' '}
          <Link href="/contact" className="text-emerald-600 font-semibold hover:underline">
            Contact us
          </Link>
        </p>
      </div>
    </section>
  );
}