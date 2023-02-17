import { useRouter } from 'next/router'
import { toCamelCaseString } from '@/utils/misc'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { Bars3Icon } from '@heroicons/react/24/outline'

export default function Layout({
  children,
  navigation,
  sidebarOpen,
  setSidebarOpen,
}) {
  const router = useRouter()
  const pathname = router.pathname.substring(1)
  const title = toCamelCaseString(pathname.slice())
  return (
    <>
      <Head>
        <title>Renora | {title}</title>
      </Head>
      <Navbar
        navigation={navigation}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex flex-1 flex-col md:pl-64">
        {/* Mobile hamburger */}
        <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}
