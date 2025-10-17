import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/event_sam.css";

// Data for the gallery tiles
const photos = [
    { url: 'https://picsum.photos/800/600?random=1', desc: 'A serene lake surrounded by mountains.', size: 'medium-h' },
    { url: 'https://picsum.photos/800/600?random=2', desc: 'A vibrant sunset over the ocean.', size: 'small' },
    { url: 'https://picsum.photos/800/600?random=3', desc: 'A lush forest with tall trees.', size: 'medium-v' },
    { url: 'https://picsum.photos/800/600?random=4', desc: 'A bustling cityscape at night.', size: 'small' },
    { url: 'https://picsum.photos/800/600?random=5', desc: 'A quiet desert under the stars.', size: 'medium-h' },
    { url: 'https://picsum.photos/800/600?random=1', desc: 'A serene lake surrounded by mountains.', size: 'medium-h' },
    { url: 'https://picsum.photos/800/600?random=2', desc: 'A vibrant sunset over the ocean.', size: 'small' },
    { url: 'https://picsum.photos/800/600?random=3', desc: 'A lush forest with tall trees.', size: 'medium-v' },
    { url: 'https://picsum.photos/800/600?random=4', desc: 'A bustling cityscape at night.', size: 'small' },
    { url: 'https://picsum.photos/800/600?random=5', desc: 'A quiet desert under the stars.', size: 'medium-h' },
    { url: 'https://picsum.photos/800/600?random=6', desc: 'A snowy mountain peak at dawn.', size: 'small' }
];

function Event_Sam() {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [descriptionText, setDescriptionText] = useState('Click a tile to view details');
    const [isScrolled, setIsScrolled] = useState(false);
    const isModalOpen = currentIndex !== null;

    const openModal = (index) => {
        setCurrentIndex(index);
        setDescriptionText(photos[index].desc);
    };

    const closeModal = () => {
        setCurrentIndex(null);
        setDescriptionText('Click a tile to view details');
    };

    const navigate = (direction) => {
        if (currentIndex === null) return;
        const totalPhotos = photos.length;
        let newIndex = (currentIndex + direction + totalPhotos) % totalPhotos;
        setCurrentIndex(newIndex);
        setDescriptionText(photos[newIndex].desc);
    };

    // Handle scroll to toggle layout
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!isModalOpen) return;

            if (e.key === 'ArrowLeft') {
                navigate(-1);
            } else if (e.key === 'ArrowRight') {
                navigate(1);
            } else if (e.key === 'Escape') {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isModalOpen, currentIndex]);

    return (
        <div>
            <Header />
            <div className={`event-container ${isScrolled ? 'scrolled' : ''}`}>
                <h1 className="event-title">Hiking</h1>
                <div className="gallery-container">
                    <div className="gallery" id="gallery">
                        {photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo.url}
                                className={`thumbnail ${photo.size}`}
                                alt={`Photo ${index + 1}`}
                                onClick={() => openModal(index)}
                            />
                        ))}
                    </div>
                    <div className="description" id="description">{descriptionText}</div>
                    <div className="scroll-arrow">↓</div>
                </div>
                <div className="event-description">
                    <p>
                        Etzelwang, located in the Nuremberg region of Bavaria, Germany, is a hidden gem for hikers seeking a blend of natural beauty, medieval history, and peaceful countryside. Nestled in the Franconian Switzerland–Veldenstein Forest Nature Park, the area offers a range of well-marked hiking trails that begin right from the Etzelwang train station, making it easily accessible for day-trippers from Nuremberg and surrounding towns. The landscape is characterized by rolling hills, dense woodlands, limestone cliffs, and panoramic viewpoints, with routes weaving past castles, caves, and quaint Bavarian villages.
                        {/* ... rest of the description text ... */}
                    </p>
                </div>
            </div>
            <div className="modal" id="modal" style={{ display: isModalOpen ? 'flex' : 'none' }} onClick={(e) => {
                if (e.target.id === 'modal') closeModal();
            }}>
                {isModalOpen && (
                    <>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <img
                            className="modal-content"
                            src={photos[currentIndex].url}
                            alt="Full Size"
                            id="modalImage"
                        />
                        <span className="modal-nav prev" onClick={() => navigate(-1)}>&larr;</span>
                        <span className="modal-nav next" onClick={() => navigate(1)}>&rarr;</span>
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Event_Sam;