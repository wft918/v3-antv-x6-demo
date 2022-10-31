<template>
  <div style="width: 100%;height: 100%;">
    <el-tabs v-model="activeName">
      <el-tab-pane label="节点" name="1">
        <!-- 调节边框的颜色  对无边框的不起作用 -->
        <el-row v-show="nodeType == 'text'">
          <el-col :span='10'>Border Color</el-col>
          <el-col :span='14'>
            <el-input size="small" type="color" v-model="nodeStroke" style="width: 100%" @change="onStrokeChange"/>
          </el-col>
        </el-row>
        <!-- 调节边框的宽度  对无边框的不起作用 -->
        <el-row v-show="nodeType == 'text'">
          <el-col :span='8'>Border Width</el-col>
          <el-col :span='12'>
            <el-slider size="small" :min='1' :max='5' :step='1' v-model="nodeStrokeWidth" @change="onStrokeWidthChange"/>
          </el-col>
          <el-col :span='2'>
            <div class="result">{{nodeStrokeWidth}}</div>
          </el-col>
        </el-row>
        <!-- 填充颜色  对image不起作用 -->
        <el-row v-show="nodeType == 'text'">
          <el-col :span='8'>Fill isTransparent</el-col>
          <el-col :span='14'>
            <el-switch v-model="isNodeFill" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
          </el-col>
        </el-row>
        <el-row v-show="nodeType == 'text' && !isNodeFill">
          <el-input size="small" type="color" v-model="nodeFill" style="width: 100%" @change="onFillChange"/>
        </el-row>
        <!-- <el-row>
          <el-col :span='8'>Image Width</el-col>
          <el-col :span='14'>
            <el-slider :min='20' :max='300' :step='20' v-model="nodeImageWidth" style="width: 100%" @change="onImageWidth"/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>Image Height</el-col>
          <el-col :span='14'>
            <el-slider :min='20' :max='300' :step='20' v-model="nodeImageHeight" style="width: 100%" @change="onImageHeight"/>
          </el-col>
        </el-row> -->
        <el-row v-show="nodeType == 'image'">
          <el-col :span='8'>Port ID</el-col>
          <el-col :span='14'>
            <el-select size="small" v-model="portId" placeholder="请选择">
              <el-option label="top" value="port1" />
              <el-option label="right" value="port2" />
              <el-option label="bottom" value="port3" />
              <el-option label="left" value="port4" />
            </el-select>
          </el-col>
        </el-row>
        <el-row v-show="portId">
          <el-col :span='8'>Port Left</el-col>
          <el-col :span='12'>
            <el-slider size="small" :min='-5' :max='100' :step='1' v-model="portX" style="width: 100%"/>
          </el-col>
          <el-col :span='2'>
            <div class="result">{{ portX }}</div>
          </el-col>
        </el-row>
        <el-row v-show="portId">
          <el-col :span='8'>Port Top</el-col>
          <el-col :span='12'>
            <el-slider size="small" :min='-5' :max='100' :step='1' v-model="portY" style="width: 100%"/>
          </el-col>
          <el-col :span='2'>
            <div class="result">{{ portY }}</div>
          </el-col>
        </el-row>
        <el-row v-show="portId">
          <el-col :span='10'>Port Color</el-col>
          <el-col :span='14'>
            <el-input size="small" type="color" v-model="portColor" style="width: 100%" @change="onPortColorChange"/>
          </el-col>
        </el-row>
        <el-row v-show="portId">
          <el-col :span='10'>Port Fill</el-col>
          <el-col :span='14'>
            <el-input size="small" type="color" v-model="portFill" style="width: 100%" @change="onPortFillChange"/>
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
      </el-tab-pane>
      <el-tab-pane label="文本" name="2">
        <el-row>
          <el-col :span='8'>Font Size</el-col>
          <el-col :span='12'>
            <el-slider size="small" :min='8' :max='16' :step='1' v-model="nodeFontSize" @change="onFontSizeChange"/>
          </el-col>
          <el-col :span='2'>
            <div class="result">{{ nodeFontSize }}</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>Font Color</el-col>
          <el-col :span='14'>
            <el-input size="small" type="color" v-model="nodeColor" style="width: 100%" @change="onColorChange"/>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane v-if="nodeType == 'text'" label="属性" name="3">
        <el-row>
          <el-col :span='8'>Status</el-col>
          <el-col :span='14'>
            <el-select size="small" @change="onNodeStatusChange" v-model="nodeStatus" placeholder="请选择">
              <el-option label="停止" value="0" />
              <el-option label="运行" value="1" />
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>PointCode</el-col>
          <el-col :span='14'>
            <el-select size="small" @change="onNodePointCode" v-model="nodePointCode" placeholder="请选择">
              <el-option label="52" value="52" />
              <el-option label="51" value="51" />
            </el-select>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span='8'>FieldName</el-col>
          <el-col :span='14'>
            <el-select size="small" @change="onNodeFieldName" v-model="nodeFieldName" placeholder="请选择">
              <el-option label="fieldName1" value="fieldName1" />
              <el-option label="fieldName2" value="fieldName2" />
            </el-select>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script setup lang="ts">
import { nodeOpt } from "./method";
import { Cell } from "@antv/x6";
import { watch, computed, ref } from 'vue'
import { useIndexStore } from '../../../../../store'

const indexStore = useIndexStore()

const props = defineProps<{ id: string }>()

let curCel:Cell
let activeName = ref('1')
let isNodeFill = ref(false)

let nodeStroke = computed ({
  get() {
    return indexStore.nodeStroke
  },
  set(val:string) {
    indexStore.updatenodeStroke(val)
  }
})
let nodeStrokeWidth = computed({
  get() {
    return indexStore.nodeStrokeWidth
  },
  set(val:number) {
    indexStore.updatenodeStrokeWidth(val)
  }
})
let nodeFill = computed({
  get() {
    return indexStore.nodeFill
  },
  set(val:string) {
    indexStore.updatenodeFill(val)
  }
})
let portId = computed({
  get() {
    return indexStore.portId
  },
  set(val:string) {
    indexStore.updateportId(val)
  }
})
let portX = computed({
  get() {
    return indexStore.portX as number
  },
  set(val:number) {
    indexStore.updateportX(val)
  }
})
let portY = computed({
  get() {
    return indexStore.portY as number
  },
  set(val:number) {
    indexStore.updateportY(val)
  }
})
let portColor = computed({
  get() {
    return indexStore.portColor
  },
  set(val:string) {
    indexStore.updateportColor(val)
  }
})
let portFill = computed({
  get() {
    return indexStore.portFill
  },
  set(val:string) {
    indexStore.updateportFill(val)
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
let nodeFontSize = computed({
  get() {
    return indexStore.nodeFontSize
  },
  set(val:number) {
    indexStore.updatenodeFontSize(val)
  }
})
let nodeColor = computed({
  get() {
    return indexStore.nodeColor
  },
  set(val:string) {
    indexStore.updatenodeColor(val)
  }
})
let nodeStatus = computed({
  get() {
    return indexStore.nodeStatus
  },
  set(val: string) {
    indexStore.updatenodeStatus(val)
  }
})
let nodePointCode = computed({
  get() {
    return indexStore.nodePointCode
  },
  set(val: string) {
    indexStore.updatenodePointCode(val)
  }
})
let nodeFieldName = computed({
  get() {
    return indexStore.nodeFieldName
  },
  set(val: string) {
    indexStore.updatenodeFieldName(val)
  }
})
let nodeType = computed({
  get() {
    return indexStore.nodeType
  },
  set(val:string) {
    indexStore.updatenodeType(val)
  }
})


watch(() => props.id, () => {
  curCel = nodeOpt(props.id) as Cell
  if(curCel) {
    ZIndex.value = curCel.getZIndex() || 0
    isNodeFill.value = false
    if(nodeType.value == 'text') {
      curCel?.setData({
        status: nodeStatus.value ?? '0',
        pointCode: nodePointCode.value ?? '',
        fieldName: nodeFieldName.value ?? ''
      })
    }
  }
}, { immediate: false, deep: true })
watch(() => portId.value, () => {
  if(portId.value) {
    const { x, y } = curCel?.getPortProp(portId.value)?.args
    if(x && y) {
      portX.value = parseInt(x.slice(0, -1))
      portY.value = parseInt(y.slice(0, -1))
    }
  }
}, { deep: false, immediate: false })
watch(() => portX.value, () => {
  curCel?.setPortProp(portId.value, 'args', { x: portX.value + '%', y: portY.value + '%' })
}, { deep: false, immediate: false })
watch(() => portY.value, () => {
  curCel?.setPortProp(portId.value, 'args', { x: portX.value + '%', y: portY.value + '%' })
}, { deep: false, immediate: false })
watch(() => ZIndex.value, () => {
  if(curCel) {
    curCel?.setZIndex(ZIndex.value)
  }
}, { immediate: false })
watch(() => isNodeFill.value, () => {
  if(isNodeFill.value) {
    curCel?.attr('body/fill', 'transparent')
  } else {
    curCel?.attr('body/fill', '#fff')
  }
}, { immediate: true })



function onStrokeChange () {
  curCel?.attr('body/stroke', nodeStroke.value)
}

function onStrokeWidthChange () {
  curCel?.attr('body/strokeWidth', nodeStrokeWidth.value)
}

function onFillChange () {
  curCel?.attr('body/fill', nodeFill.value)
}

// function onImageWidth () {
//   curCel?.attr('image/width', nodeImageWidth.value)
// }

// function onImageHeight () {
//   curCel?.attr('image/height', nodeImageHeight.value)
// }

function onPortColorChange() {
  curCel?.setPortProp(portId.value, ['attrs', 'circle', 'stroke'], portColor.value)
}

function onPortFillChange() {
  curCel?.setPortProp(portId.value, ['attrs', 'circle', 'fill'], portFill.value)
}

function onFontSizeChange () {
  curCel?.attr('text/fontSize', nodeFontSize.value)
}

function onColorChange () {
  curCel?.attr('text/fill', nodeColor.value)
}

function onNodeStatusChange (){
  // curCel?.attr('custom_attr/status', nodeStatus.value)
  curCel?.setData({ status: nodeStatus.value })
}
function onNodePointCode (){
  // curCel?.attr('custom_attr/status', nodeStatus.value)
  curCel?.setData({ pointCode: nodePointCode.value })
}
function onNodeFieldName (){
  // curCel?.attr('custom_attr/status', nodeStatus.value)
  curCel?.setData({ fieldName: nodeFieldName.value })
}
</script>

<style scoped>
.el-row {
  margin-bottom: 5px;
}
</style>
