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
    methods:{
        add(){
            this.count++;
        }
    },
    template: '<div @click="add()">count is {{count}}</div>'
}