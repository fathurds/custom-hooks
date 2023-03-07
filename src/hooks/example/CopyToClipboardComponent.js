import { useState } from "react"
import useCopyToClipboard from "../useCopyToClipboard";

export default function CopyToClipboardComponent() {
  const [copyToClipboard, { success, value }] = useCopyToClipboard()
  const [data, setData] = useState(value);

  return (
    <>
      <button onClick={() => copyToClipboard(data)}>
        {success ? "Copied" : "Copy Text"}
      </button>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
    </>
  )
}
