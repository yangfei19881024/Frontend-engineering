template4 = __inline "hbs/list.handlebars"

data = [
  {
    name:"yangfei"
    age:"12"
  },
  {
    name:"tomcat"
    age:"12"
  }
]

content = template4({
    datalist:data
})

document.write content
