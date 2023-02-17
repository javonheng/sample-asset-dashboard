import AssetTableRow from './AssetTableRow'

export default function AssetTable({ assets }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
      <div className="-mx-6 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300 text-right">
          <thead>
            <tr className="text-base">
              <th
                scope="col"
                className="py-3.5 pl-6 pr-3 text-left font-semibold text-gray-900 sm:pl-0"
              >
                Asset
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 font-semibold text-gray-900"
              >
                Amount
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 font-semibold text-gray-900 lg:table-cell"
              >
                Realized P&L
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 font-semibold text-gray-900 lg:table-cell"
              >
                Unrealized P&L
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 font-semibold text-gray-900"
              >
                Total P&L
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-6 sm:pr-0">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {assets.map((asset, index) => (
              <tr key={index}>
                <AssetTableRow asset={asset} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
