import {React, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {AiOutLineLike} from 'react-icons/ai'
import { abbreviateNumber } from 'js-abbreviation-number'

import {fetchDataFromApi} from '../utils/api'
import { Context } from '../context/contextApi'
import SuggestionVideoCard from "./SuggestionVideoCard"

const VideoDetails = () => {
  const [video, setVideo] = useState()
  const [relatedVideos, setRelatedVideos] = useState()
  const {id} = useParams();
  const {setLoading} = useContext(Context)
  return (
    <div className='flex'></div>
  )
}

export default VideoDetails