import React from 'react';


const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div> 
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Put your link below.'}
            </p>
            <div className='center'>
                <div className='glass w-40-l center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button 
                        className='w-30 grow br3 f4 link ph3 pv2 dib black bg-gold'
                        onClick={onButtonSubmit}   
                     >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;