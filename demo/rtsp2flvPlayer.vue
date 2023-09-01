<script setup>
import { onMounted, onBeforeUnmount, shallowRef } from 'vue'
import flvPlayer from 'flv.js'
// 定义组件名称 Define component name
defineOptions({ name: 'rtsp2flvPlayer' })

const props = defineProps({
  /**
   * rtsp2flv转换服务地址 rtsp2flv transcode server address<br/>
   * Example: 127.0.0.1:8888<br/>
   * 默认会从环境变量VITE_TRANSCODE_TARGET中读取 default will read from environment variable VITE_TRANSCODE_TARGET
   */
  target: { type: String, default: () => import.meta.env.VITE_TRANSCODE_TARGET || '127.0.0.1:8888' },
  /**
   * RTSP链接地址 RTSP URL<br/>
   * Example: rtsp://admin:123456@89.0.142.86:554/cam/
   */
  url: { type: String, required: true },
})

const playerRef = shallowRef(null) // DOM
const player = shallowRef(null) // 实例 Instance
/**
 * 初始化播放器 initInstance
 */
const initHandler = () => {
  if (flvPlayer.isSupported()) {
    if (playerRef.value) {
      const urlBase64 = btoa(props.url) // 对地址进行编码 base64 Codec URL
      player.value = flvPlayer.createPlayer({
        type: 'flv',
        isLive: true,
        url: `ws://${props.target}/rtsp/?url=${urlBase64}`,
      })
      player.value.attachMediaElement(playerRef.value)
      try {
        player.value.load()
        player.value.play()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
/**
 * 销毁播放器 DestroyInstance
 */
const destroyHandler = () => {
  player.value.destroy()
}
onMounted(() => {
  initHandler()
})
onBeforeUnmount(() => {
  destroyHandler()
})
</script>
<template>
  <video ref="playerRef" class="flv-video" muted autoplay></video>
</template>
<style lang="scss" scoped>
.flv-video {
  max-width: 100%;
  max-height: 100%;
}
</style>
