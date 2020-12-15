import React from 'react'
import '../../App.css'
import BalanceTable from './BalanceTable'
import NavApp from '../NavApp/TopNavBar'

const Balance = () => {
    return ( 
        <div>
            <NavApp></NavApp>
            <text> Last 10 Transactions</text>
            <BalanceTable/>

            <text> Last 10 income</text>
            <BalanceTable/>

            <text> Last 10 expense</text>
            <BalanceTable/>

            <div style={{marginBottom: "10px"}}>your most pupular expolrers: </div>
            <div style={{marginBottom: "10px"}}>your favorite sharers: </div>
            <div> favorite Area of interst: </div>
        </div>
    )
}

export default Balance 
