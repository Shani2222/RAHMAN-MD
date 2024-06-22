

const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = 'https://github.com/Rahmantech1/RAHMAN-MD' // Source URL
const number = '923319709781'
var name = 'RAHMAN TECH'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://telegra.ph/file/034990b2d62595148af2e.jpg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「RAHMAN TECH INTRO」
│ Name      : Rahman ullah 
│ Place       : EARTH
│ Gender    :  MALE
│ Age          : 20
│ education : ICS 
│ good vibes : SECRET
│ Phone     : wa.me/923319709781
│ Youtube   : 
│ GitHub    : https://github.com/Rahmantech1

╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`





 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             alias: ["Rahman","Rahmanmd"],
             desc: "Show intro of user",
             category: "fun",
             react:"🤩",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"suhail",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })
