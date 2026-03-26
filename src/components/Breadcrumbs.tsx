import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-3 mb-10 text-[10px] md:text-xs font-serif uppercase tracking-widest text-amber-900/60 font-bold overflow-x-auto pb-2 whitespace-nowrap">
      <Link href="/" className="hover:text-amber-500 transition-colors shrink-0 flex items-center gap-2">
        <span className="text-xl">🏰</span>
        Camelot
      </Link>
      
      {crumbs.map((crumb, idx) => (
        <div key={idx} className="flex items-center gap-3 shrink-0">
          {/* Símbolo Celta-ish de separação */}
          <span className="text-amber-700/40 text-lg leading-none">⟡</span>
          
          {crumb.href ? (
            <Link href={crumb.href} className="hover:text-amber-500 transition-colors">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-amber-500 border-b border-amber-900/40 pb-1">{crumb.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
