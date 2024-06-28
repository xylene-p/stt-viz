import './style.css'

const recordBtn = document.getElementById("record-btn")

recordBtn?.addEventListener("click", () => {
  console.log("clicked the button")
  openAiTranscription()
})

async function openAiTranscription() {
  const response = await fetch("/.netlify/functions/openai-whisper").then(response => response.json())
  console.log(JSON.stringify(response))
}