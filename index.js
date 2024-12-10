const voiceStartBtn = document.getElementById('voiceStart');
const voiceStopBtn = document.getElementById('voiceStop');
const textContent = document.getElementById('textContent');

const recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;

voiceStartBtn.addEventListener('click', () => { recognition.start(); });
voiceStopBtn.addEventListener('click', () => { recognition.stop(); });

recognition.addEventListener('result', (event) => {
  const result = event.results[event.results.length - 1][0].transcript;
  textContent.textContent = result;
});