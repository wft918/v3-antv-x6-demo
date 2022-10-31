import { defineStore } from 'pinia'
import { IndexType } from './types'

export const useIndexStore = defineStore('index', {
  state: (): IndexType => ({
    showGrid: false,
    type: 'mesh',
    size: 10,
    color: '#e5e5e5',
    thickness: 1,
    colorSecond: '#d0d0d0',
    thicknessSecond: 1,
    factor: 4,
    bgColor: '#e5e5e5',
    showImage: false,
    repeat: 'watermark',
    angle: 30,
    position: 'center',
    bgSize: JSON.stringify({ width: 150, height: 150 }),
    opacity: 0.9,

    strokeWidth: 8,
    outStrokeWidth: 15,
    stroke: '#e54033',
    outStroke: '#73d13d',
    strokeDasharray: 1,
    animation: 0,
    connector: 'normal',
    edgeRouter: 'metro',
    edgeOffset: 32,
    edgeDirection: 'H',
    label: '',

    nodeStroke: '#5F95FF',
    nodeStrokeWidth: 1,
    nodeFill: '#ffffff',
    // nodeImageWidth: 60,
    // nodeImageHeight: 60,
    portId: '',
    portX: 0,
    portY: 0,
    portColor: '#5F95FF',
    portFill: '#FFF',
    ZIndex: 0,
    nodeFontSize: 12,
    nodeColor: '#080808',
    nodeStatus: '0',
    nodePointCode: '52',
    nodeFieldName: 'fieldName1',

    nodeType: '' // 节点类型(text、image)
  }),
  actions: {
    updateshowGrid(showGrid:boolean):void {
      this.showGrid = showGrid
    },
    updatetype(type:string):void {
      this.type = type
    },
    updatesize(size:number):void {
      this.size = size
    },
    updatecolor(color:string):void {
      this.color = color
    },
    updatethickness(thickness:number):void {
      this.thickness = thickness
    },
    updatecolorSecond(colorSecond:string):void {
      this.colorSecond = colorSecond
    },
    updatethicknessSecond(thicknessSecond:number):void {
      this.thicknessSecond = thicknessSecond
    },
    updatefactor(factor:number):void {
      this.factor = factor
    },
    updatebgColor(bgColor:string):void {
      this.bgColor = bgColor
    },
    updateshowImage(showImage:boolean):void {
      this.showImage = showImage
    },
    updaterepeat(this, repeat:string):void {
      this.repeat = repeat
    },
    updateangle(angle:number):void {
      this.angle = angle
    },
    updateposition(position:string):void {
      this.position = position
    },
    updatebgSize(bgSize:string):void {
      this.bgSize = bgSize
    },
    updateopacity(opacity:number):void {
      this.opacity = opacity
    },


    updatestrokeWidth(strokeWidth:number):void {
      this.strokeWidth = strokeWidth
    },
    updateoutStrokeWidth(outStrokeWidth:number):void {
      this.outStrokeWidth = outStrokeWidth
    },
    updatestroke(stroke:string):void {
      this.stroke = stroke
    },
    updateoutStroke(outStroke:string):void {
      this.outStroke = outStroke
    },
    updatestrokeDasharray(strokeDasharray:number):void {
      this.strokeDasharray = strokeDasharray
    },
    updateanimation(animation:number):void {
      this.animation = animation
    },
    updateconnector(connector:string):void {
      this.connector = connector
    },
    updateedgeRouter(edgeRouter:string):void {
      this.edgeRouter = edgeRouter
    },
    updateedgeOffset(edgeOffset:number):void {
      this.edgeOffset = edgeOffset
    },
    updateedgeDirection(edgeDirection:string):void {
      this.edgeDirection = edgeDirection
    },
    updatelabel(label:string):void {
      this.label = label
    },
    

    updatenodeStroke(nodeStroke:string):void {
      this.nodeStroke = nodeStroke
    },
    updatenodeStrokeWidth(nodeStrokeWidth:number):void {
      this.nodeStrokeWidth = nodeStrokeWidth
    },
    updatenodeFill(nodeFill:string):void {
      this.nodeFill = nodeFill
    },
    // updatenodeImageWidth(nodeImageWidth:string) {
    //   this.nodeImageWidth = nodeImageWidth
    // },
    // updatenodeImageHeight(nodeImageHeight:string) {
    //   this.nodeImageHeight = nodeImageHeight
    // },
    updateportId(portId: string):void {
      this.portId = portId
    },
    updateportX(portX: number | string):void {
      this.portX = portX
    },
    updateportY(portY: number | string):void {
      this.portY = portY
    },
    updateportColor(portColor: string):void {
      this.portColor = portColor
    },
    updateportFill(portFill: string):void {
      this.portFill = portFill
    },
    updateZIndex(ZIndex: number):void {
      this.ZIndex = ZIndex
    },
    updatenodeFontSize(nodeFontSize: number):void {
      this.nodeFontSize = nodeFontSize
    },
    updatenodeColor(nodeColor: string):void {
      this.nodeColor = nodeColor
    },
    updatenodeStatus(nodeStatus: string):void {
      this.nodeStatus = nodeStatus
    },
    updatenodePointCode(nodePointCode: string) {
      this.nodePointCode = nodePointCode
    },
    updatenodeFieldName(nodeFieldName: string) {
      this.nodeFieldName = nodeFieldName
    },


    updatenodeType(nodeType: string) {
      this.nodeType = nodeType
    }
  }
})