/*
 * @Descripttion: 
 * @version: v0.0.1
 * @Author: 静哥哥
 * @Date: 2021-04-07 08:26:41
 * @LastEditors: 静哥哥
 * @LastEditTime: 2021-04-07 08:51:51
 * @FilePath: \my-app\src\App.tsx
 */
import React, { FC, useEffect, useState } from 'react';
import { Fragment } from 'react';
import './App.css';
import ClassComponent from './components/class-component';

interface IProps {
    name?: string;
    age?: number
}

// 这种写法是hook的写法
const App: FC<IProps> = ({ name = '姓名', age = 18 }) => {
    // 定义变量，变量变化触发视图变化
    const [count, setCount] = useState<number>(0);

    // 这里定义方法
    const handleClick = (): void => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("这里是生命周期，做数据请求")
        console.log("下面这个数组，是做依赖，要是下面数组里面的东西变化了，这里的代码就会在一次执行， 你点击按钮试试")
    }, [count])

    return (
        // 每个文件下面只能有一个元素，可以用任何元素包裹起来，用Fragment就是一个空元素
        <Fragment>
            <div style={{ border: '1px solid black', padding: 20, width: 600 }}>
                <p>{name}: {age}</p>
                <p>这里是父组件组件，跟子组件的功能一样，只是写法是hook写法</p>
                <p>点击这按钮，然后看看控制台，谷歌浏览器点击F12, 查看console</p>
                <button onClick={handleClick}>这里是count的值{count}</button>
            </div>
            <ClassComponent
                name={'传给子组件的姓名'}
                age={18}
            />
        </Fragment>
    )
}

export default App;
