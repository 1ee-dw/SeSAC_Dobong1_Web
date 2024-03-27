import PhotoList from '../components/PhotoList';

export default function PhotoPage({ items }) {
    console.log('photo items', items);
    return (
        <main>
            <h2>photoList</h2>
            <PhotoList photos={items} />
        </main>
    );
}
