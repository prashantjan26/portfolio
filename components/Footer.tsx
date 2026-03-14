export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-sm font-mono">
        <p>
          Prashant Singh{" "}
          <span className="text-slate-700">·</span>{" "}
          Hyderabad, India
        </p>
        <p>
          Built with Next.js &amp; Tailwind CSS
          <span className="text-slate-700"> · </span>
          <a href="#" className="hover:text-slate-400 transition-colors">
            Back to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
