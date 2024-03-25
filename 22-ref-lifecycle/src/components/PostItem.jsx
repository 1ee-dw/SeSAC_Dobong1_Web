export default function PostItem({ post }) {
    return (
        <div>
            <span>{post.id}</span>
            <span>{post.title}</span>
            <p>{post.body}</p>
        </div>
    );
}
