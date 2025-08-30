import Header from './components/Header';
import SignupForm from './components/SignupForm';
import SocialAuthButtons from './components/SocialAuthButtons';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-4xl grid lg:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/20 backdrop-blur">
            <h2 className="text-2xl font-semibold tracking-tight">Create your account</h2>
            <p className="text-slate-400 mt-1">Join us and get started in minutes.</p>
            <div className="mt-6">
              <SocialAuthButtons />
            </div>
            <div className="flex items-center gap-3 my-6">
              <div className="h-px bg-slate-800 flex-1" />
              <span className="text-xs text-slate-400">or continue with email</span>
              <div className="h-px bg-slate-800 flex-1" />
            </div>
            <SignupForm />
          </div>

          <div className="hidden lg:flex flex-col justify-center rounded-2xl border border-slate-800 bg-slate-900/30 p-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold leading-tight">Welcome to our community</h3>
              <p className="text-slate-400">Create an account to access personalized content, save your preferences, and enjoy a seamless experience across devices.</p>
              <ul className="text-slate-300 space-y-2 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
                  One-click social sign in
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" />
                  Secure authentication
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-fuchsia-400" />
                  Privacy-first approach
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
