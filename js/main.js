const sendButton = document.querySelector('#liveToastBtn');

const sendMailToDilruba = async () => 
await (await fetch('/.netlify/functions/sendmail')).json();

sendButton.addEventListener('click', () => {

    console.log('Triggering send mail');
sendMailToDilruba().then(data => {
    alert("Sent ❤️ to Dilruba");
    console.log(data);
});
})