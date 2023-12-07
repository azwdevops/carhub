module.exports = {
  apps: [
    {
      name: "carhub",
      script: "node_modules/.bin/next", // Adjust the path to the Next.js binary if needed
      args: "start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
