/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: 静哥哥
 * @Date: 2021-04-07 08:26:41
 * @LastEditors: Wei
 * @LastEditTime: 2021-04-20 22:35:56
 * @FilePath: \CycleProduction\src\App.tsx
 */

import React, { FC } from 'react';
import { Button } from 'antd';
import './components/test.less';


// 这种写法是hook的写法
const App: FC = () => {

    return (
        <div className="test-body">
            <p>hello world</p>
            <Button type="primary">use Ant-Design Successfuly</Button>
        </div>
    )
}

export default App;
