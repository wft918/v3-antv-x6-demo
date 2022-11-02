<template>
  <div class="config" style="width: 100%; height: 100%;">
    <ConfigGrid v-show="type === 'grid'" />
    <ConfigNode v-show="type === 'node'" :id="id" />
    <ConfigEdge v-show="type === 'edge'" :id="id" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ConfigGrid from './ConfigGrid/index.vue'
import ConfigNode from './ConfigNode/index.vue'
import ConfigEdge from './ConfigEdge/index.vue'
import FlowGraph from '../../graph'
import './index.css'
import { useIndexStore } from '../../../../store'

const indexStore = useIndexStore()

let type = ref('grid')
let id = ref('')

boundEvent()

function boundEvent():void {
  const { graph } = FlowGraph
  graph.on('blank:click', () => {
    type.value = "grid"
  })
  // 这里使用mousedown而不使用click的原因时鼠标移入Edge时 动态添加小工具（可以拖拽线边），点击边时会添加小工具，这时候将不会触发click，选择性的是否触发mousedown
  graph.on('cell:mousedown', ({ cell }) => {
    type.value = cell.isNode() ? "node" : "edge"
    id.value = cell.id
    if(type.value == "node") {
      let image = cell?.attrs?.image ?? {}
      let nodeType:string
      if(image['xlink:href']) {
        nodeType = 'image'
      } else {
        nodeType = 'text'
      }
      indexStore.updatenodeType(nodeType)
    }
  })
}
</script>
