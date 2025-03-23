import "./styles/globals.css"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar"
import {
	Routes,
	Route,
	useLocation
} from "react-router-dom"


export function App() {
	const location = useLocation()

  return (
		<div className="flex w-full min-w-[100vw] md:mx-auto">
			<SidebarProvider
				defaultOpen={true}
				style={
					{
						"--sidebar-width": "calc(var(--spacing) * 72)",
					} as React.CSSProperties
				}
			>
				<AppSidebar variant="inset" />
				<SidebarInset>
				<header className="flex h-fit shrink-0 items-center gap-2 border-b ">
					<SidebarTrigger />
					<Separator orientation="vertical" className="mr-2 h-4" />
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem className="hidden md:block">
								<BreadcrumbLink href="#">
									Test
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator className="hidden md:block" />
							<BreadcrumbItem>
								<BreadcrumbPage>
									{ location.pathname }
								</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</header>
				<div className="flex flex-1 flex-col p-4">
					<Routes>
						<Route path="/" element={<h1 className="text-2xl font-bold">Home</h1>} />
						<Route path="/docs" element={<h1 className="text-2xl font-bold">Docs</h1>} />
						<Route path="/api" element={<h1 className="text-2xl font-bold">API</h1>} />
						<Route path="/examples" element={<h1 className="text-2xl font-bold">Examples</h1>} />
						<Route path="/blog" element={<h1 className="text-2xl font-bold">Blog</h1>} />
						<Route path="/community" element={<h1 className="text-2xl font-bold">Community</h1>} />
					</Routes>
				</div>
				</SidebarInset>
			</SidebarProvider>
		</div>
  )
}

export default App
