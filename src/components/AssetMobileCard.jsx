import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { convertNum, convertRate } from '@/utils/misc'

export default function AssetMobileCard({ index, asset }) {
  return (
    <div
      key={index}
      className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-teal-800 focus-within:ring-offset-2 hover:border-teal-800"
    >
      <div className="min-w-0 flex-1">
        <a href="#" className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <div className="grid grid-cols-7 gap-2 text-lg font-medium text-gray-900">
            <div className="col-span-1">
              <Image
                className="h-18 w-18 rounded-full"
                src={asset.logo}
                alt="Logo"
                width={50}
                height={50}
              />
            </div>
            <div className="col-span-3">
              <div className="text-3xl">{asset.ticker}</div>
              <div className="wrap text-sm text-gray-500">
                {asset.vasp} ({asset.accType})
              </div>
            </div>
            <div className="col-span-3">
              <div className="text-2xl">
                {asset.amount} {asset.ticker}
              </div>
              <div className="wrap text-sm text-gray-500">
                {convertRate(null, asset.amount)}
              </div>
            </div>
            <div className="col-span-7">
              <div className="w-full border-b border-gray-300 pb-2"></div>
            </div>

            <div className="col-span-4">Realized P&L</div>
            <div className="col-span-3">
              {convertNum(asset.realizedPL)} USD
              <div className="wrap text-sm text-gray-500">
                {asset.realizedPLPerc}%
              </div>
            </div>
            <div className="col-span-4">Unrealized P&L</div>
            <div className="col-span-3">
              {convertNum(asset.unrealizedPL)} USD
              <div className="wrap text-sm text-gray-500">
                {asset.unrealizedPLPerc}%
              </div>
            </div>
            <div className="col-span-4 font-bold">Total P&L</div>
            <div className="col-span-3 font-bold">
              {convertNum(asset.totalPL)} USD
              <div className="wrap text-sm text-gray-500">
                {asset.totalPLPerc}%
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
