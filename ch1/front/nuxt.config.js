module.exports = {
    head(){
        return{
            title:'Nodebird'
        }
    },
    modules:[
        '@nuxtjs/axios',
    ],
    buildModules:[
        [`@nuxtjs/vuetify`,{

        }],
    ],
    plugins:[],
    css: [
        '@mdi/font/css/materialdesignicons.css',
    ],

}
