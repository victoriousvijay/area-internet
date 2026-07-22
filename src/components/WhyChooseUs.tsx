import React from 'react';
import { motion } from 'motion/react';
import { Zap, CheckCircle2, XCircle, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const comparisonList = [
    {
      feature: 'Symmetrical Upload & Download',
      area: 'Yes (1,000 Mbps Upload)',
      cable: 'No (Slow 10-20 Mbps Upload)',
    },
    {
      feature: 'Annual Price Hikes',
      area: 'Zero (Guaranteed Price Lock)',
      cable: 'Frequent (Increases after 12 mo)',
    },
    {
      feature: 'Data Caps & Overages',
      area: 'Unlimited (0 Data Limits)',
      cable: 'Often capped at 1.2 TB',
    },
    {
      feature: 'Annual Contracts',
      area: 'Never (Cancel anytime)',
      cable: 'Mandatory 1-2 Year Contracts',
    },
    {
      feature: 'Customer Support',
      area: '24/7 Local Dedicated Engineers',
      cable: 'Offshore call center delays',
    },
    {
      feature: 'Wi-Fi 6 Equipment',
      area: 'Included Free',
      cable: '$15-$20/mo Rental Fee',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 text-[#0EA5E9] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>Side-By-Side Comparison</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Why Thousands Choose <br />
            <span className="bg-gradient-to-r from-[#0EA5E9] via-[#2563EB] to-[#1E40AF] bg-clip-text text-transparent">
              Area Internet Providers.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            See how our pure fiber network stacks up against traditional cable and satellite providers.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-3xl p-1 bg-gradient-to-b from-[#0EA5E9]/20 via-slate-100 to-transparent border border-slate-200 shadow-lg overflow-hidden">
          <div className="bg-white rounded-[22px] overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-5 text-sm font-bold text-slate-500 font-mono uppercase tracking-wider w-2/5">
                    Feature & Quality
                  </th>
                  <th className="p-5 text-sm font-bold font-heading bg-[#0EA5E9]/10 text-[#0EA5E9] border-x border-[#0EA5E9]/20 w-3/10">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 fill-current text-[#0EA5E9]" />
                      <span>Area Internet Providers</span>
                    </div>
                  </th>
                  <th className="p-5 text-sm font-bold text-slate-400 font-mono uppercase tracking-wider w-3/10">
                    Traditional Cable / Satellite
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonList.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-5 font-semibold text-slate-900">
                      {row.feature}
                    </td>

                    {/* Area Column */}
                    <td className="p-5 font-bold text-[#16A34A] bg-[#0EA5E9]/5 border-x border-[#0EA5E9]/15">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>{row.area}</span>
                      </div>
                    </td>

                    {/* Cable Column */}
                    <td className="p-5 text-slate-500">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{row.cable}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
