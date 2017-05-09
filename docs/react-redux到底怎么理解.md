# 开始

这里就以redux分支下的代码来分析react-redux这一套到底要怎么理解和运用。

## redux

redux本身包含3个方面的概念：action、reducer、store。怎么理解呢？store就是state的中心管理的地方，action则是一种通知，reducer则是根据当前状态和action的通知来计算下一个状态的运算机制。举个形象点的例子就是：store存储的好比是猫的心情(状态)，action好比是你撸它的方式，摸头、揉肚子、弹脑瓜崩等等，而reducer则是猫对各个action的反应。比如，当前store里存储的猫的state是happy，而铲屎官作死发出了type为弹脑瓜崩的action，那么主子会以store.dispatch(action)的方式收到，其reducer会根据当前的state(happy)和铲屎官的action{type: 'biu', text: 'hhh'}，计算出新的心情为angry，然后store再将其作为自己新的state，需要指出的是，正如主子对action的反应是发自真心的(德国boy？)，我们的store也是通过createStore(reducer)的方式建立的。这就是这套机制的原理。

## react-redux

加入react之后的这套机制真的蛮恶心的，貌似不少人都卡在这里。没办法，react全家桶学起来，还得先搞清webpack这些构建工具及其各自配置项、什么是hmr什么是生产环境，然后会些es6的语法class怎么写以及es5就有的map、filter、reduce怎么用，还得搞搞jsx语法，如果用了react-router更得对路由先有点概念，所以半路而废也是情有可原啊(别给自己找借口啊摔)。

1. Provider
   
   它会在根部把store提供给所有内部的组件。我们也许会问了，不用Provider就拿不到store了吗？那当然了不然还要它干嘛。
   因为redux主张的是单个数据源，并且统一管理在顶部，所以如果不用Provider这种方便的东西，我们想要在内部拿到放在遥远的顶部的数据，就得从顶部沿着组件一层层的通过props向下传，那还不得吐血啊。所以，有了Provider，内部组件也可以直接通过this.props.xxxx拿到想要的用来渲染的数据了。
   
2. connect

    connect是给我们的容器组件提供一层封装的函数，它接收mapStateToProps和mapDispatchToProps作为参数，返回的函数再接收容器组件作为参数，返回一个新的容器组件暴露出去。这两个mapXXX本质上就是个selector，用以高速封装的组件如何梳理、选择state上传下来的数据。

3. action creator

    在react-redux组织的项目中，我们不会再用写死的action进行传输，而是会包一层creator，通过传入参数生成一个对象并返回。其中，action因其具有诸多type，也常常会专门建立constants目录来存储这些types，action将import这些常量并使用。
    
4. combineReducers

    因为reducer肯定会越写越多的，将其进行拆分也是必要的，但是最后还是需要整合到一起交给createStore去生成store。因此redux提供了combineReducers来整合reducer，交出去就可以不管它啦。
    
5. bindActionCreators
    
    这个函数是将action creators和dispatch方法整合到一起的方法，它会将所有的action creator进行包装，当它在传入的组件内部拿到mapDispatchToProps映射进去的方法时，调用则会直接dispatch(action)，非常的方便。当然，不用它也是可以的。
    
    