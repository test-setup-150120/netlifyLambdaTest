const sendButton = document.querySelector('#liveToastBtn');

const sendMailToDilruba = async () => 
await (await fetch('/.netlify/functions/sendMail')).json();

sendButton.addEventListener('click', () => {

    console.log('Triggering send mail');
sendMailToDilruba().then(data => {
    alert("Sent ❤️ to Dilruba");
    console.log(data);
});
})