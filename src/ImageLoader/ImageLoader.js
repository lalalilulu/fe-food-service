import React, {useState} from "react";
import Loader from "react-loader-spinner";
import "./style.scss";

function ImageLoader(props) {

    const {src, loaderWidthHeight} = props;

    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState('');

    return (
        <div className="image-container">
            <img
                className={`smooth-image image-${
                    loaded ? 'visible' : 'hidden'
                }`}
                src={src}
                onLoad={() => {
                    setLoaded(true);
                    setError('');
                }}
                onError={() => setError('Failed to load image')}
                alt=""
            />
            {!loaded && <div className="image-container-overlay">
                <Loader type="Puff" color="#7B1FA2" width={loaderWidthHeight} height={loaderWidthHeight}/>
            </div>}
            {loaded && error && <div className="image-container-overlay">
                <p className="image-error">{error}</p>
            </div>}
        </div>
    );
}

export default ImageLoader;
