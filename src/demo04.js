// 超文本区域的处理&滚动文本

// 1.超文本区域的处理
// Laya.init(600,600,Laya.WebGL);
// Laya.init(600,600);
// setup();

// function setup(){

//     var t1 = createText();
//     // 设置不进行任何裁剪
//     t1.overflow = Laya.Text.VISIBLE;
//     t1.pos(10,10);

//     // 设置不显示文本区域外的字符
//     var t2 = createText();
//     t2.overflow = Laya.Text.SCROLL;
//     t2.pos(10,200);

//     // 设置不显示超出文本域的字符
//     var t3 = createText();
//     t3.overflow = Laya.Text.HIDDEN;
//     t3.pos(10,400);

//     //封装创建文本函数 
//     function createText(){
//         var txt = new Laya.Text();
//         txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//                    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//                    "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
//         txt.borderColor = "yellow";
//         txt.size(300,50);
//         txt.bgColor = "red";
//         txt.fontSize = 20;
//         txt.color = "#fff";
//         Laya.stage.addChild(txt);
//         return txt;
//     }
// }

// 2.滚动文本
// Laya.init(600,600,Laya.WebGL);

// createText();

// function createText(){
//     this.txt = new Laya.Text();
//     this.txt.overflow = Laya.Text.SCROLL;
//     this.txt.color = "red";
//     this.txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//                 "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//                 "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//                 "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//                 "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//                 "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//                 "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
//                 "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
//     this.txt.size(200,100);
//     this.txt.x = Laya.stage.width -this.txt.width>>1;
//     this.txt.y = Laya.stage.height - this.txt.height>>1;
//     this.txt.borderColor = "#ff0";
//     this.txt.fontSize=20;
//     Laya.stage.addChild(this.txt);
//     this.txt.on(Laya.Event.MOUSE_DOWN,this,startScrollText);
// }
// // 开始滚动文本
// function startScrollText(){
//     this.prevX =this.txt.mouseX;
//     this.prevY =this.txt.mouseY;
//     Laya.stage.on(Laya.Event.MOUSE_MOVE,this,scrollText);
//     Laya.stage.on(Laya.Event.MOUSE_UP,this,finishScrollText);
// }
// // 停止滚动文本
// function finishScrollText(){
//     Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.scrollText);
//     Laya.stage.off(Laya.Event.MOUSE_UP,this,this.finishScrollText);
// }
// // 鼠标滚动文本
// function scrollText(){
//     var nowX = this.txt.mouseX;
//     var nowY = this.txt.mouseY;
//     this.txt.scrollX +=this.prevX- nowX;
//     this.txt.scrollY += this.prevY-nowY;
//     this.prevX = nowX;
//     this.prevY = nowY;
// }