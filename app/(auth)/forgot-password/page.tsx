"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { GraduationCap, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No backend yet — this just simulates the request being sent.
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-6">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center">
          <GraduationCap size={24} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">EduManage</h1>
          <p className="text-slate-400 text-sm">School Management System</p>
        </div>
      </div>

      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl p-8">
        {submitted ? (
          <div className="text-center py-2">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={22} className="text-emerald-400" />
            </div>
            <h2 className="text-white font-bold text-lg mb-1.5">Check your email</h2>
            <p className="text-slate-400 text-sm mb-6">
              If an account exists for {email}, we&apos;ve sent instructions to reset your password.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 font-medium"
            >
              <ArrowLeft size={14} />
              Back to sign in
            </Link>
          </div>
        ) : (
          <>
            <h2 className="text-white font-bold text-lg mb-1">Reset your password</h2>
            <p className="text-slate-400 text-sm mb-6">
              Enter your email and we&apos;ll send you instructions to reset your password.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email address
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@school.edu"
                    className="w-full pl-10 pr-3 py-2.5 text-sm bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2.5 rounded-lg transition-colors"
              >
                Send reset instructions
              </button>
            </form>

            <p className="text-center text-sm text-slate-400 mt-6">
              <Link href="/login" className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 font-medium">
                <ArrowLeft size={14} />
                Back to sign in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
