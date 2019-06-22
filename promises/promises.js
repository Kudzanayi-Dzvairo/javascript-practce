function loadscript (src) {
  let script = document.createElement('script')
  script.src = src
  document.head.append(script)
}
loadscript('/my/script.js')

function loadScript (src, callback) {
  let script = document.createElement('script')
  script.src = src

  script.onload = () => callback(script)

  document.head.append(script)

  loadScript('/my/script,js', function(script){
      alert(`Cool the ${script.src} is loaded, lets load one more`);

      loadScript('my/script2.js', function(script) {
          alert(`Cool, the second script loaded `)

          loadScript('my/script3.js', function(script){
              alert()
          })
      })
  })

  //errors

  funtion loadScript(src, callback) {
      let script = document.createElement('script');
      script.src = src 

      script.onLoad = () => callback(null, script);
      script.onerror = () => callback(new Error(`Script load error for ${src}`))

      document.head.append(script)
  }

  loadScript('my/script.js', function(error, script) {
      if(error) {
          //handle error
      } else {
          //script loaded 
      }
  })


//promises

let promise = new Promise(function(resolve, reject {
    setTimeout(() => resolve("done"), 1000)
}))

new PRomise(function )
