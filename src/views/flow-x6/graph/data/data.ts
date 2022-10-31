export default {
  "cells": [
    {
      "position": {
        "x": 420,
        "y": 160
      },
      "size": {
        "width": 80,
        "height": 42
      },
      "attrs": {
        "text": {
          "text": "起始节点"
        },
        "body": {
          "rx": 24,
          "ry": 24
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
            "id": "45726225-0a03-409e-8475-07da4b8533c5"
          },
          {
            "group": "right",
            "id": "06111939-bf01-48d9-9f54-6465d9d831c6"
          },
          {
            "group": "bottom",
            "id": "6541f8dc-e48b-4b8c-a105-2ab3a47f1f21"
          },
          {
            "group": "left",
            "id": "54781206-573f-4982-a21e-5fac1e0e8a60"
          }
        ]
      },
      "id": "8650a303-3568-4ff2-9fac-2fd3ae7e6f2a",
      "zIndex": 1,
      "data": {
        "status": "0",
        "pointCode": "52",
        "fieldName": "fieldName1"
      }
    },
    {
      "position": {
        "x": 420,
        "y": 250
      },
      "size": {
        "width": 80,
        "height": 42
      },
      "attrs": {
        "text": {
          "text": "流程节点"
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
            "id": "d1346f43-969a-4201-af5d-d09b7ef79980"
          },
          {
            "group": "right",
            "id": "d561926a-3a24-449a-abb1-0c20bc89947e"
          },
          {
            "group": "bottom",
            "id": "0cbde5df-ef35-410e-b6c3-a6b1f5561e3f"
          },
          {
            "group": "left",
            "id": "2fceb955-f7af-41ac-ac02-5a2ea514544e"
          }
        ]
      },
      "id": "7b6fd715-83e6-4053-8c2b-346e6a857bf3",
      "zIndex": 2,
      "data": {
        "status": "1",
        "pointCode": "51",
        "fieldName": "fieldName2"
      }
    },
    {
      "shape": "edge",
      "attrs": {
        "line": {
          "stroke": "#5F95FF",
          "strokeWidth": 1,
          "targetMarker": {
            "name": "classic",
            "size": 8
          },
          "strokeDasharray": 0
        }
      },
      "id": "00f3c401-8bad-46b9-b692-232aa011d4c5",
      "router": {
        "name": "manhattan"
      },
      "zIndex": 3,
      "source": {
        "cell": "8650a303-3568-4ff2-9fac-2fd3ae7e6f2a",
        "port": "6541f8dc-e48b-4b8c-a105-2ab3a47f1f21"
      },
      "target": {
        "cell": "7b6fd715-83e6-4053-8c2b-346e6a857bf3",
        "port": "d1346f43-969a-4201-af5d-d09b7ef79980"
      }
    },
    {
      "position": {
        "x": 425,
        "y": 371
      },
      "size": {
        "width": 70,
        "height": 70
      },
      "attrs": {
        "text": {
          "text": "链接节点"
        },
        "body": {
          "rx": 35,
          "ry": 35
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
            "id": "089ce61a-4b17-4ed8-9c3f-5b905f484425"
          },
          {
            "group": "right",
            "id": "fd4b8c95-d1eb-41ea-b3e1-15135814b292"
          },
          {
            "group": "bottom",
            "id": "9bb8ec19-b1e2-432d-8735-b008da064948"
          },
          {
            "group": "left",
            "id": "fbf8759a-1059-47bb-b556-f0a4477e48d3"
          }
        ]
      },
      "id": "762cbe4d-fd2b-4cb2-95bb-fae3cb9ef7fc",
      "zIndex": 4,
      "data": {
        "status": "1",
        "pointCode": "51",
        "fieldName": "fieldName2"
      }
    },
    {
      "angle": 45,
      "position": {
        "x": 310,
        "y": 380
      },
      "size": {
        "width": 52,
        "height": 52
      },
      "attrs": {
        "text": {
          "text": "判断节点",
          "transform": "rotate(-45deg)"
        },
        "edit-text": {
          "style": {
            "transform": "rotate(-45deg)"
          }
        }
      },
      "visible": true,
      "shape": "flow-chart-rect",
      "ports": {
        "groups": {
          "top": {
            "position": {
              "name": "top",
              "args": {
                "dx": -26
              }
            },
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
            "position": {
              "name": "right",
              "args": {
                "dy": -26
              }
            },
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
            "position": {
              "name": "bottom",
              "args": {
                "dx": 26
              }
            },
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
            "position": {
              "name": "left",
              "args": {
                "dy": 26
              }
            },
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
            "id": "c133349e-4a4a-4d7d-9b38-26c36b3e68c5"
          },
          {
            "group": "right",
            "id": "af190d15-b0f1-4f92-85bc-e0c4df83e2a7"
          },
          {
            "group": "bottom",
            "id": "c51a4f3b-759b-47ed-9d80-fa4f6c114e64"
          },
          {
            "group": "left",
            "id": "c241a7e4-12d3-4dde-9694-0f0e5f7b9a91"
          }
        ]
      },
      "id": "ef3865af-8a91-4164-8466-3f6b4315070f",
      "zIndex": 5,
      "data": {
        "status": "1",
        "pointCode": "51",
        "fieldName": "fieldName2"
      }
    },
    {
      "shape": "edge",
      "attrs": {
        "line": {
          "stroke": "#5F95FF",
          "strokeWidth": 1,
          "targetMarker": {
            "name": "classic",
            "size": 8
          }
        }
      },
      "id": "9031a1ee-8deb-4b1e-90e6-96d40d3a8515",
      "router": {
        "name": "manhattan"
      },
      "zIndex": 7,
      "source": {
        "cell": "ef3865af-8a91-4164-8466-3f6b4315070f",
        "port": "af190d15-b0f1-4f92-85bc-e0c4df83e2a7"
      },
      "target": {
        "cell": "762cbe4d-fd2b-4cb2-95bb-fae3cb9ef7fc",
        "port": "fbf8759a-1059-47bb-b556-f0a4477e48d3"
      }
    },
    {
      "angle": 45,
      "position": {
        "x": 566,
        "y": 380
      },
      "size": {
        "width": 52,
        "height": 52
      },
      "attrs": {
        "text": {
          "text": "判断节点",
          "transform": "rotate(-45deg)"
        },
        "edit-text": {
          "style": {
            "transform": "rotate(-45deg)"
          }
        }
      },
      "visible": true,
      "shape": "flow-chart-rect",
      "ports": {
        "groups": {
          "top": {
            "position": {
              "name": "top",
              "args": {
                "dx": -26
              }
            },
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
            "position": {
              "name": "right",
              "args": {
                "dy": -26
              }
            },
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
            "position": {
              "name": "bottom",
              "args": {
                "dx": 26
              }
            },
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
            "position": {
              "name": "left",
              "args": {
                "dy": 26
              }
            },
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
            "id": "c133349e-4a4a-4d7d-9b38-26c36b3e68c5"
          },
          {
            "group": "right",
            "id": "af190d15-b0f1-4f92-85bc-e0c4df83e2a7"
          },
          {
            "group": "bottom",
            "id": "c51a4f3b-759b-47ed-9d80-fa4f6c114e64"
          },
          {
            "group": "left",
            "id": "c241a7e4-12d3-4dde-9694-0f0e5f7b9a91"
          }
        ]
      },
      "id": "9be960d0-fb75-49b1-8131-abc05b5991bd",
      "zIndex": 9,
      "data": {
        "status": "1",
        "pointCode": "51",
        "fieldName": "fieldName2"
      }
    },
    {
      "shape": "edge",
      "attrs": {
        "line": {
          "stroke": "#5F95FF",
          "strokeWidth": 1,
          "targetMarker": {
            "name": "classic",
            "size": 8
          }
        }
      },
      "id": "8af8b072-dfb9-458a-b15e-dd5d4c1863bd",
      "router": {
        "name": "manhattan"
      },
      "zIndex": 10,
      "source": {
        "cell": "7b6fd715-83e6-4053-8c2b-346e6a857bf3",
        "port": "d561926a-3a24-449a-abb1-0c20bc89947e"
      },
      "target": {
        "cell": "9be960d0-fb75-49b1-8131-abc05b5991bd",
        "port": "c133349e-4a4a-4d7d-9b38-26c36b3e68c5"
      }
    },
    {
      "shape": "edge",
      "attrs": {
        "line": {
          "stroke": "#5F95FF",
          "strokeWidth": 1,
          "targetMarker": {
            "name": "classic",
            "size": 8
          }
        }
      },
      "id": "58874c23-da0b-46e6-9124-5154e8570bfd",
      "router": {
        "name": "manhattan"
      },
      "zIndex": 11,
      "source": {
        "cell": "9be960d0-fb75-49b1-8131-abc05b5991bd",
        "port": "c241a7e4-12d3-4dde-9694-0f0e5f7b9a91"
      },
      "target": {
        "cell": "762cbe4d-fd2b-4cb2-95bb-fae3cb9ef7fc",
        "port": "fd4b8c95-d1eb-41ea-b3e1-15135814b292"
      }
    },
    {
      "shape": "edge",
      "attrs": {
        "line": {
          "stroke": "#5F95FF",
          "strokeWidth": 1,
          "targetMarker": {
            "name": "classic",
            "size": 8
          }
        }
      },
      "id": "13d78262-f889-4e6f-9980-29f9e2d87c8f",
      "router": {
        "name": "manhattan"
      },
      "zIndex": 12,
      "source": {
        "cell": "7b6fd715-83e6-4053-8c2b-346e6a857bf3",
        "port": "2fceb955-f7af-41ac-ac02-5a2ea514544e"
      },
      "target": {
        "cell": "ef3865af-8a91-4164-8466-3f6b4315070f",
        "port": "c133349e-4a4a-4d7d-9b38-26c36b3e68c5"
      }
    },
    {
      "shape": "edge",
      "attrs": {
        "line": {
          "stroke": "#5F95FF",
          "strokeWidth": 1,
          "targetMarker": {
            "name": "classic",
            "size": 8
          }
        }
      },
      "id": "9c7b7539-2f82-478d-a592-60dfceede791",
      "router": {
        "name": "manhattan"
      },
      "zIndex": 13,
      "source": {
        "cell": "7b6fd715-83e6-4053-8c2b-346e6a857bf3",
        "port": "0cbde5df-ef35-410e-b6c3-a6b1f5561e3f"
      },
      "target": {
        "cell": "762cbe4d-fd2b-4cb2-95bb-fae3cb9ef7fc",
        "port": "089ce61a-4b17-4ed8-9c3f-5b905f484425"
      }
    },
    {
      "position": {
        "x": 420,
        "y": 497
      },
      "size": {
        "width": 80,
        "height": 42
      },
      "attrs": {
        "text": {
          "text": "流程节点"
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
            "id": "d1346f43-969a-4201-af5d-d09b7ef79980"
          },
          {
            "group": "right",
            "id": "d561926a-3a24-449a-abb1-0c20bc89947e"
          },
          {
            "group": "bottom",
            "id": "0cbde5df-ef35-410e-b6c3-a6b1f5561e3f"
          },
          {
            "group": "left",
            "id": "2fceb955-f7af-41ac-ac02-5a2ea514544e"
          }
        ]
      },
      "id": "c7b4dfb0-2cc1-4ce1-839d-22b13bdf86e5",
      "zIndex": 14,
      "data": {
        "status": "1",
        "pointCode": "51",
        "fieldName": "fieldName2"
      }
    },
    {
      "shape": "edge",
      "attrs": {
        "line": {
          "stroke": "#5F95FF",
          "strokeWidth": 1,
          "targetMarker": {
            "name": "classic",
            "size": 8
          }
        }
      },
      "id": "9dfeb591-70e1-4b52-a463-3078a6fde579",
      "router": {
        "name": "manhattan"
      },
      "zIndex": 15,
      "source": {
        "cell": "762cbe4d-fd2b-4cb2-95bb-fae3cb9ef7fc",
        "port": "9bb8ec19-b1e2-432d-8735-b008da064948"
      },
      "target": {
        "cell": "c7b4dfb0-2cc1-4ce1-839d-22b13bdf86e5",
        "port": "d1346f43-969a-4201-af5d-d09b7ef79980"
      }
    },
    {
      "position": {
        "x": 420,
        "y": 616
      },
      "size": {
        "width": 80,
        "height": 42
      },
      "attrs": {
        "text": {
          "text": "结束节点"
        },
        "body": {
          "rx": 24,
          "ry": 24
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
            "id": "45726225-0a03-409e-8475-07da4b8533c5"
          },
          {
            "group": "right",
            "id": "06111939-bf01-48d9-9f54-6465d9d831c6"
          },
          {
            "group": "bottom",
            "id": "6541f8dc-e48b-4b8c-a105-2ab3a47f1f21"
          },
          {
            "group": "left",
            "id": "54781206-573f-4982-a21e-5fac1e0e8a60"
          }
        ]
      },
      "id": "5ac48b64-d507-4006-954b-f8fbf8016ad2",
      "zIndex": 16,
      "data": {
        "status": "0",
        "pointCode": "52",
        "fieldName": "fieldName1"
      }
    },
    {
      "shape": "edge",
      "attrs": {
        "line": {
          "stroke": "#5F95FF",
          "strokeWidth": 1,
          "targetMarker": {
            "name": "classic",
            "size": 8
          }
        }
      },
      "id": "f847f055-9073-4c8e-92c5-8124597d1e7e",
      "router": {
        "name": "manhattan"
      },
      "zIndex": 17,
      "source": {
        "cell": "c7b4dfb0-2cc1-4ce1-839d-22b13bdf86e5",
        "port": "0cbde5df-ef35-410e-b6c3-a6b1f5561e3f"
      },
      "target": {
        "cell": "5ac48b64-d507-4006-954b-f8fbf8016ad2",
        "port": "45726225-0a03-409e-8475-07da4b8533c5"
      }
    }
  ]
}