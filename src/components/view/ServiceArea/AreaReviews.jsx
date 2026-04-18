// pages/ServiceArea/sections/AreaReviews.tsx
'use client'
import React from 'react';
import { Star, ThumbsUp, MessageCircle, User, ChevronRight } from 'lucide-react';


const sampleReviews = [
  {
    name: "Ahmed Mohammed",
    rating: 5,
    date: "2 days ago",
    comment: "Excellent service! My car battery died in {area} and they were there in 20 minutes. Very professional.",
    helpful: 12
  },
  {
    name: "Fatima Al Ali",
    rating: 5,
    date: "1 week ago",
    comment: "Best mobile mechanic in {area}. Fixed my AC quickly and reasonably priced.",
    helpful: 8
  },
  {
    name: "Omar Hassan",
    rating: 4,
    date: "2 weeks ago",
    comment: "Quick response time and honest service. Will definitely use again.",
    helpful: 5
  }
];

export default function AreaReviews({ area }) {
  const reviews = sampleReviews?.map(review => ({
    ...review,
    comment: review?.comment?.replace('{area}', area?.name)
  }));

  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">
            Customer Reviews in {area?.name}
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-slate-800">4.9</span>
            <span className="text-slate-500">(250+ reviews)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews?.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-50 rounded-full">
                  <User className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">{review?.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(review?.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs text-slate-500">{review?.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 mb-4">{review?.comment}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <button className="flex items-center gap-1 hover:text-emerald-600">
                  <ThumbsUp className="h-3 w-3" />
                  Helpful ({review?.helpful})
                </button>
                <button className="flex items-center gap-1 hover:text-emerald-600">
                  <MessageCircle className="h-3 w-3" />
                  Reply
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700">
            Read All Reviews
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}