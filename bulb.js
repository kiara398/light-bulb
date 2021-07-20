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
          this.isLightOn =true
          this.isLightOff=false
         
        },
        tapAgain: function(){
          this.isLightOn =false
          this.isLightOff=true
        }
      }
    }
   
  
  Vue.createApp(bulbLighting).mount('#app')
  