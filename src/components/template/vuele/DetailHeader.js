import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'

var handle = function(_attr, _slots) {
    //定义默认属性
    let attributes = {
          header: {
              type: 'text',
              value: '多元修复关节 缓解疼痛 汤臣倍健 升级版氨糖软骨素钙片 120片/瓶'
          },
          status:{
              type:'text',
              value:'待考拉审核'
          },
          desc: {
                type: 'text',
                value: '复杂业务的页面，可以在页面标题下，添加简单文字描述页面功能'
            }
        },
        slots = {
          operation:[],
          'operation-more':[],
        }

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

    var subContent = getSlotContent(slots)
     //设置当前组件的slot
    if (attributes.slot && attributes.slot !== 'default') {
      attributes.slot = {
          type: 'text',
          value: attributes.slot
      }
    } else {
      attributes.slot = {
          type: 'text',
          value: ''
      }
  }

    //字符串模板操作
    let stringAttr = getStringTypeAttr(attributes)
    let template = `<ks-detail-header ${stringAttr}>
                      ${subContent}
                    </ks-detail-header>`

    return { template, attributes, slots }
}
export default handle
