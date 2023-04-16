function ClientPage({setClientInfo, setClientPageRendered}) {

  const iin = "040128500036"

    function handleSubmit() {
        const iin = document.getElementById('client-iin').value

        if (iin.length > 0) {
          fetch("http://91.201.214.131:8080/client/" + iin)
            .then(res => res.json())
            .then(data => {
              setClientInfo(data)
              setClientPageRendered(false)
              console.log(data)
            })
        }
    }

  return (
    <div className="client-page">
      <label htmlFor='client-iin'>
        IIN:
      </label>

      <input id='client-iin'/>
      
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export {
    ClientPage
}
