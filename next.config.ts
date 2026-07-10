import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Shared cPanel hosting (CloudLinux LVE) caps the number of processes.
  // Next 16 / Turbopack spawns one build worker per host CPU (~23), which
  // trips the process limit and fails the build with `spawn node EAGAIN`.
  // Cap workers so the build fits within shared-hosting limits.
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
};

export default nextConfig;
