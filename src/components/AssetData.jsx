import React from 'react'
import AssetMobileCard from './AssetMobileCard'
import AssetTable from './AssetTable'

export default function AssetData({ assets }) {
  return (
    <>
      <div className="grid gap-2 sm:grid-cols-1 md:hidden">
        {assets.map((asset, index) => (
          <div key={index}>
            <AssetMobileCard index={index} asset={asset} />
          </div>
        ))}
      </div>
      <div className="hidden md:block">
        <AssetTable assets={assets} />
      </div>
    </>
  )
}
