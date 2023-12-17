import './Products.css'
import React, { useEffect, useState } from 'react'
import { FakeStoreApi } from '../../fakeApiData/FakeApiData'
import { Items } from '../../Componants/Items'
import { useSearchParams } from 'react-router-dom'
import { addToCart } from '../../Reduxtoolkit/CartSlice'
import { useDispatch } from 'react-redux'

function Products() {

  const [loading, setLoading] = useState(true) //loading...
  const [show, setShow] = useState([]) // state
  const [query, setQuery] = useSearchParams('') //useSearchParams
  const showQuery = query.get("q")
  const dispatch = useDispatch() //dispatch

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const mydata = showQuery
          ? await FakeStoreApi.fetchDataBySearchQuery(showQuery)
          : await FakeStoreApi.fetchAllData()
        console.log(mydata)
        setShow(mydata);
        setLoading(false)
      }
      fetchProducts()
    } catch (error) {
      console.log(error, "error");
    }
  }, [showQuery])

  if (!loading && showQuery && !show.length) {
    return (
      <div className='header-notfound'>
        <div className='notfound'>
          <p>No showQuery</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {loading ? <div className='main-loader'><p className='loader'></p></div> :

        <div className="products">
          <div className="products-item">
            {show.map((index) => (
              <Items key={index.id}
                allData={index}
                addToCart={() => dispatch(addToCart(index))} />
            ))}
          </div>
        </div>}
    </>
  )
}

export { Products }
