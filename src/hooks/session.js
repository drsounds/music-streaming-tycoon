import { useSelector } from "react-redux"
import { useParams } from "react-router"

export function useSession() {
  const {
    sessionId
  } = useParams()
  const session = useSelector(state => state.session[sessionId])
  return session
}