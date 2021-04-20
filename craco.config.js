/*
 * @Descripttion: 
 * @Author: Wei
 * @Date: 2021-04-20 22:48:33
 * @LastEditors: Wei
 * @LastEditTime: 2021-04-20 23:56:07
 * @FilePath: \CycleProduction\craco.config.js
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    javascriptEnabled: true,
                },
            },
        },
    }, ],
};