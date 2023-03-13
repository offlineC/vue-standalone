// //for displaying static data
// export default {
//   data() {
//     return { count: 0 }
//   },
//   template: `<div>count is {{ count }}</div>`
// }

//adding click events
export default {
    data() {
        return {
            count: 0
        }
    },
    template: '<div @click="count++">count is {{count}}</div>'
}