<template>
  <div class="flow">
    <div class="content">
      <!--左侧工具栏-->
      <div id="stencil" />
      <!-- 流程图 -->
      <div class="panel">
        <!--工具栏-->
        <div class="toolbar">
          <ToolBar v-if="isReady" />
        </div>
        <!--画板-->
        <div id="container" />
      </div>
      <!--右侧工具栏-->
      <div class="config">
        <ConfigPanel v-if="isReady" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import './index.css'
import FlowGraph from './graph'
import ToolBar from './components/ToolBar/index.vue'
import ConfigPanel from './components/ConfigPanel/index.vue'
import { $, getContainerSize } from '../../utils'

let isReady = ref(false)
let destroyFn = ref<Function>(() => {})

onMounted(() => {
  destroyFn.value = initGraph()
})

onUnmounted(() => {
  destroyFn.value()
})

const initGraph = () => {
  const graph = FlowGraph.init($('#container'), $('#container').getBoundingClientRect().width, $('#container').getBoundingClientRect().height)
  isReady.value = true
  const resizeFn = () => {
    const { width, height } = getContainerSize($('.panel'))
    graph.resize(width, height - 38)
  }
  resizeFn()
  window.addEventListener('resize', resizeFn)
  return () => {
    window.removeEventListener('resize', resizeFn)
    graph.dispose()
  }
}
</script>
<style scoped>
.index {
  width: 100%;
  height: 100%;
}
</style>