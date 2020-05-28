1 - https://www.hackthebox.eu/ consigue una invitación para jugar en esta liga

sources
js/calm.js
interesting file

js/inviteapi.min.js
ejecutamos la funcion del eval

var fkey = function(p, a, c, k, e, r) {
    e = function(c) {
        return c.toString(a)
    }
    ;
    if (!''.replace(/^/, String)) {
        while (c--)
            r[e(c)] = k[c] || e(c);
        k = [function(e) {
            return r[e]
        }
        ];
        e = function() {
            return '\\w+'
        }
        ;
        c = 1
    }
    ;while (c--)
        if (k[c])
            p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
    return p
}

fkey('0 3(){$.4({5:"6",7:"8",9:\'/b/c/d/e/f\',g:0(a){1.2(a)},h:0(a){1.2(a)}})}', 18, 18, 'function|console|log|makeInviteCode|ajax|type|POST|dataType|json|url||api|invite|how|to|generate|success|error'.split('|'), 0, {})

"function makeInviteCode(){$.ajax({type:"POST",dataType:"json",url:'/api/invite/how/to/generate',success:function(a){console.log(a)},error:function(a){console.log(a)}})}"

definimos 

function makeInviteCode(){$.ajax({type:"POST",dataType:"json",url:'/api/invite/how/to/generate',success:function(a){console.log(a)},error:function(a){console.log(a)}})}

ejecutamos

makeInviteCode()

{
  ...
  data: {
    data: "SW4gb3JkZXIgdG8gZ2VuZXJhdGUgdGhlIGludml0ZSBjb2RlLCBtYWtlIGEgUE9TVCByZXF1ZXN0IHRvIC9hcGkvaW52aXRlL2dlbmVyYXRl",
    enctype: "BASE64"
  },
  hint: "Data is encrypted … We should probably check the encryption type in order to decrypt it…"
}

