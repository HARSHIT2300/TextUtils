import dzd,{a,b,c} from './module2.mjs'

console.log(dzd);
console.log(a);
console.log(b);
console.log(c);


// a,b,c are exported normally from module2 but d is exported by default so different name can be used for d in module1 as it is exported by default but not for those which are not exported by default