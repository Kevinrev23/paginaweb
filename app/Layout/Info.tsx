'use client';

import { PiggyBank, BadgeCheck, Sparkles } from 'lucide-react';

export const Info = () => {
  const items = [
    {
      icon: <PiggyBank className="w-25 h-25 text-gray-600" />,
      title: 'Ahorro',
    },
    {
      icon: <BadgeCheck className="w-25 h-25 text-gray-600" />,
      title: 'Calidad',
    },
    {
      icon: <Sparkles className="w-25 h-25 text-gray-600" />,
      title: 'Frescura',
    },
  ];
  return (
  <section className="bg-gray-200 py-10">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-gray-600 text-3xl font-semibold mb-20">
          ¿Por qué elegirnos?
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-24">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-50 h-50 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center">
                <div className="absolute inset-1 rounded-full border border-gray-400"></div>
                <div className="relative z-10">{item.icon}</div>
              </div>
              <p className="mt-3 text-sm text-gray-700 font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
