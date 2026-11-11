import React, { useState } from "react";

function Component({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] p-6 text-white">

      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Grid background */}
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#22d3ee_1px,transparent_1px),linear-gradient(90deg,#22d3ee_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Counter Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-cyan-400/20 bg-white/[0.04] p-8 text-center shadow-[0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-xl">

        {/* Top label */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
            System Online
          </span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white">
          Hello, <span className="text-cyan-400">{name}</span>
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Control your counter through the interface below.
        </p>

        {/* Counter Display */}
        <div className="relative my-8 overflow-hidden rounded-2xl border border-cyan-400/20 bg-black/30 py-8">

          {/* Scan line */}
          <div className="absolute left-0 top-0 h-px w-full animate-pulse bg-cyan-400/50 shadow-[0_0_15px_#22d3ee]" />

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-slate-500">
            Current Count
          </p>

          <p className="mt-3 text-7xl font-black tabular-nums text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            {count}
          </p>

          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={() => setCount(count + 1)}
            className="group relative overflow-hidden rounded-xl border border-cyan-400/40 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] active:scale-95"
          >
            <span className="relative z-10">Increase</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="group relative overflow-hidden rounded-xl border border-fuchsia-400/30 bg-fuchsia-400/10 px-6 py-3 font-semibold text-fuchsia-300 transition-all duration-300 hover:border-fuchsia-300 hover:bg-fuchsia-400/20 hover:shadow-[0_0_25px_rgba(232,121,249,0.25)] active:scale-95"
          >
            <span className="relative z-10">Decrease</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-fuchsia-400/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </button>

        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-slate-600">
          <span>React</span>
          <span>•</span>
          <span>Counter System</span>
        </div>

      </div>
    </div>
  );
}

export default Component;
