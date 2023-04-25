import SimpleText from 'components/atoms/simpleText';
import ThumbnailWithText from 'components/molecules/thumbnailWithText';
import React from 'react';
import Hero from '../molecules/hero';
import initialData from 'assets/data/initialData';
import Video from 'components/atoms/video';
import GalleryImages from 'components/molecules/galleryImages';
import images from 'assets/data/images';

const Home = () => {
    const getRandomImages = numberOfImages => {
        const randomIndexes = [];
        
        while (randomIndexes.length < numberOfImages) {
          const randomIndex = Math.floor(Math.random() * images.length);
          
          if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
          }
        }
        
        return randomIndexes.map(index => images[index]);
    };
    const thumbnailSrcIndx = Math.floor(Math.random() * images.length);
    return (
        <div className='home'>
            <Hero />
            <div className='home__content'>
                <div className='row'>
                    <div className='col'>
                        <SimpleText text={initialData[1].body}/>
                    </div>
                    <div className='col'>
                        <ThumbnailWithText
                            thumbnailSrc={images[thumbnailSrcIndx].url}
                            text={initialData[0].body}
                        />
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Video src="https://www.youtube.com/embed/DmCZoiCp5C0"/>
                    </div>
                    <div className='col'>
                        <GalleryImages images={getRandomImages(3)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
