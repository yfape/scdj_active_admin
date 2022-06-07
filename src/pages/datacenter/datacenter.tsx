/*
 * @Author: yfape yfape@outlook.com
 * @Date: 2022-04-18 16:35:16
 * @LastEditors: yfape yfape@outlook.com
 * @LastEditTime: 2022-05-17 16:06:45
 * @FilePath: \scdj\src\pages\datacenter\datacenter.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { createRef, useState, useEffect, useRef } from 'react'

const DataCenter = () => {
    const [count, setCount] = useState(0)
    const latestCount = useRef(0)

    useEffect(() => {
        latestCount.current = count
    })

    function handleAlertClick() {
        setTimeout(() => {
            alert('YOU clicked on:' + latestCount.current)
        }, 3000)
    }

    return (
        <>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                <button onClick={handleAlertClick}>Show Alert</button>
            </div>
        </>
    )
}

export default DataCenter
