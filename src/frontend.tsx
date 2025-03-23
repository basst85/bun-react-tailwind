import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


const queryClient = new QueryClient()

function start() {
  const root = createRoot(document.getElementById("root")!)
  root.render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start)
} else {
  start()
}
