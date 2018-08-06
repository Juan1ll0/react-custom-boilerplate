const backendUrl = process.env.REACT_APP_BACKEND_URL;

export default {
  basename: '',
  backendUrl: `${backendUrl}/todos`,
  loginUrl: `${backendUrl}/login`,
  logoutUrl: `${backendUrl}/logout`
};