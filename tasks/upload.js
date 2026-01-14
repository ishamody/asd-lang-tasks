const UPLOAD_URL = "https://script.google.com/macros/s/AKfycbxfh-i2un5ySQVDUQnJX2jzTcI6ImhasYk1kXqiB9JB9E_hVTFjmZmqgAqW2IKLjaP4Aw/exec";

export async function uploadRecording(blob, meta) {
  const reader = new FileReader();

  const base64 = await new Promise(resolve => {
    reader.onloadend = () => resolve(reader.result.split(',')[1]);
    reader.readAsDataURL(blob);
  });

  const res = await fetch(UPLOAD_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ meta, fileBase64: base64 })
  });

  if (!res.ok) throw new Error("Upload failed");

  const data = await res.json();   // parse JSON response
  console.log("Apps Script response:", data); // <-- THIS LOGS IT
  return data;                     // return to caller
}
