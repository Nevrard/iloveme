import React, {useState} from 'React' 

import './table.scss'




function Table(props) {
    
    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData
     
    const [dataShow setDataShow] = useState(initDataShow)

    let pages = 1

    let range = []

    if (props.limit ! == undefined) {
        let page = Math.floor(props.bodyData.length/Number(props.limit))
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const [currentPage, setCurrentPage] = useState(0)

    return (
        <div>
            
        </div>
    )
}

export default Table
