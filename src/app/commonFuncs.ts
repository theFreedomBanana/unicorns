export function mixColors(c1, c2) {

  // Split into parts
  let b1 = c1.match(/[\da-z]{2}/gi);
  let b2 = c2.match(/[\da-z]{2}/gi);
  let t, c = [];

  function dec2hex(v) {return v.toString(16);}
  function hex2dec(v) {return parseInt(v,16);}

  // Average each set of hex numbers going via dec
  // always rounds down
  for (var i=b1.length; i;) {
    t = dec2hex( (hex2dec(b1[--i]) + hex2dec(b2[i])) >> 1 );

    // Add leading zero if only one character
    c[i] = t.length == 2? '' + t : '0' + t; 
  }
  return  c.join('');
};
