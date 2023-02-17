import React, { useState, useEffect } from 'react'
import { navigation } from '@/constants/navbar'
// import { options } from '@/constants/echarts'
import { assets } from '@/constants/assets'
import { eChartsTreeMapping } from '@/utils/misc'
import AssetData from '@/components/AssetData'
import Summary from '@/components/Summary'
import Loader from '@/components/Loader'
import Layout from '@/components/Layout'

export default function Assets() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isCalculated, setIsCalculated] = useState(false)
  const [netWorth, setNetWorth] = useState(0)
  const [realizedReturns, setRealizedReturns] = useState(0)
  const [unrealizedReturns, setUnrealizedReturns] = useState(0)
  const [options, setOptions] = useState(null)
  // number of loaders
  let loaders = Array(3).fill(0)

  useEffect(() => {
    setNetWorth(0)
    setRealizedReturns(0)
    setUnrealizedReturns(0)
    assets.forEach((asset) => {
      if (asset.totalPL) {
        setNetWorth((prevVal) => prevVal + asset.totalPL)
      }
      if (asset.realizedPL) {
        setRealizedReturns((prevVal) => prevVal + asset.realizedPL)
      }
      if (asset.unrealizedPL) {
        setUnrealizedReturns((prevVal) => prevVal + asset.unrealizedPL)
      }
    })
    setOptions(eChartsTreeMapping(assets))
    setIsCalculated(true)
  }, [])

  return (
    <>
      <Layout
        navigation={navigation}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      >
        <main className="mx-4 grid flex-1 gap-2 md:my-4 md:grid-cols-9">
          <div className="col-span-6 py-6">
            {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Assets</h1>
              </div> */}
            <div className="mx-5 grid place-content-end">
              <button
                type="button"
                className="primary-color rounded-md border border-transparent px-10 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-900 focus:ring-offset-2"
              >
                Sync
              </button>
            </div>

            {/* Mobile Display */}
            <div className="col-span-3 md:hidden">
              <Summary
                netWorth={netWorth}
                unrealizedReturns={unrealizedReturns}
                realizedReturns={realizedReturns}
                options={options}
                isCalculated={isCalculated}
              />
            </div>
            <div className="py-4">
              {assets ? (
                <AssetData assets={assets} />
              ) : (
                loaders.map((index) => <Loader key={index} />)
              )}
            </div>
          </div>
          <div className="col-span-3 hidden md:block">
            <Summary
              netWorth={netWorth}
              unrealizedReturns={unrealizedReturns}
              realizedReturns={realizedReturns}
              options={options}
              isCalculated={isCalculated}
            />
          </div>
        </main>
      </Layout>
    </>
  )
}
