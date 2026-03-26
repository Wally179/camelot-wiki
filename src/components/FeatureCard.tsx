import Link from "next/link";
import { ReactNode } from "react";

interface FeatureCardProps {
  href: string;
  icon: string | ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  href,
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <Link
      href={href}
      className="group bg-black/40 border border-amber-900/20 p-8 hover:border-amber-500 transition-all duration-500 relative overflow-hidden"
    >
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
        <span className="text-8xl">{icon}</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-200 mb-3 group-hover:text-amber-400 transition-colors uppercase tracking-tighter">
        {title}
      </h2>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </Link>
  );
}
