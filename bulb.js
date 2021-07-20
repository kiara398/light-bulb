const bulbLighting = {
    data() {
      return { 
        isLightOn:false,
        isLightOff:true,
         
      }
      }, 
      //the method
      methods: {
        tap: function(){
          this.isLightOn =false
          this.isLightOff=true
        },
        tapAgain: function(){
          this.isLightOn =true
          this.isLightOff=false
        }
      }
    }
   
  
  Vue.createApp(bulbLighting).mount('#app')
  