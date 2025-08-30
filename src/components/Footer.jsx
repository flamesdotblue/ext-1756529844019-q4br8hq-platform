export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-400 flex items-center justify-between">
        <p>© {new Date().getFullYear()} Acme Inc. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-200">Privacy</a>
          <a href="#" className="hover:text-slate-200">Terms</a>
          <a href="#" className="hover:text-slate-200">Contact</a>
        </div>
      </div>
    </footer>
  );
}
