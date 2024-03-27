import PhotoItem from './PhotoItem';

export default function PhotoList({ photos }) {
    return (
        <section className="Photo-list">
            {photos.map((photo) => {
                return <PhotoItem key={photo.id} Photo={photo} />;
            })}
        </section>
    );
}
