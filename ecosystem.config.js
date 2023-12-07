module.exports = {
  apps: [
    {
      name: "carhub",
      script: "node_modules/next/dist/bin/next", // Path to Next.js binary
      args: "start -p 3000", // Specify port if needed
      instances: "max", // Adjust according to your requirements
      autorestart: true,
      watch: false,
      max_memory_restart: "1G", // Adjust as needed
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
