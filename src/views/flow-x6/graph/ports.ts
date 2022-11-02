const circle = {
  r: 4,
  magnet: true,
  stroke: '#5F95FF',
  strokeWidth: 1,
  fill: '#fff',
  style: {
    visibility: 'hidden',
  },
}


export const basicPorts = {
  groups: {
    top: {
      position: 'top',
      attrs: { circle },
    },
    right: {
      position: 'right',
      attrs: { circle },
    },
    bottom: {
      position: 'bottom',
      attrs: { circle },
    },
    left: {
      position: 'left',
      attrs: { circle },
    },
  },
  items: [
    {
      group: 'top',
    },
    {
      group: 'right',
    },
    {
      group: 'bottom',
    },
    {
      group: 'left',
    }
  ]
}

export const customPorts = {
  groups: {
    top: {
      position: {
        name: 'absolute',
      }
    },
    right: {
      position: {
        name: 'absolute',
      }
    },
    bottom: {
      position: {
        name: 'absolute',
      }
    },
    left: {
      position: {
        name: 'absolute',
      }
    }
  },
  items: [
    {
      id: 'port1',
      group: 'top',
      // 通过 args 指定绝对位置
      args: {
        x: '50%',
        y: '0%',
      },
      attrs: { circle },
    },
    {
      id: 'port2',
      group: 'right',
      args: {
        x: '100%',
        y: '50%',
      },
      attrs: { circle }
    },
    {
      id: 'port3',
      group: 'bottom',
      args: {
        x: '50%',
        y: '100%',
      },
      attrs: { circle }
    },
    {
      id: 'port4',
      group: 'left',
      args: {
        x: '0%',
        y: '50%',
      },
      attrs: { circle }
    }
  ]
}