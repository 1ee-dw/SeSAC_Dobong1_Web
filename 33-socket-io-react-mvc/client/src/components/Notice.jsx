export default function Notice({ chat }) {
    // chat = { type: "notice", content: ""}
    return <div className="notice">{chat.content}</div>;
}
