const { smd, sleep } = require('../lib');

smd({ cmdname: "hack", type: "fun", info: "hacking prank", filename: __filename }, async (citel) => {
  const messages = [
"Just a second, RAHMAN is starting",
    "RAHMAN started successfully!",
     "Now!!!!!!",
    "Injecting Malware",
    " █ 10%",
    " █ █ 20%",
    " █ █ █ 30%",
    " █ █ █ █ 40%",
    " █ █ █ █ █ 50%",
    " █ █ █ █ █ █ 60%",
    " █ █ █ █ █ █ █ 70%",
    " █ █ █ █ █ █ █ █ 80%",
    " █ █ █ █ █ █ █ █ █ 90%",
    " █ █ █ █ █ █ █ █ █ █ 100%",
    "System hyjacking on process.. \n Conecting to Server error to find 404 ",
    "Device successfully connected... \n Riciving data...",
    "Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...",
    " HACKING COMPLETED ",
    " SENDING LOG DOCUMENTS...",
    " SUCCESSFULLY SENT DATA AND Connection disconnected",
    "Sending all Victom details to RAHMAN",
    "Looking for Rahman Number",
    "Successfully detected hacker's number",
    "Sending details to +923319709781",
    "Deleting BACKDOORS",
    "BACKLOGS CLEARED",
    "POWERED RAHMAN MD",
    "By DARK EVIL®"
  ];

  let editedMessage;
  for (const message of messages) {
    editedMessage = await citel.send(editedMessage || message);
    await sleep(1000);
    editedMessage = await citel.edit(editedMessage, message);
  }
});