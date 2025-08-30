import { Github, Mail } from 'lucide-react';

export default function SocialAuthButtons() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        onClick={() => alert('Sign in with GitHub')}
      >
        <Github className="h-4 w-4" />
        Continue with GitHub
      </button>
      <button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        onClick={() => alert('Sign in with Email link')}
      >
        <Mail className="h-4 w-4" />
        Continue with Email link
      </button>
    </div>
  );
}
