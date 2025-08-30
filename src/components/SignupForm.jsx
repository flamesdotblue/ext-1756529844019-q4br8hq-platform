import { useMemo, useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

function classNames(...c) {
  return c.filter(Boolean).join(' ');
}

export default function SignupForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '', terms: false });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const passwordScore = useMemo(() => {
    const { password } = form;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score; // 0-4
  }, [form.password]);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (form.password.length < 8) e.password = 'Password must be at least 8 characters.';
    if (form.confirm !== form.password) e.confirm = "Passwords don't match.";
    if (!form.terms) e.terms = 'You must accept the terms to continue.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSuccess(false);
    try {
      await new Promise((res) => setTimeout(res, 900));
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1" htmlFor="name">Full name</label>
        <div className={classNames(
          'relative flex items-center rounded-lg border bg-slate-950/40',
          errors.name ? 'border-rose-500/60' : 'border-slate-800'
        )}>
          <User className="absolute left-3 h-4 w-4 text-slate-400" />
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(ev) => setForm({ ...form, name: ev.target.value })}
            placeholder="Ada Lovelace"
            className="w-full bg-transparent pl-9 pr-3 py-2.5 text-sm outline-none placeholder:text-slate-500"
            autoComplete="name"
          />
        </div>
        {errors.name && <p className="mt-1 text-xs text-rose-400">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="email">Email</label>
        <div className={classNames(
          'relative flex items-center rounded-lg border bg-slate-950/40',
          errors.email ? 'border-rose-500/60' : 'border-slate-800'
        )}>
          <Mail className="absolute left-3 h-4 w-4 text-slate-400" />
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(ev) => setForm({ ...form, email: ev.target.value })}
            placeholder="you@example.com"
            className="w-full bg-transparent pl-9 pr-3 py-2.5 text-sm outline-none placeholder:text-slate-500"
            autoComplete="email"
          />
        </div>
        {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="password">Password</label>
        <div className={classNames(
          'relative flex items-center rounded-lg border bg-slate-950/40',
          errors.password ? 'border-rose-500/60' : 'border-slate-800'
        )}>
          <Lock className="absolute left-3 h-4 w-4 text-slate-400" />
          <input
            id="password"
            type="password"
            value={form.password}
            onChange={(ev) => setForm({ ...form, password: ev.target.value })}
            placeholder="At least 8 characters"
            className="w-full bg-transparent pl-9 pr-10 py-2.5 text-sm outline-none placeholder:text-slate-500"
            autoComplete="new-password"
          />
        </div>
        <div className="mt-2">
          <div className="h-1.5 w-full bg-slate-800 rounded">
            <div
              className={classNames(
                'h-1.5 rounded transition-all',
                passwordScore <= 1 && 'w-1/4 bg-rose-500',
                passwordScore === 2 && 'w-2/4 bg-amber-500',
                passwordScore === 3 && 'w-3/4 bg-emerald-500',
                passwordScore >= 4 && 'w-full bg-emerald-500'
              )}
            />
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Use at least 8 characters with a mix of uppercase, numbers, and symbols.
          </p>
        </div>
        {errors.password && <p className="mt-1 text-xs text-rose-400">{errors.password}</p>}
      </div>

      <div>
        <label className="block text-sm mb-1" htmlFor="confirm">Confirm password</label>
        <div className={classNames(
          'relative flex items-center rounded-lg border bg-slate-950/40',
          errors.confirm ? 'border-rose-500/60' : 'border-slate-800'
        )}>
          <Lock className="absolute left-3 h-4 w-4 text-slate-400" />
          <input
            id="confirm"
            type="password"
            value={form.confirm}
            onChange={(ev) => setForm({ ...form, confirm: ev.target.value })}
            placeholder="Re-enter your password"
            className="w-full bg-transparent pl-9 pr-3 py-2.5 text-sm outline-none placeholder:text-slate-500"
            autoComplete="new-password"
          />
        </div>
        {errors.confirm && <p className="mt-1 text-xs text-rose-400">{errors.confirm}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          id="terms"
          type="checkbox"
          checked={form.terms}
          onChange={(ev) => setForm({ ...form, terms: ev.target.checked })}
          className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-indigo-500 focus:ring-indigo-500/40"
        />
        <label htmlFor="terms" className="text-sm text-slate-300">
          I agree to the <a href="#" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Terms</a> and <a href="#" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Privacy Policy</a>.
        </label>
      </div>
      {errors.terms && <p className="-mt-2 text-xs text-rose-400">{errors.terms}</p>}

      <button
        type="submit"
        disabled={submitting}
        className={classNames(
          'w-full inline-flex items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-colors px-4 py-2.5 text-sm font-medium shadow-lg shadow-indigo-500/20 focus:outline-none focus:ring-2 focus:ring-indigo-500/50',
          submitting && 'opacity-80 cursor-not-allowed'
        )}
      >
        {submitting ? 'Creating account…' : 'Create account'}
      </button>

      {success && (
        <div className="rounded-lg border border-emerald-600 bg-emerald-600/10 text-emerald-300 text-sm px-3 py-2">
          Your account has been created! Check your inbox to verify your email.
        </div>
      )}
    </form>
  );
}
