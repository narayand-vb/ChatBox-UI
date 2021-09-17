const Bot = {
    hello : "hello",
    hi : "hello",
    hii : "hello",
    helo : "hello",
    halo : "hello",
    howareyou : "I am fine. What about you?",
    Howareyou : "I am fine. What about you?",
    Iamalsofine : "Okay!! 😊",
    iamalsofine : "Okay!! 😊",
    goodmorning : "Good Morning  🛣",
    GoodMorning : "Good Morning  🛣",
    Goodmorning : "Good Morning  🛣",
    goodafternoon : "Good Afternoon 🏜",
    GoodAfterNoon : "Good Afternoon 🏜",
    GoodAfternoon : "Good Afternoon 🏜",
    Goodafternoon : "Good Afternoon 🏜",
    goodnight : "Good Night ✨",
    Goodnight : "Good Night ✨",
    GoodNight : "Good Night ✨",
    bye : "Bye 👋",
    Bye : "Bye 👋",
    BYE : "Bye 👋",

}

// Here botmsg is getting data as message and returning key value of Bot.

const botmsg = (message)=>{
    let newMsg = message.replace(/[? ]/gi,'');
    if( Bot.hasOwnProperty(newMsg) ) {
        return Bot[newMsg];
       
    }
    else{
        return "Didn't get you."
    }
}




export default botmsg;