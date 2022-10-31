<template>
  <div style="width: 100%;height: 100%;">
    <el-tabs>
      <el-tab-pane label="线条">
        <el-row>
          <el-col :span="8">Line Width</el-col>
          <el-col :span="12">
            <el-slider
              :min="1"
              :max="25"
              :step="1"
              size="small"
              v-model="strokeWidth"
              @change="onStrokeWidthChange"
            />
          </el-col>
          <el-col :span="2">
            <div class="result">{{ strokeWidth }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">outLine Width</el-col>
          <el-col :span="12">
            <el-slider
              :min="1"
              :max="25"
              :step="1"
              size="small"
              v-model="outStrokeWidth"
              @change="onOutStrokeWidthChange"
            />
          </el-col>
          <el-col :span="2">
            <div class="result">{{ outStrokeWidth }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Line Color</el-col>
          <el-col :span="14">
            <el-input
              type="color"
              v-model="stroke"
              size="small"
              style="width: 100%"
              @change="onStrokeChange"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">outLine Color</el-col>
          <el-col :span="14">
            <el-input
              type="color"
              v-model="outStroke"
              size="small"
              style="width: 100%"
              @change="onOutStrokeChange"
            />
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Dasharray</el-col>
          <el-col :span="12">
            <el-slider
              :min="0"
              :max="10"
              :step="1"
              size="small"
              v-model="strokeDasharray"
              @change="onStrokeDasharray"
            />
          </el-col>
          <el-col :span="2">
            <div class="result">{{ strokeDasharray }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Animation</el-col>
          <el-col :span="12">
            <el-slider
              :min="0"
              :max="50"
              :step="1"
              size="small"
              v-model="animation"
              @change="onAnimation"
            />
          </el-col>
          <el-col :span="2">
            <div class="result">{{ animation }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Connector</el-col>
          <el-col :span="14">
            <el-select
              style="width: 100%"
              size="small"
              v-model="connector"
              @change="onConnectorChange"
            >
              <el-option value="normal">Normal</el-option>
              <el-option value="smooth">Smooth</el-option>
              <el-option value="rounded">Rounded</el-option>
              <el-option value="jumpover">Jumpover</el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Router</el-col>
          <el-col :span="14">
            <el-select
              style="width: 100%"
              size="small"
              v-model="edgeRouter"
              @change="onEdgeRouter"
            >
              <el-option value="normal">Normal</el-option>
              <el-option value="orth">Orth</el-option>
              <el-option value="oneSide">OneSide</el-option>
              <el-option value="manhattan">Manhattan</el-option>
              <el-option value="metro">Metro</el-option>
              <el-option value="er">Er</el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row v-show="edgeRouter == 'er'">
          <el-col :span="8">Edge Offset</el-col>
          <el-col :span="14">
            <el-slider
              :min="8"
              :max="100"
              :step="1"
              size="small"
              v-model="edgeOffset"
            />
          </el-col>
        </el-row>
        <el-row v-show="edgeRouter == 'er'">
          <el-col :span="8">Edge Direction</el-col>
          <el-col :span="14">
            <el-select
              size="small"
              v-model="edgeDirection"
            >
              <el-option value="L">L</el-option>
              <el-option value="R">R</el-option>
              <el-option value="H">H</el-option>
              <el-option value="T">T</el-option>
              <el-option value="B">B</el-option>
              <el-option value="V">V</el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>Node ZIndex</el-col>
          <el-col :span='12'>
            <el-slider size="small" :min='0' :max='100' :step='1' v-model="ZIndex" style="width: 100%"/>
          </el-col>
          <el-col :span='2'>
            <div class="result">{{ ZIndex }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">Label</el-col>
          <el-col :span="14">
            <el-input
              v-model="label"
              size="small"
              style="width: 100%"
              @change="onLabelChange"
            />
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import FlowGraph from "../../../graph";
import { Edge } from '@antv/x6'
import { watch, computed } from 'vue'
import { useIndexStore } from '../../../../../store'

const indexStore = useIndexStore()

const props = defineProps<{ id: string }>()

let curCell: Edge

let strokeWidth = computed({
  get() {
    return indexStore.strokeWidth
  },
  set(val:number) {
    indexStore.updatestrokeWidth(val)
  }
})

let outStrokeWidth = computed({
  get() {
    return indexStore.outStrokeWidth
  },
  set(val:number) {
    indexStore.updateoutStrokeWidth(val)
  }
})

let stroke = computed({
  get() {
    return indexStore.stroke
  },
  set(val:string) {
    indexStore.updatestroke(val)
  }
})

let outStroke = computed({
  get() {
    return indexStore.outStroke
  },
  set(val:string) {
    indexStore.updateoutStroke(val)
  }
})

let strokeDasharray = computed({
  get() {
    return indexStore.strokeDasharray
  },
  set(val:number) {
    indexStore.updatestrokeDasharray(val)
  }
})

let animation = computed({
  get() {
    return indexStore.animation
  },
  set(val:number) {
    indexStore.updateanimation(val)
  }
})

let connector = computed({
  get() {
    return indexStore.connector
  },
  set(val:string) {
    indexStore.updateconnector(val)
  }
})

let edgeRouter = computed({
  get() {
    return indexStore.edgeRouter
  },
  set(val:string) {
    indexStore.updateedgeRouter(val)
  }
})

let edgeOffset = computed({
  get() {
    return indexStore.edgeOffset
  },
  set(val:number) {
    indexStore.updateedgeOffset(val)
  }
})
let edgeDirection = computed({
  get() {
    return indexStore.edgeDirection
  },
  set(val:string) {
    indexStore.updateedgeDirection(val)
  }
})

let ZIndex = computed({
  get() {
    return indexStore.ZIndex
  },
  set(val:number) {
    indexStore.updateZIndex(val)
  }
})

let label = computed({
  get() {
    return indexStore.label
  },
  set(val:string) {
    indexStore.updatelabel(val)
  }
})

watch(
  () => props.id,
  () => {
    const { graph } = FlowGraph;
    const cell = graph.getCellById(props.id) as Edge
    if (!cell || !cell.isEdge()) {
      return;
    }
    curCell = cell;
    ZIndex.value = cell.getZIndex() || 0
    const connector = cell.getConnector() || {
      name: "normal",
    };
    stroke.value = cell.attr("line/stroke");
    strokeWidth.value = cell.attr("line/strokeWidth");
    connector.value = connector.name;
    label.value = (cell.getLabels()[0]?.attrs as any)?.text?.text || "";
  },
  {
    deep: false,
    immediate: false
  }
)
watch(() => edgeOffset.value, () => {
  curCell?.prop('router/args', { offset: edgeOffset.value, direction: edgeDirection.value })
}, { immediate: false, deep: false })
watch(() => edgeDirection.value, () => {
  curCell?.prop('router/args', { offset: edgeOffset.value, direction: edgeDirection.value })
}, { immediate: false, deep: false })
watch(() => ZIndex.value, () => {
  if(curCell) {
    curCell?.setZIndex(ZIndex.value)
  }
}, { immediate: false })


// 线边的宽度
const onStrokeWidthChange=()=> {
  curCell?.attr("line/strokeWidth", strokeWidth.value);
}
// 外线边的宽度
const onOutStrokeWidthChange=()=> {
  curCell?.attr("outline/strokeWidth", outStrokeWidth.value);
}
// 线边颜色
const onStrokeChange=()=> {
  curCell?.attr("line/stroke", stroke.value);
}
// 外线边颜色
const onOutStrokeChange=()=> {
  curCell?.attr("outline/stroke", outStroke.value);
}
// 虚线
const onStrokeDasharray=()=> {
  curCell?.attr("line/strokeDasharray", strokeDasharray.value);
}
// 动画
const onAnimation=()=> {
  curCell?.attr("line/style/animation", `ant-line ${animation.value}s infinite linear`);
}
// 连接方式
const onConnectorChange= ()=> {
  curCell?.setConnector(connector.value);
}
// 路由
const onEdgeRouter= ()=> {
  curCell?.setRouter({ name: edgeRouter.value })
}
const onLabelChange=(e)=> {
  curCell.setLabels([
    {
      attrs: {
        text: {
          text: label.value,
        },
      },
      position: {
        distance: 0.5,
      },
    },
  ]);
}
</script>
<style scoped>
.el-row {
  margin-bottom: 5px;
}
</style>>
