import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../utils/api'
import { Context } from '../context/contextApi'
import LeftNav from './LeftNav'
import SearchResultVideoCard from "./SearchResultVideoCard"

const SearchResult = () => {
  const [result, setResult] = useState()
  const {searchQuery} = useParams()
  const {setLoading} = useContext(Context)

  useEffect(()=>{
    const fetchSearchResults = ()=>{
      setLoading(true)
      fetchDataFromApi(`search/?q=${searchQuery}`).then((res)=>{
        console.log(res);
        setResult(res?.contents)
        setLoading(false)
      })
    }

  },[searchQuery])
  return (
    <div>SearchResult</div>
  )
}

export default SearchResult