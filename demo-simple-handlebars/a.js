var template = __inline('hbs/some.handlebars');
var template2 = __inline('hbs/list.handlebars');
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
    age:16
  },
]
var contents = template({
    name: 'fis3',
    age:14,
});
var listcontent = template2({
  datalist:list
})
document.write(contents)
document.write(listcontent)
