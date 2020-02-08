// self.addEventListener('message', evento => {
//     console.log('El maestro dice '+evento.data);
//     self.postMessage('pong');
//   }, false);
/*
((s => {
    const increment = 1;
  let count = 0;
  const loop = 999999999;
  
  s.onmessage = e => {
      console.log(e.data);
      let test = 0;
      for( let i = 0 ; i < loop ;i++ ){
          test = i;
        const int = Math.trunc( i*100/loop );
        if( int === count ){
              s.postMessage( int );
          count += increment;
        }
      }
    s.postMessage( {finish:'loop finished'} );
  };
}))(self);
*/