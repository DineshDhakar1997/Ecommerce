import React, { useState } from 'react'
import TableHOC from '../components/admin/TableHOC'
import { Link } from 'react-router-dom'
import { Column } from 'react-table'
type DataType = {
     _id: string,
     amount: number,
     discount: number,
     quantity: number,
     status: React.ReactElement,
     action: React.ReactElement
}
const column: Column<DataType>[] = [
    {
        Header: "Id",
        accessor: "_id",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Action",
        accessor: "action",
    }
]
const Orders = () => {
    const [row,setRow]=useState<DataType[]>([
        {
            _id: "12diudhciud1233",
            amount: 1234,
            discount: 123,
            quantity: 12,
            status: <span className="red">Pending</span>,
            action: <Link to="/order/dfsdf">View</Link>
        }
    ]);
    const table=TableHOC<DataType>(column,
        row,
        "dashboard-product-box",
        "Order",row.length>6)();
  return (
    <div className="container">
    <h1>My Orders</h1>
    {table}
    </ div>
    ) 
}

export default Orders