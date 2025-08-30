import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur border-b border-slate-800/60 bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Rocket className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight">Acme</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </nav>
      </div>
    </header>
  );
}
