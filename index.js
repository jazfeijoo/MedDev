const fs = require('fs')
const procString = fs.readFileSync('./procedureData.json', 'utf-8')
const procedures = JSON.parse(procString)
const saleString = fs.readFileSync('./salesData.json', 'utf-8')
const sales = JSON.parse(saleString)

function findTop5Elephants(sales, procedures){
    let mapHCP = {}
    for(let i=0; i<procedures.length; i++){
        let procedure = procedures[i]
        let hcp = procedure.hcp
        let soc = procedure.soc
        let vol = procedure.volume
        let id = `${hcp}`
        mapHCP[id] ? mapHCP[id] += vol : mapHCP[id] = vol
    }
    for(let i=0; i<sales.length; i++){
        let sale = sales[i]
        let hcp = sale.hcp
        let soc = sale.soc
        let vol = sale.volume
        let id = `${hcp}`
        mapHCP[id]? mapHCP[id] -= vol : mapHCP[id] = -vol
    }
    let arr = Object.entries(mapHCP)
    arr.sort((a,b) => { 
        return b[1] - a[1]
    })
    return [arr[0][0], arr[1][0], arr[2][0], arr[3][0], arr[4][0]]

}

console.log('FINAL: ',findTop5Elephants(sales, procedures))