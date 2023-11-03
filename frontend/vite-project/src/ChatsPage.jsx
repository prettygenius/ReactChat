
import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

  const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    props.projectID,
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{height: '100vh'}}>
      <MultiChatWindow {...chatProps} style={{height: '100%'}} />
      <MultiChatSocket {...chatProps} />
    </div>
  );
}
 export default ChatsPage
