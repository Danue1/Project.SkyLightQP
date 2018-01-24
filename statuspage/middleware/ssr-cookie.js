import * as axios from 'axios'

export default function ({ server, req }) {
  if (server) {
    axios.headers.common.cookie = req.headers.cookie
  }
}
