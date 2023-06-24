import userLogo from "./images/avatars/image-juliusomo.png";

const AddCommentContainer = () => {
    return (
        <div className="container add--container">
            <textarea placeholder="Add a comment..."></textarea>
            <div className="container--footer">
                <img className="user--avatar" src={userLogo} alt="userAvatar"></img>
                <button className="button--send">SEND</button>
            </div>
        </div>
    )
};

export default AddCommentContainer;