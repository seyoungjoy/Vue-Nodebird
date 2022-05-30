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
            icons: {
                iconfont: 'md',
            },
        }],
    ],
    plugins:[],

}
