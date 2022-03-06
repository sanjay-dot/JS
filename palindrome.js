// function palindrome(str){   
//     var lowregex = str.toLowerCase().replaceAll(/[0-9]/g,"");
//     var rev =  lowregex.split('').reverse().join('');
//     if(rev === lowregex){
//         console.log("pal");
//     }
//     else{
//         console.log("not pal");
//     }
// }

// palindrome('sanknas');



function f(s,i,j) {
    
	if (i >= j) return "";
	else if (s[i] == s[j]) return "" + f(s,i+1,j-1);
	else {
		var a = s[i] + f(s,i+1,j);
		var b = f(s,i,j-1) + s[j];
		if (a.length <= b.length) return a;
		else return b;
	}
}

// console.log(f('sanjknas',0,7))

// s, 0, 7

// s, 1, 6

// s, 2,5 

// s, 3,4 

// j + (s,4,4), (s,3,3) + k

// j, k





