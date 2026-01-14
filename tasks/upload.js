const UPLOAD_URL = "https://script.google.com/macros/s/AKfycbxfh-i2un5ySQVDUQnJX2jzTcI6ImhasYk1kXqiB9JB9E_hVTFjmZmqgAqW2IKLjaP4Aw/exec";

export async function uploadRecording(blob, meta) {
  const form = new FormData();
  form.append("file", blob);
  form.append("meta", JSON.stringify(meta));

  const res = await fetch(UPLOAD_ENDPOINT, {
    method: "POST",
    body: form
  });

  if (!res.ok) throw new Error("Upload failed");
}