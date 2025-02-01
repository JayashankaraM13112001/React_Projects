
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './image-slider.css'

export default function ImageSlider({ url, limit }) {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loading, setLoading] = useState(false)
    const [errmsg, setErrMsg] = useState(null)

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true)
            try {
                const response = await fetch(`${url}?limit=${limit}`)
                if (!response.ok) throw new Error("Failed to fetch images.")
                const data = await response.json()
                
                if (data) {
                    setImages(data)
                    setCurrentSlide(0)
                    setErrMsg(null)
                }
            }
            catch (e) {
                setErrMsg(e.message)
            }
            finally {
                setLoading(false)
            }
        }
        if (url !== "") fetchImages();

    }, [url, limit])

    const handlePreviousImage = () => {
        setCurrentSlide(currentSlide === 0 ? images.length-1 : currentSlide-1)
    }

    const handleNextImage = () => {
        setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide+1)
    }
    
    if (loading) return <div>Loading images... plaese wait</div>
    if (errmsg !== null) return <div>Error loading images: {errmsg}</div>
    
    return (
        <div className="imageslider-container">
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePreviousImage} />
            {
                images && images.length ? 
                    images.map((imageItem,index) => (
                        <img
                            key={imageItem.id}
                            alt={imageItem.download_url}
                            src={imageItem.download_url}
                            className={currentSlide === index ? 'current-image' : 'current-image hide-current-image'}
                        />
                    ))
                : null
            }
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={handleNextImage} />
            <span className="circle-indicators">
                {
                    images && images.length ? 
                        images.map((_, index) => (
                            <button
                                key={index}
                                className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive-indicator'}
                                onClick={()=>setCurrentSlide(index)}>
                            </button>
                        ))
                    : null
                }
            </span>
        </div>
    )
}

ImageSlider.propTypes = {
    url: PropTypes.string,
    limit : PropTypes.number
}