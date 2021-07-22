const bulbLighting = {
    data() {
      return { 
        isLightOn:false,
         
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
  