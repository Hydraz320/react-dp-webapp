# 开始

这里有[解决方法](https://github.com/facebook/react/issues/2250)，一位叫[edvinerikson](https://github.com/edvinerikson)的年轻大佬提出了应对措施(汗颜啊……)。

简单来说就是把svg标签里的xlink:href替换成xlinkHref，也就是换成驼峰，然后就OK啦。

当然，从阿里妈妈把demo代码拷下来之后还要修改下class->className