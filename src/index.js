import x from './x.js'
import png from './assets/1.png'//png得到的路径是由loader决定的
console.log(png)

//console.log('hello world!啦啦啦')
const div=document.getElementById('app')
div.innerHTML=`
<img src="${png}">
`

const button=document.createElement('button')
button.innerHTML='懒加载'
button.onclick=()=>{
    const promise=import('./lazy')//把import当成一个函数了
    promise.then((module)=>{
       const fn=module.default
       fn()
    },()=>{
        console.log('模块加载错误')
    })
}

div.appendChild(button)