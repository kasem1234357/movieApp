export const M = {
 success:{
  Account:(name)=>{
   return {
    title:`you are loggen success`,
    desc:`hi ${name}Now you can enjoying with full experience `
   }
  },
  SaveMovie:(name)=>{
   return {
    title:`The item save success`,
    desc:`the${name} add to faviorate section `
   }
  },
 },
 danger:{
  Account:{
    title:`Some thing wrong`,
    desc:`check your information or your internet `
   }
  },
  warning:{
   WarningMovie:(name)=>{
    return {
     title:`The item Already saved`,
     desc:`if you want remove this item click here `
    }
   },
  }
 }
 