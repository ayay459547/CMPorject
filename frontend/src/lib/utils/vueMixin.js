import moment from 'moment'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const mixin = {
  data() {
    return {
      moment,
    }
  },
  methods: {
    /**
     * 判斷東西是否為空
     * @param {*} value
     * @param {String} type
     * @returns {Boolean}
     */
    isEmpty(value, type) {
      if ([null, undefined].includes(value)) return true

      switch (type) {
        case 'Array':
        case 'String':
          if (value.length > 0) return false
          return true
        case 'Object':
          let hasOwnProperty = Object.hasOwnProperty

          for (let key in value) {
            if (hasOwnProperty.call(value, key)) return false
          }
          return true
        case 'Number':
          if (!isNaN(parseInt(value))) return false
          return true
      }
    },
    /**
     * alart
     * @param {Object} options
     */
    swal(options) {
      Swal.fire({
        ...options,
      })
    },
    getDefData(columns, type) {
      let resObj = {}
      if (!this.$isEmpty(type) && !this.$isEmpty(columns)) {
        columns.$forEach((value, key) => {
          resObj[key] = value[type]?.default || null
        });
      }
      return resObj
    },
    getAttrs(columns, type) {
      let resObj = {}
      if (!this.$isEmpty(type) && !this.$isEmpty(columns)) {
        columns.$forEach((value, key) => {
          resObj[key] = value[type] || null
        });
      }
      return resObj
    },
  },
}

export default mixin
