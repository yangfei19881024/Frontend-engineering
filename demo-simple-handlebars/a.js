var template = __inline('hbs/some.handlebars');
var template2 = __inline('hbs/list.handlebars');
var template3 = __inline('hbs/mutiply_list.handlebars');

var list = [
  {
    name:"yangfei",
    age:12
  },
  {
    name:"tomcat",
    age:14
  },
  {
    name:"jackson",
    age:19
  },
]

//嵌套循环
var data = [{
             "name":"张三",
             "time":"2014",
             "info":[
               "眼睛",
               "耳朵",
               "鼻子"
             ]
            },{
             "name":"李四",
             "time":"2013",
             "info":[
               "爸爸",
               "妈妈",
               "妻子"
              ]
            }];

var contents = template({
    name: 'fis3',
    age:14,
});

var listcontent = template2({
  datalist:list
});

var mutiply_listcontent = template3({
  data:data
});

document.write(contents)
document.write(listcontent)
document.write(mutiply_listcontent)
