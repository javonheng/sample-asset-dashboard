import Image from 'next/image'
import { convertNum, convertRate } from '@/utils/misc'

export default function AssetTableRow({ asset }) {
  return (
    <>
      <td className="grid grid-cols-4 gap-3 py-6 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
        <div className="lg: col-span-4 xl:col-span-1">
          <Image
            className="lg:block"
            src={asset.logo}
            alt="Logo"
            width={40}
            height={40}
          />
        </div>
        <div className="hidden lg:block xl:hidden 2xl:hidden">
          <label className="text-lg">{asset.ticker}</label>
          <br />
          <label className="wrap text-sm text-gray-500">
            {asset.vasp} ({asset.accType})
          </label>
        </div>
        <div className="col-span-3 hidden text-left xl:block">
          <label className="text-lg">{asset.ticker}</label>
          <br />
          <label className="wrap text-sm text-gray-500">
            {asset.vasp} ({asset.accType})
          </label>
        </div>
      </td>
      <td className="px-3 py-4 text-sm">
        <label>
          {asset.amount} {asset.ticker}
        </label>
        <br />
        <label className="text-xs text-gray-500">
          {convertRate(null, asset.amount)}
        </label>
      </td>
      <td className="hidden px-3 py-4 text-sm lg:table-cell">
        {convertNum(asset.realizedPL)} USD
        <br />
        <label className="text-xs text-gray-500">{asset.realizedPLPerc}%</label>
      </td>
      <td className="hidden px-3 py-4 text-sm lg:table-cell">
        {convertNum(asset.unrealizedPL)} USD
        <br />
        <label className="text-xs text-gray-500">
          {asset.unrealizedPLPerc}%
        </label>
      </td>
      <td className="px-3 py-4 text-sm">
        {convertNum(asset.totalPL)} USD
        <br />
        <label className="text-xs text-gray-500">{asset.totalPLPerc}%</label>
      </td>
      <td className="py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-0">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          View
          <span className="sr-only">, {asset.name}</span>
        </a>
      </td>
    </>
  )
}
