template4 = __inline "hbs/list.handlebars"

data = [
  {
    name:"yangfei"
    age:"12"
  },
  {
    name:"tomcat"
    age:"33"
  }
]

numbers = [10, 5, 100, 2, 1000];
age = 10

content = template4({
    datalist:data,
    age:age
})

document.write content
