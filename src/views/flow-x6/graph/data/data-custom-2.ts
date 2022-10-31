const graphData = {
  "cells": [
    {
      "position": {
        "x": 1023,
        "y": 319
      },
      "size": {
        "width": 66,
        "height": 55
      },
      "attrs": {
        "body": {
          "strokeWidth": 1
        },
        "image": {
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "fb03751d-fcc6-4f84-b8a5-abbdb88472a5",
      "zIndex": 1
    },
    {
      "position": {
        "x": 1023,
        "y": 399
      },
      "size": {
        "width": 66,
        "height": 55
      },
      "attrs": {
        "image": {
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "9c11bb5b-27ff-4440-b5ce-0f8721fae043",
      "zIndex": 2
    },
    {
      "position": {
        "x": 1023,
        "y": 464
      },
      "size": {
        "width": 66,
        "height": 55
      },
      "attrs": {
        "image": {
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "30237048-1285-4c93-b9b4-ce0346e2abb6",
      "zIndex": 3
    },
    {
      "position": {
        "x": 1023,
        "y": 540
      },
      "size": {
        "width": 66,
        "height": 55
      },
      "attrs": {
        "image": {
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "cf706d93-62e9-4e82-a93d-efe0549bd145",
      "zIndex": 4
    },
    {
      "position": {
        "x": 902,
        "y": 121
      },
      "size": {
        "width": 176,
        "height": 99
      },
      "attrs": {
        "image": {
          "width": 180,
          "height": 100,
          "xlink:href": "/img/wft4.f3e94624.png"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "4f2c88ee-4867-496d-a75d-2ae5d5ecfec5"
          },
          {
            "group": "right",
            "id": "f12013b5-b530-4e4b-828e-b23947b3afbe"
          },
          {
            "group": "bottom",
            "id": "7fe15113-7f19-45f0-812d-c012cb7452e3"
          },
          {
            "group": "left",
            "id": "3126c984-77f5-4d19-9394-63964ccbe602"
          }
        ]
      },
      "id": "44783d15-35f3-4c0d-b1ba-6526ae0ed53d",
      "zIndex": 5
    },
    {
      "position": {
        "x": 781,
        "y": 302.5
      },
      "size": {
        "width": 99,
        "height": 88
      },
      "attrs": {
        "image": {
          "width": 100,
          "height": 100,
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "type1",
          "status": 1
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "5b346065-e052-493e-b370-77999f7983ad"
          },
          {
            "group": "right",
            "id": "1dfad86c-97bf-4d3d-9c7b-8fe818752c6e"
          },
          {
            "group": "bottom",
            "id": "a77c3855-0893-4220-a402-9a3edee110b2"
          },
          {
            "group": "left",
            "id": "19b9fcde-663b-4635-9acd-cb3b2d98f5be"
          }
        ]
      },
      "id": "bcacf957-42a6-49eb-8c32-e5647b10bfd9",
      "zIndex": 6
    },
    {
      "position": {
        "x": 781,
        "y": 399
      },
      "size": {
        "width": 99,
        "height": 88
      },
      "attrs": {
        "image": {
          "width": 100,
          "height": 100,
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "type2",
          "status": 1
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "5b346065-e052-493e-b370-77999f7983ad"
          },
          {
            "group": "right",
            "id": "1dfad86c-97bf-4d3d-9c7b-8fe818752c6e"
          },
          {
            "group": "bottom",
            "id": "a77c3855-0893-4220-a402-9a3edee110b2"
          },
          {
            "group": "left",
            "id": "19b9fcde-663b-4635-9acd-cb3b2d98f5be"
          }
        ]
      },
      "id": "4b16b636-460c-412a-af43-1e0b985ff946",
      "zIndex": 7
    },
    {
      "position": {
        "x": 781,
        "y": 553.5
      },
      "size": {
        "width": 99,
        "height": 88
      },
      "attrs": {
        "image": {
          "width": 100,
          "height": 100,
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "type3",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "5b346065-e052-493e-b370-77999f7983ad"
          },
          {
            "group": "right",
            "id": "1dfad86c-97bf-4d3d-9c7b-8fe818752c6e"
          },
          {
            "group": "bottom",
            "id": "a77c3855-0893-4220-a402-9a3edee110b2"
          },
          {
            "group": "left",
            "id": "19b9fcde-663b-4635-9acd-cb3b2d98f5be"
          }
        ]
      },
      "id": "b23a9db9-12ab-4106-a825-371ff58de60f",
      "zIndex": 8
    },
    {
      "position": {
        "x": 540,
        "y": 269.5
      },
      "size": {
        "width": 66,
        "height": 55
      },
      "attrs": {
        "image": {
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "6926f591-ece0-4323-8ff3-78105a142b2c",
      "zIndex": 9
    },
    {
      "position": {
        "x": 540,
        "y": 319
      },
      "size": {
        "width": 66,
        "height": 55
      },
      "attrs": {
        "image": {
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "189a1ccf-b403-43a1-8c61-bc227fcc33f0",
      "zIndex": 10
    },
    {
      "position": {
        "x": 540,
        "y": 374
      },
      "size": {
        "width": 66,
        "height": 55
      },
      "attrs": {
        "image": {
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "type_110",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "7d49835a-8505-407b-bbc3-684622ddd292",
      "zIndex": 11
    },
    {
      "position": {
        "x": 504,
        "y": 498.5
      },
      "size": {
        "width": 66,
        "height": 55
      },
      "attrs": {
        "image": {
          "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAVCAYAAAAAY20CAAAJD0lEQVRIiV1XWXMU5xU9vffMSCPNjNCMVnbEIgG2cQpTIcaRUxW/UVR+Q/KYn4D4EY6f8563+MkJMTaJi0AEEhUsoRgZJKQZSWiZRTO9d+rcnh4raWhNL9937z3nrq188cUfoKkadF2HqqqIEQGxAiiQ+4P9faytrcee50FVFcRxjDCKMDg4iMmJiU903XgQhqE85z/wb/KDOI4QBmFXnAooMaAoFA3+VRReyQ65VhWVr7G910B9dxczzceIfQdr47MojB2HqcSIohiKyrXJXl1VNaiaioNGHe1WGxG1d403DAMrL19icWFBFGuahiiKEASBAAh+Ft4tlUoPaDzf6YYOTVERUokCmKYJzVCJRAz0g0CAUrVpGvIs8H2BzYOGaYaB129ef/z80cMHJ6cITsP8/Dyu54vTY+WhF47jgoRFSkKArqlq/uXySv3fL17AabehaCriKERA5uIQnudD7RpH1miAZVloNlv48s9f3lI1NbYzNgzdEKMymYy8V1X1wdDQ0NzU1PlvTMOE53sCMjFURafjCBDKFe+RBMuCbVkkbo5GKqEPx4uxt3+AMIx/a9v272lXkBJBAI7rjb9YWsLrH1dhWaZ4wHd9hFEIRYlh2VnkB/LQtUQRD0PX4XsBaltbcF1HPJWETgzLtNDf1wdN12/Z2b4Hvh9BUSK4jov3P/hAyWZzCAIfC8+e3vU8b+76R9cVTTeAOILv+x/7vj/nev4t1cqg3amj2fbRcQfxfHHhd+urK38sVypPR0dHJRIIUvd8rxIFQYLcshCFEWwrI+6nS4MwEINtOyPgJIL5X20jP9CPOMpBJTgRGMA0LAwPD0PVFLh+jI1qFb7bFg8piipeiqLwbrVWnWs1W7j6/nvImzYO2527Tx4/nNt4+xaqbuLU6TM4yE2gWB7FR46N+199Ze1sVedv/PwXc+Vy5R7zi3mpe55XiqIQp8+cxvTMZQFi2xZMU8IAi4uLWFhchB+E0FRdvEIgfFc+VobGkAPIHhzHwfjEOD779WfY3t7Gt988ZOriwoWLUii2tmrx9vYWwsDHxPgELDtDwB8bhj73dv3trZfLL8Wjk5OT+HR2FpWJU6iMjGDy1Qre1WoIgvOIoM1t1rYxUinfC2FAD3x/UDcMXLh4ESOVCg7bbdKbsB3HEm+NZkPqhqF1Q0VJwijfnxewkthhCNu2kcvl4HqeeNIydTQbB5LwRPn4yT+FNU3TMTMzjStX30N5ePhBvV7Hu50dTE9fwrmp86hVq1haXsarN2vwXBcHe7u4NH0JU1Pn8be//gWrL5/PjZZ/+WKyXPyTHoahTuNWVv6D75eWhYGkyEGSZH9/X8obEzCpXCpTWeLdcR1JzjQ3CKRWreHr+/cxMDiITF8/1jY28ejRIwzk8+LBcrkk3ltfe4uDgzouXLiAV69Wsba+juPHj2N3dxe17S00G00p7RErThyhUW/i+5Uf0B/uo6w1UP/xX5/Pjgx/q4dBmGE87ezsIJvNCDtphlOR2v1NACg4eriuKyVSyj77Q9cLmq7B9zw0Wx1EUOETJIBjw8MoFovMAayursLb80UGdQZhjPX1dVQ3q/B8H4ODAyKLG1kJ6/UG1FYLjgX4Xgxf3x/eq8af61EUdkzLhmHokrhCc4yEdT0pe51Op9fo0K3aBNNtGT0AzANWJCrmexrXl8tJCNHwqakpFAoFed5sNqQpnTlzFhcvXZIm92R+Eb5bh2VqKBYLvZ7BQtJo1mFaFvbrAU6eOoMPP/0VVqPgN2oYRdsscWHEZNSlcUSxijBWEvbCSBS6rgeHp+Ml1/z1kuvkdH9a5wRSgVgas7aJMAQc1++BFPBQ0XFctFot8eLY6Kj0m47jJOHpOGg2m5J/jUaDVQq7+wwrE9c/vIrz588BmTx0RVGet9stHLYdZDI55q9QKiGkqag3GpJ4YRj1Qij5VZLRoMt+3K3L7XZbKhCPIPBQKhUkr/Z2d8WTbHLc324dotFqyDvmGRvgpanTePcuD88LYJgmLNOUvHLcQEI49D2MjxxDsVCQpPc7DeiWbd9k6FSrm/CctnTGNIkZMk6nLUB0XUu6paaC40cSOEk7T5sKlRi6hjD0JHdY8wuFElhl4iiQtVbSaZFEYyShye7KvZdnZtDudLC0tIy1tTfyLiEixOlTJ1EaKqA8XJE1BE2P6wP5/O3Z2Vk8e/YMjUZd4poG0T7mAONub29PFBMoE5Ibu4VHQDHmM5ksfN8VQ0ZHRmQfnzP2W80mvDAQuWnFSsYBwDBMIYcKGV5MaDr44OCgmwMKsrks6z4mj0/K+nR45EKGUOHGjRtSzlgFyBbDgMrIAI19+PAhNjc3USgU5b2UVqEwMWRgYAC6bsh8RIMvX74s/YAzDydY7t3b2MPCwkJ37AA2NjfBkYCVj7IoJyEmQjabxbFjQ+Jh2kEi2KsYxpalyn02l5MY0KMo2iFrbP9kmXFKQRRIZXT7xsYG1tbW0Go1RRmN5J50COMzvuM+GnX5yhUxgmuYP/PzT8V7586dk7XUQSJSMClZpVJJ2K3VauIdeob608rW19cnZ35gAEOlEkxdh65p2g9MoNQgMsdfCqUyCrhz5w5u3rwp11yXsp+GA5+nbqURY2Njso6yGBYp0OnpaYyPj8skSq+wafE5CaFMgqQchiz3ERTv6eGzZ8+K7Ew2K3JLhaIMmLppGIuFYlFmoMPDw54hqXE8qJQsHDX46KF0Z3MaQcX0BO9JDD1JwyuVipz0NNeQEHri5MmTYiD1ci3Pa9euYWZmRp5RDtknONrAKOHZ398P13MZWsbf04rDBUR9FEB6TcHpkXbq/z8og55L537uoRFXrlwR2SdOnJB3NOj27dtJaewSln4o8Z5hwuskqTXZy9lL49m9lzzIZqHXW4dv/vHddwrZUrvdFQr+J0Ti3hitdEeHtAT9tBbdqpAe0qyiWJqdaRpfj41P3Mrm+nr7k/ziZ2ZKTNxLVILhDMRvknQi4HpOtCwKHN8FDHMg6Byitt6BnbVlwdHQOWrf0aP3CXhkTeqVLuReBeHHS6FQvLdT3bi1u12VhtcjqTuKpMBFd4+gLpm972XKZqjybwKq1Wrhv83+VyBYZY9VAAAAAElFTkSuQmCC"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "eb0a19c7-1082-4fe5-b430-3b5f7f31db6e",
      "zIndex": 12
    },
    {
      "position": {
        "x": 504,
        "y": 553.5
      },
      "size": {
        "width": 66,
        "height": 55
      },
      "attrs": {
        "image": {
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "c41f9df9-572a-49d3-84be-d43d5fa9c827",
      "zIndex": 13
    },
    {
      "position": {
        "x": 286.9999999999999,
        "y": 319
      },
      "size": {
        "width": 132,
        "height": 132
      },
      "attrs": {
        "image": {
          "width": 140,
          "height": 140,
          "xlink:href": "/img/wft1.7455c3fe.png"
        },
        "custom_attr": {
          "deviceType": "type4",
          "status": 1
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "661a4e3e-8412-4764-857d-1d5206b6a4ba"
          },
          {
            "group": "right",
            "id": "4b0f98d6-c530-4b89-bde6-ac4a6336a9d9"
          },
          {
            "group": "bottom",
            "id": "b35dc895-1bbf-4058-aa25-9d207384087b"
          },
          {
            "group": "left",
            "id": "22fe7ebe-bfd7-42bc-abbb-df434acf608a"
          }
        ]
      },
      "id": "5e91a576-daf1-4e4d-99c5-1136cfbe97e9",
      "zIndex": 14
    },
    {
      "position": {
        "x": 286.9999999999999,
        "y": 454
      },
      "size": {
        "width": 132,
        "height": 132
      },
      "attrs": {
        "image": {
          "width": 140,
          "height": 140,
          "xlink:href": "/img/wft1.7455c3fe.png"
        },
        "custom_attr": {
          "deviceType": "type5",
          "status": 1
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "661a4e3e-8412-4764-857d-1d5206b6a4ba"
          },
          {
            "group": "right",
            "id": "4b0f98d6-c530-4b89-bde6-ac4a6336a9d9"
          },
          {
            "group": "bottom",
            "id": "b35dc895-1bbf-4058-aa25-9d207384087b"
          },
          {
            "group": "left",
            "id": "22fe7ebe-bfd7-42bc-abbb-df434acf608a"
          }
        ]
      },
      "id": "346a88d9-17b9-4eb0-af0a-f4c7358789d2",
      "zIndex": 15
    },
    {
      "position": {
        "x": 320,
        "y": 190
      },
      "size": {
        "width": 110,
        "height": 99
      },
      "attrs": {
        "image": {
          "width": 100,
          "height": 100,
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "e2988bf2-86be-43ec-a797-eff6a5ec88c1"
          },
          {
            "group": "right",
            "id": "5a6e191b-0fb4-443d-a145-78cb2b64a193"
          },
          {
            "group": "bottom",
            "id": "d82b6075-917b-435a-a6bc-0e2b3acaf3b2"
          },
          {
            "group": "left",
            "id": "3738a8ed-68d5-49b6-9417-098f9a21980b"
          }
        ]
      },
      "id": "30333b12-028b-4109-abf7-e7b741dc14d4",
      "zIndex": 16
    },
    {
      "position": {
        "x": 176.9999999999999,
        "y": 220
      },
      "size": {
        "width": 110,
        "height": 99
      },
      "attrs": {
        "image": {
          "width": 100,
          "height": 100,
          "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAhCAYAAACRIVbWAAAQ4ElEQVRogY1aya8dV17+fuecqju/we/Zz2PsdpzBQUkaohZiEXU33cvOotkBEhK9bxaIBSC2/AE0YouaICHEtE8LaFCrFVq0yeCMTmwn8Wy/9/zuXFVnQmeqqnudIK503723hjN8v+/3/YZ69Prrr4OIYK2F0u5tIASH4ARYC1D8jK90rftMLxvP/1/nvupl4xw5WRhYvHFjhKJS+N6zc3Qz5q7o/+zWcH7zAIffuzTdOT7isLD4j8+H9vq+Xf7Wc+P+Rj9DqekrZvjy1/o6/z8v4W5y69XGYJADxzb7ULLCwVRBGQ5i1oOVBk6b958JzPgyxjwxZQ1k/POl2FkLxixKSXtfjPn9PhUPOMxJWAe+OXVvKnC4qD5k0GDEoAxwd8pwMJcHghk/cBjXxvfqa33tYTV2xZDB0E/cunJeuPOOUdZYPH+ug0uXNnHtwy9w50EBdLYdml/JEG+d+oefvmbXk8cCKPWe0OAcgDRYSPFSpQwubKp3OWMw3oh0Yi6B7Y7+uJsTjDUoJLCoLHb6+mEvY9Ambdx9ErSlevzGnuTPpY3XyCQrEuKxVba1xxDcaA9Uxiw2+wqWT7EsFtCa0CUN7nccrNfg0gxKNZjJYK3JbLqSEnL1MAYODPJjOY9340wreqlUFlsd9S5jAeClpJOzwuJMX13LOWC0wbwgzCuLs0NzyBhQKQVjyA9eUQZvQm1qABw45C5sluXXQjULWTiYNtHaApm4JevAIgUuuB/w6nufQb21j1k5Qr9/HpkArNaRHW2GJy0j/2HaDAtXt2ZrjjvQHFucyzn3LhT3rHC/3flJyV7W2mKzY94hMFiymJV8z7FotKk+tEZDWotJIVBJi5GQB1obSGk9myR1sM2nON87RCYktJsxrhHEIjjJJd0W7Noig0EtrSy7vkT89Og8iBgMBKp9g939D1CoA+xvn8Fodw8iywHG67vbTOXEIISA1BrGaEcPv7gVh6VVGTFE4Eri6fwAZwZLGHA/qDEWRyV/SZDGMDPvBqYYHJViTxmDUSavaaU8YaZVBm2BHq8eVlKiUgwV62HX7OPl2X9BH84wE/3AJrcealhUe51taUBEh5IrxotWAHOadf32vv9iLAdkDiq6GB/cw63pAwyXOfJODuLCj5eYauMkRhkPVJYLBLsFsPwslNwumMp6CxswIhxVfbythvj+pRJPbVso4yNxNi7ohQ6XssP1B0oZv/hxyU6SNXLAq+tSas/PmRReo3pUHcpKQZochizOljdB4wf4T/sNzLt76PEwn/MawzgsZ/63rTeR8AouTyGg1BrXJpzbg/j+uUfhcsZATGDy+Dzk2RP4zd1tcF7AmlmkLHnrB40hCM7xyRd38dHNm3jxuYs4f+YU3AadS7oF1WC15mMEdIXBzXEf//DJDj5/TPjaMZcyAIXC5XFJWZ/rd52ToVSwTOBxsXmCk7mRo5LO9Zzwzyrv0Oiy6sAFJ8cyZhR6coKF2Ibafg7dfIicpF+L6uRgPEOmJLgxfr462HhMWG3UNRSbn9ZCbI76zTki9PsXPNM4tMsFYJHXEuWAcK7gxLebd3xQ2N9/CH3xDI5tjeBcwkRhTSS2rb8OrGEHuK/66HGNASugtfDxY1nRy9OSsMnKd8gqzGmAzCjMSpzqMPWxQAWtmTfcpGIQUA6MR0ozKDLoGomurjCnnosC4HoOzgxUlmM4O8KlGzfQPTpC5QxOLWxWHK4lULXrUh2gxKzUa0lnEHS36XYs825nLLRWfsw8MxiMNvHC5a+jO9rB43kR7lmJgMkoIZcT3Lh94PZ06PVoJEqUpZ8N0zJ7cVlqXOhOr94Tp/DW5q/j2fHHqJb7x3tU/YyzMEalgVnFkFOJjNSBci7IGLiR4LbCAiM4jWNKosyYX/PlK1ew8cH7uLp7AlWe+3TIR0hKOVhALu2zBquVX7q/wjElbMauJHaMgHZocOeNbRLUqqpw/NgGvnbxBYwnY5TLR949XdRBzKsowu3vdee0hrIWD2eAIIWNXMIa8nPNqs7XS2VwrLt8+2jJceUTgfnCwko6vZ1V17pef4Cl4phWDINMoiPMgcu7XGTtY4nMLjDHMRirvZ4qLtCfzHHm02v48Pgu3vnmq+gyho7XJRaAIB93vRbWXhDCp/9qIg0dlCIBZeLmXDQSZHxY9TkUa8BKlA36Zbx1u5nFstMBqwgZhYiY0oTAsrgEAjrcOLwwKQy28gK7A1daaQ9yqfiLsArbPTkV6vbvbX/21rcXNPmW4bx/cbD8qCek16ux4qikwuneEn1ePVo64YXGNsYY2jGkPQ2mS3CSIHQwWD5GVk2gd89iOMwwUMoJS7JpnVhbNIltAlFZDmncXpnfuTARLEYWPa6gFP704bz755OqA2l5YFiLigl8L/YWuJwbbPYYrt7ewHSuIDKK+Qv5ZC+IaACYk4VUDFA5BhnhvX0eYCXg3rSLrYxwa37yzb5kuNAbe+MV1MdcbX90db/nk9eZzNADhzIjXD3I913abHgHR2C4XX0Tn9kTmC034MogOxUYLLuYn/kO7vZOdA7vDvu5Md6exNjEZZE2JtYeMmvqQNTnEsO8wKgrYRl3pRjoL370I7+JLld4vOj+7tv7e3/7wXiDJpL7LJvFqFYn6AiMk8pCSoXXLhd45cRj/PhNixuzTfT6HTDOYa2Lrs5CvAbbeF2w6AnjTbuUMYwTkDODnLnEVGAoKvz25YfY60zwLx9t4r3DTZ+4ci7AOUc3c1YXKDULWQoMFBOQyJFDgUPGpA7QnKPq5BBSI5PSJ7rtSqLR9ZDXpYS6iwLH+eTKr2we/PHlk4t/zbscIssE+pnCg6P+N37y+bm/vjrfpQUc+go1QVbqQhs3bqCtwRvXKvzyusGtxQCL7gbmTCDEZhcRqH1Lk8wa7g9q0zA2xZylBPplieV8H/PZfVy7u4d7bAvdTgfk7+OICT+MZXVS6fNAyMhnXtegVhOM0mCeUQzrL7uyLx5rSCcxOQ7LjVceTPGT6Uz/4DeelT8WTnMWJe/+/NbO370/GeUVV+hxiz732ceTNXwSPDdxx2Xvu7hPe8g3CT0G7yo2Xker8bn+qGvYGkt3XQCQOhZK9fDPH++gKHJMu2fw1Mgxq5UQ15sjtEJYTO0CXEk3w3UmXs3WkyegFQ0RJcEl0FZpCAGUS0H/fbfzl/2seEM46v/PA/HDqwfdSyK32OQKx4c5Lmz1IRiFuo9WE1ofduOSnDspkA/XGQc6jMVAQg1jWveH32GR6XeisLuOxRJ/oS9gpgmDDBiJpl/WdqH1sdMMCQiq8yWsgEQrm1ndVyfjOJoVePOjLzBfSGSZwRQ0fOeO+oFQhvjVB/TD+0uFk1mJizsbePHsFqazwpcyLFEgMaXVH0p6YX1VHyIM6qiZFkL1Z9ora9VelJpcrXrNDbOZAVs5BfF1oR5NMUwJirRRu8awFVegLwcLbZqS1zK/RpfhywJkJJjVyKzLOxXuTdV3RSFx/uHMnHMalXmJlDgcT/HpvSNIbcAZtboINu6Laims5SiKpD+eBINWF4mguSH/sut5c0w30vk1jtTX2ZQCxaO23Rlaaw9R657UKGmNsdq8DAddlHfHe5lBXxjIwiW7GqVSzwupjF0qgwwKHUjceXiIm3eNn4hFUrVt0t5anZPYtpKkLdsViz6hfc0NazUrtdPDFW64eECm1atL8KxEt4Y1tk6sG5bbWNzXY9bGqzFG5vSaAVoV0FWJSklXQh0XxpibTKnHTFfbLkqVOhTDOYsaEnnU6EGbwuSr/ZTQUmvntm6uUQQ+yOuTXFvrk9Uiu2r02u2SbCV2pUIvMStSp44r6eKG/vF7NIltDOnHdJ5kLObzClYVWFTh3dUVF8wq9Gnx3r2i8yo0oU+AdJ0FG5qNh4VCoTW63BXXayEtTqjjWpte2pNMSnEoBYd1sOoOgG2VGytXtVm9rkvt39GJbQM8xWPpPt/lcIk4CEPGPIucjqpolAG3IK0wXhaYVAWgl8hN8aEH69yg+vfr++NXD6aEQc49kzLhergu8ZSYSo2l6xS2o2wU5SxuzFXzJukHsz4Xsmvg2hUZa4tIgwW1XKMNQ12SxI0nibBNnyWuLbhYFoFytahutdt99wRAaa03vhTMe5FwJZc2wZiCoI3CuCgAI5HLJbpY/qOopMbzx+3rH9ya/NnjMXjRyyHIYuFcx6VSAI6xmKlEBjiaBoe3viB1ixcm9KXq42g9LamTqwaRFBBqajUqHd11/bp2cmZbt7SaxQksi1jUk09Fal2Lt2eur5aGkfCprKFm6HFlfTGeGQmqFrDzg9npU/RXYlZK7G3xG792evH6z2/s/77SPadwvtftJ4t6Y+uyp2mSUVyoK1lErdKtbmk7gtlWArjmOE8ea6l+G+R0zZcNkyIea3TIvbNWruUbALYdeMK1zvaq3W1w3XujwOUSen5gj+XlH7749FMPRVFKV5jh5YvdP1Jq8ur7txaXFnMecqeWFzX6+US3qt5AShlcc5C7ssd1qtzTI8/GpqGW9m9blFjt3dswf82WFMlsXYLZ1rrsOvHCKmoDuWM8do/cAxHTcksbtWulrHDdSLkEk7NPj/fVn7xyee+fzp7cgnCapBShl4vDX316+K3d0eJv7jxafmeyqCCVrqndFFtps1FFYsVOyTXI+hbKYqH86nqZ2Mk4Dom1XY5aG04pZivZqEW5MQa15mubaoWb1DAsqEEY0T9rLNXEgI8GOd/KGMa+jd5KbpEqlXg06ylsDwUunD6Bvb0tLKSGmLoikzPMS4U8Y3eOnxp+d+NYjsXSdTEr/6TaN/1MZIk1sReP1e8mPF90Uz16XOLBwcO7htipcye2njk2Yr8QLLA1uEro+bv+uOtRJaiSzrQZUgcBG3I/L8C17eya0WJX1oSsX2vtO7tVWeHOsrxVmO4Lx3dG53eH9l3XwWBMeC9goQ9VP9xwa8tdg6HXQd7p4NA91YWC2C0LMC7CnCX5unsIgy3nQoJ52jpWGk/3UNMYn4sZ34Zxkc81AnW9AYONXga+OfqlUvq1kx12aZPTL8KCWCiLEEBinHyACHViu84LoNVdD6z+P8VqeoC6M2vjk2nLjH/oqn3NCkgGDIb966XtvHC6I/a2hAbFJz0sgsNYbCn5coyFaOtAKlVoDQkB8Tv7+whOHHQCBmtinizW8vPW4lP89uDFTUMwqFObVyzhNc7ZMyw9Wq+dJj78VC5wmNozG0ZFNzVoqgSg7nisLKQ1Zvvl2zfcGTMD8h7skK45Bmec7TLfVYBnSxICqkuVdvGd1hR+ibfcExxjWjUX6gcPTVSJWXWkd5vqNgp28FTjWeaGVja/4vSQU3XJVwLEvfUaC0blZvRETpW+pqhlU4JZZ+arxXGNm00JcfOQ063H/8MK5W+5B8kcxcD3JBn3zOaMx358u0poA0hh3e6B8k/PnY3/BxB930S3cv4eW7BhXQEUd065J9BKh4VYpwsmuKY2UEZCK43DcnDlYHKIIaue2Rh20en1kbsnK5zXYu2X5MCzjWVt63utT21tqpm5EtJq3Ux9fxuBcg9kqrLAwg7/ba5z09NFNepydPuDsB4hav1MbaO2a7rObJZl/i228663tI1u5yfRBpprD1h6ehtcMmTnymmEbx0HdjmR99bz7HIgWgi5cy8n8e1txv9gY2PD/xuAF9P07z+1e0XRr/stLea0o9uKmyYZaHKQJBX1er1xXarhAOtjbHfuzyr29xu2ur416CDr9TxbwjxRM6NmuUATPCCA5TQrzwX+Fy0cGXRvdLZdAAAAAElFTkSuQmCC"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "e2988bf2-86be-43ec-a797-eff6a5ec88c1"
          },
          {
            "group": "right",
            "id": "5a6e191b-0fb4-443d-a145-78cb2b64a193"
          },
          {
            "group": "bottom",
            "id": "d82b6075-917b-435a-a6bc-0e2b3acaf3b2"
          },
          {
            "group": "left",
            "id": "3738a8ed-68d5-49b6-9417-098f9a21980b"
          }
        ]
      },
      "id": "1a77e60e-7f47-4c1f-ae68-ed356d9805dc",
      "zIndex": 17
    },
    {
      "angle": 270,
      "position": {
        "x": 110.99999999999989,
        "y": 606
      },
      "size": {
        "width": 77,
        "height": 55
      },
      "attrs": {
        "image": {
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "7411d9cd-801e-4ff6-bf11-40866c110714",
      "zIndex": 18
    },
    {
      "angle": 270,
      "position": {
        "x": 165.9999999999999,
        "y": 606
      },
      "size": {
        "width": 77,
        "height": 55
      },
      "attrs": {
        "image": {
          "xlink:href": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAVCAYAAAAAY20CAAAJD0lEQVRIiV1XWXMU5xU9vffMSCPNjNCMVnbEIgG2cQpTIcaRUxW/UVR+Q/KYn4D4EY6f8563+MkJMTaJi0AEEhUsoRgZJKQZSWiZRTO9d+rcnh4raWhNL9937z3nrq188cUfoKkadF2HqqqIEQGxAiiQ+4P9faytrcee50FVFcRxjDCKMDg4iMmJiU903XgQhqE85z/wb/KDOI4QBmFXnAooMaAoFA3+VRReyQ65VhWVr7G910B9dxczzceIfQdr47MojB2HqcSIohiKyrXJXl1VNaiaioNGHe1WGxG1d403DAMrL19icWFBFGuahiiKEASBAAh+Ft4tlUoPaDzf6YYOTVERUokCmKYJzVCJRAz0g0CAUrVpGvIs8H2BzYOGaYaB129ef/z80cMHJ6cITsP8/Dyu54vTY+WhF47jgoRFSkKArqlq/uXySv3fL17AabehaCriKERA5uIQnudD7RpH1miAZVloNlv48s9f3lI1NbYzNgzdEKMymYy8V1X1wdDQ0NzU1PlvTMOE53sCMjFURafjCBDKFe+RBMuCbVkkbo5GKqEPx4uxt3+AMIx/a9v272lXkBJBAI7rjb9YWsLrH1dhWaZ4wHd9hFEIRYlh2VnkB/LQtUQRD0PX4XsBaltbcF1HPJWETgzLtNDf1wdN12/Z2b4Hvh9BUSK4jov3P/hAyWZzCAIfC8+e3vU8b+76R9cVTTeAOILv+x/7vj/nev4t1cqg3amj2fbRcQfxfHHhd+urK38sVypPR0dHJRIIUvd8rxIFQYLcshCFEWwrI+6nS4MwEINtOyPgJIL5X20jP9CPOMpBJTgRGMA0LAwPD0PVFLh+jI1qFb7bFg8piipeiqLwbrVWnWs1W7j6/nvImzYO2527Tx4/nNt4+xaqbuLU6TM4yE2gWB7FR46N+199Ze1sVedv/PwXc+Vy5R7zi3mpe55XiqIQp8+cxvTMZQFi2xZMU8IAi4uLWFhchB+E0FRdvEIgfFc+VobGkAPIHhzHwfjEOD779WfY3t7Gt988ZOriwoWLUii2tmrx9vYWwsDHxPgELDtDwB8bhj73dv3trZfLL8Wjk5OT+HR2FpWJU6iMjGDy1Qre1WoIgvOIoM1t1rYxUinfC2FAD3x/UDcMXLh4ESOVCg7bbdKbsB3HEm+NZkPqhqF1Q0VJwijfnxewkthhCNu2kcvl4HqeeNIydTQbB5LwRPn4yT+FNU3TMTMzjStX30N5ePhBvV7Hu50dTE9fwrmp86hVq1haXsarN2vwXBcHe7u4NH0JU1Pn8be//gWrL5/PjZZ/+WKyXPyTHoahTuNWVv6D75eWhYGkyEGSZH9/X8obEzCpXCpTWeLdcR1JzjQ3CKRWreHr+/cxMDiITF8/1jY28ejRIwzk8+LBcrkk3ltfe4uDgzouXLiAV69Wsba+juPHj2N3dxe17S00G00p7RErThyhUW/i+5Uf0B/uo6w1UP/xX5/Pjgx/q4dBmGE87ezsIJvNCDtphlOR2v1NACg4eriuKyVSyj77Q9cLmq7B9zw0Wx1EUOETJIBjw8MoFovMAayursLb80UGdQZhjPX1dVQ3q/B8H4ODAyKLG1kJ6/UG1FYLjgX4Xgxf3x/eq8af61EUdkzLhmHokrhCc4yEdT0pe51Op9fo0K3aBNNtGT0AzANWJCrmexrXl8tJCNHwqakpFAoFed5sNqQpnTlzFhcvXZIm92R+Eb5bh2VqKBYLvZ7BQtJo1mFaFvbrAU6eOoMPP/0VVqPgN2oYRdsscWHEZNSlcUSxijBWEvbCSBS6rgeHp+Ml1/z1kuvkdH9a5wRSgVgas7aJMAQc1++BFPBQ0XFctFot8eLY6Kj0m47jJOHpOGg2m5J/jUaDVQq7+wwrE9c/vIrz588BmTx0RVGet9stHLYdZDI55q9QKiGkqag3GpJ4YRj1Qij5VZLRoMt+3K3L7XZbKhCPIPBQKhUkr/Z2d8WTbHLc324dotFqyDvmGRvgpanTePcuD88LYJgmLNOUvHLcQEI49D2MjxxDsVCQpPc7DeiWbd9k6FSrm/CctnTGNIkZMk6nLUB0XUu6paaC40cSOEk7T5sKlRi6hjD0JHdY8wuFElhl4iiQtVbSaZFEYyShye7KvZdnZtDudLC0tIy1tTfyLiEixOlTJ1EaKqA8XJE1BE2P6wP5/O3Z2Vk8e/YMjUZd4poG0T7mAONub29PFBMoE5Ibu4VHQDHmM5ksfN8VQ0ZHRmQfnzP2W80mvDAQuWnFSsYBwDBMIYcKGV5MaDr44OCgmwMKsrks6z4mj0/K+nR45EKGUOHGjRtSzlgFyBbDgMrIAI19+PAhNjc3USgU5b2UVqEwMWRgYAC6bsh8RIMvX74s/YAzDydY7t3b2MPCwkJ37AA2NjfBkYCVj7IoJyEmQjabxbFjQ+Jh2kEi2KsYxpalyn02l5MY0KMo2iFrbP9kmXFKQRRIZXT7xsYG1tbW0Go1RRmN5J50COMzvuM+GnX5yhUxgmuYP/PzT8V7586dk7XUQSJSMClZpVJJ2K3VauIdeob608rW19cnZ35gAEOlEkxdh65p2g9MoNQgMsdfCqUyCrhz5w5u3rwp11yXsp+GA5+nbqURY2Njso6yGBYp0OnpaYyPj8skSq+wafE5CaFMgqQchiz3ERTv6eGzZ8+K7Ew2K3JLhaIMmLppGIuFYlFmoMPDw54hqXE8qJQsHDX46KF0Z3MaQcX0BO9JDD1JwyuVipz0NNeQEHri5MmTYiD1ci3Pa9euYWZmRp5RDtknONrAKOHZ398P13MZWsbf04rDBUR9FEB6TcHpkXbq/z8og55L537uoRFXrlwR2SdOnJB3NOj27dtJaewSln4o8Z5hwuskqTXZy9lL49m9lzzIZqHXW4dv/vHddwrZUrvdFQr+J0Ti3hitdEeHtAT9tBbdqpAe0qyiWJqdaRpfj41P3Mrm+nr7k/ziZ2ZKTNxLVILhDMRvknQi4HpOtCwKHN8FDHMg6Byitt6BnbVlwdHQOWrf0aP3CXhkTeqVLuReBeHHS6FQvLdT3bi1u12VhtcjqTuKpMBFd4+gLpm972XKZqjybwKq1Wrhv83+VyBYZY9VAAAAAElFTkSuQmCC"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "ac50fd97-30d8-4510-bfc9-deebd08e2ef5",
      "zIndex": 19
    },
    {
      "angle": 270,
      "position": {
        "x": 55.999999999999886,
        "y": 606
      },
      "size": {
        "width": 77,
        "height": 55
      },
      "attrs": {
        "image": {
          "xlink:href": "data:image/png;base64,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"
        },
        "custom_attr": {
          "deviceType": "",
          "status": 0
        }
      },
      "visible": true,
      "shape": "flow-chart-image-rect-custom",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 4,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
          },
          {
            "group": "right",
            "id": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
          },
          {
            "group": "bottom",
            "id": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
          },
          {
            "group": "left",
            "id": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
          }
        ]
      },
      "id": "b3612b43-da90-486c-af1a-461f804c8837",
      "zIndex": 20
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 9,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "c0e05578-4f74-4c30-a641-6f6cce1f8222",
      "router": {
        "name": "metro"
      },
      "zIndex": 21,
      "source": {
        "cell": "fb03751d-fcc6-4f84-b8a5-abbdb88472a5",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      },
      "target": {
        "cell": "44783d15-35f3-4c0d-b1ba-6526ae0ed53d",
        "port": "f12013b5-b530-4e4b-828e-b23947b3afbe"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "19d9acba-0b50-4b25-aecd-c13ba7db3c04",
      "router": {
        "name": "metro"
      },
      "zIndex": 22,
      "source": {
        "cell": "fb03751d-fcc6-4f84-b8a5-abbdb88472a5",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      },
      "target": {
        "cell": "cf706d93-62e9-4e82-a93d-efe0549bd145",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "993bc64c-374a-4be8-93e5-35d570e6758d",
      "router": {
        "name": "metro"
      },
      "zIndex": 23,
      "source": {
        "cell": "9c11bb5b-27ff-4440-b5ce-0f8721fae043",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      },
      "target": {
        "cell": "b23a9db9-12ab-4106-a825-371ff58de60f",
        "port": "a77c3855-0893-4220-a402-9a3edee110b2"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "615fe703-744c-4841-8e6d-8e98423746ac",
      "router": {
        "name": "metro"
      },
      "zIndex": 24,
      "source": {
        "cell": "30237048-1285-4c93-b9b4-ce0346e2abb6",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      },
      "target": {
        "cell": "44783d15-35f3-4c0d-b1ba-6526ae0ed53d",
        "port": "4f2c88ee-4867-496d-a75d-2ae5d5ecfec5"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "3e846aa6-b1f9-45a5-87a6-6deefa1ee6a4",
      "router": {
        "name": "metro"
      },
      "zIndex": 25,
      "source": {
        "cell": "44783d15-35f3-4c0d-b1ba-6526ae0ed53d",
        "port": "3126c984-77f5-4d19-9394-63964ccbe602"
      },
      "target": {
        "cell": "6926f591-ece0-4323-8ff3-78105a142b2c",
        "port": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#1fee11",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#5a7ed3",
          "strokeWidth": 13
        }
      },
      "id": "e7d0d71b-b670-46fb-8bdd-1cfd14a072b6",
      "router": {
        "name": "metro"
      },
      "zIndex": 26,
      "source": {
        "cell": "fb03751d-fcc6-4f84-b8a5-abbdb88472a5",
        "port": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
      },
      "target": {
        "cell": "bcacf957-42a6-49eb-8c32-e5647b10bfd9",
        "port": "5b346065-e052-493e-b370-77999f7983ad"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "570401e7-8670-47fc-9929-df9e60f21035",
      "router": {
        "name": "metro"
      },
      "zIndex": 27,
      "source": {
        "cell": "fb03751d-fcc6-4f84-b8a5-abbdb88472a5",
        "port": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
      },
      "target": {
        "cell": "4b16b636-460c-412a-af43-1e0b985ff946",
        "port": "1dfad86c-97bf-4d3d-9c7b-8fe818752c6e"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "e4880a39-d291-413e-8f96-00a99a8eb788",
      "router": {
        "name": "metro"
      },
      "zIndex": 28,
      "source": {
        "cell": "9c11bb5b-27ff-4440-b5ce-0f8721fae043",
        "port": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
      },
      "target": {
        "cell": "b23a9db9-12ab-4106-a825-371ff58de60f",
        "port": "1dfad86c-97bf-4d3d-9c7b-8fe818752c6e"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "99ad8761-eb80-474f-9baa-d7dac67a5029",
      "router": {
        "name": "metro"
      },
      "zIndex": 29,
      "source": {
        "cell": "30237048-1285-4c93-b9b4-ce0346e2abb6",
        "port": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
      },
      "target": {
        "cell": "4b16b636-460c-412a-af43-1e0b985ff946",
        "port": "a77c3855-0893-4220-a402-9a3edee110b2"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "060e854b-9998-4365-8762-40325dadb1e6",
      "router": {
        "name": "metro"
      },
      "zIndex": 30,
      "source": {
        "cell": "cf706d93-62e9-4e82-a93d-efe0549bd145",
        "port": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
      },
      "target": {
        "cell": "b23a9db9-12ab-4106-a825-371ff58de60f",
        "port": "5b346065-e052-493e-b370-77999f7983ad"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "b0ed8858-5d37-4145-80a6-a920e728923b",
      "router": {
        "name": "metro"
      },
      "zIndex": 31,
      "source": {
        "cell": "4b16b636-460c-412a-af43-1e0b985ff946",
        "port": "5b346065-e052-493e-b370-77999f7983ad"
      },
      "target": {
        "cell": "7d49835a-8505-407b-bbc3-684622ddd292",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "2dd08e0b-4259-4288-b7d8-b54c3bc67a09",
      "router": {
        "name": "metro"
      },
      "zIndex": 32,
      "source": {
        "cell": "bcacf957-42a6-49eb-8c32-e5647b10bfd9",
        "port": "19b9fcde-663b-4635-9acd-cb3b2d98f5be"
      },
      "target": {
        "cell": "6926f591-ece0-4323-8ff3-78105a142b2c",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "765440f4-5445-4766-a700-c5fd38404dc9",
      "router": {
        "name": "metro"
      },
      "zIndex": 33,
      "source": {
        "cell": "eb0a19c7-1082-4fe5-b430-3b5f7f31db6e",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      },
      "target": {
        "cell": "7d49835a-8505-407b-bbc3-684622ddd292",
        "port": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "6f3a6b72-cb91-43df-945e-cbf8c909fdae",
      "router": {
        "name": "metro"
      },
      "zIndex": 34,
      "source": {
        "cell": "c41f9df9-572a-49d3-84be-d43d5fa9c827",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      },
      "target": {
        "cell": "346a88d9-17b9-4eb0-af0a-f4c7358789d2",
        "port": "b35dc895-1bbf-4058-aa25-9d207384087b"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "d4505338-534b-4f90-82ea-a30c8db1a867",
      "router": {
        "name": "metro"
      },
      "zIndex": 35,
      "source": {
        "cell": "c41f9df9-572a-49d3-84be-d43d5fa9c827",
        "port": "c14ffc55-ec6e-40d9-abc7-2964e8480b99"
      },
      "target": {
        "cell": "ac50fd97-30d8-4510-bfc9-deebd08e2ef5",
        "port": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "714de28b-0ad6-49aa-a40a-fa12b6203bac",
      "router": {
        "name": "metro"
      },
      "zIndex": 36,
      "source": {
        "cell": "6926f591-ece0-4323-8ff3-78105a142b2c",
        "port": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
      },
      "target": {
        "cell": "30333b12-028b-4109-abf7-e7b741dc14d4",
        "port": "e2988bf2-86be-43ec-a797-eff6a5ec88c1"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "dfd97729-c290-4e1f-9145-35401da84401",
      "router": {
        "name": "metro"
      },
      "zIndex": 37,
      "source": {
        "cell": "189a1ccf-b403-43a1-8c61-bc227fcc33f0",
        "port": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
      },
      "target": {
        "cell": "5e91a576-daf1-4e4d-99c5-1136cfbe97e9",
        "port": "4b0f98d6-c530-4b89-bde6-ac4a6336a9d9"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "38ebb1e1-4524-46cd-b298-552b634a7353",
      "router": {
        "name": "metro"
      },
      "zIndex": 38,
      "source": {
        "cell": "189a1ccf-b403-43a1-8c61-bc227fcc33f0",
        "port": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
      },
      "target": {
        "cell": "eb0a19c7-1082-4fe5-b430-3b5f7f31db6e",
        "port": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "c485e6eb-104e-43f5-8bda-0a18d41da261",
      "router": {
        "name": "metro"
      },
      "zIndex": 39,
      "source": {
        "cell": "7d49835a-8505-407b-bbc3-684622ddd292",
        "port": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
      },
      "target": {
        "cell": "346a88d9-17b9-4eb0-af0a-f4c7358789d2",
        "port": "4b0f98d6-c530-4b89-bde6-ac4a6336a9d9"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "9902702f-b0d8-47f6-9ae7-cf33b70c8472",
      "router": {
        "name": "metro"
      },
      "zIndex": 40,
      "source": {
        "cell": "189a1ccf-b403-43a1-8c61-bc227fcc33f0",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      },
      "target": {
        "cell": "4b16b636-460c-412a-af43-1e0b985ff946",
        "port": "19b9fcde-663b-4635-9acd-cb3b2d98f5be"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "f1432c0f-d6ae-4f76-9d81-63b129ef8e83",
      "router": {
        "name": "metro"
      },
      "zIndex": 41,
      "source": {
        "cell": "b23a9db9-12ab-4106-a825-371ff58de60f",
        "port": "19b9fcde-663b-4635-9acd-cb3b2d98f5be"
      },
      "target": {
        "cell": "7411d9cd-801e-4ff6-bf11-40866c110714",
        "port": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "fee917b7-e53f-4244-a88f-928ec50c8458",
      "router": {
        "name": "metro"
      },
      "zIndex": 42,
      "source": {
        "cell": "30333b12-028b-4109-abf7-e7b741dc14d4",
        "port": "3738a8ed-68d5-49b6-9417-098f9a21980b"
      },
      "target": {
        "cell": "1a77e60e-7f47-4c1f-ae68-ed356d9805dc",
        "port": "e2988bf2-86be-43ec-a797-eff6a5ec88c1"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "c7bdefac-4f63-4e13-be57-273018eda0c5",
      "router": {
        "name": "metro"
      },
      "zIndex": 43,
      "source": {
        "cell": "1a77e60e-7f47-4c1f-ae68-ed356d9805dc",
        "port": "3738a8ed-68d5-49b6-9417-098f9a21980b"
      },
      "target": {
        "cell": "b3612b43-da90-486c-af1a-461f804c8837",
        "port": "cacf88e3-4bca-4693-8ff8-7ea81a6390cd"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "65c378fd-d189-4531-9a67-b39cfacab8a5",
      "router": {
        "name": "metro"
      },
      "zIndex": 44,
      "source": {
        "cell": "b3612b43-da90-486c-af1a-461f804c8837",
        "port": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
      },
      "target": {
        "cell": "1a77e60e-7f47-4c1f-ae68-ed356d9805dc",
        "port": "d82b6075-917b-435a-a6bc-0e2b3acaf3b2"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "c0561aa5-7ae9-42ef-871e-cc0beabe434e",
      "router": {
        "name": "metro"
      },
      "zIndex": 45,
      "source": {
        "cell": "1a77e60e-7f47-4c1f-ae68-ed356d9805dc",
        "port": "5a6e191b-0fb4-443d-a145-78cb2b64a193"
      },
      "target": {
        "cell": "346a88d9-17b9-4eb0-af0a-f4c7358789d2",
        "port": "661a4e3e-8412-4764-857d-1d5206b6a4ba"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "15a7df63-9ad1-4c8b-b998-442a854dacde",
      "router": {
        "name": "metro"
      },
      "zIndex": 46,
      "source": {
        "cell": "5e91a576-daf1-4e4d-99c5-1136cfbe97e9",
        "port": "661a4e3e-8412-4764-857d-1d5206b6a4ba"
      },
      "target": {
        "cell": "30333b12-028b-4109-abf7-e7b741dc14d4",
        "port": "d82b6075-917b-435a-a6bc-0e2b3acaf3b2"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "960a96ce-3c77-4666-a17a-8f1d8b6f6048",
      "router": {
        "name": "metro"
      },
      "zIndex": 47,
      "source": {
        "cell": "ac50fd97-30d8-4510-bfc9-deebd08e2ef5",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      },
      "target": {
        "cell": "346a88d9-17b9-4eb0-af0a-f4c7358789d2",
        "port": "22fe7ebe-bfd7-42bc-abbb-df434acf608a"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "63f01a89-52ca-49fe-87e6-ccf887043d3a",
      "router": {
        "name": "metro"
      },
      "zIndex": 48,
      "source": {
        "cell": "7411d9cd-801e-4ff6-bf11-40866c110714",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      },
      "target": {
        "cell": "b3612b43-da90-486c-af1a-461f804c8837",
        "port": "f0f00e90-af62-4d1c-ade8-abb98be265dc"
      }
    },
    {
      "shape": "double-edge",
      "attrs": {
        "line": {
          "stroke": "#e54033",
          "strokeWidth": 8,
          "targetMarker": null,
          "strokeDasharray": 5,
          "style": {
            "animation": "ant-line 30s infinite linear"
          }
        },
        "outline": {
          "stroke": "#73d13d",
          "strokeWidth": 15
        }
      },
      "id": "737a8373-16cf-48c9-95eb-8aa10cc3baef",
      "router": {
        "name": "metro"
      },
      "zIndex": 49,
      "source": {
        "cell": "ac50fd97-30d8-4510-bfc9-deebd08e2ef5",
        "port": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
      },
      "target": {
        "cell": "7411d9cd-801e-4ff6-bf11-40866c110714",
        "port": "045fd5b9-c87d-4ab6-8715-a274b07d52e8"
      }
    },
    {
      "position": {
        "x": 300,
        "y": 533.5
      },
      "size": {
        "width": 40,
        "height": 20
      },
      "attrs": {
        "text": {
          "text": "流程节点"
        },
        "custom_attr": {
          "deviceType": "type5"
        }
      },
      "visible": true,
      "shape": "flow-chart-rect",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "06b45c77-b416-42a1-9ba0-82a3b8b6f307"
          },
          {
            "group": "right",
            "id": "3605ea50-fc8b-45f7-bd77-1d4bec76f93d"
          },
          {
            "group": "bottom",
            "id": "d0aa625c-43bd-4ef0-8817-888a562e4e41"
          },
          {
            "group": "left",
            "id": "0023ec87-8208-417d-8f1d-280bcd46356d"
          }
        ]
      },
      "id": "b3ecfdcc-75a9-4ed0-9abf-caeaf06a1499",
      "zIndex": 50
    },
    {
      "position": {
        "x": 553,
        "y": 336.5
      },
      "size": {
        "width": 40,
        "height": 20
      },
      "attrs": {
        "text": {
          "text": "流程节点"
        },
        "custom_attr": {
          "deviceType": ""
        }
      },
      "visible": true,
      "shape": "flow-chart-rect",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "06b45c77-b416-42a1-9ba0-82a3b8b6f307"
          },
          {
            "group": "right",
            "id": "3605ea50-fc8b-45f7-bd77-1d4bec76f93d"
          },
          {
            "group": "bottom",
            "id": "d0aa625c-43bd-4ef0-8817-888a562e4e41"
          },
          {
            "group": "left",
            "id": "0023ec87-8208-417d-8f1d-280bcd46356d"
          }
        ]
      },
      "id": "1cf23906-223a-4296-8964-a2ce4402650d",
      "zIndex": 51
    },
    {
      "position": {
        "x": 553,
        "y": 375
      },
      "size": {
        "width": 40,
        "height": 20
      },
      "attrs": {
        "text": {
          "text": "流程节点"
        },
        "custom_attr": {
          "deviceType": "type_110"
        }
      },
      "visible": true,
      "shape": "flow-chart-rect",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "06b45c77-b416-42a1-9ba0-82a3b8b6f307"
          },
          {
            "group": "right",
            "id": "3605ea50-fc8b-45f7-bd77-1d4bec76f93d"
          },
          {
            "group": "bottom",
            "id": "d0aa625c-43bd-4ef0-8817-888a562e4e41"
          },
          {
            "group": "left",
            "id": "0023ec87-8208-417d-8f1d-280bcd46356d"
          }
        ]
      },
      "id": "c8e901ed-8daf-4096-9287-1036f11d6236",
      "zIndex": 52
    },
    {
      "position": {
        "x": 320,
        "y": 391.5
      },
      "size": {
        "width": 40,
        "height": 20
      },
      "attrs": {
        "text": {
          "text": "流程节点"
        },
        "custom_attr": {
          "deviceType": "type4"
        }
      },
      "visible": true,
      "shape": "flow-chart-rect",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "06b45c77-b416-42a1-9ba0-82a3b8b6f307"
          },
          {
            "group": "right",
            "id": "3605ea50-fc8b-45f7-bd77-1d4bec76f93d"
          },
          {
            "group": "bottom",
            "id": "d0aa625c-43bd-4ef0-8817-888a562e4e41"
          },
          {
            "group": "left",
            "id": "0023ec87-8208-417d-8f1d-280bcd46356d"
          }
        ]
      },
      "id": "9fbe7520-62f3-45ac-85ab-76a07fb065b1",
      "zIndex": 53
    },
    {
      "position": {
        "x": 781,
        "y": 454
      },
      "size": {
        "width": 40,
        "height": 20
      },
      "attrs": {
        "text": {
          "text": "流程节点"
        },
        "custom_attr": {
          "deviceType": "type2"
        }
      },
      "visible": true,
      "shape": "flow-chart-rect",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "06b45c77-b416-42a1-9ba0-82a3b8b6f307"
          },
          {
            "group": "right",
            "id": "3605ea50-fc8b-45f7-bd77-1d4bec76f93d"
          },
          {
            "group": "bottom",
            "id": "d0aa625c-43bd-4ef0-8817-888a562e4e41"
          },
          {
            "group": "left",
            "id": "0023ec87-8208-417d-8f1d-280bcd46356d"
          }
        ]
      },
      "id": "9452d5f5-1c9d-47bb-8851-840fcda8cf21",
      "zIndex": 54
    },
    {
      "position": {
        "x": 840,
        "y": 623.5
      },
      "size": {
        "width": 40,
        "height": 20
      },
      "attrs": {
        "text": {
          "text": "流程节点"
        },
        "custom_attr": {
          "deviceType": "type3"
        }
      },
      "visible": true,
      "shape": "flow-chart-rect",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "06b45c77-b416-42a1-9ba0-82a3b8b6f307"
          },
          {
            "group": "right",
            "id": "3605ea50-fc8b-45f7-bd77-1d4bec76f93d"
          },
          {
            "group": "bottom",
            "id": "d0aa625c-43bd-4ef0-8817-888a562e4e41"
          },
          {
            "group": "left",
            "id": "0023ec87-8208-417d-8f1d-280bcd46356d"
          }
        ]
      },
      "id": "c83e875b-f8d0-477e-8a9b-ddc5d3bedd9c",
      "zIndex": 55
    },
    {
      "position": {
        "x": 416,
        "y": 487.5
      },
      "size": {
        "width": 40,
        "height": 20
      },
      "attrs": {
        "text": {
          "text": "流程节点"
        },
        "custom_attr": {
          "deviceType": "type5"
        }
      },
      "visible": true,
      "shape": "flow-chart-rect",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "06b45c77-b416-42a1-9ba0-82a3b8b6f307"
          },
          {
            "group": "right",
            "id": "3605ea50-fc8b-45f7-bd77-1d4bec76f93d"
          },
          {
            "group": "bottom",
            "id": "d0aa625c-43bd-4ef0-8817-888a562e4e41"
          },
          {
            "group": "left",
            "id": "0023ec87-8208-417d-8f1d-280bcd46356d"
          }
        ]
      },
      "id": "ad2550ff-0554-4038-83fa-c8ce56792517",
      "zIndex": 56
    },
    {
      "position": {
        "x": 828,
        "y": 354
      },
      "size": {
        "width": 40,
        "height": 20
      },
      "attrs": {
        "text": {
          "text": "流程节点"
        },
        "custom_attr": {
          "deviceType": "type1"
        }
      },
      "visible": true,
      "shape": "flow-chart-rect",
      "ports": {
        "groups": {
          "top": {
            "position": "top",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "right": {
            "position": "right",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "bottom": {
            "position": "bottom",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          },
          "left": {
            "position": "left",
            "attrs": {
              "circle": {
                "r": 3,
                "magnet": true,
                "stroke": "#5F95FF",
                "strokeWidth": 1,
                "fill": "#fff",
                "style": {
                  "visibility": "hidden"
                }
              }
            }
          }
        },
        "items": [
          {
            "group": "top",
            "id": "06b45c77-b416-42a1-9ba0-82a3b8b6f307"
          },
          {
            "group": "right",
            "id": "3605ea50-fc8b-45f7-bd77-1d4bec76f93d"
          },
          {
            "group": "bottom",
            "id": "d0aa625c-43bd-4ef0-8817-888a562e4e41"
          },
          {
            "group": "left",
            "id": "0023ec87-8208-417d-8f1d-280bcd46356d"
          }
        ]
      },
      "id": "8ba13e9b-26f6-4214-97df-54877ae88fba",
      "zIndex": 57
    }
  ]
}

export default graphData
