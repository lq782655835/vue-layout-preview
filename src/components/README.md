## 核心组件
1. main.vue: 主页面
    * components.vue: 组件选择/拖拽
    * preview.vue：主要预览区
    * attributes.vue：属性选择（根据component.attributes）
1. components/list components.vue中的preview组件
1. components/template 格式化template/attributes

## componet json示例

``` json
{
    "width": [
        {
            "attr": "15",
            "preview": "70",
            "components": "15"
        },
        {
            "attr": "20",
            "preview": "60",
            "components": "20"
        },
        {
            "attr": "25",
            "preview": "50",
            "components": "25"
        }
    ],
    "css": "",
    "activeUI": "iView-UI",
    "currentComponent": {
        "template": "<mu-appbar data-component-active tabIndex=\"0\" \n                    title=\"App Bar\"\n:zDepth=\"2\"\n>\n                    \n                </mu-appbar>",
        "attributes": {
            "title": {
                "type": "text",
                "value": "App Bar"
            },
            "zDepth": {
                "type": "slider",
                "value": 2,
                "max": 5,
                "min": 0,
                "step": 1
            },
            "titleClass": {
                "type": "text",
                "value": ""
            },
            "class": {
                "type": "text",
                "value": ""
            }
        },
        "slots": {
            "left": [],
            "right": [],
            "default": []
        },
        "slot": "",
        "info": {
            "name": "App Bar",
            "ui": "Muse-UI",
            "id": "61a8bc58-55ad"
        },
        "position": {
            "offsetLeft": 0,
            "offsetRight": 989,
            "offsetTop": 21,
            "offsetBottom": 85
        },
        "uid": 420
    },
    "components": [
        {
            "template": "<mu-appbar data-component-active tabIndex=\"0\" \n                    title=\"App Bar\"\n:zDepth=\"2\"\n>\n                    \n                </mu-appbar>",
            "attributes": {
                "title": {
                    "type": "text",
                    "value": "App Bar"
                },
                "zDepth": {
                    "type": "slider",
                    "value": 2,
                    "max": 5,
                    "min": 0,
                    "step": 1
                },
                "titleClass": {
                    "type": "text",
                    "value": ""
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "left": [],
                "right": [],
                "default": []
            },
            "slot": "",
            "info": {
                "name": "App Bar",
                "ui": "Muse-UI",
                "id": "61a8bc58-55ad"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 989,
                "offsetTop": 21,
                "offsetBottom": 85
            },
            "uid": 420
        },
        {
            "template": "<mu-text-field data-component-active tabIndex=\"0\" \n                        type=\"text\"\nhintText=\"提示文字\"\n>\n                        \n                    </mu-text-field>",
            "attributes": {
                "name": {
                    "type": "text",
                    "value": ""
                },
                "type": {
                    "type": "selection",
                    "value": "text",
                    "items": [
                        "text",
                        "password",
                        "email",
                        "url",
                        "number"
                    ]
                },
                "icon": {
                    "type": "icon",
                    "value": ""
                },
                "iconClass": {
                    "type": "text",
                    "value": ""
                },
                "label": {
                    "type": "text",
                    "value": ""
                },
                "labelFloat": {
                    "type": "boolean",
                    "value": false
                },
                "labelClass": {
                    "type": "text",
                    "value": ""
                },
                "labelFocusClass": {
                    "type": "text",
                    "value": ""
                },
                "disabled": {
                    "type": "boolean",
                    "value": false
                },
                "hintText": {
                    "type": "text",
                    "value": "提示文字"
                },
                "hintTextClass": {
                    "type": "text",
                    "value": ""
                },
                "helpText": {
                    "type": "text",
                    "value": ""
                },
                "helpTextClass": {
                    "type": "text",
                    "value": ""
                },
                "errorText": {
                    "type": "text",
                    "value": ""
                },
                "errorColor": {
                    "type": "color",
                    "value": ""
                },
                "fullWidth": {
                    "type": "boolean",
                    "value": false
                },
                "underlineShow": {
                    "type": "boolean",
                    "value": false
                },
                "underlineClass": {
                    "type": "text",
                    "value": ""
                },
                "underlineFocusClass": {
                    "type": "text",
                    "value": ""
                },
                "inputClass": {
                    "type": "text",
                    "value": ""
                },
                "multiLine": {
                    "type": "boolean",
                    "value": false
                },
                "rows": {
                    "type": "number",
                    "value": ""
                },
                "rowsMax": {
                    "type": "number",
                    "value": ""
                },
                "maxLength": {
                    "type": "number",
                    "value": ""
                },
                "value": {
                    "type": "text",
                    "value": ""
                },
                "max": {
                    "type": "number",
                    "value": ""
                },
                "min": {
                    "type": "number",
                    "value": ""
                },
                "required": {
                    "type": "boolean",
                    "value": false
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": []
            },
            "slot": "",
            "info": {
                "name": "Text Field",
                "ui": "Muse-UI",
                "id": "7f9ba062-2348"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 256,
                "offsetTop": 85,
                "offsetBottom": 133
            }
        },
        {
            "template": "<mt-switch data-component-active tabIndex=\"0\" \n                        >\n                        \n                    </mt-switch>",
            "attributes": {
                "value": {
                    "type": "boolean",
                    "value": false
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": []
            },
            "slot": "",
            "info": {
                "name": "Switch",
                "ui": "Mint-UI",
                "id": "00d3edae-8484"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 989,
                "offsetTop": 141,
                "offsetBottom": 173
            }
        },
        {
            "template": "<mt-cell data-component-active tabIndex=\"0\" \n                        title=\"title\"\n>\n                        \n                    </mt-cell>",
            "attributes": {
                "icon": {
                    "type": "selection",
                    "items": [
                        "more",
                        "back"
                    ],
                    "value": ""
                },
                "title": {
                    "type": "text",
                    "value": "title"
                },
                "value": {
                    "type": "text",
                    "value": ""
                },
                "label": {
                    "type": "text",
                    "value": ""
                },
                "is-link": {
                    "type": "boolean",
                    "value": false
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": [],
                "title": [],
                "icon": []
            },
            "slot": "",
            "info": {
                "name": "Cell",
                "ui": "Mint-UI",
                "id": "9876f40b-304c"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 989,
                "offsetTop": 173,
                "offsetBottom": 221
            }
        },
        {
            "template": "<mt-cell data-component-active tabIndex=\"0\" \n                        title=\"title\"\n>\n                        \n                    </mt-cell>",
            "attributes": {
                "icon": {
                    "type": "selection",
                    "items": [
                        "more",
                        "back"
                    ],
                    "value": ""
                },
                "title": {
                    "type": "text",
                    "value": "title"
                },
                "value": {
                    "type": "text",
                    "value": ""
                },
                "label": {
                    "type": "text",
                    "value": ""
                },
                "is-link": {
                    "type": "boolean",
                    "value": false
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": [],
                "title": [],
                "icon": []
            },
            "slot": "",
            "info": {
                "name": "Cell",
                "ui": "Mint-UI",
                "id": "4898fdb9-ede0"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 989,
                "offsetTop": 221,
                "offsetBottom": 269
            }
        },
        {
            "template": "<mt-progress data-component-active tabIndex=\"0\" \n                    :barHeight=\"1\"\n>\n                    \n                </mt-progress>",
            "attributes": {
                "value": {
                    "type": "number",
                    "value": 0
                },
                "barHeight": {
                    "type": "number",
                    "value": 1
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "start": [],
                "end": []
            },
            "slot": "",
            "info": {
                "name": "Progress",
                "ui": "Mint-UI",
                "id": "e1843b32-a92d"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 989,
                "offsetTop": 269,
                "offsetBottom": 299
            }
        },
        {
            "template": "<mt-badge data-component-active tabIndex=\"0\" \n                        text=\"按钮\"\ntype=\"success\"\n>\n                            按钮\n                        </mt-badge>",
            "attributes": {
                "text": {
                    "type": "text",
                    "value": "按钮"
                },
                "type": {
                    "type": "selection",
                    "items": [
                        "primary",
                        "error",
                        "success",
                        "warning"
                    ],
                    "value": "success"
                },
                "color": {
                    "type": "color",
                    "value": ""
                },
                "size": {
                    "type": "selection",
                    "items": [
                        "normal",
                        "large",
                        "small"
                    ],
                    "value": ""
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": [],
                "icon": []
            },
            "slot": "",
            "info": {
                "name": "Badge",
                "ui": "Mint-UI",
                "id": "bd0ffa66-39e8"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 46,
                "offsetTop": 299,
                "offsetBottom": 325
            },
            "uid": 625
        },
        {
            "template": "<Button data-component-active tabIndex=\"0\" \n                        \ntype=\"dashed\"\n>\n                        Button\n                    </Button>",
            "attributes": {
                "label": {
                    "type": "text",
                    "value": "Button"
                },
                "type": {
                    "type": "selection",
                    "items": [
                        "primary",
                        "ghost",
                        "dashed",
                        "text",
                        "info",
                        "success",
                        "warning",
                        "error"
                    ],
                    "value": "dashed"
                },
                "size": {
                    "type": "selection",
                    "items": [
                        "large",
                        "small",
                        ""
                    ],
                    "value": ""
                },
                "shape": {
                    "type": "selection",
                    "items": [
                        "circle",
                        ""
                    ],
                    "value": ""
                },
                "long": {
                    "type": "boolean",
                    "value": false
                },
                "html-type": {
                    "type": "selection",
                    "items": [
                        "button",
                        "submit",
                        "reset"
                    ],
                    "value": ""
                },
                "disabled": {
                    "type": "boolean",
                    "value": false
                },
                "loading": {
                    "type": "boolean",
                    "value": false
                },
                "icon": {
                    "type": "ionicon",
                    "value": ""
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": []
            },
            "slot": "",
            "info": {
                "name": "Button",
                "ui": "iView-UI",
                "id": "f02c63b0-ac77"
            },
            "position": {
                "offsetLeft": 46,
                "offsetRight": 112,
                "offsetTop": 299,
                "offsetBottom": 329
            },
            "uid": 828
        }
    ],
    "backupComponents": [
        {
            "template": "<a data-component-active tabIndex=\"0\" \n>\n                        Link\n                    </a>",
            "attributes": {
                "text": {
                    "type": "text",
                    "value": "Link"
                },
                "href": {
                    "type": "text",
                    "value": ""
                },
                "target": {
                    "type": "selection",
                    "value": "",
                    "items": [
                        "_blank",
                        "self",
                        "_parent",
                        "_top"
                    ]
                },
                "title": {
                    "type": "text",
                    "value": ""
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {},
            "slot": "",
            "info": {
                "name": "A",
                "ui": "Common",
                "id": "884619ef-5db4"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 0,
                "offsetTop": 1,
                "offsetBottom": 1
            }
        },
        {
            "template": "<mu-appbar data-component-active tabIndex=\"0\" \n                    title=\"App Bar\"\n:zDepth=\"2\"\n>\n                    \n                </mu-appbar>",
            "attributes": {
                "title": {
                    "type": "text",
                    "value": "App Bar"
                },
                "zDepth": {
                    "type": "slider",
                    "value": 2,
                    "max": 5,
                    "min": 0,
                    "step": 1
                },
                "titleClass": {
                    "type": "text",
                    "value": ""
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "left": [],
                "right": [],
                "default": []
            },
            "slot": "",
            "info": {
                "name": "App Bar",
                "ui": "Muse-UI",
                "id": "61a8bc58-55ad"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 989,
                "offsetTop": 21,
                "offsetBottom": 85
            },
            "uid": 420
        },
        {
            "template": "<mu-text-field data-component-active tabIndex=\"0\" \n                        type=\"text\"\nhintText=\"提示文字\"\n>\n                        \n                    </mu-text-field>",
            "attributes": {
                "name": {
                    "type": "text",
                    "value": ""
                },
                "type": {
                    "type": "selection",
                    "value": "text",
                    "items": [
                        "text",
                        "password",
                        "email",
                        "url",
                        "number"
                    ]
                },
                "icon": {
                    "type": "icon",
                    "value": ""
                },
                "iconClass": {
                    "type": "text",
                    "value": ""
                },
                "label": {
                    "type": "text",
                    "value": ""
                },
                "labelFloat": {
                    "type": "boolean",
                    "value": false
                },
                "labelClass": {
                    "type": "text",
                    "value": ""
                },
                "labelFocusClass": {
                    "type": "text",
                    "value": ""
                },
                "disabled": {
                    "type": "boolean",
                    "value": false
                },
                "hintText": {
                    "type": "text",
                    "value": "提示文字"
                },
                "hintTextClass": {
                    "type": "text",
                    "value": ""
                },
                "helpText": {
                    "type": "text",
                    "value": ""
                },
                "helpTextClass": {
                    "type": "text",
                    "value": ""
                },
                "errorText": {
                    "type": "text",
                    "value": ""
                },
                "errorColor": {
                    "type": "color",
                    "value": ""
                },
                "fullWidth": {
                    "type": "boolean",
                    "value": false
                },
                "underlineShow": {
                    "type": "boolean",
                    "value": false
                },
                "underlineClass": {
                    "type": "text",
                    "value": ""
                },
                "underlineFocusClass": {
                    "type": "text",
                    "value": ""
                },
                "inputClass": {
                    "type": "text",
                    "value": ""
                },
                "multiLine": {
                    "type": "boolean",
                    "value": false
                },
                "rows": {
                    "type": "number",
                    "value": ""
                },
                "rowsMax": {
                    "type": "number",
                    "value": ""
                },
                "maxLength": {
                    "type": "number",
                    "value": ""
                },
                "value": {
                    "type": "text",
                    "value": ""
                },
                "max": {
                    "type": "number",
                    "value": ""
                },
                "min": {
                    "type": "number",
                    "value": ""
                },
                "required": {
                    "type": "boolean",
                    "value": false
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": []
            },
            "slot": "",
            "info": {
                "name": "Text Field",
                "ui": "Muse-UI",
                "id": "7f9ba062-2348"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 256,
                "offsetTop": 85,
                "offsetBottom": 133
            }
        },
        {
            "template": "<mt-switch data-component-active tabIndex=\"0\" \n                        >\n                        \n                    </mt-switch>",
            "attributes": {
                "value": {
                    "type": "boolean",
                    "value": false
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": []
            },
            "slot": "",
            "info": {
                "name": "Switch",
                "ui": "Mint-UI",
                "id": "00d3edae-8484"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 989,
                "offsetTop": 141,
                "offsetBottom": 173
            }
        },
        {
            "template": "<mt-cell data-component-active tabIndex=\"0\" \n                        title=\"title\"\n>\n                        \n                    </mt-cell>",
            "attributes": {
                "icon": {
                    "type": "selection",
                    "items": [
                        "more",
                        "back"
                    ],
                    "value": ""
                },
                "title": {
                    "type": "text",
                    "value": "title"
                },
                "value": {
                    "type": "text",
                    "value": ""
                },
                "label": {
                    "type": "text",
                    "value": ""
                },
                "is-link": {
                    "type": "boolean",
                    "value": false
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": [],
                "title": [],
                "icon": []
            },
            "slot": "",
            "info": {
                "name": "Cell",
                "ui": "Mint-UI",
                "id": "9876f40b-304c"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 989,
                "offsetTop": 173,
                "offsetBottom": 221
            }
        },
        {
            "template": "<mt-cell data-component-active tabIndex=\"0\" \n                        title=\"title\"\n>\n                        \n                    </mt-cell>",
            "attributes": {
                "icon": {
                    "type": "selection",
                    "items": [
                        "more",
                        "back"
                    ],
                    "value": ""
                },
                "title": {
                    "type": "text",
                    "value": "title"
                },
                "value": {
                    "type": "text",
                    "value": ""
                },
                "label": {
                    "type": "text",
                    "value": ""
                },
                "is-link": {
                    "type": "boolean",
                    "value": false
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": [],
                "title": [],
                "icon": []
            },
            "slot": "",
            "info": {
                "name": "Cell",
                "ui": "Mint-UI",
                "id": "4898fdb9-ede0"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 989,
                "offsetTop": 221,
                "offsetBottom": 269
            }
        },
        {
            "template": "<mt-progress data-component-active tabIndex=\"0\" \n                    :barHeight=\"1\"\n>\n                    \n                </mt-progress>",
            "attributes": {
                "value": {
                    "type": "number",
                    "value": 0
                },
                "barHeight": {
                    "type": "number",
                    "value": 1
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "start": [],
                "end": []
            },
            "slot": "",
            "info": {
                "name": "Progress",
                "ui": "Mint-UI",
                "id": "e1843b32-a92d"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 989,
                "offsetTop": 269,
                "offsetBottom": 299
            }
        },
        {
            "template": "<mt-badge data-component-active tabIndex=\"0\" \n                        text=\"按钮\"\ntype=\"success\"\n>\n                            按钮\n                        </mt-badge>",
            "attributes": {
                "text": {
                    "type": "text",
                    "value": "按钮"
                },
                "type": {
                    "type": "selection",
                    "items": [
                        "primary",
                        "error",
                        "success",
                        "warning"
                    ],
                    "value": "success"
                },
                "color": {
                    "type": "color",
                    "value": ""
                },
                "size": {
                    "type": "selection",
                    "items": [
                        "normal",
                        "large",
                        "small"
                    ],
                    "value": ""
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": [],
                "icon": []
            },
            "slot": "",
            "info": {
                "name": "Badge",
                "ui": "Mint-UI",
                "id": "bd0ffa66-39e8"
            },
            "position": {
                "offsetLeft": 0,
                "offsetRight": 46,
                "offsetTop": 299,
                "offsetBottom": 325
            },
            "uid": 625
        },
        {
            "template": "<Button data-component-active tabIndex=\"0\" \n                        \ntype=\"dashed\"\n>\n                        Button\n                    </Button>",
            "attributes": {
                "label": {
                    "type": "text",
                    "value": "Button"
                },
                "type": {
                    "type": "selection",
                    "items": [
                        "primary",
                        "ghost",
                        "dashed",
                        "text",
                        "info",
                        "success",
                        "warning",
                        "error"
                    ],
                    "value": "dashed"
                },
                "size": {
                    "type": "selection",
                    "items": [
                        "large",
                        "small",
                        ""
                    ],
                    "value": ""
                },
                "shape": {
                    "type": "selection",
                    "items": [
                        "circle",
                        ""
                    ],
                    "value": ""
                },
                "long": {
                    "type": "boolean",
                    "value": false
                },
                "html-type": {
                    "type": "selection",
                    "items": [
                        "button",
                        "submit",
                        "reset"
                    ],
                    "value": ""
                },
                "disabled": {
                    "type": "boolean",
                    "value": false
                },
                "loading": {
                    "type": "boolean",
                    "value": false
                },
                "icon": {
                    "type": "ionicon",
                    "value": ""
                },
                "class": {
                    "type": "text",
                    "value": ""
                }
            },
            "slots": {
                "default": []
            },
            "slot": "",
            "info": {
                "name": "Button",
                "ui": "iView-UI",
                "id": "f02c63b0-ac77"
            },
            "position": {
                "offsetLeft": 46,
                "offsetRight": 112,
                "offsetTop": 299,
                "offsetBottom": 329
            },
            "uid": 828
        }
    ],
    "copiedComponents": []
}
```
