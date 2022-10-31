<template>
  <div style="width: 100%;height: 100%;">
    <el-tabs v-model="activeName">
      <el-tab-pane label="网格" name="1">
        <el-row align="middle">
          <el-col :span='24'>
            <el-checkbox v-model="showGrid">
            Show Grid
            </el-checkbox>
          </el-col>
        </el-row>
        <el-row align="middle" v-show="showGrid">
          <el-col :span='10'>Grid Type</el-col>
          <el-col :span='12'>
            <el-select size="small" style="width: 100%" v-model="type">
              <el-option :value="GRID_TYPE.DOT">Dot</el-option>
              <el-option :value="GRID_TYPE.FIXED_DOT">Fixed Dot</el-option>
              <el-option :value="GRID_TYPE.MESH">Mesh</el-option>
              <el-option :value="GRID_TYPE.DOUBLE_MESH">Double Mesh</el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row align="middle" v-show="showGrid">
          <el-col :span='10'>Grid Size</el-col>
          <el-col :span='10'>
            <el-slider size="small" :min='1' :max='20' :step='1' v-model="size" />
          </el-col>
          <el-col :span='2'>
            <div class="result">{{size}}</div>
          </el-col>
        </el-row>
        <div v-if="type === 'doubleMesh' && showGrid">
          <el-row align="middle">
            <el-col :span='10'>Primary Color</el-col>
            <el-col :span='12'>
              <el-input
                  size="small"
                  type="color"
                  v-model="color"
                  style="width: 100%"
              />
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='10'>Primary Thickness</el-col>
            <el-col :span='10'>
              <el-slider size="small" :min='0.5' :max='10' :step='0.5 ' v-model="thickness" />
            </el-col>
            <el-col :span=2>
              <div class="result">{{ thickness.toFixed(1) }}</div>
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='10'>Secondary Color</el-col>
            <el-col :span='12'>
              <el-input size="small" type="color" v-model="colorSecond" style="width: 100%" />
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='10'>Secondary Thickness</el-col>
            <el-col :span='10'>
              <el-slider
                  size="small"
                  :min='0.5'
                  :max='10'
                  :step='0.5'
                  v-model="thicknessSecond"
                />
            </el-col>
            <el-col :span=2>
              <div class="result">{{ thicknessSecond.toFixed(1) }}</div>
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='10'>Scale Factor</el-col>
            <el-col :span='10'>
              <el-slider
                  size="small"
                  :min='1'
                  :max='10'
                  :step='1'
                  v-model="factor"
                />
            </el-col>
            <el-col :span='2'>
              <div class="result">{{ factor }}</div>
            </el-col>
          </el-row>
        </div>
        <div v-else>
          <el-row align="middle" v-show="showGrid">
            <el-col :span='10'>Grid Color</el-col>
            <el-col :span='12'>
              <el-input size="small" type="color" v-model="color" style="width: 100%" />
            </el-col>
          </el-row>
          <el-row align="middle" v-show="showGrid">
            <el-col :span='10'>Thickness</el-col>
            <el-col :span='10'>
              <el-slider size="small" :min='0.5' :max='10' :step='0.5' v-model="thickness" />
            </el-col>
            <el-col :span=1>
              <div class="result">{{thickness.toFixed(1)}}</div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>

      <el-tab-pane label="背景" name="2">
        <el-row align="middle">
          <el-col :span=6>Color</el-col>
          <el-col :span=14>
            <el-input size="small" type="color" v-model="bgColor" style= "width: 100%" />
          </el-col>
        </el-row>
        <el-row align="middle">
          <el-col :span="14" :offset="6">
            <el-checkbox v-model="showImage">
            Show Image
            </el-checkbox>
          </el-col>
        </el-row>
        <div v-if="showImage">
          <el-row align="middle">
            <el-col :span='6'>Repeat</el-col>
            <el-col :span='14'>
              <el-select size="small" style="width: 100%" v-model="repeat">
                <el-option :value="REPEAT_TYPE.NO_REPEAT">No Repeat</el-option>
                <el-option :value="REPEAT_TYPE.REPEAT">Repeat</el-option>
                <el-option :value="REPEAT_TYPE.REPEAT_X">Repeat X</el-option>
                <el-option :value="REPEAT_TYPE.REPEAT_Y">Repeat Y</el-option>
                <el-option :value="REPEAT_TYPE.ROUND">Round</el-option>
                <el-option :value="REPEAT_TYPE.SPACE">Space</el-option>
                <el-option :value="REPEAT_TYPE.FLIPX">Flip X</el-option>
                <el-option :value="REPEAT_TYPE.FLIPY">Flip Y</el-option>
                <el-option :value="REPEAT_TYPE.FLIPXY">Flip XY</el-option>
                <el-option :value="REPEAT_TYPE.WATERMARK">Watermark</el-option>
              </el-select>
            </el-col>
          </el-row>
          <div v-if="repeat === 'watermark'">
            <el-row align="middle">
              <el-col :span='16' :offset='6' style="font-size: 12px">
                Watermark Angle
              </el-col>
              <el-col :span='14' :offset='6'>
                <el-slider size="small" :min='0' :max='360' :step='1' v-model="angle" />
              </el-col>
              <el-col :span=2>
                <div class="result">{{angle}}</div>
              </el-col>
            </el-row>
          </div>

          <el-row align="middle">
            <el-col :span='6'>Position</el-col>
            <el-col :span='14'>
              <el-select size="small" style="width: 100%" v-model="position">
                <el-option value="center">center</el-option>
                <el-option value="left">left</el-option>
                <el-option value="right">right</el-option>
                <el-option value="top">top</el-option>
                <el-option value="bottom">bottom</el-option>
                <el-option value="50px 50px">50px 50px</el-option>
                <el-option :value="JSON.stringify({ x: 50, y: 50 })">
                  {`{ x: 50, y: 50 }`}
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='6'>Size</el-col>
            <el-col :span='14'>
              <el-select size="small" style="width: 100%" v-model="bgSize" >
                <el-option value="auto auto">auto auto</el-option>
                <el-option value="cover">cover</el-option>
                <el-option value="contain">contain</el-option>
                <el-option value="30px 30px">30px 30px</el-option>
                <el-option value="100% 100%">100% 100%</el-option>
                <el-option :value="JSON.stringify({ width: 150, height: 150 })">
                  {`{width: 150, height: 150 }`}
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          <el-row align="middle">
            <el-col :span='6'>Opacity</el-col>
            <el-col :span='12'>
              <el-slider
                  size="small"
                  :min='0.05'
                  :max='1'
                  :step='0.05'
                  v-model="opacity"
                />
            </el-col>
            <el-col :span=4>
              <div class="result">{{ opacity.toFixed(2) }}</div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div> 
</template>

<script setup lang="ts">
import GridOption from './method'
import { reactive, ref, watch } from 'vue'
import { useIndexStore } from '../../../../../store'
import { computed } from '@vue/reactivity';

const indexStore = useIndexStore()


enum GRID_TYPE_ENUM {
  DOT = 'dot',
  FIXED_DOT = 'fixedDot',
  MESH = 'mesh',
  DOUBLE_MESH = 'doubleMesh',
}

enum REPEAT_TYPE_ENUM {
  NO_REPEAT = 'no-repeat',
  REPEAT = 'repeat',
  REPEAT_X = 'repeat-x',
  REPEAT_Y = 'repeat-y',
  ROUND = 'round',
  SPACE = 'space',
  FLIPX = 'flipX',
  FLIPY = 'flipY',
  FLIPXY = 'flipXY',
  WATERMARK = 'watermark',
}
let GRID_TYPE = reactive(GRID_TYPE_ENUM)
let REPEAT_TYPE = reactive(REPEAT_TYPE_ENUM)
let activeName = ref('1')

GridOption.gridOpt(indexStore)
GridOption.setGridSize(indexStore)
GridOption.backGroundOpt(indexStore)
GridOption.isShowGrid(indexStore)

let showGrid = computed({
  get() {
    return indexStore.showGrid
  },
  set(val: boolean) {
    indexStore.updateshowGrid(val)
  }
})

let type = computed({
  get() {
    return indexStore.type
  },
  set(val:string) {
    indexStore.updatetype(val)
  }
})

let size = computed({
  get() {
    return indexStore.size
  },
  set(val:number) {
    indexStore.updatesize(val)
  }
})

let color = computed({
  get() {
    return indexStore.color
  },
  set(val:string) {
    indexStore.updatecolor(val)
  }
})
let thickness = computed({
  get() {
    return indexStore.thickness
  },
  set(val:number) {
    indexStore.updatethickness(val)
  }
})
let colorSecond = computed({
  get() {
    return indexStore.colorSecond
  },
  set(val:string) {
    indexStore.updatecolorSecond(val)
  }
})
let thicknessSecond = computed({
  get() {
    return indexStore.thicknessSecond
  },
  set(val:number) {
    indexStore.updatethicknessSecond(val)
  }
})
let factor = computed({
  get() {
    return indexStore.factor
  },
  set(val:number) {
    indexStore.updatefactor(val)
  }
})
let bgColor = computed({
  get() {
    return indexStore.bgColor
  },
  set(val:string) {
    indexStore.updatebgColor(val)
  }
})
let showImage = computed({
  get() {
    return indexStore.showImage
  },
  set(val:boolean) {
    indexStore.updateshowImage(val)
  }
})
let repeat = computed({
  get() {
    return indexStore.repeat
  },
  set(val:string) {
    indexStore.updaterepeat(val)
  }
})
let angle = computed({
  get() {
    return indexStore.angle
  },
  set(val:number) {
    indexStore.updateangle(val)
  }
})
let position = computed({
  get() {
    return indexStore.position
  },
  set(val:string) {
    indexStore.updateposition(val)
  }
})
let bgSize = computed({
  get() {
    return indexStore.bgSize
  },
  set(val:string) {
    indexStore.updatebgSize(val)
  }
})
let opacity = computed({
  get() {
    return indexStore.opacity
  },
  set(val:number) {
    indexStore.updateopacity(val)
  }
})

watch(() => showGrid.value, () => {
  GridOption.isShowGrid(indexStore)
}, { immediate: false, deep: false })
watch(() => type.value, () => {
  GridOption.gridOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => color.value, () => {
  GridOption.gridOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => thickness.value, () => {
  GridOption.gridOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => thicknessSecond.value, () => {
  GridOption.gridOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => colorSecond.value, () => {
  GridOption.gridOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => factor.value, () => {
  GridOption.gridOpt(indexStore)
}, { immediate: false, deep: false })


watch(() => bgColor.value, () => {
  GridOption.backGroundOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => showImage.value, () => {
  GridOption.backGroundOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => repeat.value, () => {
  GridOption.backGroundOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => angle.value, () => {
  GridOption.backGroundOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => bgSize.value, () => {
  GridOption.backGroundOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => position.value, () => {
  GridOption.backGroundOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => opacity.value, () => {
  GridOption.backGroundOpt(indexStore)
}, { immediate: false, deep: false })
watch(() => size.value, () => {
  GridOption.setGridSize(indexStore)
}, { immediate: false, deep: false })
</script>
