import {Graph, Addon, FunctionExt, Shape} from '@antv/x6'
import insertCss from 'insert-css'
import './shape'
import { customPorts } from './ports'
import graphData from './data/data'
import { getImageUrl } from '../../../utils'

insertCss(`
  @keyframes ant-line {
    to {
        stroke-dashoffset: -1000
    }
  }
`)

export default class FlowGraph {
  public static graph: Graph
  private static stencil: Addon.Stencil

  /**
   * 初始化方法
   * @param {*} dom 画板容器
   * @param {*} width 容器宽度
   * @param {*} height 容器高度
   * @param {*} flag 默认为true，传入false只实例化画板
   * @returns 
   */
  public static init(dom: HTMLElement, width = 1200, height = 900, flag = true) {
    // 初始化 流程图画板
    this.graph = new Graph({
      background: {
        color: '#e5e5e5' // 设置画布背景颜色
      },
      container: dom,
      width: width,
      height: height,
      autoResize: true,
      grid: {
        size: 10,
        visible: true,
        type: 'doubleMesh',
        args: [
          {
            color: '#cccccc',
            thickness: 1,
          },
          {
            color: '#5F95FF',
            thickness: 1,
            factor: 4,
          },
        ],
      },
      scroller: {
        enabled: false,
        pageVisible: false,
        pageBreak: false,
        pannable: false,
      },
      // 开启画布缩放
      mousewheel: {
        enabled: true,
        modifiers: ['ctrl', 'meta'],
        minScale: 0.5,
        maxScale: 2,
      },
      interacting: {
        nodeMovable: true, //节点是否可以被移动。
        edgeMovable: false, //边是否可以被移动。
        edgeLabelMovable: false, //边的标签是否可以被移动。
        arrowheadMovable: false, //边的起始/终止箭头是否可以被移动
        vertexMovable: true, //边的路径点是否可以被移动。
        vertexAddable: true, //是否可以添加边的路径点。
        vertexDeletable: true, //边的路径点是否可以被删除。
      },
      connecting: {
        snap: true, // 是否自动吸附
        allowMulti: true, // 是否允许在相同的起始节点和终止之间创建多条边
        allowNode: false, // 是否允许边链接到节点（非节点上的链接桩）
        allowBlank: false, // 是否允许连接到空白点
        allowLoop: false, // 是否允许创建循环连线，即边的起始节点和终止节点为同一节点，
        allowEdge: false, // 是否允许边链接到另一个边
        highlight: true, // 拖动边时，是否高亮显示所有可用的连接桩或节点
        connectionPoint: "anchor", // 指定连接点
        anchor: "center", // 指定被连接的节点的锚点
        createEdge() {
          // X6 的 Shape 命名空间中内置 Edge、DoubleEdge、ShadowEdge 三种边
          return new Shape.DoubleEdge({
            attrs: {
              // line: {
              //   // stroke: '#5F95FF',
              //   // strokeWidth: 4,
              //   // targetMarker: {
              //   //   name: 'classic',
              //   //   size: 8,
              //   // },
              //   stroke: '#1890ff',
              //   strokeDasharray: 5,
              //   targetMarker: null,//block classic diamond cross async path circle circlePlus ellipse
              //   style: {
              //     animation: 'ant-line 30s infinite linear',
              //   },
              // },
              line: {
                strokeWidth: 4,
                stroke: '#cfe7f2',
                strokeDasharray: 0,
                style: {
                  animation: 'ant-line 0s infinite linear',
                },
                targetMarker: null, // 去掉箭头
              },
              outline: {
                stroke: '#456d89',
                strokeWidth: 7,
              }
            },
            router: {
              name: 'metro',
            }
          })
        },
        validateConnection({
          sourceView,
          targetView,
          sourceMagnet,
          targetMagnet,
        }) {
          if (sourceView === targetView) {
            return false
          }
          if (!sourceMagnet) {
            return false
          }
          if (!targetMagnet) {
            return false
          }
          return true
        },
      },
      highlighting: {
        magnetAvailable: {
          name: 'stroke',
          args: {
            padding: 4,
            attrs: {
              strokeWidth: 4,
              stroke: 'rgba(223,234,255)',
            },
          },
        },
      },
      // 开启拖拽平移（防止冲突，按下修饰键并点击鼠标才能触发画布拖拽）
      panning: {
        enabled: true,
        modifiers: 'shift',
      },
      resizing: true,
      rotating: true,
      selecting: {
        enabled: true,
        multiple: true,
        rubberband: true,
        movable: true,
        showNodeSelectionBox: true,
      },
      snapline: true,
      history: true,
      clipboard: {
        enabled: true,
      },
      keyboard: {
        enabled: true,
      },
      embedding: {
        enabled: true,
        findParent({ node }) {
          const bbox = node.getBBox()
          return this.getNodes().filter((node) => {
            // 只有 data.parent 为 true 的节点才是父节点
            const data = node.getData()
            if (data && data.parent) {
              const targetBBox = node.getBBox()
              return bbox.isIntersectWithRect(targetBBox)
            }
            return false
          })
        },
      },
    })
    if(!flag) {
      // this.graph.centerContent()
      this.graph.hideGrid() // 返显渲染的时候 隐藏网格
      return this.graph
    }
    this.initStencil()
    this.initShape()
    this.initGraphShape()
    this.initEvent()
    return this.graph
  }
  // 初始化根节点
  private static initStencil() {
    this.stencil = new Addon.Stencil({
      target: this.graph,
      stencilGraphWidth: 280,
      search: { rect: true },
      collapsable: true,
      groups: [
        {
          name: 'basic',
          title: '基础节点',
          graphHeight: 180,
        },
        {
          name: 'custom-image',
          title: '系统设计图',
          graphHeight: 600
        },
        // {
        //   name: 'combination',
        //   title: '组合节点',
        //   layoutOptions: {
        //     columns: 1,
        //     marginX: 60,
        //   },
        //   graphHeight: 260,
        // },
        // {
        //   name: 'group',
        //   title: '节点组',
        //   graphHeight: 100,
        //   layoutOptions: {
        //     columns: 1,
        //     marginX: 60,
        //   },
        // },
      ],
    })
    const stencilContainer = document.querySelector('#stencil')
    stencilContainer?.appendChild(this.stencil.container)
  }
  // 初始化具体每个根节点下不同类型节点
  private static initShape() {
    const { graph } = this
    // 基础节点
    const r1 = graph.createNode({
      shape: 'flow-chart-rect',
      attrs: {
        body: {
          rx: 24,
          ry: 24,
        },
        text: {
          text: '起始节点',
        },
      },
    })
    const r2 = graph.createNode({
      shape: 'flow-chart-rect',
      attrs: {
        text: {
          text: '流程节点',
        },
      },
    })
    const r3 = graph.createNode({
      shape: 'flow-chart-rect',
      width: 52,
      height: 52,
      angle: 45,
      attrs: {
        'edit-text': {
          style: {
            transform: 'rotate(-45deg)',
          },
        },
        text: {
          text: '判断节点',
          transform: 'rotate(-45deg)',
        },
      },
      ports: {
        groups: {
          top: {
            position: {
              name: 'top',
              args: {
                dx: -26,
              },
            },
          },
          right: {
            position: {
              name: 'right',
              args: {
                dy: -26,
              },
            },
          },
          bottom: {
            position: {
              name: 'bottom',
              args: {
                dx: 26,
              },
            },
          },
          left: {
            position: {
              name: 'left',
              args: {
                dy: 26,
              },
            },
          },
        },
      },
    })
    const r4 = graph.createNode({
      shape: 'flow-chart-rect',
      width: 70,
      height: 70,
      attrs: {
        body: {
          rx: 35,
          ry: 35,
        },
        text: {
          text: '链接节点',
        },
      },
    })
    // 组合节点
    const c1 = graph.createNode({
      shape: 'flow-chart-image-rect',
    })
    const c2 = graph.createNode({
      shape: 'flow-chart-title-rect',
    })
    const c3 = graph.createNode({
      shape: 'flow-chart-animate-text',
    })
    // 节点组
    const g1 = graph.createNode({
      shape: 'groupNode',
      attrs: {
        text: {
          text: 'Group Name',
        },
      },
      data: {
        parent: true,
      },
    })
    // 系统设计图
    const imgs = [
      {
        image: getImageUrl('ldb.png')
      },
      {
        image: getImageUrl('wft1.png')
      },
      {
        image: getImageUrl('wft2.png')
      },
      {
        image: getImageUrl('wft3.png')
      },
      {
        image: getImageUrl('wft4.png')
      },
      {
        image: getImageUrl('wft5.png')
      },
      {
        image: getImageUrl('lqt.png')
      },
      {
        image: getImageUrl('lqb-o.png')
      },
      {
        image: getImageUrl('ldb-o.png')
      },
      {
        image: getImageUrl('bh.png')
      },
      {
        image: getImageUrl('f1.png')
      },
      {
        image: getImageUrl('f2.png')
      },
      {
        image: getImageUrl('f3.png')
      },
    ]
    const imgNodes = imgs.map(item => {
      return graph.createNode({
        // shape: 'flow-chart-image-rect-custom',
        // attrs: {
        //   image: {
        //     'xlink:href': item.image,
        //   }
        // }
        shape: 'image', //可选值：Rect Circle Ellipse Polygon Polyline Path Image HTML TextBlock BorderedImage EmbeddedImage InscribedImage Cylinder
        imageUrl: item.image,
        attrs: {
          image: {
            // fill: 'yellow',
          },
        },
        width: 52,
        height: 52,
        ports: { ...customPorts }
      })
    })
    this.stencil.load([r1, r2, r3, r4], 'basic')
    this.stencil.load(imgNodes, 'custom-image')
    // this.stencil.load([c1, c2, c3], 'combination')
    // this.stencil.load([g1], 'group')
  }

  // 根据json渲染节点和边
  public static initGraphShape(gd: any = graphData) {
    this.graph.fromJSON(gd)
  }

  // 连接桩显示时机
  private static showPorts(ports:NodeListOf<SVGAElement>, show:boolean) {
    for (let i = 0, len = ports.length; i < len; i = i + 1) {
      ports[i].style.visibility = show ? 'visible' : 'hidden'
    }
  }

  // 事件相关
  private static initEvent() {
    const { graph } = this
    const container = document.getElementById('container')!

    // 右键编辑文本
    graph.on('node:contextmenu', ({ cell, view }) => {
      console.log(view.container)
      const oldText = cell.attr('text/text') as string
      cell.attr('text/style/display', 'none')
      const elem = view.container.querySelector('.x6-edit-text') as HTMLElement
      if (elem) {
        elem.innerText = oldText
        elem.focus()
      }
      const onBlur = () => {
        cell.attr('text/text', elem.innerText)
        cell.attr('text/style/display', 'inline-block')
      }
      if(elem){
        elem.addEventListener('blur', () => {
          onBlur()
          elem.removeEventListener('blur', onBlur)
        })
      }
    })
    // 鼠标移入 显示连接桩
    graph.on('node:mouseenter', FunctionExt.debounce(() => {
      const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>
      this.showPorts(ports, true)
    }), 500,)
    // 鼠标移出 隐藏连接桩
    graph.on('node:mouseleave', () => {
      const ports = container.querySelectorAll('.x6-port-body') as NodeListOf<SVGAElement>
      this.showPorts(ports, false)
    })

    graph.on('node:collapse', ({ node, e }: any) => {
      e.stopPropagation()
      node.toggleCollapse()
      const collapsed = node.isCollapsed()
      const cells = node.getDescendants()
      cells.forEach((n: any) => {
        if (collapsed) {
          n.hide()
        } else {
          n.show()
        }
      })
    })
    // backspace
    graph.bindKey('delete', () => {
      const cells = graph.getSelectedCells()
      if (cells.length) {
        graph.removeCells(cells)
      }
    })
    // 鼠标动态添加/删除小工具。
    graph.on('edge:mouseenter', ({ cell }) => {
      /**
       * EdgeTool
       * vertices 路径点工具，在路径点位置渲染一个小圆点，拖动小圆点修改路径点位置，双击小圆点删除路径点，在边上单击添加路径点。
       * segments 线段工具。在边的每条线段的中心渲染一个工具条，可以拖动工具条调整线段两端的路径点的位置。
       * boundary 根据边的包围盒渲染一个包围边的矩形。注意，该工具仅仅渲染一个矩形，不带任何交互。
       * button 在指定位置处渲染一个按钮，支持自定义按钮的点击交互。
       * button-remove 在指定的位置处，渲染一个删除按钮，点击时删除对应的边。
       * source-arrowhead-和-target-arrowhead 在边的起点或终点渲染一个图形(默认是箭头)，拖动该图形来修改边的起点或终点。
       * edge-editor 提供边上文本编辑功能。
       */
      cell.addTools([
        {
          name: 'vertices',
          args: {
            attrs: { fill: '#007acc' },
            // 移动路径点过程中的吸附半径。当路径点与邻近的路径点的某个坐标 (x, y) 距离在半径范围内时，将当前路径点的对应坐标 (x, y) 吸附到邻居路径的路径点。
            snapRadius: 20,
            // 在边上按下鼠标时，是否可以添加新的路径点。
            addable: true,
            // 是否可以通过双击移除路径点。
            removable: true,
            // 是否自动移除冗余的路径点。
            removeRedundancies: true,
            // 是否阻止工具上的鼠标事件冒泡到边视图上。阻止后鼠标与工具交互时将不会触发边的 mousedown、mousemove 和 mouseup 事件。
            stopPropagation: false
          }
        }
      ])
    })
    graph.on('edge:mouseleave', ({ cell }) => {
      cell.removeTools()
    })
  }
}
