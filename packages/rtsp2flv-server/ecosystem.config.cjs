module.exports = {
  apps: [
    {
      // 应用程序的名称
      // Name of the application
      name: 'RTSP-2-FLV-STREAM',
      // 应用程序的入口点
      // Entry point of the application
      script: 'src/app.js',
      // 运行的实例数量，设置为 'max' 利用所有可用的 CPU 核心
      // Number of instances to run, set to 'max' to utilize all available CPU cores
      instances: '2',
      // 使用集群模式以实现负载均衡
      // Run the application in cluster mode for load balancing
      exec_mode: 'cluster',
      // 进程崩溃后自动重启
      // Restart the process if it crashes
      autorestart: true,
      // 关闭文件监视功能
      // Disable file watch functionality
      watch: false,
      // 当内存使用超过 256MB 时，自动重启进程
      // Restart the process when memory usage exceeds 256MB
      max_memory_restart: '256M',
      // 环境变量-生产模式
      // Environment variable - production
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
