import { useState } from 'react';

function ImageGallery({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    return (

         <>
         <div className='image-gallery'>
            {images.map((image, index) => (
                  <motion.div 
                    key={index}
                    className="gallery-item"
                    initial={{ opacity: 0, y: 50}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(image)}
                    >
                        <img src={image.src} alt={image.alt} />
                  <motion.div
                 className='gallery-overlay'
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                 >
                    <span>Ver más</span>
                    </motion.div>
                    </motion.div>
            ))}
         </div>

         <AnimatePresence>
            {selectedImage && (
                <motion.div 
                    className="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.5 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <button className='modal-close' onClick={() => setSelectedImage(null)}>
                               &times;
                        </button>

                    </motion.div>
                </motion.div>
            )}
         </AnimatePresence>
         </>
    );
}
export default ImageGallery;