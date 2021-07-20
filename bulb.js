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
          this.isLightOn = !this.isLightOn
        }
      }
    }
   
  
  Vue.createApp(bulbLighting).mount('#app')
  