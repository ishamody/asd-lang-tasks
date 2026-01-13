export async function uploadRecording(blob, meta) {
  const form = new FormData();

  if (!blob) throw new Error("No blob provided");

  form.append("file", blob);

  for (const [k, v] of Object.entries(meta)) {
    if (v === undefined || v === null) {
      throw new Error(`Missing meta field: ${k}`);
    }
    form.append(k, String(v));
  }

  let res;
  try {
    res = await fetch("https://asd-lang-backend.onrender.com/upload", {
      method: "POST",
      body: form
    });
  } catch (err) {
    console.error("❌ Network error talking to backend", err);
    throw err;
  }

  let text = "";
  try {
    text = await res.text();
  } catch {}

  if (!res.ok) {
    console.error("❌ Upload failed", {
      status: res.status,
      statusText: res.statusText,
      body: text
    });
    throw new Error(`Upload failed: ${res.status}`);
  }

  console.log("✅ Upload success:", meta.filename);
}
