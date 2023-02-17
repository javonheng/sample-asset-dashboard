import { PaperClipIcon } from '@heroicons/react/20/solid'
import React from 'react'
import ReactECharts from 'echarts-for-react'
import { convertNum } from '@/utils/misc'

export default function Summary({
  netWorth,
  unrealizedReturns,
  realizedReturns,
  options,
  isCalculated,
}) {
  return (
    <>
      <div className="p-5">
        <div>
          <h3 className="text-2xl font-bold leading-6 text-gray-900">
            Portfolio Summary
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Your finances at a glance.
          </p>
        </div>
        <div>
          {isCalculated ? (
            <ReactECharts
              option={options}
              // notMerge={true}
              // lazyUpdate={true}
              // theme={"theme_name"}
              // onChartReady={this.onChartReadyCallback}
              // onEvents={EventsDict}
              // opts={}
            />
          ) : (
            ''
          )}
        </div>
        <div className="mt-10 border-t border-gray-200 text-base">
          <dl className="divide-y divide-gray-200">
            <div className="py-4">
              <dt className="font-medium text-gray-500">Net worth</dt>
              <dd className="mt-1 text-gray-900">
                <span className="text-lg">
                  {isCalculated ? convertNum(netWorth) : ''} USD
                </span>
              </dd>
            </div>
            <div className="py-4">
              <dt className="font-medium text-gray-500">Realized Returns</dt>
              <dd className="mt-1 text-gray-900">
                <span className="text-lg">
                  {isCalculated ? convertNum(realizedReturns) : ''} USD
                </span>
              </dd>
            </div>
            <div className="py-4">
              <dt className="font-medium text-gray-500">Unrealized Returns</dt>
              <dd className="mt-1 text-gray-900">
                <span className="text-lg">
                  {isCalculated ? convertNum(unrealizedReturns) : ''} USD
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  )
}
