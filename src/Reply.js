import logoReply from "./images/icon-reply.svg";

const Reply = ( {info }) => {
    console.log(info)
    const {content, createdAt, replyingTo, score, user} = info;
    const {image, username} = user;
    return (
        <div className="container reply--container">
        <div className="container--header">
            <img alt="userAvatar"/>
            <div className="username"></div>
            <div className="posted">{createdAt}</div>
        </div>
        <p>{content}
        </p>
        <div className="container--footer">
            <div className="score--panel">
                <p className="add">+</p>
                <p className="score">{score}</p>
                <p className="remove">-</p>
            </div>
            <div className="reply--panel">
                <img src={logoReply} alt="reply" />
                <p>Reply</p>
            </div>
        </div>
    </div>
    )
 
};

export default Reply;