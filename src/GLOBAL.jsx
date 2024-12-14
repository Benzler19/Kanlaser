const GROBAL = {

    // BASE_SERVER: {
    //   URL: 'https://api.cctv-sukhapiban.com/',
    // },
    // API: {
    //   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: 'AIzaSyA8_Zs4UJy-HUw8Lc17gxMOxrhNF7pEqCI',
    // },
    
    // -----------------------------------------------------------------------------------
    
  
    ACCESS_TOKEN: {
      'x-access-token': localStorage.getItem("x-access-token"),
    },
    PERMISSION:{
      'permission': localStorage.getItem("permission"),
      'temp_permission': localStorage.getItem("temp_permission")
    }
  }
  
  export default GROBAL