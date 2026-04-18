'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { faqs } from '@/constants/faq'



export function GridAccordion({ items }) {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "relative border bg-white transition-colors",
            openItems.includes(index)
              ? "border-[#007A55]"
              : "border-gray-200 hover:border-[#007A55]/30"
          )}
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-5 text-left"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900 mb-2 pr-6">
                  {item.question}
                </h3>
                {item.category && (
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                )}
              </div>
              <div className="flex-shrink-0">
                {openItems.includes(index) ? (
                  <Minus className="h-4 w-4 text-[#007A55]" />
                ) : (
                  <Plus className="h-4 w-4 text-gray-400" />
                )}
              </div>
            </div>
          </button>
          
          {openItems.includes(index) && (
            <div className="px-5 pb-5 pt-2 border-t border-gray-100">
              <p className="text-xs text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}

          {/* Serial Number */}
          <div className="absolute top-4 right-4 text-[8px] font-mono text-gray-300 tracking-wider">
            {(index + 1).toString().padStart(2, '0')}
          </div>
        </div>
      ))}
    </div>
  )
}


export function FAQAccordion() {
 
  return (
    <div className="w-[90&%] md:w-[80%] mx-auto p-6">
      <h2 className="text-2xl font-light text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      <GridAccordion items={faqs} />
    </div>
  )
}