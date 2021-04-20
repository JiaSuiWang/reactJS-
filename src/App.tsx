/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: 静哥哥
 * @Date: 2021-04-07 08:26:41
 * @LastEditors: Wei
 * @LastEditTime: 2021-04-20 22:12:25
 * @FilePath: \CycleProduction\src\App.tsx
 */

import { FC, Fragment } from 'react';
import './App.css';
import { Button } from 'antd';


// 这种写法是hook的写法
const App: FC = () => {

    return (
        <Fragment>
            <p>hello world</p>
            <Button type="primary">use Ant-Design Successfuly</Button>
        </Fragment>
    )
}

export default App;
