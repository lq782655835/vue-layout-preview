import { getTemplate, getSlotContent, getStringTypeAttr } from '@/components/template'

var handle = function(_attr, _slots) {
    //定义默认属性
    let attributes = {
            list: {
                type: 'text',
                value: ''
            }
        },
        slots = {}

    //覆盖默认属性
    Object.assign(slots, _slots)
    Object.assign(attributes, _attr)

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
    let template = `<ks-operation-log ${stringAttr}>
                    </ks-operation-log>`

    return { template, attributes, slots }
}
export default handle
