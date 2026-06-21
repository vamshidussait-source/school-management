"use client";

import type { AuthUser, UserRole } from "@/lib/types";

// ============================================================
// MOCK AUTH
// This simulates a backend using localStorage so the login and
// registration flows are fully functional in the browser without
// a real API. Swap `login`/`register` for real fetch() calls to
// your auth endpoints when the backend is ready — the function
// signatures are designed to match what a real API would need.
// ============================================================

const SESSION_KEY = "sms_session";
const USERS_KEY = "sms_users";

type StoredUser = AuthUser & { password: string };

const DEFAULT_USERS: StoredUser[] = [
  {
    id: "u-admin",
    name: "Principal Admin",
    email: "admin@school.edu",
    role: "admin",
    initials: "AD",
    password: "password123",
  },
  {
    id: "u-teacher",
    name: "Dr. Rebecca Stone",
    email: "teacher@school.edu",
    role: "teacher",
    initials: "TC",
    password: "password123",
  },
  {
    id: "u-student",
    name: "Aiden Carter",
    email: "student@school.edu",
    role: "student",
    initials: "ST",
    password: "password123",
  },
  {
    id: "u-parent",
    name: "Michael Carter",
    email: "parent@school.edu",
    role: "parent",
    initials: "PR",
    password: "password123",
  },
];

function readUsers(): StoredUser[] {
  if (typeof window === "undefined") return DEFAULT_USERS;
  const raw = window.localStorage.getItem(USERS_KEY);
  if (!raw) {
    window.localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS));
    return DEFAULT_USERS;
  }
  try {
    return JSON.parse(raw) as StoredUser[];
  } catch {
    return DEFAULT_USERS;
  }
}

function writeUsers(users: StoredUser[]) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export type LoginInput = { email: string; password: string };
export type RegisterInput = {
  name: string;
  email: string;
  password: string;
  role: UserRole;
};

export type AuthResult =
  | { ok: true; user: AuthUser }
  | { ok: false; error: string };

/** Simulates network latency so loading states feel real. */
function delay(ms = 500) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function login({
  email,
  password,
}: LoginInput): Promise<AuthResult> {
  await delay();
  const users = readUsers();
  const match = users.find(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase(),
  );

  if (!match || match.password !== password) {
    return { ok: false, error: "Invalid email or password." };
  }

  const { password: _password, ...user } = match;
  setSession(user);
  return { ok: true, user };
}

export async function register({
  name,
  email,
  password,
  role,
}: RegisterInput): Promise<AuthResult> {
  await delay();
  const users = readUsers();
  const exists = users.some(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase(),
  );

  if (exists) {
    return { ok: false, error: "An account with this email already exists." };
  }

  const newUser: StoredUser = {
    id: `u-${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
    role,
    initials: initials(name) || "U",
    password,
  };

  writeUsers([...users, newUser]);

  const { password: _password, ...user } = newUser;
  setSession(user);
  return { ok: true, user };
}

export function setSession(user: AuthUser) {
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function getSession(): AuthUser | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function clearSession() {
  window.localStorage.removeItem(SESSION_KEY);
}

export const DEMO_CREDENTIALS = DEFAULT_USERS.map(
  ({ email, password, role }) => ({ email, password, role }),
);
