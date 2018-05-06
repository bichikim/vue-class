import decoratorFactory from '../decorator-factory'
import {VueClass} from '../types'
export default decoratorFactory(function Prop(target: VueClass, key: string, option?: any) {
  const superTarget = Object.getPrototypeOf(target.prototype)
  superTarget.extend({
    props: {
      [key]: option || {required: false},
    }
  })
})