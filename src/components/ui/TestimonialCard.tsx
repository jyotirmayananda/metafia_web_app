import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden flex flex-col justify-between h-full border border-slate-200/60 bg-white shadow-sm font-sans">
      {/* Background glow shadow */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-slate-100 rounded-full filter blur-[30px]" />
      
      <div className="space-y-6 relative z-10">
        <div className="text-slate-300">
          <Quote className="w-10 h-10 fill-slate-50 stroke-[1.5]" />
        </div>
        
        <p className="text-base md:text-lg text-slate-800 font-semibold italic leading-relaxed">
          "{quote}"
        </p>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
        <div>
          <h4 className="text-sm font-bold text-slate-950 tracking-tight">{author}</h4>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">
            {role}, <span className="text-slate-600 font-semibold">{company}</span>
          </p>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded">
          Verified
        </div>
      </div>
    </div>
  );
}
