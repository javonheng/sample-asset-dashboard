export default function Loader() {
  return (
    <>
      <div className="grid gap-2 sm:grid-cols-1">
        <div className="mt-2 animate-pulse items-center justify-center space-x-1 rounded-xl border p-6 ">
          <div className="flex flex-col space-y-2">
            <div className="h-6 w-11/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-10/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-300 "></div>
          </div>
        </div>
      </div>
    </>
  )
}
