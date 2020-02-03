// tests en https://regex101.com/r/o1ADpd/8

const emails = "demo@demo.com, demo_demo@demo.com.ar, demo-demo12312@sub.dom.com.ar, demo@novalido, novalido>@demo.com, demo@novalido-.com, demo@-novalido.com"

const patron = /[\w]+@[\w]+(\.[\w]+)+/;

emails.split(', ').filter(texto=>patron.test(texto));