import Reply from "./Reply";

const Comment = ( {info}) => {
    const {content, createdAt, replies, score, user} = info;
    const {image, username} = user;
    return (
        <>
        <div className="container comment--container">
            <div className="container--header">
                <img src={image.png} alt="avatar"/>
                <div className="username">{username}</div>
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
            </div>
        </div>
        {replies && <div className="replies--container">
            {replies.map(reply => (
                <Reply info={reply} key={reply.id}/>
                    )
            )}
        </div>
        }
        </>
    )
}

export default Comment;