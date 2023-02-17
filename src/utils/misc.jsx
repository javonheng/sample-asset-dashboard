const convertRate = (ticker, asset) => {
  return `$ ${convertNum(asset * 1)} USD`
}

const convertNum = (amount) => {
  return amount.toLocaleString()
}
const toCamelCaseString = (text) => {
  return (
    text
      // insert a space before all caps
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, function (str) {
        return str.toUpperCase()
      })
  )
}

const eChartsTreeMapping = (assets) => {
  const tickers = []
  let options = {
    series: [
      {
        type: 'treemap',
        data: [],
      },
    ],
  }
  assets.forEach((asset, index) => {
    if (asset.ticker) {
      if (index === 0) {
        // first element populate options data
        options.series[0].data.push({
          name: asset.ticker,
          value: asset.amount,
          children: [{ name: asset.vasp, value: asset.amount }],
        })
      } else {
        // else check for repeating tickers -> add on amount value, push element into children arr
        options.series[0].data.forEach((item) => {
          if (asset.ticker === item.name) {
            item.value += asset.amount
            item.children.forEach((child) => {
              // check if vasp exist, otherwise add them to children arr
              if (child.name !== item.vasp) {
                item.children.push({ name: asset.vasp, value: asset.amount })
              }
            })
          } else {
            // if ticker not inside, add them
            options.series[0].data.push({
              name: asset.ticker,
              value: asset.amount,
              children: [{ name: asset.vasp, value: asset.amount }],
            })
          }
        })
      }
    }
  })
  return options
}

export { convertRate, convertNum, toCamelCaseString, eChartsTreeMapping }
